import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './InnerPage.module.css';

// Hero reuses an existing heraldic asset (no new hero image needed).
import heroShields from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';

// Field photographs (Michael's own, 2026). These four files must be present in
// src/assets/images/places/ before `pnpm build` — Vite resolves the imports at
// build time and will fail if any is missing.
import isidoorGrave from '../assets/images/places/isidoor-van-vlaenderen-portrait.jpg';
import alfonsGrave from '../assets/images/places/alfons-van-vlaenderen-grave-eeklo.jpg';
import constantinopleStatue from '../assets/images/places/johanna-margaretha-constantinopel-statue.jpg';
import chartreuseMemorial from '../assets/images/places/chartreuse-stained-glass-memorial.jpg';

type TFn = (k: string) => string;

const captionStyle = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontStyle: 'italic' as const,
  marginTop: '0.6rem',
  lineHeight: 1.55,
  paddingLeft: '0.25rem',
};

const sourceStyle = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontStyle: 'italic' as const,
  marginTop: '0.4rem',
  lineHeight: 1.55,
};

function PlacePhoto({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure style={{ margin: '1.75rem 0' }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(232,184,48,0.18)', display: 'block' }}
      />
      <figcaption style={captionStyle}>{caption}</figcaption>
    </figure>
  );
}

// Roster entry: bold name + dates, italic epithet, body, source, optional cross-link.
function Entry({ B, k, link }: { B: TFn; k: string; link?: { to: string; label: string } }) {
  return (
    <div style={{ margin: '1.75rem 0' }}>
      <p style={{ margin: '0 0 0.35rem' }}>
        <strong>{B(`${k}_name`)}</strong>{' '}
        <span style={{ color: 'var(--text-muted)' }}>{B(`${k}_dates`)}</span>
        {' — '}
        <em style={{ color: 'var(--gold)' }}>{B(`${k}_epithet`)}</em>
      </p>
      <p style={{ margin: '0 0 0.35rem', lineHeight: 1.7 }}>{B(`${k}_body`)}</p>
      <p style={sourceStyle}>
        {B(`${k}_source`)}
        {link && (
          <>
            {' '}
            <Link to={link.to} style={{ color: 'var(--gold)', fontStyle: 'normal' }}>
              {link.label}
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

export default function BearersPage() {
  const { t } = useTranslation();
  const B: TFn = (k) => t(`bearers.${k}`);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Notable Bearers — Eight Centuries of the Name | vanvlaenderen.org</title>
        <meta
          name="description"
          content="Eight centuries of people who carried the Van Vlaenderen name — admirals and prioresses, lawyers and millers, an emigrant and an executed résistant — and the countesses whose comital title the surname may descend from."
        />
        <link rel="canonical" href="https://vanvlaenderen.org/name/bearers" />
        <meta property="og:title" content="Notable Bearers — Eight Centuries of the Name" />
        <meta property="og:description" content="Eight centuries of people who carried the Van Vlaenderen name, and the open question of who is family." />
        <meta property="og:url" content="https://vanvlaenderen.org/name/bearers" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${heroShields})`, backgroundPosition: 'center center' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>{B('hero_eyebrow')}</div>
          <h1>{B('hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>{B('intro_lead')}</p>
        </div>
      </div>

      <div className={styles.content}>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.75, margin: '0 0 1rem' }}>
          {B('intro_note')}
        </p>
        <p style={{ margin: '0 0 2rem' }}>
          <Link to="/research" style={{ color: 'var(--gold)' }}>{B('research_link_label')}</Link>
        </p>

        {/* ── The count's children ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{B('sec_children')}</h2>
          <Entry B={B} k="victor" link={{ to: '/research/victor-dossier', label: B('victor_link_label') }} />
          <Entry B={B} k="lodewijk" link={{ to: '/research/praet-dossier', label: B('lodewijk_link_label') }} />
        </section>

        {/* ── The women and the name ────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{B('sec_women')}</h2>

          {/* Panel — visually distinct */}
          <div style={{
            margin: '1.5rem 0',
            padding: '1.5rem 1.75rem',
            background: 'rgba(232,184,48,0.06)',
            border: '1px solid rgba(232,184,48,0.25)',
            borderLeft: '3px solid var(--gold)',
            borderRadius: '4px',
          }}>
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
              {B('panel_label')}
            </div>
            <p style={{ margin: 0, lineHeight: 1.75 }}>{B('panel_body')}</p>
            <PlacePhoto src={constantinopleStatue} alt={B('photo_constantinople_alt')} caption={B('photo_constantinople_caption')} />
            <p style={{ ...sourceStyle, marginTop: '0.25rem' }}>{B('panel_source')}</p>
          </div>

          <Entry B={B} k="clara" />
          <Entry B={B} k="isabelle" link={{ to: '/research/despars-compendium', label: B('isabelle_link_label') }} />
          <Entry B={B} k="joanna" />

          {/* Box — the non-claim, outside the roster */}
          <div style={{
            margin: '2rem 0',
            padding: '1.5rem 1.75rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px dashed rgba(232,184,48,0.35)',
            borderRadius: '4px',
          }}>
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              {B('box_label')}
            </div>
            <p style={{ margin: 0, lineHeight: 1.7 }}>{B('box_body')}</p>
            <p style={{ ...sourceStyle, marginTop: '0.5rem' }}>{B('box_source')}</p>
          </div>
        </section>

        {/* ── Lives in the record ───────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{B('sec_lives')}</h2>
          <Entry B={B} k="joos" />
          <Entry B={B} k="carolus" />
        </section>

        {/* ── Into the modern age ───────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{B('sec_modern')}</h2>
          <Entry B={B} k="millers" link={{ to: '/mill', label: B('millers_link_label') }} />
          <Entry B={B} k="petrus" />
          <Entry B={B} k="charles" />
          <Entry B={B} k="isidoor" />
          <PlacePhoto src={isidoorGrave} alt={B('photo_isidoor_alt')} caption={B('photo_isidoor_caption')} />
          <PlacePhoto src={chartreuseMemorial} alt={B('photo_chartreuse_alt')} caption={B('photo_chartreuse_caption')} />
          <Entry B={B} k="alfons" />
          <PlacePhoto src={alfonsGrave} alt={B('photo_alfons_alt')} caption={B('photo_alfons_caption')} />
        </section>

        {/* ── Closing → DNA ─────────────────────────────────────────── */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>{B('closing_body')}</div>
          <Link
            to="/dna"
            style={{
              background: 'none',
              border: '1px solid rgba(232,184,48,0.35)',
              color: 'var(--gold)',
              padding: '0.5rem 1rem',
              borderRadius: '3px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-ui)',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '1rem',
            }}
          >
            {B('closing_cta')}
          </Link>
        </div>

      </div>
    </div>
  );
}
