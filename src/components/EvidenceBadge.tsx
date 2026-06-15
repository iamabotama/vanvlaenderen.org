import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import researchStyles from '../pages/ResearchPage.module.css';

export type EvidenceLevel = 'attested' | 'corroborated' | 'probable' | 'hypothesis';

const levelClass: Record<EvidenceLevel, string> = {
  attested: researchStyles.levelAttested,
  corroborated: researchStyles.levelCorroborated,
  probable: researchStyles.levelProbable,
  hypothesis: researchStyles.levelHypothesis,
};

const ORDER: EvidenceLevel[] = ['attested', 'corroborated', 'probable', 'hypothesis'];

/**
 * Evidence-level badge that exposes the full evidence-level key on hover, focus,
 * or click. Reusable across pages; pulls tier labels/definitions from the
 * `research.method_*` i18n keys so it stays in sync with the methodology page.
 * SSR-safe: the popover only mounts after a client interaction.
 */
export default function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <span
      ref={wrapRef}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`${researchStyles.evidenceLevel} ${levelClass[level]}`}
        aria-expanded={open}
        aria-label={`Evidence level: ${t(`research.method_${level}_label`)}. Show the evidence-level key.`}
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
        style={{ cursor: 'help', fontFamily: 'inherit', lineHeight: 'inherit' }}
      >
        {t(`research.method_${level}_label`)}
      </button>
      {open && (
        <span
          role="tooltip"
          style={{
            position: 'absolute', zIndex: 50, top: 'calc(100% + 8px)', left: 0,
            width: 'min(340px, 82vw)', textAlign: 'left',
            background: '#161616', border: '1px solid rgba(232,184,48,0.3)', borderRadius: '6px',
            padding: '0.9rem 1rem', boxShadow: '0 10px 28px rgba(0,0,0,0.5)',
            fontFamily: 'var(--font-ui)', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal',
            whiteSpace: 'normal', cursor: 'default',
          }}
        >
          <span style={{ display: 'block', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
            How sure are we? — evidence levels
          </span>
          {ORDER.map((l) => (
            <span key={l} style={{ display: 'block', marginBottom: '0.55rem', opacity: l === level ? 1 : 0.55 }}>
              <span className={`${researchStyles.evidenceLevel} ${levelClass[l]}`} style={{ marginLeft: 0 }}>
                {t(`research.method_${l}_label`)}
              </span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '0.3rem' }}>
                {t(`research.method_${l}_text`)}
              </span>
            </span>
          ))}
        </span>
      )}
    </span>
  );
}
