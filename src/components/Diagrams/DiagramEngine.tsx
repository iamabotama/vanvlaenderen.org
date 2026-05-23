import { useState, useCallback, useEffect, useRef, useMemo, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

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
  // Optional visual variant. 'stacked' renders a stacked-paper metaphor
  // (3 offset rectangles) used for collapsed groups of related nodes.
  variant?: 'stacked';
  // Optional tag-pill variant. 'diploma' renders the pill with dark
  // background + bronze border, used for nodes whose surname identity
  // rests on a state-issued legitimization diploma rather than the
  // usual color-coded record confidence.
  tagVariant?: 'diploma';
  // Node ids that are expanded by the expansion panel when this node is
  // clicked. Only meaningful for stacked-variant nodes; supersedes the
  // default hover tooltip behavior.
  expandsTo?: string;
  // When true, renders a muted ↓ glyph below the card. Used on overview
  // cards to signal "this line is documented on its own page" without
  // implying the line ends here. The arrow is explained via a legend
  // entry rather than per-card text to keep the diagram clean.
  continuation?: boolean;
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
  // When set, the annotation wraps to fit within maxWidth (px) instead
  // of rendering as a single nowrap line. Use for long annotations placed
  // beside a node where horizontal space is constrained.
  maxWidth?: number;
  // Text alignment within the annotation block. Default 'left'.
  // When 'center', x is the centre of the block (transform translate(-50%, -50%)).
  // When 'right', x is the right edge (transform translate(-100%, -50%)).
  align?: 'left' | 'center' | 'right';
}

// An expansion panel renders below the canvas (above the legend) when
// triggered by clicking a node with `expandsTo` matching its id. Used for
// the wider-cohort stacked-paper pattern on the Overview diagram and any
// future diagram that wants per-tile click-to-toggle disclosure.
//
// Two tile shapes are supported, distinguished by which fields are set:
//
//   (a) Legacy shape — `body` set; renders the entry inline with no
//       click-to-toggle. Used by older diagrams that group a few related
//       entries under one stacked-paper card.
//
//   (b) Wider-cohort shape — `collapsed` and `expanded` both set; renders
//       a click-to-toggle tile that shows `collapsed` by default and
//       swaps in `expanded` on click. Carries optional metadata: a
//       small-caps source-tier `layer` label, an `uncertain` flag that
//       renders a gold italic tag, a `state` dot (gold for documented-son
//       lines that go cold, grey for figures with no documented issue),
//       and an `outsideSchema` flag that styles the tile with a gold
//       left accent for entries that sit outside the three-state schema
//       (e.g. the 1384 Gosnay nursery aggregate tile).
export interface ExpansionEntry {
  name: string;
  dates?: string;
  // Legacy single-body shape. Optional now that the wider-cohort shape
  // (collapsed + expanded) is supported.
  body?: string;
  src?: string;
  // Wider-cohort shape — set both to opt into per-tile click-to-toggle.
  collapsed?: string;
  expanded?: string;
  // Optional metadata for wider-cohort tiles. Ignored on legacy entries.
  uncertain?: boolean;
  layer?: string;
  outsideSchema?: boolean;
  state?: 'strong_candidate' | 'no_issue_documented';
}
export interface ExpansionPanelDef {
  id: string;
  heading: string;
  // Optional intro paragraph rendered above the tile grid. Set on the
  // wider-cohort panel; legacy panels omit it.
  intro?: string;
  // Optional state-dot legend rendered between intro and entries grid.
  // Each item renders as a small filled circle + label. Used to explain
  // the per-tile state dots on wider-cohort panels.
  stateLegend?: Array<{ color: string; label: string }>;
  entries: ExpansionEntry[];
}

export interface DiagramDef {
  viewBox: string;
  nodes: { id: string; cfg: NodeConfig; x: number; y: number }[];
  connections: ConnectionDef[];
  labels?: LabelDef[];
  annotations?: AnnotationDef[];
  legendItems: { color?: string; label: string; glyph?: string; glyphStyle?: 'plain' | 'circle'; forceBreakBefore?: boolean }[];
  expansions?: ExpansionPanelDef[];
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
  ends: { label: 'Line Ends Here', bg: 'rgba(156,163,175,0.18)', c: '#9ca3af' },
  unknown: { label: 'Silent On Descendants', bg: 'rgba(156,163,175,0.18)', c: '#9ca3af' },
  'married-out': { label: 'Female Bearer · Surname Not Transmitted', bg: 'rgba(156,163,175,0.18)', c: '#9ca3af' },
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
  const isStacked = cfg.variant === 'stacked';

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
      {/* Stacked-paper back layers — rendered behind the main card */}
      {isStacked && (
        <>
          <div
            style={{
              position: 'absolute',
              left: 12,
              top: 12,
              width: '100%',
              height: '100%',
              borderRadius: 6,
              background: '#1a1c24',
              border: `1.5px solid ${color}`,
              opacity: 0.55,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 6,
              top: 6,
              width: '100%',
              height: '100%',
              borderRadius: 6,
              background: '#1b1e26',
              border: `1.5px solid ${color}`,
              opacity: 0.75,
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      {/* Glow — not rendered for stacked (would double up on the back layers) */}
      {!isStacked && (
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
      )}
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
              background: cfg.tagVariant === 'diploma' ? '#2a2418' : color + '44',
              border: cfg.tagVariant === 'diploma' ? '0.5px solid #c4a55a' : `0.5px solid ${color}66`,
              fontFamily: 'Cinzel, serif',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.55px',
              color: cfg.tagVariant === 'diploma' ? '#c4a55a' : color,
              textAlign: 'center',
              lineHeight: '15px',
              whiteSpace: 'pre-line',
            }}
          >
            {cfg.tag}
          </span>
        )}
      </div>

      {/* Descendant-status glyph — below the card in muted grey */}
      {(cfg.ev === 'ends' || cfg.ev === 'unknown' || cfg.ev === 'married-out') && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            marginTop: 8,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          {cfg.ev === 'ends' ? (
            <span
              style={{
                fontFamily: 'EB Garamond, Georgia, serif',
                fontSize: 16,
                color: '#8a8f9e',
                lineHeight: 1,
              }}
            >
              †
            </span>
          ) : cfg.ev === 'married-out' ? (
            <span
              style={{
                display: 'inline-block',
                width: 16,
                height: 16,
                lineHeight: '14px',
                borderRadius: '50%',
                border: '1px solid #8a8f9e',
                color: '#8a8f9e',
                fontFamily: 'EB Garamond, Georgia, serif',
                fontSize: 11,
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              ×
            </span>
          ) : (
            <span
              style={{
                display: 'inline-block',
                width: 16,
                height: 16,
                lineHeight: '14px',
                borderRadius: '50%',
                border: '1px solid #8a8f9e',
                color: '#8a8f9e',
                fontFamily: 'EB Garamond, Georgia, serif',
                fontSize: 11,
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              ?
            </span>
          )}
        </div>
      )}

      {/* Continuation cue — below the card, signals "this line is
         documented on its own page". Arrow only; explained via legend. */}
      {cfg.continuation && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            marginTop: 8,
            textAlign: 'center',
            pointerEvents: 'none',
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: 16,
            color: '#8a8f9e',
            lineHeight: 1,
          }}
        >
          ↓
        </div>
      )}

      {/* Research-focus star badge — top-right corner */}
      {cfg.focus && (
        <div
          style={{
            position: 'absolute',
            top: -10,
            right: -10,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: C.surf,
            border: '1.25px solid #d4a830',
            color: '#d4a830',
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: 13,
            lineHeight: '17px',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          ★
        </div>
      )}
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
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [tipData, setTipData] = useState<NodeConfig | null>(null);
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 });
  const [tipH, setTipH] = useState(160);
  const [pinned, setPinned] = useState<NodeConfig | null>(null);
  const [scale, setScale] = useState(1);
  // Expansion panel state — holds the id of the currently-open panel, or null
  const [expandedId, setExpandedId] = useState<string | null>(null);
  // Per-tile expansion state for wider-cohort panels. Keyed by panel id,
  // value is the set of tile indices currently expanded within that panel.
  // Legacy expansion entries (body shape) ignore this state.
  const [expandedTiles, setExpandedTiles] = useState<Record<string, Set<number>>>({});

  // Close the expansion panel and clear all per-tile expansions. Called
  // from the CLOSE button and when a stacked node is clicked to toggle
  // its panel closed.
  const closeExpansion = useCallback(() => {
    setExpandedId(null);
    setExpandedTiles({});
  }, []);

  const toggleTile = useCallback((panelId: string, tileIdx: number) => {
    setExpandedTiles((prev) => {
      const current = prev[panelId] ?? new Set<number>();
      const next = new Set(current);
      if (next.has(tileIdx)) next.delete(tileIdx);
      else next.add(tileIdx);
      return { ...prev, [panelId]: next };
    });
  }, []);

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
    // Stacked variant nodes don't get hover tooltips — they have their own
    // click-to-expand UX. Prevents the tooltip from overlaying the stacked card.
    if (data.variant === 'stacked') return;
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
    // Stacked nodes toggle their expansion panel instead of pinning a tooltip
    if (data.variant === 'stacked' && data.expandsTo) {
      setExpandedId((cur) => {
        if (cur === data.expandsTo) {
          // Closing — also clear per-tile expansions
          setExpandedTiles({});
          return null;
        }
        return data.expandsTo!;
      });
      setPinned(null);
      setTipData(null);
      return;
    }
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

  // Measure actual tooltip height after it renders so positioning logic has
  // the real number rather than a fixed estimate. Prevents clipping of
  // tooltips with long body text (previously tipH was hardcoded to 160).
  useEffect(() => {
    if (tipData && tipRef.current) {
      const actualH = tipRef.current.offsetHeight;
      if (actualH && actualH !== tipH) setTipH(actualH);
    }
  }, [tipData, tipH]);

  const ev = tipData?.ev ? EV[tipData.ev] || EV.strong : null;

  // Tooltip positioning (in canvas coordinate space)
  // Tooltip height is measured after render (tipH state, updated via layout
  // effect below) rather than hardcoded — prevents the old bug where tooltips
  // with long body text were clipped at the canvas bottom.
  let tx = tipPos.x + 16;
  let ty = tipPos.y + 16;
  const tipW = 270;
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
            {diagram.annotations?.map((ann, i) => {
              const align = ann.align || 'left';
              const tx =
                align === 'center' ? 'translate(-50%, -50%)' :
                align === 'right'  ? 'translate(-100%, -50%)' :
                                     'translateY(-50%)';
              return (
                <div
                  key={`ann-${i}`}
                  style={{
                    position: 'absolute',
                    left: ann.x,
                    top: ann.y,
                    transform: tx,
                    fontFamily: 'EB Garamond, Georgia, serif',
                    fontSize: 15,
                    fontStyle: 'italic',
                    color: ann.color || C.muted,
                    whiteSpace: ann.maxWidth ? 'normal' : 'nowrap',
                    maxWidth: ann.maxWidth,
                    textAlign: align,
                    lineHeight: 1.4,
                    pointerEvents: 'none',
                  }}
                >
                  {ann.text}
                </div>
              );
            })}

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

        {/* Legend — sits between canvas and expansion panel so the always-visible
            chrome stays at the top of the diagram. The expansion panel (when open)
            slides in BELOW the legend as a drawer, not above it. */}
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
            <Fragment key={i}>
              {item.forceBreakBefore && (
                <div style={{ flexBasis: '100%', height: 0 }} aria-hidden="true" />
              )}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  fontSize: 14,
                  color: '#d0d4dc',
                }}
              >
              {item.glyph ? (
                item.glyphStyle === 'circle' ? (
                  <span
                    style={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      lineHeight: '12px',
                      borderRadius: '50%',
                      border: '1px solid #8a8f9e',
                      color: '#8a8f9e',
                      fontFamily: 'EB Garamond, Georgia, serif',
                      fontSize: 10,
                      fontWeight: 500,
                      textAlign: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.glyph}
                  </span>
                ) : (
                  <span
                    style={{
                      display: 'inline-block',
                      width: 14,
                      textAlign: 'center',
                      color: '#8a8f9e',
                      fontFamily: 'EB Garamond, Georgia, serif',
                      fontSize: 14,
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {item.glyph}
                  </span>
                )
              ) : (
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 2,
                    flexShrink: 0,
                    background: item.color,
                  }}
                />
              )}
              {item.label}
              </div>
            </Fragment>
          ))}
        </div>

        {/* Expansion panel — renders below canvas+legend when a stacked node is clicked */}
        {expandedId && diagram.expansions && (() => {
          const panel = diagram.expansions.find((p) => p.id === expandedId);
          if (!panel) return null;
          return (
            <div
              style={{
                padding: '18px 20px 20px',
                borderTop: '1px solid #1e2230',
                background: 'rgba(156,163,175,0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 14,
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                  }}
                >
                  {panel.heading}
                </div>
                <button
                  type="button"
                  onClick={closeExpansion}
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: 11,
                    color: '#9ca3af',
                    letterSpacing: '0.1em',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 8px',
                  }}
                  aria-label="Close expansion panel"
                >
                  {t('research.cohort_sidebar.close_label')} ×
                </button>
              </div>
              {panel.intro && (
                <div
                  style={{
                    fontFamily: 'EB Garamond, Georgia, serif',
                    fontSize: 15,
                    color: '#f0e8d0',
                    lineHeight: 1.6,
                    marginBottom: 18,
                    maxWidth: 880,
                  }}
                >
                  {panel.intro}
                </div>
              )}
              {panel.stateLegend && panel.stateLegend.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px 20px',
                    marginBottom: 16,
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid #2a2f40',
                    borderRadius: 4,
                  }}
                >
                  {panel.stateLegend.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontFamily: 'EB Garamond, Georgia, serif',
                        fontSize: 13,
                        color: '#d0d4dc',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-block',
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: item.color,
                          flexShrink: 0,
                        }}
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 14,
                }}
              >
                {panel.entries.map((entry, idx) => {
                  // Wider-cohort tile shape — collapsed/expanded set, per-tile click-to-toggle
                  if (entry.collapsed !== undefined && entry.expanded !== undefined) {
                    const isExpanded = expandedTiles[panel.id]?.has(idx) ?? false;
                    const stateColor =
                      entry.state === 'strong_candidate' ? '#c4a55a' :
                      entry.state === 'no_issue_documented' ? '#9ca3af' :
                      null;
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleTile(panel.id, idx)}
                        style={{
                          background: '#1c2030',
                          border: '1px solid #6b7180',
                          borderLeft: entry.outsideSchema ? '3px solid #c4a55a' : '1px solid #6b7180',
                          borderRadius: 6,
                          padding: '12px 14px',
                          cursor: 'pointer',
                        }}
                      >
                        {entry.layer && (
                          <div
                            style={{
                              fontFamily: 'Cinzel, serif',
                              fontSize: 10,
                              letterSpacing: '0.18em',
                              color: '#9ca3af',
                              textTransform: 'uppercase',
                              marginBottom: 6,
                            }}
                          >
                            {entry.layer}
                          </div>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          {stateColor && (
                            <span
                              aria-hidden="true"
                              style={{
                                display: 'inline-block',
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: stateColor,
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <div
                            style={{
                              fontFamily: 'Cinzel, serif',
                              fontSize: 13,
                              fontWeight: 600,
                              color: '#f0e8d0',
                            }}
                          >
                            {entry.name}
                          </div>
                          {entry.uncertain && (
                            <span
                              style={{
                                fontFamily: 'EB Garamond, Georgia, serif',
                                fontStyle: 'italic',
                                fontSize: 12,
                                color: '#c4a55a',
                              }}
                            >
                              {t('research.cohort_sidebar.uncertain_label')}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontFamily: 'EB Garamond, Georgia, serif',
                            fontSize: 14,
                            color: '#f0e8d0',
                            marginTop: 8,
                            lineHeight: 1.55,
                          }}
                          dangerouslySetInnerHTML={{
                            __html: isExpanded ? entry.expanded! : entry.collapsed!,
                          }}
                        />
                      </div>
                    );
                  }
                  // Legacy tile shape — single body, no toggle
                  return (
                  <div
                    key={idx}
                    style={{
                      background: '#1c2030',
                      border: '1px solid #6b7180',
                      borderRadius: 6,
                      padding: '12px 14px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Cinzel, serif',
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#f0e8d0',
                      }}
                    >
                      {entry.name}
                    </div>
                    {entry.dates && (
                      <div
                        style={{
                          fontSize: 13,
                          fontStyle: 'italic',
                          color: '#d0d4dc',
                          marginTop: 2,
                        }}
                      >
                        {entry.dates}
                      </div>
                    )}
                    <div
                      style={{
                        fontSize: 14,
                        color: '#f0e8d0',
                        marginTop: 8,
                        lineHeight: 1.5,
                      }}
                    >
                      {entry.body}
                    </div>
                    {entry.src && (
                      <div
                        style={{
                          fontSize: 12,
                          color: '#d0d4dc',
                          marginTop: 8,
                          paddingTop: 7,
                          borderTop: '1px solid #2a2f40',
                          fontStyle: 'italic',
                        }}
                      >
                        Source: {entry.src}
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}
