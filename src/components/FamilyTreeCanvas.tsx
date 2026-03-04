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
 *  - Occasional tiny Flemish name labels appear at generation-0 and generation-1 nodes
 *  - Deeper generations are progressively more transparent
 *  - Branches fade out as they approach the left edge
 *  - Sparse branching: 1–2 children per node, with occasional 3-child splits
 *  - 75-second full-width scroll speed — a slow, meditative drift
 *  - Dual-layer: a second, slower background layer adds depth
 *  - requestAnimationFrame loop; canvas is sized to window and resizes cleanly
 */

import { useEffect, useRef } from 'react';

// ─── Tuneable constants ────────────────────────────────────────────────────────

/** Pixels per second the world scrolls left (75-second full-width drift) */
const SCROLL_SPEED = 3200 / 75;

/** Base opacity of generation-0 lines — bumped so it shows through semi-transparent page backgrounds */
const BASE_OPACITY = 0.22;

/** Each generation multiplies opacity by this factor */
const DEPTH_FADE = 0.76;

/** How many px from the left edge a branch starts fading out */
const LEFT_FADE_START = 240;

/** How many px from the right edge a branch starts drawing in */
const RIGHT_DRAW_ZONE = 320;

/** Minimum vertical spacing between sibling branches (px) */
const MIN_BRANCH_GAP = 60;

/** How fast a line draws in, in world-px per second */
const DRAW_SPEED = 200;

/** Gold palette — matches site's --gold / --gold-light */
const GOLD_COLORS = ['#e8b830', '#f5d060', '#c8aa72', '#d4a017'];

/** Flemish given names to display as tiny labels at trunk/first-gen nodes */
const FLEMISH_NAMES = [
  'Gerardus', 'Eduardus', 'Frans', 'Maria', 'Pieter', 'Jan',
  'Katrien', 'Adriaan', 'Cornelia', 'Jozef', 'Anna', 'Hendrik',
  'Elisabeth', 'Augustijn', 'Margareta', 'Lodewijk', 'Cecilia',
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface TreeNode {
  wx: number;       // World-space X
  ny: number;       // Canvas Y, normalised 0–1
  depth: number;    // Generation depth (0 = root trunk)
  children: TreeNode[];
  expanded: boolean;
  colorIdx: number;
  label: string | null;  // Optional name label
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

// ─── Tree builder ─────────────────────────────────────────────────────────────

function buildTree(
  nodes: TreeNode[],
  segments: Segment[],
  seedCounter: { v: number },
  scrollX: number,
  canvasW: number,
  canvasH: number,
) {
  function rng(seed: number) { return mulberry32(seed); }

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
        const dy = Math.abs(n.ny - ny) * (canvasH || 800);
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

    const rand = rng(seedCounter.v++);
    const childCount = node.depth < 2
      ? (rand() < 0.22 ? 3 : rand() < 0.58 ? 2 : 1)
      : (rand() < 0.32 ? 2 : 1);

    const xStep = 130 + rand() * 150;

    for (let i = 0; i < childCount; i++) {
      const childRand = rng(seedCounter.v++);
      const wx = node.wx + xStep + childRand() * 60;
      const ny = pickY(wx, node.depth + 1, childRand);

      // Assign a name label to depth-0 and some depth-1 nodes
      let label: string | null = null;
      if (node.depth === 0) {
        label = FLEMISH_NAMES[Math.floor(childRand() * FLEMISH_NAMES.length)];
      } else if (node.depth === 1 && childRand() < 0.5) {
        label = FLEMISH_NAMES[Math.floor(childRand() * FLEMISH_NAMES.length)];
      }

      const child: TreeNode = {
        wx, ny,
        depth: node.depth + 1,
        children: [],
        expanded: false,
        colorIdx: (node.colorIdx + Math.floor(childRand() * 2)) % GOLD_COLORS.length,
        label,
      };
      nodes.push(child);
      node.children.push(child);

      const dx = child.wx - node.wx;
      const dy = (child.ny - node.ny) * (canvasH || 800);
      segments.push({
        from: node,
        to: child,
        length: Math.hypot(dx, dy),
        drawn: 0,
        complete: false,
      });
    }
  }

  // Seed new trunk nodes as needed
  const rightEdge = scrollX + canvasW;
  const furthestNode = nodes.reduce((max, n) => Math.max(max, n.wx), scrollX);
  if (furthestNode < rightEdge + 600) {
    const rand = rng(seedCounter.v++);
    const wx = rightEdge + 200 + rand() * 300;
    const ny = pickY(wx, 0, rand);
    const label = FLEMISH_NAMES[Math.floor(rand() * FLEMISH_NAMES.length)];
    nodes.push({
      wx, ny, depth: 0, children: [], expanded: false,
      colorIdx: Math.floor(rand() * GOLD_COLORS.length),
      label,
    });
  }

  // Expand nodes that are on screen
  for (const node of nodes) {
    if (!node.expanded) {
      const sx = node.wx - scrollX;
      if (sx < canvasW + 50) {
        expandNode(node);
      }
    }
  }

  // Expand when a segment completes
  for (const seg of segments) {
    if (seg.complete && !seg.to.expanded) {
      expandNode(seg.to);
    }
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FamilyTreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    const cvs = canvas as HTMLCanvasElement;

    // ── State ──────────────────────────────────────────────────────────────
    let animId = 0;
    let lastTime = 0;
    let scrollX = 0;
    const seedCounter = { v: 1 };

    const nodes: TreeNode[] = [];
    const segments: Segment[] = [];

    // ── Helpers ────────────────────────────────────────────────────────────
    function resize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }

    function screenX(wx: number): number { return wx - scrollX; }
    function screenY(ny: number): number { return ny * cvs.height; }

    function segmentOpacity(seg: Segment): number {
      const sx = screenX(seg.from.wx);
      const ex = screenX(seg.to.wx);
      const midSx = (sx + ex) / 2;
      let op = BASE_OPACITY * Math.pow(DEPTH_FADE, seg.from.depth);
      if (midSx < LEFT_FADE_START) op *= Math.max(0, midSx / LEFT_FADE_START);
      if (midSx > cvs.width - RIGHT_DRAW_ZONE) {
        op *= Math.max(0, (cvs.width - midSx) / RIGHT_DRAW_ZONE);
      }
      return Math.max(0, Math.min(1, op));
    }

    function nodeOpacity(node: TreeNode): number {
      const sx = screenX(node.wx);
      let op = BASE_OPACITY * 1.7 * Math.pow(DEPTH_FADE, node.depth);
      if (sx < LEFT_FADE_START) op *= Math.max(0, sx / LEFT_FADE_START);
      if (sx > cvs.width - RIGHT_DRAW_ZONE) op *= Math.max(0, (cvs.width - sx) / RIGHT_DRAW_ZONE);
      return Math.max(0, Math.min(1, op));
    }

    // ── Draw a single segment with elbow path ─────────────────────────────
    function drawSegment(seg: Segment) {
      const sx = screenX(seg.from.wx);
      const sy = screenY(seg.from.ny);
      const ex = screenX(seg.to.wx);
      const ey = screenY(seg.to.ny);

      if (ex < -50 || sx > cvs.width + 50) return;

      const op = segmentOpacity(seg);
      if (op <= 0.004) return;

      const midX = (sx + ex) / 2;
      const progress = seg.complete ? 1 : seg.drawn / seg.length;

      const seg1Len = Math.abs(midX - sx);
      const seg2Len = Math.abs(ey - sy);
      const seg3Len = Math.abs(ex - midX);
      const pathLen = seg1Len + seg2Len + seg3Len;
      const drawLen = pathLen * progress;

      ctx.save();
      ctx.globalAlpha = op;
      ctx.strokeStyle = GOLD_COLORS[seg.from.colorIdx];
      ctx.lineWidth = Math.max(0.4, 1.4 - seg.from.depth * 0.18);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = GOLD_COLORS[seg.from.colorIdx];
      ctx.shadowBlur = 2.5;

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

    // ── Draw a node dot + optional name label ─────────────────────────────
    function drawNode(node: TreeNode) {
      const sx = screenX(node.wx);
      const sy = screenY(node.ny);
      if (sx < -20 || sx > cvs.width + 20) return;

      const incomingSeg = segments.find(s => s.to === node);
      if (incomingSeg && !incomingSeg.complete) return;

      const op = nodeOpacity(node);
      if (op <= 0.004) return;

      const r = Math.max(1, 2.8 - node.depth * 0.38);

      ctx.save();
      ctx.globalAlpha = op;
      ctx.fillStyle = GOLD_COLORS[node.colorIdx];
      ctx.shadowColor = GOLD_COLORS[node.colorIdx];
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fill();

      // Name label for shallow nodes
      if (node.label && node.depth <= 1 && op > 0.04) {
        ctx.shadowBlur = 0;
        ctx.globalAlpha = op * 0.7;
        ctx.font = `${node.depth === 0 ? 9 : 8}px Inter, sans-serif`;
        ctx.fillStyle = GOLD_COLORS[node.colorIdx];
        ctx.letterSpacing = '0.08em';
        ctx.fillText(node.label, sx + r + 4, sy + 3);
      }

      ctx.restore();
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
            if (seg.drawn >= seg.length) seg.complete = true;
          }
        }
      }

      // Build/expand tree
      buildTree(nodes, segments, seedCounter, scrollX, cvs.width, cvs.height);

      // Cull off-screen-left elements
      const cullX = scrollX - 500;
      for (let i = segments.length - 1; i >= 0; i--) {
        if (segments[i].to.wx < cullX) segments.splice(i, 1);
      }
      for (let i = nodes.length - 1; i >= 0; i--) {
        if (nodes[i].wx < cullX) nodes.splice(i, 1);
      }

      // Draw all segments then all nodes (nodes on top)
      for (const seg of segments) drawSegment(seg);
      for (const node of nodes) drawNode(node);
    }

    // ── Animation loop ─────────────────────────────────────────────────────
    function loop(ts: number) {
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;
      drawFrame(dt);
      animId = requestAnimationFrame(loop);
    }

    // ── Init: pre-populate the visible area ────────────────────────────────
    resize();

    for (let i = 0; i < 9; i++) {
      const rand = mulberry32(seedCounter.v++);
      const wx = scrollX + rand() * cvs.width * 0.95;
      const ny = 0.08 + rand() * 0.84;
      const label = FLEMISH_NAMES[Math.floor(rand() * FLEMISH_NAMES.length)];
      const node: TreeNode = {
        wx, ny, depth: 0, children: [], expanded: false,
        colorIdx: Math.floor(rand() * GOLD_COLORS.length),
        label,
      };
      nodes.push(node);

      // Immediately expand 2 generations so the canvas isn't empty at start
      const expandImmediate = (n: TreeNode) => {
        if (n.expanded) return;
        n.expanded = true;
        if (n.depth >= 3) return;
        const r2 = mulberry32(seedCounter.v++);
        const childCount = r2() < 0.5 ? 2 : 1;
        const xStep = 130 + r2() * 150;
        for (let j = 0; j < childCount; j++) {
          const cr = mulberry32(seedCounter.v++);
          const cwx = n.wx + xStep + cr() * 60;
          const cny = Math.max(0.08, Math.min(0.92, n.ny + (cr() - 0.5) * 0.35));
          const childLabel = n.depth === 0 ? FLEMISH_NAMES[Math.floor(cr() * FLEMISH_NAMES.length)] : null;
          const child: TreeNode = {
            wx: cwx, ny: cny, depth: n.depth + 1,
            children: [], expanded: false,
            colorIdx: (n.colorIdx + 1) % GOLD_COLORS.length,
            label: childLabel,
          };
          nodes.push(child);
          n.children.push(child);
          const dx = child.wx - n.wx;
          const dy = (child.ny - n.ny) * cvs.height;
          const seg: Segment = {
            from: n, to: child,
            length: Math.hypot(dx, dy),
            drawn: 0, complete: true,
          };
          seg.drawn = seg.length;
          segments.push(seg);
          expandImmediate(child);
        }
      };
      expandImmediate(node);
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
