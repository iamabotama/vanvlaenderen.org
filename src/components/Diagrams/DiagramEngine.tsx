import { useState, useCallback, useEffect, useRef, useMemo } from 'react';

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
  sub: '#d0d4dc',
  muted: '#d0d4dc',
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

// ── Connection path helper ─────────────────────────────────────────────────
interface NodeBox {
  cx: number;
  top: number;
  bot: number;
}

function connectionPath(a: NodeBox, b: NodeBox): string {
  const my = (a.bot + b.top) / 2;
  return `M${a.cx},${a.bot} C${a.cx},${my + 16} ${b.cx},${my - 16} ${b.cx},${b.top}`;
}

// ── Node component ─────────────────────────────────────────────────────────
interface NodeProps {
  cfg: NodeConfig;
  x: number;
  y: number;
  onClick: (cfg: NodeConfig, e: React.MouseEvent) => void;
  onMouseEnter: (cfg: NodeConfig, e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

function DiagramNode({ cfg, x, y, onClick, onMouseEnter, onMouseLeave }: NodeProps) {
  const W = cfg.w || 180;
  const H = cfg.h || (cfg.tag ? 96 : cfg.dates ? 68 : 58);
  const color = cfg.color;
  const lines = (cfg.name || '').split('\n');

  return (
    <div
      data-n="1"
      onClick={(e) => onClick(cfg, e)}
      onMouseEnter={(e) => onMouseEnter(cfg, e)}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: W,
        height: H,
        cursor: 'pointer',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          inset: -2,
          borderRadius: 8,
          background: color + '14',
          border: `1px solid ${color}28`,
          pointerEvents: 'none',
        }}
      />
      {/* Card */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: 6,
          background: cfg.focus ? '#1e1c10' : C.surf,
          border: `${cfg.focus ? 2.5 : 1.5}px solid ${color}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 8px',
          boxSizing: 'border-box',
        }}
      >
        {/* Name lines */}
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: cfg.focus ? 14 : 13,
              fontWeight: 600,
              color: C.text,
              textAlign: 'center',
              lineHeight: '18px',
              whiteSpace: 'nowrap',
            }}
          >
            {line}
          </div>
        ))}

        {/* Dates */}
        {cfg.dates && (
          <div
            style={{
              fontFamily: 'EB Garamond, Georgia, serif',
              fontSize: 13,
              fontStyle: 'italic',
              color: C.sub,
              textAlign: 'center',
              lineHeight: '16px',
              marginTop: 1,
            }}
          >
            {cfg.dates}
          </div>
        )}

        {/* Tag pill — inline-block, auto-sizes to text content */}
        {cfg.tag && (
          <span
            style={{
              display: 'inline-block',
              marginTop: 6,
              padding: '3px 8px',
              borderRadius: 3,
              background: color + '44',
              border: `0.5px solid ${color}66`,
              fontFamily: 'Cinzel, serif',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.55px',
              color: color,
              textAlign: 'center',
              lineHeight: '15px',
              whiteSpace: 'nowrap',
            }}
          >
            {cfg.tag}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
interface LineageDiagramProps {
  diagram: DiagramDef;
  title?: string;
  subtitle?: string;
}

export default function LineageDiagram({ diagram, title, subtitle }: LineageDiagramProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [tipData, setTipData] = useState<NodeConfig | null>(null);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });
  const [pinned, setPinned] = useState<NodeConfig | null>(null);
  const [scale, setScale] = useState(1);

  // Parse viewBox for canvas dimensions
  const [canvasW, canvasH] = useMemo(() => {
    const parts = diagram.viewBox.split(/\s+/).map(Number);
    return [parts[2] || 920, parts[3] || 580];
  }, [diagram.viewBox]);

  // Build node box lookup for connections
  const nodeBoxes = useMemo(() => {
    const boxes: Record<string, NodeBox> = {};
    for (const n of diagram.nodes) {
      const W = n.cfg.w || 180;
      const H = n.cfg.h || (n.cfg.tag ? 96 : n.cfg.dates ? 68 : 58);
      boxes[n.id] = {
        cx: n.x + W / 2,
        top: n.y,
        bot: n.y + H,
      };
    }
    return boxes;
  }, [diagram.nodes]);

  // Responsive scaling via ResizeObserver
  useEffect(() => {
    const container = canvasRef.current?.parentElement;
    if (!container) return;
    const update = () => {
      const parentW = container.offsetWidth;
      if (parentW > 0) setScale(parentW / canvasW);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    return () => ro.disconnect();
  }, [canvasW]);

  const toCanvasPos = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: clientX, y: clientY };
    const rect = canvas.getBoundingClientRect();
    const currentScale = rect.width / canvasW;
    return {
      x: (clientX - rect.left) / currentScale,
      y: (clientY - rect.top) / currentScale,
    };
  }, [canvasW]);

  const handleHover = useCallback((data: NodeConfig, e: React.MouseEvent) => {
    if (!pinned) {
      setTipData(data);
      setTipPos(toCanvasPos(e.clientX, e.clientY));
    }
  }, [pinned, toCanvasPos]);

  const handleLeave = useCallback(() => {
    if (!pinned) setTipData(null);
  }, [pinned]);

  const handleClick = useCallback((data: NodeConfig, e: React.MouseEvent) => {
    e.stopPropagation();
    if (pinned === data) {
      setPinned(null);
      setTipData(null);
    } else {
      setPinned(data);
      setTipData(data);
      setTipPos(toCanvasPos(e.clientX, e.clientY));
    }
  }, [pinned, toCanvasPos]);

  // Dismiss tooltip on outside click
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

  // Follow mouse for hover tooltip
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (tipData && !pinned) {
        setTipPos(toCanvasPos(e.clientX, e.clientY));
      }
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, [tipData, pinned, toCanvasPos]);

  const ev = tipData?.ev ? EV[tipData.ev] || EV.strong : null;

  // Tooltip positioning (in canvas coordinate space)
  let tx = tipPos.x + 16;
  let ty = tipPos.y + 16;
  const tipW = 270;
  const tipH = 160;
  if (tx + tipW > canvasW - 8) tx = tipPos.x - tipW - 16;
  if (ty + tipH > canvasH - 8) ty = tipPos.y - tipH - 16;
  tx = Math.max(8, Math.min(tx, canvasW - tipW - 8));
  ty = Math.max(8, Math.min(ty, canvasH - tipH - 8));

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      {title && (
        <div style={{ marginBottom: 16 }}>
          {subtitle && (
            <div
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 12,
                letterSpacing: '0.22em',
                color: '#c4a55a',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}
            >
              {subtitle}
            </div>
          )}
          <h3
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(17px, 3vw, 22px)',
              color: '#f0e8d0',
              margin: '0 0 6px',
            }}
          >
            {title}
          </h3>
        </div>
      )}

      <div
        style={{
          background: '#12151c',
          border: '1px solid #252836',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        {/* Scaled canvas container — aspect ratio preserved */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: `${(canvasH / canvasW) * 100}%`,
            overflow: 'hidden',
          }}
        >
          <div
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: canvasW,
              height: canvasH,
              transformOrigin: 'top left',
              transform: `scale(${scale})`,
              background: '#12151c',
            }}
          >
            {/* Connection lines — lightweight SVG for bezier paths only */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: canvasW,
                height: canvasH,
                pointerEvents: 'none',
              }}
              viewBox={`0 0 ${canvasW} ${canvasH}`}
            >
              {diagram.connections.map((conn, i) => {
                const a = nodeBoxes[conn.from];
                const b = nodeBoxes[conn.to];
                if (!a || !b) return null;
                return (
                  <path
                    key={i}
                    d={connectionPath(a, b)}
                    stroke={conn.color}
                    strokeWidth={conn.dashed ? 1.5 : 2}
                    fill="none"
                    opacity={conn.dashed ? 0.5 : 0.7}
                    strokeDasharray={conn.dashed ? '5 4' : undefined}
                  />
                );
              })}
            </svg>

            {/* Labels */}
            {diagram.labels?.map((label, i) => (
              <div
                key={`label-${i}`}
                style={{
                  position: 'absolute',
                  left: label.x,
                  top: label.y,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: 'Cinzel, serif',
                  fontSize: label.size || 14,
                  letterSpacing: '0.08em',
                  color: label.color || '#d0d4dc',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                {label.text}
              </div>
            ))}

            {/* Annotations */}
            {diagram.annotations?.map((ann, i) => (
              <div
                key={`ann-${i}`}
                style={{
                  position: 'absolute',
                  left: ann.x,
                  top: ann.y,
                  transform: 'translateY(-50%)',
                  fontFamily: 'EB Garamond, Georgia, serif',
                  fontSize: 15,
                  fontStyle: 'italic',
                  color: ann.color || C.muted,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                {ann.text}
              </div>
            ))}

            {/* Nodes — HTML divs with CSS styling */}
            {diagram.nodes.map((n) => (
              <DiagramNode
                key={n.id}
                cfg={n.cfg}
                x={n.x}
                y={n.y}
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              />
            ))}

            {/* Tooltip — positioned in canvas space, scales with diagram */}
            {tipData && (
              <div
                ref={tipRef}
                data-n="1"
                style={{
                  position: 'absolute',
                  left: tx,
                  top: ty,
                  background: '#0d0f14',
                  border: '1px solid #7a6535',
                  borderRadius: 6,
                  padding: '13px 15px',
                  maxWidth: 270,
                  pointerEvents: 'none',
                  zIndex: 9999,
                  fontFamily: 'EB Garamond, Georgia, serif',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#f0e8d0',
                    marginBottom: 4,
                  }}
                >
                  {tipData.name?.replace('\n', ' ')}
                </div>
                {tipData.dates && (
                  <div
                    style={{
                      fontSize: 13,
                      color: '#d0d4dc',
                      marginBottom: 7,
                      fontStyle: 'italic',
                    }}
                  >
                    {tipData.dates}
                  </div>
                )}
                {ev && (
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: 11,
                      padding: '2px 7px',
                      borderRadius: 3,
                      fontFamily: 'Cinzel, serif',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      marginBottom: 7,
                      background: ev.bg,
                      color: ev.c,
                    }}
                  >
                    {ev.label}
                  </span>
                )}
                {tipData.body && (
                  <div style={{ fontSize: 15, color: '#f0e8d0', lineHeight: 1.55 }}>
                    {tipData.body}
                  </div>
                )}
                {tipData.src && (
                  <div
                    style={{
                      fontSize: 13,
                      color: '#d0d4dc',
                      marginTop: 8,
                      paddingTop: 7,
                      borderTop: '1px solid #1e2230',
                      fontStyle: 'italic',
                    }}
                  >
                    Source: {tipData.src}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px 18px',
            padding: '12px 16px',
            borderTop: '1px solid #1e2230',
            background: 'rgba(255,255,255,0.015)',
          }}
        >
          {diagram.legendItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                fontSize: 14,
                color: '#d0d4dc',
              }}
            >
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 2,
                  flexShrink: 0,
                  background: item.color,
                }}
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
