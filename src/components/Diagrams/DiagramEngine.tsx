import { useEffect, useRef, useState, useCallback } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────
export interface NodeConfig {
  name: string;
  dates?: string;
  tag?: string;
  body?: string;
  src?: string;
  ev?: string;
  color: string;
  focus?: boolean;
  w?: number;
  h?: number;
}

export interface NodeRect {
  x: number; y: number; W: number; H: number;
  cx: number; cy: number; top: number; bot: number;
  left: number; right: number;
}

export interface ConnectionDef {
  from: string;
  to: string;
  color: string;
  dashed?: boolean;
}

export interface LabelDef {
  x: number; y: number; text: string; color?: string; size?: number;
}

export interface AnnotationDef {
  x: number; y: number; text: string; color?: string;
}

export interface DiagramDef {
  viewBox: string;
  nodes: { id: string; cfg: NodeConfig; x: number; y: number }[];
  connections: ConnectionDef[];
  labels?: LabelDef[];
  annotations?: AnnotationDef[];
  legendItems: { color: string; label: string }[];
}

// ── Color palette ──────────────────────────────────────────────────────────
export const C = {
  root: '#e8812a',
  victor: '#9b7fd4',
  praet: '#4aaed4',
  focus: '#d4a830',
  red: '#e06060',
  blue: '#60a5fa',
  text: '#f0e8d0',
  sub: '#d0d4dc',     // improved contrast (was #9aa0b0)
  muted: '#d0d4dc',   // improved contrast (was #b0b8c8)
  surf: '#1c2030',
};

// ── Evidence level config ──────────────────────────────────────────────────
const EV: Record<string, { label: string; bg: string; c: string }> = {
  direct: { label: 'Directly Attested', bg: 'rgba(74,222,128,0.18)', c: '#4ade80' },
  strong: { label: 'Strongly Corroborated', bg: 'rgba(251,191,36,0.18)', c: '#fbbf24' },
  focus: { label: 'Research Focus', bg: 'rgba(212,168,48,0.18)', c: '#d4a830' },
  hypo: { label: 'Evidentiary Gap', bg: 'rgba(248,113,113,0.18)', c: '#f87171' },
  parish: { label: 'Parish Records', bg: 'rgba(96,165,250,0.18)', c: '#60a5fa' },
  ends: { label: 'Line Ends Here', bg: 'rgba(248,113,113,0.18)', c: '#f87171' },
};

// ── SVG helpers ────────────────────────────────────────────────────────────
const NS = 'http://www.w3.org/2000/svg';
function mk(tag: string, attrs: Record<string, string | number>): SVGElement {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  return e;
}

function measureTagText(text: string): number {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // Use the actual rendered font size (12px) with generous padding (32px) to prevent overflow
  if (!ctx) return text.length * 8.5 + 32;
  ctx.font = '600 12px Cinzel, serif';
  return Math.ceil(ctx.measureText(text).width) + 32;
}

function renderNode(
  svg: SVGSVGElement,
  cfg: NodeConfig,
  x: number,
  y: number,
  onHover: (data: NodeConfig, e: MouseEvent) => void,
  onLeave: () => void,
  onClick: (data: NodeConfig, e: MouseEvent) => void,
): NodeRect {
  const W = cfg.w || 180; // Bumped default width slightly
  const tagWidth = cfg.tag ? Math.max(measureTagText(cfg.tag), 150) : 0;
  const H = cfg.h || (cfg.tag ? 86 : cfg.dates ? 68 : 58); // Bumped default heights
  const g = mk('g', { 'data-n': '1' }) as SVGGElement;
  g.style.cursor = 'pointer';
  const color = cfg.color;

  // glow
  g.appendChild(mk('rect', { x: x - 2, y: y - 2, width: W + 4, height: H + 4, rx: 8, ry: 8, fill: color + '14', stroke: color + '28', 'stroke-width': 1 }));
  // bg
  g.appendChild(mk('rect', { x, y, width: W, height: H, rx: 6, ry: 6, fill: cfg.focus ? '#1e1c10' : C.surf, stroke: color, 'stroke-width': cfg.focus ? 2.5 : 1.5 }));

  const lines = (cfg.name || '').split('\n');
  const lh = 18; // Bumped line height
  const hasDates = !!cfg.dates;
  const hasTag = !!cfg.tag;
  // Extra 10px top padding so tag doesn't crowd the bottom of the box
  const tagSlot = hasTag ? 28 : 0; // 10px gap + 18px pill
  const contentH = lines.length * lh + (hasDates ? 16 : 0) + tagSlot;
  let ty = y + (H - contentH) / 2 + lh;

  lines.forEach(line => {
    // Issue: bump name font size from 11/12 to 13/14
    const t = mk('text', { x: x + W / 2, y: ty, 'text-anchor': 'middle', fill: C.text, 'font-family': 'Cinzel,serif', 'font-size': cfg.focus ? '14' : '13', 'font-weight': '600' });
    t.textContent = line;
    g.appendChild(t);
    ty += lh;
  });
  if (hasDates) {
    // Issue: bump date font size from 11 to 13
    const t = mk('text', { x: x + W / 2, y: ty + 1, 'text-anchor': 'middle', fill: C.sub, 'font-family': 'EB Garamond,Georgia,serif', 'font-size': '13', 'font-style': 'italic' });
    t.textContent = cfg.dates!;
    g.appendChild(t);
    ty += 16;
  }
  if (hasTag) {
    const pillW = tagWidth;
    // 10px gap below dates/name, then 18px pill
    // ty is now pointing at the start of the tag slot (after the 10px gap)
    g.appendChild(mk('rect', { x: x + W / 2 - pillW / 2, y: ty + 10, width: pillW, height: 18, rx: 3, fill: color + '25' }));
    const tt = mk('text', { x: x + W / 2, y: ty + 23, 'text-anchor': 'middle', fill: color, 'font-family': 'Cinzel,serif', 'font-size': '12', 'font-weight': '600', 'letter-spacing': '0.07' });
    tt.textContent = cfg.tag!;
    g.appendChild(tt);
  }

  g.addEventListener('mouseenter', (e) => onHover(cfg, e as MouseEvent));
  g.addEventListener('mouseleave', () => onLeave());
  g.addEventListener('click', (e) => onClick(cfg, e as MouseEvent));
  svg.appendChild(g);

  return { x, y, W, H, cx: x + W / 2, cy: y + H / 2, top: y, bot: y + H, left: x, right: x + W };
}

function renderConnection(svg: SVGSVGElement, a: NodeRect, b: NodeRect, color: string, dashed?: boolean) {
  const my = (a.bot + b.top) / 2;
  const d = `M${a.cx},${a.bot} C${a.cx},${my + 16} ${b.cx},${my - 16} ${b.cx},${b.top}`;
  const p = mk('path', { d, stroke: color, 'stroke-width': dashed ? 1.5 : 2, fill: 'none', opacity: dashed ? 0.5 : 0.7, 'stroke-dasharray': dashed ? '5 4' : 'none' });
  svg.insertBefore(p, svg.firstChild!.nextSibling);
}

function renderLabel(svg: SVGSVGElement, x: number, y: number, text: string, color?: string, size?: number) {
  // Issue: bump label font size from 12 to 14, improve default color to #d0d4dc
  const t = mk('text', { x, y, 'text-anchor': 'middle', fill: color || '#d0d4dc', 'font-family': 'Cinzel,serif', 'font-size': size || 14, 'letter-spacing': '0.08' });
  t.textContent = text;
  svg.appendChild(t);
}

function renderAnnotation(svg: SVGSVGElement, x: number, y: number, text: string, color?: string) {
  // Issue: bump annotation font size from 13 to 15, improve default color to #d0d4dc
  const t = mk('text', { x, y, fill: color || C.muted, 'font-family': 'EB Garamond,Georgia,serif', 'font-size': '15', 'font-style': 'italic' });
  t.textContent = text;
  svg.appendChild(t);
}

// ── Main component ─────────────────────────────────────────────────────────
interface LineageDiagramProps {
  diagram: DiagramDef;
  title?: string;
  subtitle?: string;
}

export default function LineageDiagram({ diagram, title, subtitle }: LineageDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [tipData, setTipData] = useState<NodeConfig | null>(null);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });
  const [pinned, setPinned] = useState<NodeConfig | null>(null);
  const nodeRects = useRef<Record<string, NodeRect>>({});

  const toWrapperPos = useCallback((clientX: number, clientY: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return { x: clientX, y: clientY };
    const rect = wrapper.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  const handleHover = useCallback((data: NodeConfig, e: MouseEvent) => {
    if (!pinned) {
      setTipData(data);
      setTipPos(toWrapperPos(e.clientX, e.clientY));
    }
  }, [pinned, toWrapperPos]);

  const handleLeave = useCallback(() => {
    if (!pinned) setTipData(null);
  }, [pinned]);

  const handleClick = useCallback((data: NodeConfig, e: MouseEvent) => {
    e.stopPropagation();
    if (pinned === data) {
      setPinned(null);
      setTipData(null);
    } else {
      setPinned(data);
      setTipData(data);
      setTipPos(toWrapperPos(e.clientX, e.clientY));
    }
  }, [pinned, toWrapperPos]);

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-n]')) {
        setPinned(null);
        setTipData(null);
      }
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (tipData && !pinned) {
        setTipPos(toWrapperPos(e.clientX, e.clientY));
      }
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, [tipData, pinned, toWrapperPos]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    while (svg.childNodes.length > 0) svg.removeChild(svg.lastChild!);
    svg.appendChild(mk('rect', { width: '100%', height: '100%', fill: '#12151c' }));

    const rects: Record<string, NodeRect> = {};
    for (const n of diagram.nodes) {
      rects[n.id] = renderNode(svg, n.cfg, n.x, n.y, handleHover, handleLeave, handleClick);
    }
    nodeRects.current = rects;

    for (const c of diagram.connections) {
      if (rects[c.from] && rects[c.to]) {
        renderConnection(svg, rects[c.from], rects[c.to], c.color, c.dashed);
      }
    }

    if (diagram.labels) {
      for (const l of diagram.labels) {
        renderLabel(svg, l.x, l.y, l.text, l.color, l.size);
      }
    }

    if (diagram.annotations) {
      for (const a of diagram.annotations) {
        renderAnnotation(svg, a.x, a.y, a.text, a.color);
      }
    }
  }, [diagram, handleHover, handleLeave, handleClick]);

  const ev = tipData?.ev ? EV[tipData.ev] || EV.strong : null;

  let tx = tipPos.x + 16;
  let ty = tipPos.y + 16;
  if (tipRef.current && wrapperRef.current) {
    const tipW = tipRef.current.offsetWidth || 270;
    const tipH = tipRef.current.offsetHeight || 120;
    const wrapperW = wrapperRef.current.offsetWidth;
    const wrapperH = wrapperRef.current.offsetHeight;
    if (tx + tipW > wrapperW - 8) tx = tipPos.x - tipW - 16;
    if (ty + tipH > wrapperH - 8) ty = tipPos.y - tipH - 16;
    tx = Math.max(8, Math.min(tx, wrapperW - tipW - 8));
    ty = Math.max(8, Math.min(ty, wrapperH - tipH - 8));
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      {title && (
        <div style={{ marginBottom: '16px' }}>
          {subtitle && <div style={{ fontFamily: 'Cinzel,serif', fontSize: '12px', letterSpacing: '0.22em', color: '#c4a55a', textTransform: 'uppercase', marginBottom: '6px' }}>{subtitle}</div>}
          <h3 style={{ fontFamily: 'Cinzel,serif', fontSize: 'clamp(17px, 3vw, 22px)', color: '#f0e8d0', margin: '0 0 6px' }}>{title}</h3>
        </div>
      )}
      <div style={{ background: '#12151c', border: '1px solid #252836', borderRadius: '8px', overflow: 'hidden' }}>
        <svg ref={svgRef} viewBox={diagram.viewBox} xmlns={NS} style={{ display: 'block', width: '100%', height: 'auto' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px', padding: '12px 16px', borderTop: '1px solid #1e2230', background: 'rgba(255,255,255,0.015)' }}>
          {diagram.legendItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '14px', color: '#d0d4dc' }}>
              <div style={{ width: '11px', height: '11px', borderRadius: '2px', flexShrink: 0, background: item.color }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {tipData && (
        <div
          ref={tipRef}
          style={{
            position: 'absolute',
            left: tx,
            top: ty,
            background: '#0d0f14',
            border: '1px solid #7a6535',
            borderRadius: '6px',
            padding: '13px 15px',
            maxWidth: '270px',
            pointerEvents: 'none',
            zIndex: 9999,
            fontFamily: 'EB Garamond, Georgia, serif',
            boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ fontFamily: 'Cinzel,serif', fontSize: '15px', fontWeight: 600, color: '#f0e8d0', marginBottom: '4px' }}>
            {tipData.name?.replace('\n', ' ')}
          </div>
          {tipData.dates && (
            <div style={{ fontSize: '13px', color: '#d0d4dc', marginBottom: '7px', fontStyle: 'italic' }}>
              {tipData.dates}
            </div>
          )}
          {ev && (
            <span style={{ display: 'inline-block', fontSize: '11px', padding: '2px 7px', borderRadius: '3px', fontFamily: 'Cinzel,serif', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '7px', background: ev.bg, color: ev.c }}>
              {ev.label}
            </span>
          )}
          {tipData.body && (
            <div style={{ fontSize: '15px', color: '#f0e8d0', lineHeight: 1.55 }}>
              {tipData.body}
            </div>
          )}
          {tipData.src && (
            <div style={{ fontSize: '13px', color: '#d0d4dc', marginTop: '8px', paddingTop: '7px', borderTop: '1px solid #1e2230', fontStyle: 'italic' }}>
              Source: {tipData.src}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
