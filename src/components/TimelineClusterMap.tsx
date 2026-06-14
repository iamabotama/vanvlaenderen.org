import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Historical Van Vlaenderen surname-density map, three time windows.
// Fixed antique base map (loads once) with three transparent heat overlays
// stacked on top; toggling cross-fades the active overlay's opacity. Pure
// CSS/img — no Leaflet, no window access at render time, so it is SSR/prerender
// safe and renders directly. Text uses the site design tokens (gold/amber on the
// dark theme) so it stays legible; the map artwork carries its own parchment look.
// Heat positions LOCKED 2026-06-14; counts are per-municipality from Geneanet.

const BASE = '/new_images/flandria-comitatus-1600.jpg';
const OVERLAYS = [
  '/new_images/van-vlaenderen-heat-pre1500.png',
  '/new_images/van-vlaenderen-heat-16thc.png',
  '/new_images/van-vlaenderen-heat-1600.png',
];
const BTN_KEYS = ['clusterMap.btn_pre1500', 'clusterMap.btn_16thc', 'clusterMap.btn_1600'];
const ALT_KEYS = ['clusterMap.alt_pre1500', 'clusterMap.alt_16thc', 'clusterMap.alt_1600'];
const CAP_KEYS = ['clusterMap.caption_pre1500', 'clusterMap.caption_16thc', 'clusterMap.caption_1600'];

export default function TimelineClusterMap() {
  const { t } = useTranslation();
  const [active, setActive] = useState(2); // default: "by 1600"

  return (
    <figure style={{ maxWidth: 760, margin: '1.5rem auto 0' }}>
      <div
        role="group"
        aria-label={t('clusterMap.region_label')}
        style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 14, flexWrap: 'wrap' }}
      >
        {BTN_KEYS.map((key, i) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
            style={{
              font: 'inherit',
              fontSize: '0.85rem',
              letterSpacing: '0.02em',
              padding: '7px 16px',
              borderRadius: 2,
              cursor: 'pointer',
              border: `1px solid ${active === i ? 'var(--gold)' : 'var(--gold-dim)'}`,
              background: active === i ? 'var(--gold)' : 'transparent',
              color: active === i ? 'var(--dark)' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
          >
            {t(key)}
          </button>
        ))}
      </div>

      {/* Fixed base + stacked transparent overlays; only opacity changes on toggle. */}
      <div
        style={{
          position: 'relative',
          lineHeight: 0,
          border: '1px solid var(--gold-dim)',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <img src={BASE} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
        {OVERLAYS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={active === i ? t(ALT_KEYS[i]) : ''}
            aria-hidden={active !== i}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              opacity: active === i ? 1 : 0,
              transition: 'opacity 0.35s ease',
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      <figcaption style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6, margin: '14px 2px 8px' }}>
        {t(CAP_KEYS[active])}
      </figcaption>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 2px 4px' }}
      >
        <span
          aria-hidden="true"
          style={{ width: 30, height: 10, borderRadius: 5, flex: '0 0 auto', background: 'linear-gradient(90deg,#ffd628,#e24a14)' }}
        />
        {t('clusterMap.legend')}
      </div>
      <p
        style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '8px 2px 0' }}
        dangerouslySetInnerHTML={{ __html: t('clusterMap.credit_html') }}
      />
      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '6px 2px 0', fontStyle: 'italic' }}>
        {t('clusterMap.db_note')}
      </p>
    </figure>
  );
}
