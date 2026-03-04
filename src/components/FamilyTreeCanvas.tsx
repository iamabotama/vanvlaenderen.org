/**
 * FamilyTreeCanvas — subtle procedural tree animation
 *
 * Memory-safe design:
 *  - Hard caps: MAX_NODES = 48, MAX_SEGS = 64
 *  - Throttled to 30 fps (skips frames above that)
 *  - Strictly 1 child per expansion (no branching explosion)
 *  - Aggressive left-edge culling every frame
 *  - No text rendering (labels removed)
 *  - Deterministic seeded RNG — no Math.random() drift
 */

import { useEffect, useRef } from 'react';

// ── Constants ──────────────────────────────────────────────────────────────

const MAX_NODES   = 48;   // hard cap — never exceeded
const MAX_SEGS    = 64;   // hard cap — never exceeded
const MAX_DEPTH   = 4;    // max generations visible at once
const SCROLL_PX_S = 28;   // pixels per second (slow drift)
const DRAW_PX_S   = 180;  // pixels of line drawn per second
const BASE_ALPHA  = 0.18; // root-node line opacity
const DEPTH_FADE  = 0.72; // opacity multiplier per generation
const TARGET_FPS  = 30;   // throttle to this framerate
const FRAME_MS    = 1000 / TARGET_FPS;

// Warm gold palette — two tones only, keeps GPU state changes minimal
const GOLD_A = 'rgba(232, 184, 48,';   // bright gold
const GOLD_B = 'rgba(180, 130, 20,';   // deeper gold

// ── Seeded RNG (mulberry32) ────────────────────────────────────────────────
function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 0xffffffff;
  };
}

// ── Types ──────────────────────────────────────────────────────────────────
interface Node {
  wx: number;   // world-x (scrolls with time)
  ny: number;   // normalised y [0..1]
  depth: number;
  expanded: boolean;
  gold: string; // GOLD_A or GOLD_B
}

interface Seg {
  from: Node;
  to: Node;
  length: number;
  drawn: number;   // pixels drawn so far
  done: boolean;
}

// ── Component ──────────────────────────────────────────────────────────────
export default function FamilyTreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvsRaw = canvasRef.current;
    if (!cvsRaw) return;
    // Use a non-null alias so TypeScript doesn't complain inside nested functions
    const cvs = cvsRaw as HTMLCanvasElement;
    const ctx = cvs.getContext('2d', { alpha: true })!;

    // State — plain arrays, never grow beyond caps
    const nodes: Node[] = [];
    const segs:  Seg[]  = [];
    let scrollX = 0;
    let seed    = 1;
    let lastTs  = 0;
    let lastFrame = 0;
    let animId  = 0;

    // ── Resize ────────────────────────────────────────────────────────────
    function resize() {
      cvs.width  = window.innerWidth;
      cvs.height = window.innerHeight;
    }
    resize();

    // ── World → screen x ──────────────────────────────────────────────────
    const sx = (wx: number) => wx - scrollX;

    // ── Spawn a single root node off the right edge ────────────────────────
    function spawnRoot() {
      if (nodes.length >= MAX_NODES) return;
      const r = rng(seed++);
      nodes.push({
        wx:       scrollX + cvs.width + 40 + r() * 80,
        ny:       0.12 + r() * 0.76,
        depth:    0,
        expanded: false,
        gold:     r() < 0.5 ? GOLD_A : GOLD_B,
      });
    }

    // ── Expand one node → one child ────────────────────────────────────────
    function maybeExpand(n: Node) {
      if (n.expanded || n.depth >= MAX_DEPTH) return;
      if (nodes.length >= MAX_NODES || segs.length >= MAX_SEGS) return;
      // Only expand once the node's incoming line is visible on screen
      if (sx(n.wx) > cvs.width + 60) return;

      n.expanded = true;
      const r  = rng(seed++);
      const dx = 120 + r() * 140;
      const dy = (r() - 0.5) * 0.28;
      const child: Node = {
        wx:       n.wx + dx,
        ny:       Math.max(0.06, Math.min(0.94, n.ny + dy)),
        depth:    n.depth + 1,
        expanded: false,
        gold:     r() < 0.5 ? GOLD_A : GOLD_B,
      };
      nodes.push(child);

      const ddx = child.wx - n.wx;
      const ddy = (child.ny - n.ny) * cvs.height;
      segs.push({
        from: n, to: child,
        length: Math.hypot(ddx, ddy),
        drawn: 0,
        done: false,
      });
    }

    // ── Cull anything scrolled off the left ───────────────────────────────
    function cull() {
      const edge = scrollX - 120;
      // Remove segs whose destination is off-screen-left
      for (let i = segs.length - 1; i >= 0; i--) {
        if (segs[i].to.wx < edge) segs.splice(i, 1);
      }
      // Remove nodes off-screen-left
      for (let i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].wx < edge) nodes.splice(i, 1);
      }
    }

    // ── Draw one segment (partial line) ───────────────────────────────────
    function drawSeg(seg: Seg) {
      const screenFrom = sx(seg.from.wx);
      // Skip if entirely off-screen
      if (screenFrom > cvs.width + 20) return;

      const alpha = BASE_ALPHA * Math.pow(DEPTH_FADE, seg.from.depth);
      // Fade out as it approaches the left edge
      const fadeAlpha = alpha * Math.min(1, Math.max(0, (screenFrom + 80) / 80));
      if (fadeAlpha < 0.005) return;

      const fromY = seg.from.ny * cvs.height;
      const toY   = seg.to.ny   * cvs.height;
      const toX   = sx(seg.to.wx);

      // Direction vector, clipped to drawn length
      const totalDx = toX - screenFrom;
      const totalDy = toY - fromY;
      const totalLen = Math.hypot(totalDx, totalDy);
      if (totalLen < 0.5) return;

      const t = Math.min(1, seg.drawn / seg.length);
      const endX = screenFrom + totalDx * t;
      const endY = fromY      + totalDy * t;

      ctx.save();
      ctx.globalAlpha = fadeAlpha;
      ctx.strokeStyle = seg.from.gold + '1)';
      ctx.lineWidth   = Math.max(0.4, 1.1 - seg.from.depth * 0.18);
      ctx.beginPath();
      ctx.moveTo(screenFrom, fromY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.restore();
    }

    // ── Draw one node dot ─────────────────────────────────────────────────
    function drawNode(n: Node) {
      const x = sx(n.wx);
      if (x < -10 || x > cvs.width + 10) return;

      const alpha = BASE_ALPHA * Math.pow(DEPTH_FADE, n.depth);
      const fadeAlpha = alpha * Math.min(1, Math.max(0, (x + 80) / 80));
      if (fadeAlpha < 0.005) return;

      const y = n.ny * cvs.height;
      const r = Math.max(0.8, 2.2 - n.depth * 0.35);

      ctx.save();
      ctx.globalAlpha = fadeAlpha;
      ctx.fillStyle   = n.gold + '1)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // ── Main frame ────────────────────────────────────────────────────────
    function frame(ts: number) {
      animId = requestAnimationFrame(frame);

      // Throttle to TARGET_FPS
      if (ts - lastFrame < FRAME_MS) return;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs    = ts;
      lastFrame = ts;

      scrollX += SCROLL_PX_S * dt;

      // Advance draw-in for incomplete segments
      for (const seg of segs) {
        if (!seg.done) {
          if (sx(seg.from.wx) < cvs.width + 60) {
            seg.drawn = Math.min(seg.length, seg.drawn + DRAW_PX_S * dt);
            if (seg.drawn >= seg.length) seg.done = true;
          }
        }
      }

      // Expand nodes that are now on-screen (one per frame max to avoid bursts)
      let expanded = 0;
      for (const n of nodes) {
        if (!n.expanded && expanded < 1) {
          maybeExpand(n);
          if (n.expanded) expanded++;
        }
      }

      // Spawn new root if we have room and the rightmost node is getting close
      const rightmost = nodes.reduce((m, n) => Math.max(m, n.wx), scrollX);
      if (rightmost < scrollX + cvs.width + 200 && nodes.length < MAX_NODES) {
        spawnRoot();
      }

      // Cull off-screen elements
      cull();

      // Render
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      for (const seg  of segs)  drawSeg(seg);
      for (const node of nodes) drawNode(node);
    }

    // ── Seed initial nodes spread across the viewport ─────────────────────
    const initR = rng(42);
    const count = 6; // modest initial population
    for (let i = 0; i < count; i++) {
      nodes.push({
        wx:       scrollX + initR() * cvs.width * 0.9,
        ny:       0.12 + initR() * 0.76,
        depth:    0,
        expanded: false,
        gold:     initR() < 0.5 ? GOLD_A : GOLD_B,
      });
    }

    animId = requestAnimationFrame((ts) => { lastTs = ts; lastFrame = ts; animId = requestAnimationFrame(frame); });

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
