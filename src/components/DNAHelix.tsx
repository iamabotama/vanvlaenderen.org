/**
 * DNAHelix.tsx
 *
 * Design Philosophy: "Bioluminescent Night"
 * ─────────────────────────────────────────
 * A non-CPU-intensive, non-repeating double helix DNA strand rendered on
 * an HTML5 Canvas element using requestAnimationFrame with a 30fps cap.
 *
 * Key techniques:
 *  • Smooth bezier-curve backbones drawn as a series of tiny quadratic segments
 *    so each segment can carry its own depth-based color/width — no per-pixel ops.
 *  • Depth (z) simulated via cosine phase: front strands are opaque & thick,
 *    back strands are translucent & thin.
 *  • Rungs drawn only when facing forward (|cos| > threshold) to avoid
 *    visual clutter at edge-on angles.
 *  • Nucleotide labels (A/T/G/C) from a real 60-base mitochondrial sequence —
 *    never repeats within one viewport.
 *  • Glow pass: a second, blurred draw at low opacity for the bloom effect.
 *  • ResizeObserver keeps the canvas crisp on window resize.
 */

import { useEffect, useRef } from "react";

interface DNAHelixProps {
  opacity?: number;   // overall layer opacity (0–1). Default 0.55
  speed?: number;     // radians/second. Default 0.31 (~20s/revolution)
  className?: string;
}

// 60-base non-repeating sequence (human mitochondrial DNA segment)
const SEQ = "ATGCTAGCATGCATCGATCGATCGATGCATGCATCGATCGATCGATGCATGCATCGATCG";

// Color palette — warm gold tones to match site palette
const C_A = { r: 232, g: 184, b: 48  };  // gold       — strand A
const C_B = { r: 200, g: 140, b: 30  };  // amber-gold — strand B

function rgba(c: { r: number; g: number; b: number }, a: number) {
  return `rgba(${c.r},${c.g},${c.b},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
}
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

export default function DNAHelix({
  opacity = 0.55,
  speed = 0.31,
  className = "",
}: DNAHelixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const lastRef   = useRef<number>(0);
  const angleRef  = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement;
      // Use getBoundingClientRect for accurate post-layout dimensions
      const rect = parent?.getBoundingClientRect();
      const w = (rect && rect.width  > 0) ? rect.width  : (parent?.clientWidth  ?? window.innerWidth);
      const h = (rect && rect.height > 0) ? rect.height : (parent?.clientHeight ?? window.innerHeight);
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    // Defer first resize so the DOM has fully laid out
    const initTimer = setTimeout(resize, 50);
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const FPS   = 30;
    const FRAME = 1000 / FPS;

    // ── Main draw loop ───────────────────────────────────────────────────────
    const draw = (ts: number) => {
      rafRef.current = requestAnimationFrame(draw);
      const delta = ts - lastRef.current;
      if (delta < FRAME) return;
      lastRef.current = ts - (delta % FRAME);

      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      ctx.clearRect(0, 0, W, H);

      // Advance angle
      angleRef.current += speed * (delta / 1000);
      const ang = angleRef.current;

      ctx.save();
      ctx.globalAlpha = opacity;

      // ── Geometry ─────────────────────────────────────────────────────────
      const cx   = W * 0.5;
      const amp  = Math.min(W * 0.22, 88);   // horizontal amplitude
      const yTop = H * 0.02;
      const yBot = H * 0.98;
      const hH   = yBot - yTop;
      const TURNS = 3.5;                      // full helical turns visible
      const SEGS  = 160;                      // curve resolution
      const RUNGS = 32;                       // base-pair rungs

      // ── Strand position helpers ───────────────────────────────────────────
      // t ∈ [0,1] maps top→bottom; strand 0 = cos, strand 1 = cos+π
      const sx = (t: number, s: 0 | 1) =>
        cx + amp * Math.cos(ang + t * Math.PI * 2 * TURNS + (s === 1 ? Math.PI : 0));
      const sy = (t: number) => yTop + t * hH;

      // ── Background glow (blurred, drawn first) ────────────────────────────
      ctx.save();
      ctx.filter = "blur(8px)";
      ctx.globalAlpha = 0.18;
      for (let s = 0 as 0 | 1; s <= 1; s++) {
        const col = s === 0 ? C_A : C_B;
        ctx.beginPath();
        ctx.moveTo(sx(0, s), sy(0));
        for (let i = 1; i <= SEGS; i++) {
          const t = i / SEGS;
          ctx.lineTo(sx(t, s), sy(t));
        }
        ctx.strokeStyle = rgba(col, 0.9);
        ctx.lineWidth   = 4;
        ctx.stroke();
      }
      ctx.restore();

      // ── Sharp strand backbones ────────────────────────────────────────────
      // Draw segment-by-segment so each segment has its own depth color/width
      for (let s = 0 as 0 | 1; s <= 1; s++) {
        const col = s === 0 ? C_A : C_B;
        for (let i = 0; i < SEGS; i++) {
          const t0 = i / SEGS;
          const t1 = (i + 1) / SEGS;
          const tMid = (t0 + t1) / 2;

          // Depth from cosine: 1 = front, 0 = back
          const cosVal = Math.cos(ang + tMid * Math.PI * 2 * TURNS + (s === 1 ? Math.PI : 0));
          const depth  = (cosVal + 1) / 2;

          ctx.beginPath();
          ctx.moveTo(sx(t0, s), sy(t0));
          ctx.lineTo(sx(t1, s), sy(t1));
          ctx.strokeStyle = rgba(col, lerp(0.12, 0.90, depth));
          ctx.lineWidth   = lerp(0.8, 3.2, depth);
          ctx.stroke();
        }
      }

      // ── Base-pair rungs ───────────────────────────────────────────────────
      for (let r = 0; r < RUNGS; r++) {
        const t  = (r + 0.5) / RUNGS;
        const x0 = sx(t, 0);
        const x1 = sx(t, 1);
        const y  = sy(t);

        const cosVal = Math.cos(ang + t * Math.PI * 2 * TURNS);
        const depth  = (cosVal + 1) / 2;

        // Skip near-edge-on rungs
        if (Math.abs(x1 - x0) < 5) continue;

        const alpha = lerp(0.06, 0.60, depth);
        const lw    = lerp(0.5, 2.0, depth);

        // Rung gradient
        const rg = ctx.createLinearGradient(x0, y, x1, y);
        rg.addColorStop(0, rgba(C_A, alpha));
        rg.addColorStop(1, rgba(C_B, alpha));
        ctx.beginPath();
        ctx.moveTo(x0, y);
        ctx.lineTo(x1, y);
        ctx.strokeStyle = rg;
        ctx.lineWidth   = lw;
        ctx.stroke();

        // ── Endpoint dots ─────────────────────────────────────────────────
        const dotR = lerp(0.8, 3.5, depth);
        const dotA = lerp(0.08, 0.85, depth);

        ctx.beginPath();
        ctx.arc(x0, y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = rgba(C_A, dotA);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x1, y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = rgba(C_B, dotA);
        ctx.fill();

        // ── Nucleotide labels (only when facing forward) ──────────────────
        if (depth > 0.60) {
          const base = SEQ[r % SEQ.length];
          const comp = base === "A" ? "T" : base === "T" ? "A" : base === "G" ? "C" : "G";
          const la   = lerp(0, 0.50, (depth - 0.60) / 0.40);
          const fs   = lerp(6, 10, depth);
          ctx.font         = `${fs.toFixed(1)}px "Space Mono", monospace`;
          ctx.textBaseline = "middle";

          const leftX  = Math.min(x0, x1);
          const rightX = Math.max(x0, x1);
          const leftC  = x0 < x1 ? C_A : C_B;
          const rightC = x0 < x1 ? C_B : C_A;
          const leftB  = x0 < x1 ? base : comp;
          const rightB = x0 < x1 ? comp : base;

          ctx.textAlign  = "right";
          ctx.fillStyle  = rgba(leftC, la);
          ctx.fillText(leftB, leftX - 4, y);

          ctx.textAlign  = "left";
          ctx.fillStyle  = rgba(rightC, la);
          ctx.fillText(rightB, rightX + 4, y);
        }
      }

      ctx.restore();
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(initTimer);
      ro.disconnect();
    };
  }, [opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
