/**
 * FamilyTreeCanvas — orthogonal (right-angle bracket) family tree animation
 *
 * Visual style: horizontal trunk lines with vertical drops to children,
 * like a classic pedigree chart — clean squared-off brackets, not diagonals.
 *
 * Memory-safe:
 *  - MAX_NODES = 52, MAX_SEGS = 72 (hard caps, never exceeded)
 *  - 30 fps throttle
 *  - Max 2 children per node, controlled expansion
 *  - Aggressive left-edge culling every frame
 *  - Seeded deterministic RNG — no drift
 */

import { useEffect, useRef } from 'react';

// ── Constants ──────────────────────────────────────────────────────────────
const MAX_NODES   = 52;
const MAX_SEGS    = 72;
const MAX_DEPTH   = 4;
const SCROLL_PX_S = 24;    // slow drift — ~133s to cross 3200px
const DRAW_PX_S   = 220;   // line draw speed in px/s
const BASE_ALPHA  = 0.17;  // root line opacity
const DEPTH_FADE  = 0.70;  // opacity multiplier per generation
const TARGET_FPS  = 30;
const FRAME_MS    = 1000 / TARGET_FPS;

// Horizontal spacing between parent and child column
const H_STEP_MIN  = 110;
const H_STEP_MAX  = 180;
// Vertical spread for children
const V_SPREAD    = 0.22;  // fraction of canvas height

const GOLD_BRIGHT = 'rgba(232,184,48,';
const GOLD_DEEP   = 'rgba(175,125,18,';

// ── Seeded RNG ─────────────────────────────────────────────────────────────
function rng(seed: number): () => number {
  let s = (seed ^ 0xdeadbeef) >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 0xffffffff;
  };
}

// ── Types ──────────────────────────────────────────────────────────────────
interface TNode {
  wx: number;    // world-x of this node's vertical bar
  ny: number;    // normalised y [0..1]
  depth: number;
  expanded: boolean;
  gold: string;  // GOLD_BRIGHT or GOLD_DEEP
}

/**
 * An orthogonal segment is drawn as two lines:
 *   1. Horizontal: from (from.wx, from.ny) → (to.wx, from.ny)   [elbow x]
 *   2. Vertical:   from (to.wx, from.ny)   → (to.wx, to.ny)
 *
 * We animate a single `drawn` value from 0 → totalLength (hLen + vLen).
 */
interface TSeg {
  from: TNode;
  to: TNode;
  hLen: number;   // horizontal leg length (px)
  vLen: number;   // vertical leg length (px, may be 0 for same-row)
  drawn: number;  // total pixels drawn so far
  done: boolean;
}

// ── Component ──────────────────────────────────────────────────────────────
export default function FamilyTreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const raw = canvasRef.current;
    if (!raw) return;
    const cvs = raw as HTMLCanvasElement;
    const ctx = cvs.getContext('2d', { alpha: true })!;

    const nodes: TNode[] = [];
    const segs:  TSeg[]  = [];
    let scrollX  = 0;
    let seedCtr  = 1;
    let lastTs   = 0;
    let lastFr   = 0;
    let animId   = 0;

    // ── Resize ──────────────────────────────────────────────────────────
    function resize() {
      cvs.width  = window.innerWidth;
      cvs.height = window.innerHeight;
    }
    resize();

    // ── World → screen ──────────────────────────────────────────────────
    const scx = (wx: number) => wx - scrollX;

    // ── Spawn a root node off the right edge ────────────────────────────
    function spawnRoot() {
      if (nodes.length >= MAX_NODES) return;
      const r = rng(seedCtr++);
      nodes.push({
        wx:       scrollX + cvs.width + 30 + r() * 60,
        ny:       0.15 + r() * 0.70,
        depth:    0,
        expanded: false,
        gold:     r() < 0.55 ? GOLD_BRIGHT : GOLD_DEEP,
      });
    }

    // ── Expand a node: add 1 or 2 children ──────────────────────────────
    function expand(n: TNode) {
      if (n.expanded || n.depth >= MAX_DEPTH) return;
      if (nodes.length >= MAX_NODES || segs.length >= MAX_SEGS) return;
      // Only expand once the node is approaching the viewport
      if (scx(n.wx) > cvs.width + 80) return;

      n.expanded = true;
      const r = rng(seedCtr++);

      // 1 child most of the time; 2 children occasionally (depth 0–1 only)
      const childCount = (n.depth <= 1 && r() < 0.45) ? 2 : 1;
      const hStep = H_STEP_MIN + r() * (H_STEP_MAX - H_STEP_MIN);

      // For 2 children, place them symmetrically around parent's ny
      const offsets = childCount === 1
        ? [(r() - 0.5) * V_SPREAD * 0.6]
        : [-(V_SPREAD * 0.5 + r() * 0.05), (V_SPREAD * 0.5 + r() * 0.05)];

      for (const dyNorm of offsets) {
        if (nodes.length >= MAX_NODES || segs.length >= MAX_SEGS) break;
        const cr = rng(seedCtr++);
        const childNy = Math.max(0.05, Math.min(0.95, n.ny + dyNorm));
        const child: TNode = {
          wx:       n.wx + hStep,
          ny:       childNy,
          depth:    n.depth + 1,
          expanded: false,
          gold:     cr() < 0.55 ? GOLD_BRIGHT : GOLD_DEEP,
        };
        nodes.push(child);

        const hLen = hStep;                              // always positive
        const vLen = Math.abs((childNy - n.ny) * cvs.height);
        segs.push({ from: n, to: child, hLen, vLen, drawn: 0, done: false });
      }
    }

    // ── Cull off-screen-left ─────────────────────────────────────────────
    function cull() {
      const edge = scrollX - 150;
      for (let i = segs.length  - 1; i >= 0; i--) { if (segs[i].to.wx  < edge) segs.splice(i, 1); }
      for (let i = nodes.length - 1; i >= 0; i--) { if (nodes[i].wx    < edge) nodes.splice(i, 1); }
    }

    // ── Draw one orthogonal segment ──────────────────────────────────────
    function drawSeg(seg: TSeg) {
      const fromX = scx(seg.from.wx);
      if (fromX > cvs.width + 20) return;  // entirely off-screen right

      const alpha = BASE_ALPHA * Math.pow(DEPTH_FADE, seg.from.depth);
      // Fade out as the origin approaches the left edge
      const fade  = Math.min(1, Math.max(0, (fromX + 100) / 100));
      const a     = alpha * fade;
      if (a < 0.004) return;

      const fromY = seg.from.ny * cvs.height;
      const toX   = scx(seg.to.wx);
      const toY   = seg.to.ny   * cvs.height;
      const elbowX = toX;   // elbow is directly above/below the child node
      const drawn = seg.drawn;

      ctx.save();
      ctx.globalAlpha = a;
      ctx.strokeStyle = seg.from.gold + '1)';
      ctx.lineWidth   = Math.max(0.5, 1.2 - seg.from.depth * 0.2);
      ctx.lineCap     = 'square';   // squared ends — no rounded caps
      ctx.beginPath();

      if (drawn <= 0) {
        // nothing yet
      } else if (drawn <= seg.hLen) {
        // Drawing horizontal leg
        const t  = drawn / seg.hLen;
        const ex = fromX + (elbowX - fromX) * t;
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(ex, fromY);
      } else {
        // Horizontal leg complete; drawing vertical leg
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(elbowX, fromY);
        const vDrawn = drawn - seg.hLen;
        const t      = vDrawn / Math.max(seg.vLen, 0.001);
        const ey     = fromY + (toY - fromY) * Math.min(1, t);
        ctx.lineTo(elbowX, ey);
      }

      ctx.stroke();
      ctx.restore();
    }

    // ── Draw one node dot ────────────────────────────────────────────────
    function drawNode(n: TNode) {
      const x = scx(n.wx);
      if (x < -8 || x > cvs.width + 8) return;

      const alpha = BASE_ALPHA * Math.pow(DEPTH_FADE, n.depth);
      const fade  = Math.min(1, Math.max(0, (x + 100) / 100));
      const a     = alpha * fade;
      if (a < 0.004) return;

      const y = n.ny * cvs.height;
      const r = Math.max(1, 2.4 - n.depth * 0.4);

      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle   = n.gold + '1)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // ── Animation frame ──────────────────────────────────────────────────
    function frame(ts: number) {
      animId = requestAnimationFrame(frame);

      // Throttle
      if (ts - lastFr < FRAME_MS) return;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      lastFr = ts;

      scrollX += SCROLL_PX_S * dt;

      // Advance draw-in for visible segments
      for (const seg of segs) {
        if (!seg.done && scx(seg.from.wx) < cvs.width + 80) {
          const segTotal = seg.hLen + seg.vLen;
          seg.drawn = Math.min(segTotal, seg.drawn + DRAW_PX_S * dt);
          if (seg.drawn >= segTotal) seg.done = true;
        }
      }

      // Expand at most one node per frame to prevent burst spawning
      for (const n of nodes) {
        if (!n.expanded) { expand(n); break; }
      }

      // Ensure there's always a root node approaching from the right
      const rightmost = nodes.reduce((m, n) => Math.max(m, n.wx), scrollX);
      if (rightmost < scrollX + cvs.width + 160 && nodes.length < MAX_NODES) {
        spawnRoot();
      }

      cull();

      ctx.clearRect(0, 0, cvs.width, cvs.height);
      for (const seg  of segs)  drawSeg(seg);
      for (const node of nodes) drawNode(node);
    }

    // ── Seed initial nodes spread across the viewport ────────────────────
    const ir = rng(99);
    for (let i = 0; i < 7; i++) {
      const wx = scrollX + ir() * cvs.width * 0.85;
      nodes.push({
        wx,
        ny:       0.12 + ir() * 0.76,
        depth:    0,
        expanded: false,
        gold:     ir() < 0.55 ? GOLD_BRIGHT : GOLD_DEEP,
      });
    }

    animId = requestAnimationFrame((ts) => {
      lastTs = ts; lastFr = ts;
      animId = requestAnimationFrame(frame);
    });

    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
