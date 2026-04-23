import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

function DistributionTable({ rows, caption }: { rows: [string, string, string][]; caption: string }) {
  return (
    <div style={{ margin: '1rem 0 2rem' }}>
      <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-ui)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{caption}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
        <thead>
          <tr>
            <th style={thStyle}>Municipality</th>
            <th style={thStyle}>Region</th>
            <th style={{ ...thStyle, textAlign: 'right' as const }}>Count</th>
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
  const navigate = useNavigate();
  const nav = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Four Functions, Three Clusters — The Van Vlaenderen Surname | vanvlaenderen.org</title>
        <meta name="description" content="A primary source and distributional analysis of the Van Vlaenderen surname: four documentary functions, three geographic clusters across three centuries, and competing hypotheses for the name's origin." />
        <link rel="canonical" href="https://vanvlaenderen.org/name/surname-origins" />
        <meta property="og:title" content="Four Functions, Three Clusters — The Van Vlaenderen Surname" />
        <meta property="og:description" content="Distributional and documentary analysis testing the toponymic and bastard-line hypotheses for the Van Vlaenderen surname origin." />
        <meta property="og:url" content="https://vanvlaenderen.org/name/surname-origins" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Four Functions, Three Clusters — The Van Vlaenderen Surname in the Documentary Record","description":"A primary source and distributional analysis of the Van Vlaenderen surname across four documentary functions and three geographic clusters.","url":"https://vanvlaenderen.org/name/surname-origins","inLanguage":"en","dateModified":"2026-04-15","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div className={styles.heroImg} style={{ backgroundImage: `url(${knightPhilip})`, backgroundPosition: 'top center' }}>
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; The Name</div>
          <h1>Four Functions, Three Clusters</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            A primary source and distributional analysis of the Van Vlaenderen surname: what the phrase was doing in medieval documents, where surname-bearing families actually lived, and what that tells us about the name's origin.
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Research Article</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Analytical Challenge ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Analytical Challenge</h2>
          <p>
            The surname Van Vlaenderen presents a problem that genealogical research alone cannot resolve. The name means, literally, <em>from Flanders</em> — which makes it superficially indistinguishable from the hundreds of Flemish toponymic surnames that attached themselves to migrants as geographic labels. On that reading, tracking the surname's origin is not a genealogical question but a linguistic one, and every family bearing the name simply descends from someone who, at some point, moved away from Flanders into a community where their origin needed a label.
          </p>
          <p>
            This project does not accept that reading as sufficient. The documentary and distributional evidence raises questions that pure toponymy does not answer. This article sets out what that evidence is, what it supports, and what it leaves unresolved.
          </p>
        </section>

        {/* ── Four Functions ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Four Functions of the Phrase</h2>
          <p>
            Before any surname-bearing individual can be identified in a historical source, the phrase <em>van Vlaenderen</em> must be correctly interpreted. In the Flemish documentary record, it performs at least four distinct functions, and conflating them produces false evidence in either direction. The full framework is presented on <button onClick={() => nav('/name')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>The Name page</button>; the summary below provides the necessary context for this analysis.
          </p>

          {[
            {
              num: '1',
              label: 'Governmental phrase',
              desc: 'Souvereyne Kamer van Redeninge van Vlaenderen, De Gedeputeerde van de Staeden van Vlaenderen — institutional descriptors. These tell us where an institution operated, not who someone\'s family was.',
              muted: true,
            },
            {
              num: '2',
              label: 'Feudal titulature',
              desc: 'Dienstman Mijnsheeren van Vlaenderen — vassal of my lord of Flanders. Denotes a relationship to the Count, not a family name.',
              muted: true,
            },
            {
              num: '3',
              label: 'Official staff designation',
              desc: 'Mijns heeren van Vlaenderen messagier — messenger of my lord of Flanders. This is the function most likely to produce hereditary surnames: the son of a court official often inherited the name long after the office itself had passed.',
              muted: true,
            },
            {
              num: '4',
              label: 'Hereditary surname',
              desc: 'Identifiable individuals and multi-generational family clusters using the name as a transmitted family identifier. Victor van Vlaenderen and his natural sons (1427–1447 charters); the Brugse Vrije testator Joos van Vlaenderen (1547); the East Flanders parish-record families across Bassevelde, Boekhoute, Ursel, and Waarschoot. Functions 1–3 must be excluded before Function 4 can be counted.',
              muted: false,
            },
          ].map(({ num, label, desc, muted }) => (
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
          <h2>The Distribution Data</h2>
          <p>
            Geneanet's surname frequency data, drawn from user-contributed genealogical records, provides a broad distributional picture of where and when the surname Van Vlaenderen appears in the record by century. [<a href="https://en.geneanet.org/surnames/van%20VLAENDEREN" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>¹</a>]
          </p>

          {/* Methodological caveat */}
          <div className={researchStyles.methodologyBox} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <span className={researchStyles.methodologyTitle} style={{ fontSize: '0.9rem' }}>Methodological Caveat: Record Survival</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              The Geneanet data does not measure how many people bore the name in a given century — it measures how many <em>recorded</em> individuals appear in user-contributed databases. Record survival varies enormously by region and period.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              In Belgium, systematic parish registration only became widespread following the Council of Trent's mandate (1545–63), with implementation in rural Flemish parishes often lagging into the 1570s–80s. The wars of the Spanish Netherlands — the Spanish Fury (1576), the fall of Ghent (1584) — further thinned surviving registers. Belgian Van Vlaenderen families alive and reproducing in the early sixteenth century are, in many cases, simply invisible: the registers that would document them no longer exist.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              In French Flanders, the Ordinance of Villers-Cotterêts (1539) mandated civil registration earlier than the Tridentine reforms reached the southern Netherlands, and the Cassel area had good institutional record infrastructure. The apparent dominance of Volckerinckhove in the 1500 data therefore reflects, at least in part, that it is the <em>best-documented</em> cluster at that point, not necessarily the oldest or largest. Where the Belgian data appears thin before 1600, the probable explanation is record loss, not a late founding event.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 0 }}>
              A further complication applies specifically to lines touching nobility. Where a surname-bearing family connects to a documented comital line — as all the Van Vlaenderen bastard branches do — Geneanet entries multiply sharply through repeated copying of the same individuals across user-contributed trees. A figure like 551 entries attributed to Volckerinckhove before 1500 almost certainly represents a much smaller number of real historical individuals, replicated many times. The raw counts should be treated as <em>clustering signals</em>, not population estimates.
            </p>
          </div>

          {/* 1500 */}
          <h3 style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', marginTop: '2rem' }}>c. 1500</h3>
          <HeatMapFigure
            src={heatmap1500}
            alt="Geneanet heat map showing Van Vlaenderen surname distribution c. 1500, concentrated in French Flanders near Volckerinckhove"
            caption="Surname distribution c. 1500. The French Flanders cluster near Volckerinckhove/Cassel dominates. Belgian clusters are effectively absent — consistent with pre-Tridentine record scarcity rather than an absence of surname-bearing families. Source: Geneanet, accessed April 2026."
          />
          <DistributionTable
            caption="Most common municipalities, c. 1500"
            rows={[
              ['Volckerinckhove', 'Nord, France', '551'],
              ['Renescure', 'Nord, France', '34'],
              ['Aalter', 'Belgium', '11'],
              ['Bollezeele', 'Nord, France', '5'],
              ['Waarschoot', 'Belgium', '5'],
            ]}
          />

          {/* 1600 */}
          <h3 style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', marginTop: '2.5rem' }}>c. 1600</h3>
          <HeatMapFigure
            src={heatmap1600}
            alt="Geneanet heat map showing Van Vlaenderen surname distribution c. 1600, with three distinct clusters in French Flanders, Gent/Meetjesland, and Brussels/Brabant"
            caption="Surname distribution c. 1600. Three distinct clusters are now visible: French Flanders (Volckerinckhove/Cassel area), Gent/Meetjesland (centred on Sleidinge and Oostwinkel), and a smaller cluster near Brussels/Brabant (Wambeek). The emergence of the Belgian clusters reflects both genuine population growth and the onset of systematic parish registration after the 1570s–80s. Source: Geneanet, accessed April 2026."
          />
          <DistributionTable
            caption="Most common municipalities, c. 1600"
            rows={[
              ['Volckerinckhove', 'Nord, France', '539'],
              ['Sleidinge', 'Belgium', '273'],
              ['Oostwinkel', 'Belgium', '158'],
              ['Wambeek', 'Belgium', '39'],
              ['Renescure', 'Nord, France', '32'],
              ['Waarschoot', 'Belgium', '30'],
              ['Gent', 'Belgium', '22'],
              ['Evergem', 'Belgium', '22'],
            ]}
          />

          {/* 1700 */}
          <h3 style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', marginTop: '2.5rem' }}>c. 1700</h3>
          <HeatMapFigure
            src={heatmap1700}
            alt="Geneanet heat map showing Van Vlaenderen surname distribution c. 1700, with the Belgian cluster now rivalling French Flanders and a new Zeeland cluster visible"
            caption="Surname distribution c. 1700. The Belgian cluster has grown substantially and now rivals French Flanders in recorded size. A cluster in Zeeuws-Vlaanderen/coastal Zeeland is visible for the first time — geographically consistent with Lodewijc van Vlaenderen's burial at Oostburg (before 1482) and the later Zeeland attestations. Source: Geneanet, accessed April 2026."
          />
          <DistributionTable
            caption="Most common municipalities, c. 1700"
            rows={[
              ['Sleidinge', 'Belgium', '552'],
              ['Volckerinckhove', 'Nord, France', '523'],
              ['Oostwinkel', 'Belgium', '346'],
              ['Evergem', 'Belgium', '150'],
              ['Ertvelde', 'Belgium', '121'],
              ['Gent', 'Belgium', '85'],
              ['Ursel', 'Belgium', '53'],
              ['Bassevelde', 'Belgium', '48'],
            ]}
          />

          {/* Key observations */}
          <div style={{ marginTop: '2rem' }}>
            <p>Four observations follow from this data, accounting for the record-survival caveat.</p>
            <p>
              <strong>The French Flanders cluster shows persistent geographic association with a documented bastard-line settlement.</strong> The Geneanet material consistently associates early Van Vlaenderen entries with the Volckerinckhove/Cassel zone — precisely the area where Jan "sans terre" van Vlaenderen, a documented natural son of Louis de Male, was granted the castle and lordship of Drincham in 1383, and where his descendants are documented through the 1470s. The raw count of 551 entries before 1500 almost certainly reflects noble-tree duplication rather than that many distinct individuals. The significance lies not in the number but in the geography: the earliest recurring documentary association of the hereditary surname falls in the zone where a bastard comital line was demonstrably settled.
            </p>
            <p>
              <strong>The Belgian cluster is large but its apparent sixteenth-century founding is partly a record artifact.</strong> Sleidinge, Oostwinkel, and Evergem collectively hold over 500 recorded individuals by 1700. The cluster's near-invisibility in 1500 reflects the near-absence of Flemish parish records before c. 1570. The probable founding event belongs to the mid-fifteenth century — not the mid-sixteenth.
            </p>
            <p>
              <strong>A third, smaller cluster appears near Brussels by 1600.</strong> Wambeek, in Flemish Brabant, emerges with 39 individuals and is consistent with a founding event in the mid-to-late sixteenth century with a geographic connection to Brabant.
            </p>
            <p>
              <strong>A Zeeland cluster becomes visible by 1700.</strong> The 1700 heat map shows a concentration in Zeeuws-Vlaanderen/coastal Zeeland. This is geographically consistent with Lodewijc van Vlaenderen's burial at Oostburg (before 1482). However, a systematic sweep of over 3,000 individual mentions in Gysseling's onomastic index of the Vier Ambachten records (roughly 1240–1500, covering every scabinus, scoutate, and maenre record from the Sint-Baafsabdij, Sint-Pietersabdij, and related Zeeuws-Vlaanderen fonds) yielded zero Bucket 4 hits for the surname. Van Vlaenderen does not appear as a hereditary surname bearer in the region's medieval record. This rules out an indigenous Zeeuws-Vlaanderen formation and confirms the surname arrives into Bassevelde/Assenede from elsewhere — most likely the Ghent hinterland, consistent with the 1568 Franciscus attestation.
            </p>
          </div>
        </section>

        {/* ── Progenitor Candidates ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Progenitor Candidates</h2>
          <p>
            The following tables set out the documented individuals who carried the Van Vlaenderen surname before the distributional clusters are established, together with their descendants in the surname-carrying line. All documentary evidence derives from a direct reading of Olivarius Vredius (<em>Genealogia Comitum Flandriae</em>, Pars Secunda, Tabula XVI, fol. 275–288, Bruges 1642–43) [²] and the Foundation for Medieval Genealogy MedLands: Flanders, Hainaut (v5.0, January 2025). [³]
          </p>

          {/* Tier 1 */}
          <h3 style={{ color: 'var(--gold)', marginBottom: '1rem', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.82rem' }}>
            Tier 1 — Natural sons of Louis II de Male
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Territory</th>
                  <th style={thStyle}>Known descendants (surname-carrying)</th>
                  <th style={thStyle}>Attested dates</th>
                  <th style={thStyle}>Most plausible founding region</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Victor van Vlaenderen',
                    territory: 'Ursel & Wessegem, Meetjesland. Lord from 1399; reverted to crown 1431.',
                    descendants: 'Three natural sons: Lodewyc, Janne, Adam (attested 1427–1447). See Tier 2.',
                    dates: '1399–1430',
                    region: 'Progenitor line — founding role exercised through sons',
                    highlight: false,
                  },
                  {
                    name: 'Loys \'le Frison\' van Vlaenderen',
                    territory: 'Woestijne & Praet, Franc de Bruges. Granted 25 Dec 1373. Killed at Nicopolis 1396.',
                    descendants: 'Son Jan Heer van Praet; six-generation titled line to Jan van Onlede (d. 1523). See Tier 2.',
                    dates: '1373–1396',
                    region: 'Progenitor line — founding role exercised through son Jan',
                    highlight: false,
                  },
                  {
                    name: 'Jan \'sans terre\' van Vlaenderen',
                    territory: 'Drincham castle, near Cassel, French Flanders. Granted 22 Nov 1383. Killed at Nicopolis 1396.',
                    descendants: 'Son Jan Heer van Drincham; four documented generations to c. 1473. See Tier 2.',
                    dates: '1383–1396',
                    region: 'Progenitor line — founding role exercised through son Jan',
                    highlight: false,
                  },
                  {
                    name: 'Loys \'le Hase\' van Vlaenderen',
                    territory: 'No fixed lordship. Received confiscated goods of Gerard de Moor (1370). Killed at Nicopolis 1396.',
                    descendants: 'One illegitimate son: Renaud de Flandres, Lord of la Vacke (attested Feb 1397 only).',
                    dates: '1370–1396',
                    region: 'Uncertain — no documented continuation after 1397',
                    highlight: false,
                  },
                  {
                    name: 'Robert [Roeland] van Vlaenderen',
                    territory: 'Elverdinghe & Vlamertinghe; Burgrave of Ypres.',
                    descendants: 'None. De Wrée explicitly records death sans generation, 21 Jan 1434.',
                    dates: '1420–1434',
                    region: 'Eliminated — no children',
                    highlight: false,
                  },
                  {
                    name: 'Karel van Vlaenderen, Lord of Grutersale',
                    territory: 'Grutersale; buried Langemark near Ypres, d. 15 Sep 1491.',
                    descendants: 'One unnamed daughter (→ de Crane family). No sons. Tombstone anomaly: filius M\'her Robrecht — parentage unresolved.',
                    dates: '1430–1491',
                    region: 'West Flanders coastal — daughter\'s line lost the surname',
                    highlight: false,
                  },
                ].map((row) => (
                  <tr key={row.name}>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>{row.name}</td>
                    <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{row.territory}</td>
                    <td style={tdStyle}>{row.descendants}</td>
                    <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>{row.dates}</td>
                    <td style={tdStyle}>{row.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tier 2 */}
          <h3 style={{ fontSize: '0.82rem', color: 'var(--gold)', marginBottom: '1rem', marginTop: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Tier 2 — Documented descendants carrying the surname
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', background: 'rgba(255,255,255,0.015)' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Name and parentage</th>
                  <th style={thStyle}>Territory / location</th>
                  <th style={thStyle}>Known descendants</th>
                  <th style={thStyle}>Attested dates</th>
                  <th style={thStyle}>Most plausible founding region</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Adam van Vlaenderen<br /><span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>natural son of Victor; by Gertrud Lindekens</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Ghent / Meetjesland area. Transfers annuity in Ghent 1446/47. No fixed lordship.</td>
                  <td style={tdStyle}>None documented. No wife named.</td>
                  <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>1427–1447 N.S.</td>
                  <td style={{ ...tdStyle, borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}>
                    <strong>Meetjesland / Ghent — closest documented individual bridge candidate for the Belgian cluster, alongside the parallel Praet-at-Aalter possibility.</strong> Geographically closest to Sleidinge and Oostwinkel. Last attested 1447, three to four undocumented generations before Franciscus (1568). Record scarcity in the intervening period is the expected explanation for the gap, not a late founding event. See also:{' '}
                    <button onClick={() => nav('/research/victor-dossier')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>Victor Archival Dossier →</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Janne van Vlaenderen<br /><span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>natural son of Victor; by Alyssen van Boyeghem</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Unknown — no lordship or location documented.</td>
                  <td style={tdStyle}>None documented.</td>
                  <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>1427–1442 N.S.</td>
                  <td style={tdStyle}>Unknown region — cannot be excluded but provides no evidence to work with.</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Lodewijc van Vlaenderen<br /><span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>natural son of Victor; by Alyssen van Boyeghem</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Oostburg, Zeeuws-Vlaanderen. Buried in choir of Oostburg church with wife Jacqueline de Wilde (d. Apr 1482).</td>
                  <td style={tdStyle}>Joos van Vlaenderen (died young, buried Oostburg — cannot be the Joos in the 1547 Brugse Vrije probate). Daughter Margareta (→ de Baenst; → van Schouteeten — surname lost). Documented male line ends.</td>
                  <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>1427–1482</td>
                  <td style={tdStyle}><strong>Zeeuws-Vlaanderen / Zeeland.</strong> Documented male line ends at Oostburg. A systematic onomastic sweep of 3,000+ Zeeuws-Vlaanderen records (Gysseling, Vier Ambachten, c.1240–1500) yielded zero Bucket 4 hits — the surname is not indigenous to this region. An undocumented further child of Lodewijc could still anchor the Zeeland thread, but the bridge would not have been local.</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan van Vlaenderen<br /><span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>son of Loys le Frison; Heer van Praet en de Woestijne</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Praet & Woestijne, Franc de Bruges. Active 1431–1439 in Ghent Keure records.</td>
                  <td style={tdStyle}>Lodewijc Heer van Praet (d. 1488) + daughters. Six-generation titled line. Lodewijc's epitaph is at Aalter.</td>
                  <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>1431–1442</td>
                  <td style={tdStyle}><strong>Franc de Bruges / Aalter (Meetjesland) / Brabant.</strong> The Praet patrimony acquired the Vrijhof at Aalter by 1516, anchoring the senior line in the Meetjesland through to c. 1590. Lodewijc Heer van Praet's epitaph is at Aalter — which appears in the 1500 distribution data with 11 individuals. Later marriages into Gruithuyse and Bourgogne families are also consistent with a Wambeek/Brussels footprint.</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan van Vlaenderen<br /><span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>son of Jan sans terre; Heer van Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Drincham, near Cassel, French Flanders.</td>
                  <td style={tdStyle}>Jan (Gen 3), Philippe (d. unmarried), Jacques (d. Veurne 1459), Loys, Francq. Four documented generations.</td>
                  <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>c. 1400–c. 1430</td>
                  <td style={tdStyle}><strong>French Flanders — plausible contributor to the Volckerinckhove cluster.</strong> Geography and chronology are consistent. Whether the Drincham line alone accounts for the cluster's scale, or an earlier Function 3 founding event is also required, remains an open question.</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Lodewijc van Vlaenderen Heer van Praet<br /><span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.82rem' }}>grandson of Loys le Frison; epitaph at Aalter, d. 1488</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Praet, Woestijne, Bevere, Ommele.</td>
                  <td style={tdStyle}>Loys, Jan (→ Jan van Onlede d. 1523), Jacques, Josse, Loyse, Jehenne de Flandre.</td>
                  <td style={{ ...tdStyle, whiteSpace: 'nowrap' as const, color: 'var(--text-muted)' }}>c. 1440–1488</td>
                  <td style={tdStyle}><strong>Aalter (Meetjesland) and Brabant / Brussels cluster (Wambeek).</strong> His son Lodewijk IV's 1516 marriage to Jossine van Praet anchored the senior line at the Aalter Vrijhof through to c. 1590. Marriages into Gruithuyse and Bourgogne families also draw descendants toward Brabant. Son Loys was Grand Bailiff of Ghent from 1515.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Testing the Bastard-Line Hypothesis ──────────────────── */}
        <section className={styles.section}>
          <h2>Testing the Bastard-Line Hypothesis</h2>
          <p>
            The hypothesis is that the documented surname clusters each descend from one or more of the natural sons of Louis de Male who carried the Van Vlaenderen name as a hereditary identifier. Once the record-survival caveat is applied, the distributional evidence provides stronger support than a raw reading of the data suggests.
          </p>
          <p>
            The <strong>Belgian cluster</strong> (Sleidinge, Oostwinkel, Evergem, Bassevelde) is geographically consistent with descent from Victor's son Adam. Adam was last attested in Ghent in 1447. The cluster's epicentre lies immediately north of Ghent, within easy distance of Ursel and Wessegem where Victor held his lordship. The cluster's near-invisibility before 1600 is most plausibly explained by record scarcity: the registers that would document Adam's grandchildren simply do not survive. On this reading, the founding event belongs in the mid-fifteenth century, and the Belgian cluster is not appreciably younger than the French Flanders one. This hypothesis is plausible and merits continued archival investigation; it is not yet proven. The 150-year documentary gap between Adam's last attestation (1447) and the first Belgian parish records is discussed in the{' '}
            <button onClick={() => nav('/research/victor-dossier')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>Victor Archival Dossier</button>.
          </p>
          <p>
            The <strong>Brabant/Brussels cluster</strong> (Wambeek) is consistent with descent through the Praet line, whose later documented members married into Brabantine noble families. This is a probable connection but has not been verified through direct archival evidence.
          </p>
          <p>
            The <strong>French Flanders cluster</strong> (Volckerinckhove) is most plausibly explained by the documented Drincham bastard line. Jan van Vlaenderen, son of Jan "sans terre" and grandson of Louis de Male, inherited Drincham castle in the Cassel area and his descendants are documented locally through the 1470s. The significance of the Cassel/Volckerinckhove cluster lies not in the inflated Geneanet count — almost certainly a product of noble-tree duplication — but in the fact that the earliest recurring documentary association of the hereditary surname in this zone coincides precisely with the settlement of a documented bastard comital line. That geographic-documentary coincidence is the core of the French Flanders argument. Whether a second, independent Function 3 founding event also contributed remains a secondary hypothesis requiring direct archival verification.
          </p>
          <p>
            The <strong>Zeeland cluster</strong>, visible in the 1700 heat map, is geographically consistent with descent through Lodewijc van Vlaenderen's line at Oostburg. However, a systematic onomastic sweep of Gysseling's Vier Ambachten index — covering 3,000+ individual mentions in the Zeeuws-Vlaanderen documentary record from roughly 1240 to 1500 — yielded no Bucket 4 hits. The surname does not appear as a hereditary identifier anywhere in that region's medieval record. This confirms the surname is not an indigenous Zeeuws-Vlaanderen formation; it arrives from elsewhere. The Zeeland thread therefore requires not only an undocumented descendant of Lodewijc but an explanation for how that descendant crossed into a region where the name had no prior documentary presence.
          </p>
        </section>

        {/* ── Testing Pure Toponymy ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Testing the Pure Toponymy Hypothesis</h2>
          <p>
            The hypothesis that Van Vlaenderen is simply a geographic label — "from Flanders," attaching to migrants and hardening into a surname — fails to account for the distributional data on three grounds, none of which are affected by the record-survival caveat.
          </p>
          <p>
            <strong>Geography is internally contradictory.</strong> The Meetjesland and French Flanders clusters are both <em>inside</em> the historic County of Flanders. Sleidinge, Oostwinkel, Waarschoot, and Volckerinckhove are not places where a family would be identified as "from Flanders" by their neighbours — they are Flanders. A purely toponymic label attaches to people who have moved away from the place the name describes. The heaviest concentration of Van Vlaenderen surname-bearers is precisely where the label is geographically meaningless. This argument is independent of record survival: it applies equally whether the data shows 11 Belgian individuals in 1500 or 500.
          </p>
          <p>
            <strong>The concentration is wrong for a generic label.</strong> Purely toponymic surnames typically scatter and thin as geographic memory fades. What the data shows instead is extreme and durable concentration — 551 individuals in one village in 1500, stable for two centuries; explosive growth in a bounded region in East Flanders. These are the patterns of founded lines, not diffuse geographic labels.
          </p>
          <p>
            <strong>The Zeeland cluster complicates it further.</strong> If Van Vlaenderen simply meant "from Flanders" as a migration label, it would be expected in Zeeland — where Flemish migrants genuinely would have been identified by their origin. Yet the Zeeland cluster appears late (visible by 1700) and small, rather than being the earliest and most natural concentration. This is consistent with the name originating as something other than a migration label.
          </p>
          <p>
            <strong>The Eeklo Vlaminc family is the methodological control case.</strong> A purely toponymic Flanders-related surname does emerge in the Meetjesland documentary record — but it is the Vlaminc / De Vlaming family of Eeklo (attested 1335–1585), not a Van Vlaenderen line. <em>De Vlaming</em> is the Middle Dutch ethnic designator meaning "the Fleming," applied where Fleming-ness is socially salient — which inside Flanders is the comparatively rare situation of a burgher whose family came to a Flemish town from elsewhere. <em>Van Vlaenderen</em>, by contrast, is a <em>herkomstnaam</em> applied at distance to someone who has moved away from the county; it is semantically inert inside Flanders and would not naturally adhere to a resident family. The Eeklo Vlamincs followed the expected pattern. The Meetjesland Van Vlaenderens did not — strengthening the case that the East Flanders Van Vlaenderen cluster cannot be explained by either a generic toponymic mechanism or by the parallel ethnic-designator mechanism that the same geography demonstrably did support.
          </p>
          <p>
            The purely toponymic hypothesis is not falsified for individual outlier bearers of the name — a Flemish emigrant to England, Germany, or France acquiring the label in a non-Flemish community is entirely plausible. But it cannot explain the clustered, geographically concentrated, internally-Flemish distribution that the data shows.
          </p>
        </section>

        {/* ── Volckerinckhove Question ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Volckerinckhove Question</h2>
          <p>
            Earlier versions of this analysis treated the French Flanders cluster as an anomaly requiring a separate explanation, because the scale of 551 Geneanet entries before 1500 seemed too large to be accounted for by a single bastard line. That framing was wrong in its premises. The raw count almost certainly represents a small number of real historical individuals — the documented Drincham line and their descendants — replicated many times across user-contributed noble genealogical trees. Once the count is set aside, the argument simplifies considerably.
          </p>
          <p>
            The core observation is this: the earliest recurring documentary association of the hereditary Van Vlaenderen surname in French Flanders falls in the Cassel/Drincham zone — precisely where a documented natural son of Louis de Male, Jan "sans terre" van Vlaenderen, was granted land by charter in 1383 and where his descendants are attested through the 1470s. That is a documentary-geographic coincidence that does not require an inflated count to be meaningful. The bastard-line hypothesis provides the most parsimonious explanation: Jan's documented descendants seeded the French Flanders surname population, which the Geneanet data subsequently echoes — multiply and noisily — across three centuries.
          </p>
          <p>
            A secondary hypothesis — that a Function 3 origin (comital court staff hardening into a hereditary surname at Cassel) also contributed independently of the Drincham line — remains possible. The key archival test is date: any Van Vlaenderen in Cassel administrative records <em>before</em> 1383 would establish an independent pre-bastard origin; anything after 1383 is more likely a branch of or continuation from the documented line.
          </p>

          {/* Collaborator Call */}
          <div className={researchStyles.methodologyBox} style={{ marginTop: '1.5rem' }}>
            <span className={researchStyles.methodologyTitle} style={{ fontSize: '0.9rem' }}>Call for Collaborators — Volckerinckhove / Cassel</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              This project is seeking collaborators with access to the Cassel castellany administrative record series. The specific research question is whether any individual named Van Vlaenderen (or de Flandre / de Flandres) appears in those records before 1383 — the date of Jan "sans terre"'s documented land grant.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              The relevant archive is the <strong>Archives Départementales du Nord</strong> (Lille), which holds the Cassel castellany records and related comital administrative series. A pre-1383 identification would establish an independent Function 3 origin for the French Flanders cluster; a post-1383 identification would more likely represent a continuation of the bastard line.
            </p>
            <button
              onClick={() => nav('/contact')}
              style={{
                background: 'rgba(232,184,48,0.1)',
                border: '1px solid rgba(232,184,48,0.4)',
                color: 'var(--gold)',
                padding: '0.6rem 1.25rem',
                cursor: 'pointer',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-ui)',
                letterSpacing: '0.05em',
              }}
            >
              Get in Touch →
            </button>
          </div>
        </section>

        {/* ── Conclusions ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Conclusions and Open Questions</h2>
          <p>
            The surname Van Vlaenderen cannot be adequately explained by a single mechanism. The distributional and documentary evidence together support a model of multiple documented bastard-line foundations: Victor's branch in the Meetjesland, Jan sans terre's Drincham branch in French Flanders, and the Praet line's later Brabantine trajectory. Pure toponymy is inadequate as a complete explanation and is effectively falsified as a universal account of the name's distribution. The key insight is that the Geneanet distribution evidence is most useful as a geographic clustering signal — pointing to where surname-bearing families persisted — rather than as a demographic count.
          </p>
          <p>
            The strongest specific conclusions the evidence currently supports: the Belgian cluster is most plausibly founded through Victor's son Adam van Vlaenderen, with the documentary gap explained by record loss rather than a late founding event. The Brabant/Brussels cluster is most plausibly connected to the later Praet line. The French Flanders cluster is most plausibly the Drincham bastard line persisting in its founding geography, with the geographic-documentary coincidence — not the count — as the substantive argument. The Zeeland cluster, visible by 1700, is complicated by the onomastic silence in the Zeeuws-Vlaanderen medieval record: the surname was not indigenous to that region, so any Zeeland thread requires a family that carried the name in from elsewhere — most likely from the Ghent hinterland rather than from Lodewijc's Oostburg line directly.
          </p>
          <p>
            Three specific research priorities follow. First, the archival gap between Adam's last attestation (1447) and Franciscus in Ghent (1568): the Staten van Goed series at RAG (Ambacht Assenede I &amp; II) and the Landboek/Leenhof records are the primary remaining bridge candidates — Gysseling did not index these, and they have not yet been searched. Second, the Cassel castellany records at the Archives Départementales du Nord for any Van Vlaenderen before 1383 — which would establish whether an independent Function 3 origin preceded the bastard-line settlement at Drincham. Third, Y-DNA comparison between the Belgian and Dutch Van Vlaenderen lines, which would provide a direct test of whether any Zeeland thread shares a common male-line ancestor with the Meetjesland families.
          </p>
        </section>

        {/* ── Notes ─────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Notes and Sources</h2>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            <p>
              [1] Geneanet surname frequency data for <em>Van Vlaenderen</em>, accessed April 2026.{' '}
              <a href="https://en.geneanet.org/surnames/van%20VLAENDEREN" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                en.geneanet.org/surnames/van%20VLAENDEREN
              </a>. Figures represent individuals in user-contributed genealogical records attributed to the relevant municipality and century. Record coverage varies significantly by region and period; see the methodological caveat above.
            </p>
            <p>
              [2] Olivarius Vredius (Olivier de Wrée), <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>, Bruges: J.B. &amp; Lucas Kerchovios, 1642–43. Tabula XVI, fol. 275–288 (PDF pp. 285–298). Direct reading conducted April 2026. The primary charter data for Victor's three sons derives from the <em>Acta Curiae partitionum Gandensium</em>, as transcribed by Vredius from the Ghent partition court registers.
            </p>
            <p>
              [3] Foundation for Medieval Genealogy, <em>MedLands: Flanders, Hainaut</em>, v5.0, updated January 2025.{' '}
              <a href="https://fmg.ac/Projects/MedLands/FLANDERS.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                fmg.ac/Projects/MedLands/FLANDERS.htm
              </a>
            </p>
          </div>
        </section>

        {/* ── Back nav ──────────────────────────────────────────────── */}
        <div style={{ borderTop: '1px solid rgba(232,184,48,0.15)', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
          <button onClick={() => nav('/name')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            ← The Name
          </button>
          <button onClick={() => nav('/research/bibliography')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            Full Bibliography →
          </button>
        </div>

      </div>
    </div>
  );
}
