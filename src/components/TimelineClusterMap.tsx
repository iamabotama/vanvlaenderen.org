import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Historical Van Vlaenderen surname-density map, three time windows.
// Fixed antique base map (loads once, never re-decodes) with three transparent
// heat overlays stacked on top; toggling cross-fades the active overlay's opacity.
// Compositing is alpha-over the base, identical to the baked version, but lighter
// and flash-free. Pure CSS/img — no Leaflet, no window access at render time, so
// it is SSR/prerender-safe and renders directly (no ClientOnly wrapper needed).
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
    <figure style={{ fontFamily: 'Georgia, serif', maxWidth: 760, margin: '2.5rem auto 0' }}>
      <div
        role="group"
        aria-label={t('clusterMap.region_label')}
        style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 12 }}
      >
        {BTN_KEYS.map((key, i) => (
          <button
            key={key}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 13,
              padding: '7px 16px',
              border: `0.5px solid ${active === i ? '#5a1411' : '#6b4f34'}`,
              background: active === i ? '#7a1d16' : '#efe4cd',
              color: active === i ? '#f3e7cb' : '#4a3a28',
              cursor: 'pointer',
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
          border: '1px solid #6b4f34',
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

      <figcaption style={{ fontSize: 13, color: '#4a3a28', lineHeight: 1.6, margin: '12px 2px 6px' }}>
        {t(CAP_KEYS[active])}
      </figcaption>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: '#6b573c', margin: '0 2px' }}
      >
        <span
          style={{ width: 30, height: 10, borderRadius: 5, background: 'linear-gradient(90deg,#ffd628,#e24a14)' }}
        />
        {t('clusterMap.legend')}
      </div>
      <p
        style={{ fontSize: 10, color: '#6b573c', margin: '10px 2px 0', lineHeight: 1.55 }}
        dangerouslySetInnerHTML={{ __html: t('clusterMap.credit_html') }}
      />
      <p style={{ fontSize: 10, color: '#6b573c', margin: '6px 2px 0', lineHeight: 1.55, fontStyle: 'italic' }}>
        {t('clusterMap.db_note')}
      </p>
    </figure>
  );
}
