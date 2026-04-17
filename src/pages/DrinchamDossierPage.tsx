import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import knightPhilip from '../assets/images/heraldic/cronike-van-vlaenderen-philip-of-alsace-knight.jpg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const tdStyle = {
  padding: '9px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  verticalAlign: 'top' as const,
  lineHeight: 1.55,
  fontSize: '0.9rem',
};
const thStyle = {
  padding: '9px 12px',
  color: 'var(--gold)',
  textAlign: 'left' as const,
  fontWeight: 600,
  fontSize: '0.8rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  borderBottom: '1px solid rgba(232,184,48,0.3)',
};

export default function DrinchamDossierPage() {
  const navigate = useNavigate();
  const nav = (path: string) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Jan sans terre van Vlaenderen — Archival Dossier | vanvlaenderen.org</title>
        <meta name="description" content="Primary source dossier for Jan 'sans terre' van Vlaenderen and the Drincham line: the 1383 land grant, four documented generations in the Cassel area, the Veurne epitaph of Jacques de Drincham, and the geographic-documentary case for French Flanders surname origin." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/drincham-dossier" />
        <meta property="og:title" content="Jan sans terre van Vlaenderen — Archival Dossier" />
        <meta property="og:description" content="The 1383 Drincham land grant, four documented generations in French Flanders, and the geographic-documentary case for the Volckerinckhove cluster." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/drincham-dossier" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Jan sans terre van Vlaenderen \\u2014 Archival Dossier","description":"Primary source dossier for Jan sans terre van Vlaenderen and the Drincham line.","url":"https://vanvlaenderen.org/research/drincham-dossier","inLanguage":"en","dateModified":"2026-04-16","author":{"@type":"Person","name":"Michael Van Flandern"},"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"}}`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Drincham Dossier","item":"https://vanvlaenderen.org/research/drincham-dossier"}]}`}} />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div className={styles.heroImg}
          style={{ backgroundImage: `url(${knightPhilip})`, backgroundPosition: 'top center' }}>
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Archival Dossier</div>
          <h1>Jan "sans terre" van Vlaenderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Natural son of Louis II de Male, Count of Flanders; lord of Drincham near Cassel, French Flanders; progenitor of the most plausible documented founding line for the French Flanders Van Vlaenderen surname cluster. Updated April 2026 from direct reading of Vredius.
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Archival Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Methodology ──────────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Method</span>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
            This dossier follows the same four-level evidentiary framework as the Victor van Vlaenderen dossier. <strong>Directly attested</strong> statements rest on quoted charter language or explicit documentary summaries in a published authority. <strong>Strongly corroborated</strong> statements are supported by concordant published sources. <strong>Probable</strong> statements are source-based but require fuller inspection. <strong>Hypotheses</strong> are inferences proposed for further testing.
          </p>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Directly Attested</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Quoted charter language or explicit documentary summary.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Strongly Corroborated</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Supported by concordant published historical authorities.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Probable</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Source-based but requires fuller inspection of underlying edition.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Hypothesis</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Genealogical inference proposed for further testing.</span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid rgba(232, 184, 48, 0.1)', paddingTop: '1rem' }}>
            <strong>Primary source:</strong> Olivarius Vredius (Olivier de Wrée), <em>Genealogia Comitum Flandriae</em>, Pars Secunda, Tabula XVI, foll. 281–283 (PDF pp. 291–293), Bruges: J.B. &amp; Lucas Kerchovios, 1642–43. Direct reading conducted April 2026. Collateral attestation from FMG MedLands: Flanders, Hainaut (v5.0, January 2025) and de l'Espinoy, <em>Recherche des antiquitez et noblesse de Flandres</em> (Douai, 1631).
          </p>
        </section>

        {/* ── Identity and Parentage ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Jan van Vlaenderen, surnamed <em>sans terre</em> ("without land"), was a natural son of Louis II de Male, Count of Flanders (1330–1384). De l'Espinoy identifies him as the fifth natural son of Louis de Male. His mother was <strong>Ive de Luu</strong>, recorded in Vredius.
          </p>
          <p>
            The surname <em>van Vlaenderen</em> — used by Jan and his descendants — is confirmed as a shared marker of comital bastard identity in the Gaillard text quoted by Vredius, which names all three brothers killed at Nicopolis explicitly under the Van Vlaenderen name:
          </p>
          <div style={{
            margin: '1.25rem 0',
            padding: '1rem 1.5rem',
            background: 'rgba(232,184,48,0.04)',
            borderLeft: '3px solid var(--gold)',
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.9rem',
            lineHeight: 1.75,
            color: 'var(--text-primary)',
          }}>
            "In the battle of Nicopolis, where Duke Jan of Burgundy was taken prisoner, were slain: My Lord Loys van Vlaenderen, called le Hase; Lord Lodewyck van Vlaenderen, called le Friso; and my Lord Jan van Vlaenderen, called sans terre — all bastards of the noble Count Lodewijc van Male, all brave knights; and this happened in the year of Our Lord 1396."
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'normal' }}>
              Gaillard, as quoted in Vredius, Tabula XVI. Middle Dutch original; translation by project.
            </div>
          </div>
          <p>
            Jan is also documented in Vredius's French-language summary from Grimarezius: <em>"IEAN, b. de Flandres, dict sans terre, Chevalier, espousa GVILEMETTE de Nevele, fille de Messire Guillaume, Chevalier, & de Dame Guilemette de Halewijn, heritiere de Lichtervelde. Il mourut à la bataille devant la ville de Nicopoli..."</em> — confirming his wife <strong>Guillemette de Nevele</strong> (daughter of Willem de Nevele, Knight, and Guillemette de Halewijn, heiress of Lichtervelde) and his death at Nicopolis.
          </p>
        </section>

        {/* ── The 1383 Land Grant ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The 1383 Land Grant <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The founding event for the Drincham line is documented in Vredius from de l'Espinoy. On <strong>22 November 1383</strong>, Louis de Male granted Jan the castle and lordship of Drincham, near Cassel in French Flanders, confiscated from Jean de Scheurvelde. The verbatim French from de l'Espinoy as quoted in Vredius:
          </p>
          <div style={{
            margin: '1.25rem 0',
            padding: '1rem 1.5rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '4px',
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.875rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
          }}>
            "Messire IEAN de Flandres, fut le cinquiesme fils bastard dudict Comte de Flandres,
            &amp; fut surnommé sans terre, auquel ledit Conte donna le chastel &amp; maison de
            Drincam, avec le fief &amp; avoir principal, rentes, revenues, Seigneuries, terres, prés,
            bois, caues, pastures, pescheries &amp;c. &amp; ce pour le pourveoir, affin qu'il puisse tant
            mieux entretenir son estat..."
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'normal' }}>
              De l'Espinoy as quoted in Vredius, Tabula XVI, fol. 281. Translation: "Sir Jean de Flandres was the fifth bastard son of the said Count of Flanders, and was surnamed sans terre, to whom the said Count gave the castle and house of Drincam, with the principal fief and assets, rents, revenues, lordships, lands, meadows, woods, waters, pastures, fisheries &amp;c., in order to provide for him, so that he might better maintain his estate..."
            </div>
          </div>
          <p>
            The grant date of 22 November 1383 is significant for the project's research agenda: any Van Vlaenderen individual appearing in Cassel-area administrative records <em>before</em> this date would establish a pre-bastard Function 3 origin for the French Flanders cluster; anything after 1383 is more plausibly a branch or continuation of this documented line.
          </p>
        </section>

        {/* ── The Four Documented Generations ────────────────────── */}
        <section className={styles.section}>
          <h2>The Four Documented Generations <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The Drincham line is the most extensively documented collateral bastard branch in Tabula XVI after the Praet line. Vredius documents four generations, spanning from Jan's death at Nicopolis (1396) through Jacques de Drincham's death at Veurne (1459) and his wife's death (1473), with further children named at Generation 3 whose lines are not fully traced.
          </p>

          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Generation</th>
                  <th style={thStyle}>Individual</th>
                  <th style={thStyle}>Spouse</th>
                  <th style={thStyle}>Key dates / notes</th>
                  <th style={thStyle}>Evidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 1</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan van Vlaenderen, "sans terre"<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>Lord of Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Guillemette de Nevele<br /><span style={{ fontSize: '0.82rem' }}>dau. of Willem de Nevele &amp; Guillemette de Halewijn</span></td>
                  <td style={tdStyle}>Land grant 22 Nov 1383. Killed at Nicopolis 28 Sep 1396. Mother: Ive de Luu.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr style={{ background: 'rgba(255,255,255,0.015)' }}>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 2</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan van Vlaenderen<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>Lord of Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Isabella de Ghistelles<br /><span style={{ fontSize: '0.82rem' }}>Dame de Vissaert</span></td>
                  <td style={tdStyle}>Son of Gen 1. No dates given in source.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 3</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan van Vlaenderen<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>Lord of Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Isabella de Vernieulles</td>
                  <td style={tdStyle}>Two sons (Philippe d. unmarried; Jan continued line) and three daughters. Gen 4 descends from second son Jan.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr style={{ background: 'rgba(255,255,255,0.015)' }}>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 3</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jacques de Flandres<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>dict de Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Guillemette de Bambeke<br /><span style={{ fontSize: '0.82rem' }}>d. 19 April 1473</span></td>
                  <td style={tdStyle}>Chamberlain to Philip the Good, Duke of Burgundy. Bailiff of Veurne/Furnes. Died 10 April 1459. Epitaph at Veurne (see below). Brother of the third-generation Jan above.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 3</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Loys de Flandres<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>dict de Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Unknown</td>
                  <td style={tdStyle}>Named by Vredius as a further son of Gen 2. Line not traced beyond this generation in source.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr style={{ background: 'rgba(255,255,255,0.015)' }}>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 3</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Francq de Flandres<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>dict de Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Unknown</td>
                  <td style={tdStyle}>Named by Vredius as a further son of Gen 2. Line not traced beyond this generation in source.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 4</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan de Flandres<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>legitimated at Arras</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Unknown</td>
                  <td style={tdStyle}>Son of Gen 3 Jan × Isabella de Vernieulles. Received a letter of legitimation from the Duke of Burgundy at Arras. Last documented member of the Drincham line in de Wrée. No further descendants recorded. Last attestation c. 1473 (inferred from mother's death date).</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── The Veurne Epitaph ───────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Veurne Epitaph of Jacques de Drincham <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The most concrete physical evidence for the Drincham line is the epitaph of Jacques de Flandres dict de Drincham at the church in Veurne (Furnes), West Flanders, preserved in Gaillard and quoted in Vredius. The original French:
          </p>
          <div style={{
            margin: '1.25rem 0',
            padding: '1rem 1.5rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '4px',
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.875rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
          }}>
            "Cy gift Mesire IAQUES de Drincham, Chevalier, Conseillier &amp; Chambellain
            de Monseigneur le Duc de Bourgongne, Conte de Flandre, &amp; son Bailly de Furnes
            à son trespas, lequel mourut l'an de nostre Seigneur 1459. le x. d'Avril..."
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'normal' }}>
              Translation: "Here lies Sir Jacques de Drincham, Knight, Counsellor and Chamberlain of My Lord the Duke of Burgundy, Count of Flanders, and his Bailiff of Furnes at his death, who died in the year of Our Lord 1459, on the 10th of April..."
            </div>
          </div>
          <p>
            The epitaph confirms: (1) Jacques held the title <em>Chevalier</em> (Knight); (2) he served Philip the Good, Duke of Burgundy, as both Counsellor and Chamberlain; (3) he held the office of Bailiff of Veurne at his death; (4) death date 10 April 1459. His wife Guillemette de Bambeke's death is recorded as 19 April 1473, presumably from the same or an adjacent monument.
          </p>
          <p>
            Jacques's heraldic arms as recorded — <em>de Ghistelles with a canton of Flanders and Luxembourg quartering</em> — are directly derived from his mother Isabella de Ghistelles (Gen 2 wife) and confirm the dynastic lineage visually. The Flanders canton explicitly asserts comital bastard descent.
          </p>
        </section>

        {/* ── Geographic Significance ─────────────────────────────── */}
        <section className={styles.section}>
          <h2>Geographic Significance and the French Flanders Hypothesis <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The documented Drincham line spans roughly 1383 (land grant) to c. 1473 (death of Jacques's wife Guillemette de Bambeke). For approximately ninety years, multiple generations of Van Vlaenderen surname-bearers were physically present in the Cassel area of French Flanders — the precise geographic zone where Geneanet's distributional data shows the heaviest pre-1600 concentration of the surname.
          </p>
          <p>
            The hypothesis — argued in full in the <button onClick={() => nav('/name/surname-origins')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>Four Functions, Three Clusters analysis</button> — is that this geographic-documentary coincidence is the explanation for the French Flanders cluster. The argument does not depend on the Geneanet count being accurate (it almost certainly reflects noble-tree duplication). It depends on the observation that the earliest securely documented hereditary Van Vlaenderen surname-bearers in the Cassel zone are precisely the documented bastard comital line, making them the most parsimonious founding explanation.
          </p>
          <p>
            The Drincham line's documented reach is also worth noting. Jacques de Drincham operated as Bailiff of Veurne and Chamberlain to Philip the Good — the kind of administrative reach across French Flanders and the Flemish coast that would explain how a surname attached to one castle near Cassel could spread across the broader Volckerinckhove/Renescure/Bollezeele zone visible in the later data. It should be noted that Veurne, while on the Flemish coast, is firmly in West Flanders — geographically distinct from the Zeeuws-Vlaanderen/Zeeland thread associated with Victor's son Lodewijc at Oostburg. The Drincham line's coastal footprint is a French Flanders and West Flemish phenomenon; the Zeeland anchor, to the extent one exists, belongs to the Victor line.
          </p>

          {/* Open question box */}
          <div className={researchStyles.methodologyBox} style={{ marginTop: '1.5rem' }}>
            <span className={researchStyles.methodologyTitle} style={{ fontSize: '0.9rem' }}>Open Research Question — Generation 4 Gap</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              The Drincham line as documented by Vredius ends with Jan de Flandres (Gen 4), legitimated at Arras, with no further descendants recorded. Vredius was working from early seventeenth-century sources and may simply not have had access to later generations. The gap between Gen 4 (c. 1473) and the Geneanet-visible Volckerinckhove cluster does not invalidate the founding hypothesis, but it does mean the documentary chain is not continuous.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 0 }}>
              The most productive archival test remains the <strong>Archives Départementales du Nord</strong> (Lille), which holds the Cassel castellany records. Any Van Vlaenderen individual in those records after 1383 — particularly after c. 1473 — would extend the documented line and narrow the gap to the modern Volckerinckhove population.
            </p>
          </div>
        </section>

        {/* ── Relationship to Other Bastard Lines ─────────────────── */}
        <section className={styles.section}>
          <h2>Relationship to the Other Bastard Lines</h2>
          <p>
            Jan sans terre, Loys le Frison (Praet line), and Loys le Hase were all killed together at Nicopolis on 28 September 1396. The Gaillard text names all three in a single passage under the Van Vlaenderen surname, confirming the name was used by multiple natural sons simultaneously as a shared marker of comital bastard identity — not unique to any one branch.
          </p>
          <p>
            The Drincham line is geographically and genealogically distinct from the Victor line (Meetjesland/Belgian cluster) and the Praet line (Franc de Bruges/Brabant cluster). The three lines represent parallel surname-carrying foundations in different regions of Flanders, each anchored to a specific lordship granted by Louis de Male in the 1373–1399 period.
          </p>
          <p>
            For the full multi-line analysis, see the <button onClick={() => nav('/name/surname-origins')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>Four Functions, Three Clusters</button> article, and for the Praet line's separate documentation, see the <button onClick={() => nav('/research/praet-dossier')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>Praet Archival Dossier</button>.
          </p>
        </section>

        {/* ── Notes ─────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Notes and Sources</h2>
          <div className={researchStyles.referenceList}>
            <div className={researchStyles.refItem}>
              <span className={researchStyles.refNumber}>1.</span>
              Vredius, Olivarius (Olivier de Wrée). <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>. Bruges: J.B. &amp; Lucas Kerchovios, 1642–43. Tabula XVI, foll. 281–283 (PDF pp. 291–293). Direct reading conducted April 2026. Principal source for all four generations and the 1383 land grant text.
            </div>
            <div className={researchStyles.refItem}>
              <span className={researchStyles.refNumber}>2.</span>
              De l'Espinoy, Philippe. <em>Recherche des antiquitez et noblesse de Flandres</em>. Douai, 1631. Cited in Vredius as the source for the identification of Jan as the fifth bastard son and for the land grant details. Not accessed directly.
            </div>
            <div className={researchStyles.refItem}>
              <span className={researchStyles.refNumber}>3.</span>
              Foundation for Medieval Genealogy. <em>MedLands: Flanders, Hainaut</em>, v5.0, updated January 2025. <a href="https://fmg.ac/Projects/MedLands/FLANDERS.htm" style={{ color: 'var(--gold)' }} target="_blank" rel="noopener noreferrer">fmg.ac/Projects/MedLands/FLANDERS.htm</a>. Collateral verification of Jan sans terre entry.
            </div>
            <div className={researchStyles.refItem}>
              <span className={researchStyles.refNumber}>4.</span>
              Gaillard (cited in Vredius). Middle Dutch text naming Loys le Hase, Loys le Frison, and Jan sans terre as Van Vlaenderen at Nicopolis 1396. Tabula XVI. Direct quotation transcribed April 2026.
            </div>
            <div className={researchStyles.refItem}>
              <span className={researchStyles.refNumber}>5.</span>
              Epitaph of Jacques de Drincham, Veurne church, as preserved in Gaillard and quoted in Vredius, Tabula XVI. Confirms death date 10 April 1459 and offices held.
            </div>
          </div>
        </section>

        {/* ── Back nav ──────────────────────────────────────────────── */}
        <div style={{ borderTop: '1px solid rgba(232,184,48,0.15)', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
          <button onClick={() => nav('/research')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            ← Research
          </button>
          <button onClick={() => nav('/name/surname-origins')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            Four Functions, Three Clusters →
          </button>
          <button onClick={() => nav('/research/praet-dossier')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            Praet Archival Dossier →
          </button>
          <button onClick={() => nav('/research/victor-dossier')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            Victor Archival Dossier →
          </button>
        </div>

      </div>
    </div>
  );
}
