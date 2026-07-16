import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FamilyCallout from '../components/FamilyCallout';
import { useTranslation } from 'react-i18next';
import knightPhilip from '../assets/images/heraldic/cronike-van-vlaenderen-philip-of-alsace-knight.jpg';
import heatmap1500 from '../assets/images/heatmap-1500.png';
import heatmap1600 from '../assets/images/heatmap-1600.png';
import heatmap1700 from '../assets/images/heatmap-1700.png';

const tdStyle = { padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', verticalAlign: 'top' as const, lineHeight: 1.5, fontSize: '0.88rem' };
const thStyle = { padding: '10px 12px', color: 'var(--gold)', textAlign: 'left' as const, fontWeight: 600, fontSize: '0.82rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em', borderBottom: '1px solid rgba(232,184,48,0.3)' };

function HeatMapFigure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure style={{ margin: '2rem 0' }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', borderRadius: '4px', border: '1px solid rgba(232,184,48,0.18)', display: 'block' }}
      />
      <figcaption style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.6rem', lineHeight: 1.55, paddingLeft: '0.25rem' }}>
        {caption}
      </figcaption>
    </figure>
  );
}

function DistributionTable({ rows, caption, headers }: { rows: [string, string, string][]; caption: string; headers: { municipality: string; region: string; count: string } }) {
  return (
    <div style={{ margin: '1rem 0 2rem' }}>
      <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{caption}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
        <thead>
          <tr>
            <th style={thStyle}>{headers.municipality}</th>
            <th style={thStyle}>{headers.region}</th>
            <th style={{ ...thStyle, textAlign: 'right' as const }}>{headers.count}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([place, region, count]) => (
            <tr key={place} style={{ transition: 'background 0.15s' }}>
              <td style={tdStyle}><strong>{place}</strong></td>
              <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{region}</td>
              <td style={{ ...tdStyle, textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: count === rows[0][2] ? 'var(--gold)' : 'var(--text-primary)' }}>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SurnameOriginsPage() {
  const { t } = useTranslation();
  const SO = (k: string) => t(`surname_origins.${k}`);
  const html = (k: string) => ({ __html: SO(k) });

  const headers = { municipality: SO('dist_col_municipality'), region: SO('dist_col_region'), count: SO('dist_col_count') };
  const regionBE = SO('region_belgium');
  const regionFR = SO('region_nord_fr');

  const rows1500: [string, string, string][] = [
    ['Volckerinckhove', regionFR, '551'],
    ['Renescure', regionFR, '34'],
    ['Aalter', regionBE, '11'],
    ['Bollezeele', regionFR, '5'],
    ['Waarschoot', regionBE, '5'],
  ];
  const rows1600: [string, string, string][] = [
    ['Volckerinckhove', regionFR, '539'],
    ['Sleidinge', regionBE, '273'],
    ['Oostwinkel', regionBE, '158'],
    ['Wambeek', regionBE, '39'],
    ['Renescure', regionFR, '32'],
    ['Waarschoot', regionBE, '30'],
    ['Gent', regionBE, '22'],
    ['Evergem', regionBE, '22'],
  ];
  const rows1700: [string, string, string][] = [
    ['Sleidinge', regionBE, '552'],
    ['Volckerinckhove', regionFR, '523'],
    ['Oostwinkel', regionBE, '346'],
    ['Evergem', regionBE, '150'],
    ['Ertvelde', regionBE, '121'],
    ['Gent', regionBE, '85'],
    ['Ursel', regionBE, '53'],
    ['Bassevelde', regionBE, '48'],
  ];

  const functions = [
    { num: '1', label: SO('func1_label'), desc: SO('func1_desc'), muted: true },
    { num: '2', label: SO('func2_label'), desc: SO('func2_desc'), muted: true },
    { num: '3', label: SO('func3_label'), desc: SO('func3_desc'), muted: true },
    { num: '4', label: SO('func4_label'), desc: SO('func4_desc'), muted: false },
  ];

  const tier1 = [
    { name: 'Victor van Vlaenderen', dates: '1399–1430', base: 'tier1_r1' },
    { name: "Loys 'le Frison' van Vlaenderen", dates: '1373–1396', base: 'tier1_r2' },
    { name: "Jan 'sans terre' van Vlaenderen", dates: '1383–1396', base: 'tier1_r3' },
    { name: "Loys 'le Hase' van Vlaenderen", dates: '1370–1396', base: 'tier1_r4' },
    { name: 'Robert [Roeland] van Vlaenderen', dates: '1420–1434', base: 'tier1_r5' },
    { name: 'Karel van Vlaenderen, Lord of Grutersale', dates: '1430–1491', base: 'tier1_r6' },
  ];

  const tier2 = [
    { name: 'Adam van Vlaenderen', dates: '1427–1447 N.S.', base: 'tier2_r1' },
    { name: 'Janne van Vlaenderen', dates: '1427–1442 N.S.', base: 'tier2_r2' },
    { name: 'Lodewijc van Vlaenderen', dates: '1427–1482', base: 'tier2_r3' },
    { name: 'Jan van Vlaenderen', dates: '1431–1442', base: 'tier2_r4' },
    { name: 'Jan van Vlaenderen', dates: 'c. 1400–c. 1430', base: 'tier2_r5' },
    { name: 'Lodewijc van Vlaenderen Heer van Praet', dates: 'c. 1440–1488', base: 'tier2_r6' },
  ];

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{SO('meta_title')}</title>
        <meta name="description" content={SO('meta_description')} />
        <link rel="canonical" href="https://vanvlaenderen.org/name/surname-origins" />
        <meta property="og:title" content={SO('og_title')} />
        <meta property="og:description" content={SO('og_description')} />
        <meta property="og:url" content="https://vanvlaenderen.org/name/surname-origins" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Four Functions, Three Clusters — The Van Vlaenderen Surname in the Documentary Record","description":"A primary source and distributional analysis of the Van Vlaenderen surname across four documentary functions and three geographic clusters.","url":"https://vanvlaenderen.org/name/surname-origins","inLanguage":"en","dateModified":"2026-06-12","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div className={styles.heroImg} style={{ backgroundImage: `url(${knightPhilip})`, backgroundPosition: 'top center' }}>
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>{SO('hero_eyebrow')}</div>
          <h1>{SO('hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>{SO('hero_lead')}</p>
        </div>
      </div>

      <div className={styles.content}>
        <FamilyCallout textKey="surname_origins.family_callout" />


        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{SO('dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>{SO('dossier_meta')}</div>
        </div>

        {/* ── Analytical Challenge ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('challenge_h')}</h2>
          <p dangerouslySetInnerHTML={html('challenge_p1')} />
          <p dangerouslySetInnerHTML={html('challenge_p2')} />
        </section>

        {/* ── Four Functions ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('functions_h')}</h2>
          <p>
            <span dangerouslySetInnerHTML={html('functions_intro_pre')} />
            <Link to="/name" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>{SO('functions_intro_linktext')}</Link>
            <span dangerouslySetInnerHTML={html('functions_intro_post')} />
          </p>

          {functions.map(({ num, label, desc, muted }) => (
            <div key={num} style={{
              display: 'grid', gridTemplateColumns: '2.5rem 1fr', gap: '0 1rem',
              padding: '1rem 1.25rem', marginBottom: '0.5rem', borderRadius: '4px',
              background: muted ? 'rgba(255,255,255,0.02)' : 'rgba(232,184,48,0.06)',
              border: muted ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(232,184,48,0.25)',
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: muted ? 'var(--text-muted)' : 'var(--gold)', lineHeight: 1, paddingTop: '0.1rem' }}>{num}</div>
              <div>
                <div style={{ fontWeight: 600, color: muted ? 'var(--text-muted)' : 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '0.9rem' }}>{label}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Distribution Data & Maps ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('dist_h')}</h2>
          <p dangerouslySetInnerHTML={html('dist_intro')} />

          {/* Methodological caveat */}
          <div className={researchStyles.methodologyBox} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <span className={researchStyles.methodologyTitle} style={{ fontSize: '0.9rem' }}>{SO('caveat_title')}</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }} dangerouslySetInnerHTML={html('caveat_p1')} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }} dangerouslySetInnerHTML={html('caveat_p2')} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }} dangerouslySetInnerHTML={html('caveat_p3')} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 0 }} dangerouslySetInnerHTML={html('caveat_p4')} />
          </div>

          {/* 1500 */}
          <h3 style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', marginTop: '2rem' }}>{SO('c1500_h')}</h3>
          <HeatMapFigure src={heatmap1500} alt={SO('c1500_fig_alt')} caption={SO('c1500_fig_caption')} />
          <DistributionTable caption={SO('c1500_table_caption')} headers={headers} rows={rows1500} />

          {/* 1600 */}
          <h3 style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', marginTop: '2.5rem' }}>{SO('c1600_h')}</h3>
          <HeatMapFigure src={heatmap1600} alt={SO('c1600_fig_alt')} caption={SO('c1600_fig_caption')} />
          <DistributionTable caption={SO('c1600_table_caption')} headers={headers} rows={rows1600} />

          {/* 1700 */}
          <h3 style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', marginTop: '2.5rem' }}>{SO('c1700_h')}</h3>
          <HeatMapFigure src={heatmap1700} alt={SO('c1700_fig_alt')} caption={SO('c1700_fig_caption')} />
          <DistributionTable caption={SO('c1700_table_caption')} headers={headers} rows={rows1700} />

          {/* Key observations */}
          <div style={{ marginTop: '2rem' }}>
            <p>{SO('obs_intro')}</p>
            <p dangerouslySetInnerHTML={html('obs_french')} />
            <p dangerouslySetInnerHTML={html('obs_belgian')} />
            <p dangerouslySetInnerHTML={html('obs_brabant')} />
            <p dangerouslySetInnerHTML={html('obs_zeeland')} />
          </div>
        </section>

        {/* ── Progenitor Candidates ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('progenitor_h')}</h2>
          <p dangerouslySetInnerHTML={html('progenitor_intro')} />

          {/* Tier 1 */}
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.82rem' }}>
            {SO('tier1_h')}
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr>
                  <th style={thStyle}>{SO('tier1_col_name')}</th>
                  <th style={thStyle}>{SO('tier1_col_territory')}</th>
                  <th style={thStyle}>{SO('tier1_col_descendants')}</th>
                  <th style={thStyle}>{SO('tier1_col_dates')}</th>
                  <th style={thStyle}>{SO('tier1_col_region')}</th>
                </tr>
              </thead>
              <tbody>
                {tier1.map((row) => (
                  <tr key={row.base}>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>{row.name}</td>
                    <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{SO(`${row.base}_territory`)}</td>
                    <td style={tdStyle}>{SO(`${row.base}_descendants`)}</td>
                    <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>{row.dates}</td>
                    <td style={tdStyle}>{SO(`${row.base}_region`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tier 2 */}
          <h3 style={{ fontSize: '0.82rem', color: 'var(--gold)', marginBottom: '1rem', marginTop: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {SO('tier2_h')}
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', background: 'rgba(255,255,255,0.015)' }}>
              <thead>
                <tr>
                  <th style={thStyle}>{SO('tier2_col_name')}</th>
                  <th style={thStyle}>{SO('tier2_col_territory')}</th>
                  <th style={thStyle}>{SO('tier2_col_descendants')}</th>
                  <th style={thStyle}>{SO('tier2_col_dates')}</th>
                  <th style={thStyle}>{SO('tier2_col_region')}</th>
                </tr>
              </thead>
              <tbody>
                {tier2.map((row) => (
                  <tr key={row.base}>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>
                      {row.name}<br />
                      <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>{SO(`${row.base}_parentage`)}</span>
                    </td>
                    <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{SO(`${row.base}_territory`)}</td>
                    <td style={tdStyle}>{SO(`${row.base}_descendants`)}</td>
                    <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>{row.dates}</td>
                    {row.base === 'tier2_r1' ? (
                      <td style={{ ...tdStyle, borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}>
                        <span dangerouslySetInnerHTML={html('tier2_r1_region')} />
                        <Link to="/research/victor-dossier" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>{SO('victor_dossier_link')}</Link>
                      </td>
                    ) : (
                      <td style={tdStyle} dangerouslySetInnerHTML={html(`${row.base}_region`)} />
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Testing the Bastard-Line Hypothesis ──────────────────── */}
        <section className={styles.section}>
          <h2>{SO('bastard_h')}</h2>
          <p>{SO('bastard_intro')}</p>
          <p>
            <span dangerouslySetInnerHTML={html('bastard_belgian_pre')} />
            <Link to="/research/victor-dossier" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>{SO('bastard_belgian_linktext')}</Link>
            <span dangerouslySetInnerHTML={html('bastard_belgian_post')} />
          </p>
          <p dangerouslySetInnerHTML={html('bastard_brabant')} />
          <p dangerouslySetInnerHTML={html('bastard_french')} />
          <p dangerouslySetInnerHTML={html('bastard_zeeland')} />
        </section>

        {/* ── Testing Pure Toponymy ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('toponymy_h')}</h2>
          <p dangerouslySetInnerHTML={html('toponymy_intro')} />
          <p dangerouslySetInnerHTML={html('toponymy_geography')} />
          <p dangerouslySetInnerHTML={html('toponymy_concentration')} />
          <p dangerouslySetInnerHTML={html('toponymy_zeeland')} />
          <p dangerouslySetInnerHTML={html('toponymy_eeklo')} />
          <p dangerouslySetInnerHTML={html('toponymy_close')} />
        </section>

        {/* ── Register-Dependent Naming ─────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {SO('register_h')}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>
              {t('research.method_corroborated_label')}
            </span>
          </h2>
          <p dangerouslySetInnerHTML={html('register_intro')} />
          <p dangerouslySetInnerHTML={html('register_first')} />
          <p>
            <span dangerouslySetInnerHTML={html('register_second_pre')} />
            <Link to="/research/methodology" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>{SO('register_second_linktext')}</Link>
            <span dangerouslySetInnerHTML={html('register_second_post')} />
          </p>
          <p dangerouslySetInnerHTML={html('register_third')} />
          <p dangerouslySetInnerHTML={html('register_refinement')} />
        </section>

        {/* ── Separate Name-Families ────────────────────────────────── */}
        <section className={styles.section}>
          <h2>
            {SO('excludes_h')}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>
              {t('research.method_corroborated_label')}
            </span>
          </h2>
          <p dangerouslySetInnerHTML={html('excludes_intro')} />
          <p dangerouslySetInnerHTML={html('excludes_half')} />
          <p dangerouslySetInnerHTML={html('excludes_vlaenderman')} />
        </section>

        {/* ── Volckerinckhove Question ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('volck_h')}</h2>
          <p dangerouslySetInnerHTML={html('volck_p1')} />
          <p dangerouslySetInnerHTML={html('volck_p2')} />
          <p dangerouslySetInnerHTML={html('volck_p3')} />

          {/* Collaborator Call */}
          <div className={researchStyles.methodologyBox} style={{ marginTop: '1.5rem' }}>
            <span className={researchStyles.methodologyTitle} style={{ fontSize: '0.9rem' }}>{SO('collab_title')}</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }} dangerouslySetInnerHTML={html('collab_p1')} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }} dangerouslySetInnerHTML={html('collab_p2')} />
            <Link
              to="/contact"
              style={{
                background: 'rgba(232,184,48,0.1)',
                border: '1px solid rgba(232,184,48,0.4)',
                color: 'var(--gold)',
                padding: '0.6rem 1.25rem',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-ui)',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {SO('collab_button')}
            </Link>
          </div>
        </section>

        {/* ── Conclusions ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('conclusions_h')}</h2>
          <p dangerouslySetInnerHTML={html('conclusions_p1')} />
          <p dangerouslySetInnerHTML={html('conclusions_p2')} />
          <p dangerouslySetInnerHTML={html('conclusions_p3')} />
        </section>

        {/* ── Notes ─────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{SO('notes_h')}</h2>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            <p dangerouslySetInnerHTML={html('note1')} />
            <p dangerouslySetInnerHTML={html('note2')} />
            <p dangerouslySetInnerHTML={html('note3')} />
            <p dangerouslySetInnerHTML={html('note4')} />
            <p dangerouslySetInnerHTML={html('note5')} />
          </div>
        </section>

        {/* ── Back nav ──────────────────────────────────────────────── */}
        <div style={{ borderTop: '1px solid rgba(232,184,48,0.15)', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
          <Link to="/name" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>
            {SO('back_name')}
          </Link>
          <Link to="/research/bibliography" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>
            {SO('back_bibliography')}
          </Link>
        </div>

      </div>
    </div>
  );
}
