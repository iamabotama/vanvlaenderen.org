/**
 * FamilyTreeCanvas
 *
 * A subtle, full-screen background canvas animation that renders a procedurally
 * generated family tree scrolling slowly from right to left. The tree never
 * repeats: new branches are continuously spawned off the right edge and old
 * ones fade out as they leave the left edge.
 *
 * Design goals:
 *  - Very low opacity (≈ 12–18%) — texture, not distraction
 *  - Lines draw in as they enter from the right (animated progress per segment)
 *  - Nodes (dots) appear only once their parent line finishes drawing
 *  - Deeper generations are progressively more transparent
 *  - Branches fade out as they approach the left edge
 *  - Sparse branching: 1–2 children per node, with occasional 3-child splits
 *  - 75-second full-width scroll speed — a slow, meditative drift
 *  - requestAnimationFrame loop; canvas is sized to window and resizes cleanly
 */

import { useEffect, useRef } from 'react';

// ─── Tuneable constants ────────────────────────────────────────────────────────

/** Pixels per second the world scrolls left (75-second full-width drift) */
const SCROLL_SPEED = 3200 / 75;

/** Base opacity of generation-0 lines (very subtle) */
const BASE_OPACITY = 0.14;

/** Each generation multiplies opacity by this factor */
const DEPTH_FADE = 0.78;

/** How many px from the left edge a branch starts fading out */
const LEFT_FADE_START = 220;

/** How many px from the right edge a branch starts drawing in */
const RIGHT_DRAW_ZONE = 300;

/** Minimum vertical spacing between sibling branches (px) */
const MIN_BRANCH_GAP = 55;

/** How fast a line draws in, in world-px per second */
const DRAW_SPEED = 180;

/** Gold palette — matches site's --gold / --gold-light */
const GOLD_COLORS = ['#e8b830', '#f5d060', '#c8aa72', '#d4a017'];

// ─── Types ────────────────────────────────────────────────────────────────────

interface TreeNode {
  wx: number;       // World-space X
  ny: number;       // Canvas Y, normalised 0–1
  depth: number;    // Generation depth (0 = root trunk)
  children: TreeNode[];
  expanded: boolean;
  colorIdx: number;
}

interface Segment {
  from: TreeNode;
  to: TreeNode;
  length: number;   // Total world-space path length
  drawn: number;    // How many world-px have been drawn so far
  complete: boolean;
}

// ─── Seeded pseudo-random ─────────────────────────────────────────────────────

function mulberry32(seed: number): () => number {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FamilyTreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    // Use non-null local aliases so TypeScript doesn't complain inside closures
    const cvs = canvas as HTMLCanvasElement;

    // ── State ──────────────────────────────────────────────────────────────

    let animId = 0;
    let lastTime = 0;
    let scrollX = 0;
    let seedCounter = 1;

    const nodes: TreeNode[] = [];
    const segments: Segment[] = [];

    // ── Helpers ────────────────────────────────────────────────────────────

    function resize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }

    function rng(seed: number) {
      return mulberry32(seed);
    }

    function pickY(wx: number, depth: number, rand: () => number): number {
      const margin = 0.08 + depth * 0.02;
      const lo = margin;
      const hi = 1 - margin;
      let attempts = 0;
      let ny = lo + rand() * (hi - lo);
      while (attempts < 12) {
        const crowded = nodes.some(n => {
          const dx = Math.abs(n.wx - wx);
          if (dx > 200) return false;
          const dy = Math.abs(n.ny - ny) * (cvs.height || 800);
          return dy < MIN_BRANCH_GAP;
        });
        if (!crowded) break;
        ny = lo + rand() * (hi - lo);
        attempts++;
      }
      return Math.max(lo, Math.min(hi, ny));
    }

    function expandNode(node: TreeNode) {
      if (node.expanded) return;
      node.expanded = true;
      if (node.depth >= 5) return;

      const rand = rng(seedCounter++);
      const childCount = node.depth < 2
        ? (rand() < 0.25 ? 3 : rand() < 0.6 ? 2 : 1)
        : (rand() < 0.35 ? 2 : 1);

      const xStep = 120 + rand() * 160;

      for (let i = 0; i < childCount; i++) {
        const childRand = rng(seedCounter++);
        const wx = node.wx + xStep + childRand() * 60;
        const ny = pickY(wx, node.depth + 1, childRand);

        const child: TreeNode = {
          wx, ny,
          depth: node.depth + 1,
          children: [],
          expanded: false,
          colorIdx: (node.colorIdx + Math.floor(childRand() * 2)) % GOLD_COLORS.length,
        };
        nodes.push(child);
        node.children.push(child);

        const dx = child.wx - node.wx;
        const dy = (child.ny - node.ny) * (cvs.height || 800);
        segments.push({
          from: node,
          to: child,
          length: Math.hypot(dx, dy),
          drawn: 0,
          complete: false,
        });
      }
    }

    // ── Draw helpers ───────────────────────────────────────────────────────

    function screenX(wx: number): number {
      return wx - scrollX;
    }

    function screenY(ny: number): number {
      return ny * cvs.height;
    }

    function segmentOpacity(seg: Segment): number {
      const sx = screenX(seg.from.wx);
      const ex = screenX(seg.to.wx);
      const midSx = (sx + ex) / 2;

      let op = BASE_OPACITY * Math.pow(DEPTH_FADE, seg.from.depth);

      if (midSx < LEFT_FADE_START) {
        op *= Math.max(0, midSx / LEFT_FADE_START);
      }
      if (midSx > cvs.width - RIGHT_DRAW_ZONE) {
        const t = (cvs.width - midSx) / RIGHT_DRAW_ZONE;
        op *= Math.max(0, Math.min(1, t));
      }

      return Math.max(0, Math.min(1, op));
    }

    // ── Main frame ─────────────────────────────────────────────────────────

    function drawFrame(dt: number) {
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      scrollX += SCROLL_SPEED * dt;

      // Advance segment draw-in
      for (const seg of segments) {
        if (!seg.complete) {
          const sx = screenX(seg.from.wx);
          if (sx < cvs.width + 50) {
            seg.drawn = Math.min(seg.length, seg.drawn + DRAW_SPEED * dt);
            if (seg.drawn >= seg.length) {
              seg.complete = true;
              expandNode(seg.to);
            }
          }
        }
      }

      // Expand root nodes that are now on screen
      for (const node of nodes) {
        if (!node.expanded && node.depth === 0) {
          const sx = screenX(node.wx);
          if (sx < cvs.width + 50) {
            expandNode(node);
          }
        }
      }

      // Seed new trunk nodes as needed
      const rightEdge = scrollX + cvs.width;
      const furthestNode = nodes.reduce((max, n) => Math.max(max, n.wx), 0);
      if (furthestNode < rightEdge + 600) {
        const rand = rng(seedCounter++);
        const wx = rightEdge + 200 + rand() * 300;
        const ny = pickY(wx, 0, rand);
        nodes.push({ wx, ny, depth: 0, children: [], expanded: false, colorIdx: Math.floor(rand() * GOLD_COLORS.length) });
      }

      // Cull off-screen-left elements
      const cullX = scrollX - 400;
      for (let i = segments.length - 1; i >= 0; i--) {
        if (segments[i].to.wx < cullX) segments.splice(i, 1);
      }
      for (let i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].wx < cullX) nodes.splice(i, 1);
      }

      // ── Draw segments ────────────────────────────────────────────────
      for (const seg of segments) {
        const sx = screenX(seg.from.wx);
        const sy = screenY(seg.from.ny);
        const ex = screenX(seg.to.wx);
        const ey = screenY(seg.to.ny);

        if (ex < -50 || sx > cvs.width + 50) continue;

        const op = segmentOpacity(seg);
        if (op <= 0.005) continue;

        const midX = (sx + ex) / 2;
        const progress = seg.complete ? 1 : seg.drawn / seg.length;

        // Elbow path: (sx,sy) → (midX,sy) → (midX,ey) → (ex,ey)
        const seg1Len = Math.abs(midX - sx);
        const seg2Len = Math.abs(ey - sy);
        const seg3Len = Math.abs(ex - midX);
        const pathLen = seg1Len + seg2Len + seg3Len;
        const drawLen = pathLen * progress;

        ctx.save();
        ctx.globalAlpha = op;
        ctx.strokeStyle = GOLD_COLORS[seg.from.colorIdx];
        ctx.lineWidth = Math.max(0.5, 1.5 - seg.from.depth * 0.2);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = GOLD_COLORS[seg.from.colorIdx];
        ctx.shadowBlur = 3;

        ctx.beginPath();

        if (drawLen <= seg1Len) {
          const t = seg1Len > 0 ? drawLen / seg1Len : 1;
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + (midX - sx) * t, sy);
        } else if (drawLen <= seg1Len + seg2Len) {
          const t = seg2Len > 0 ? (drawLen - seg1Len) / seg2Len : 1;
          ctx.moveTo(sx, sy);
          ctx.lineTo(midX, sy);
          ctx.lineTo(midX, sy + (ey - sy) * t);
        } else {
          const t = seg3Len > 0 ? (drawLen - seg1Len - seg2Len) / seg3Len : 1;
          ctx.moveTo(sx, sy);
          ctx.lineTo(midX, sy);
          ctx.lineTo(midX, ey);
          ctx.lineTo(midX + (ex - midX) * t, ey);
        }

        ctx.stroke();
        ctx.restore();
      }

      // ── Draw nodes ───────────────────────────────────────────────────
      for (const node of nodes) {
        const sx = screenX(node.wx);
        const sy = screenY(node.ny);

        if (sx < -20 || sx > cvs.width + 20) continue;

        const incomingSeg = segments.find(s => s.to === node);
        if (incomingSeg && !incomingSeg.complete) continue;

        let op = BASE_OPACITY * 1.6 * Math.pow(DEPTH_FADE, node.depth);
        if (sx < LEFT_FADE_START) op *= Math.max(0, sx / LEFT_FADE_START);
        if (sx > cvs.width - RIGHT_DRAW_ZONE) {
          op *= Math.max(0, (cvs.width - sx) / RIGHT_DRAW_ZONE);
        }
        if (op <= 0.005) continue;

        const r = Math.max(1, 2.5 - node.depth * 0.35);

        ctx.save();
        ctx.globalAlpha = op;
        ctx.fillStyle = GOLD_COLORS[node.colorIdx];
        ctx.shadowColor = GOLD_COLORS[node.colorIdx];
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // ── Animation loop ─────────────────────────────────────────────────────

    function loop(ts: number) {
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;
      drawFrame(dt);
      animId = requestAnimationFrame(loop);
    }

    // ── Init: pre-populate the visible area so it doesn't start empty ──────

    resize();

    for (let i = 0; i < 8; i++) {
      const rand = rng(seedCounter++);
      const wx = scrollX + rand() * cvs.width * 0.9;
      const ny = 0.1 + rand() * 0.8;
      const node: TreeNode = {
        wx, ny, depth: 0, children: [], expanded: false,
        colorIdx: Math.floor(rand() * GOLD_COLORS.length),
      };
      nodes.push(node);
      expandNode(node);
      // Mark all segments complete so the initial tree appears immediately
      for (const seg of segments) {
        seg.drawn = seg.length;
        seg.complete = true;
      }
      // Expand second generation too
      for (const child of node.children) {
        expandNode(child);
        for (const seg of segments) {
          if (seg.from === child) {
            seg.drawn = seg.length;
            seg.complete = true;
          }
        }
      }
    }

    animId = requestAnimationFrame((ts) => {
      lastTime = ts;
      animId = requestAnimationFrame(loop);
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
