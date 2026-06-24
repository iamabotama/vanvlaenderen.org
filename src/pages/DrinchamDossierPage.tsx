import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import knightPhilip from '../assets/images/heraldic/cronike-van-vlaenderen-philip-of-alsace-knight.jpg';
import { JanDrinchamDiagram } from '../components/Diagrams';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Cite } from '../components/Footnote';

// Single source for this page's footnotes. Each note carries a concise `short`
// form (shown in the inline hover/tap popover) and the `full` citation (rendered
// in the Notes and Sources list at the foot of the page). Editing a note in
// one place keeps the popover and the bottom note in sync. `CITES` is derived
// from the array so the inline <Cite> markers need no separate map.
const notes = [
  {
    n: 1,
    short: 'Vredius, Olivarius (Olivier de Wrée). Genealogia Comitum Flandriae, Pars Secunda. Bruges: J.B. & Lucas Kerchovios, 1642–43. Tabula XVI, foll. 281–283 (PDF pp. 291–293).',
    full: (
      <>
        Vredius, Olivarius (Olivier de Wrée). <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>. Bruges: J.B. &amp; Lucas Kerchovios, 1642–43. Tabula XVI, foll. 281–283 (PDF pp. 291–293). Direct reading conducted April 2026. Principal source for all four generations and the 1383 land grant text.
      </>
    ),
  },
  {
    n: 2,
    short: "De l'Espinoy, Philippe. Recherche des antiquitez et noblesse de Flandres. Douai, 1631.",
    full: (
      <>
        De l'Espinoy, Philippe. <em>Recherche des antiquitez et noblesse de Flandres</em>. Douai, 1631. Cited in Vredius as the source for the identification of Jan as the fifth bastard son and for the land grant details. Not accessed directly.
      </>
    ),
  },
  {
    n: 3,
    short: 'Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut, v5.0, updated January 2025.',
    full: (
      <>
        Foundation for Medieval Genealogy. <em>MedLands: Flanders, Hainaut</em>, v5.0, updated January 2025. <a href="https://fmg.ac/Projects/MedLands/FLANDERS.htm" style={{ color: 'var(--gold)' }} target="_blank" rel="noopener noreferrer">fmg.ac/Projects/MedLands/FLANDERS.htm</a>. Tertiary compilation consulted as a pointer to primary sources; not used as a fact-level authority.
      </>
    ),
  },
  {
    n: 4,
    short: 'Gaillard (cited in Vredius). Middle Dutch text naming Loys le Hase, Loys le Frison, and Jan sans terre as Van Vlaenderen at Nicopolis 1396. Tabula XVI.',
    full: (
      <>
        Gaillard (cited in Vredius). Middle Dutch text naming Loys le Hase, Loys le Frison, and Jan sans terre as Van Vlaenderen at Nicopolis 1396. Tabula XVI. Direct quotation transcribed April 2026.
      </>
    ),
  },
  {
    n: 5,
    short: 'Epitaph of Jacques de Drincham, Veurne church, as preserved in Gaillard and quoted in Vredius, Tabula XVI.',
    full: (
      <>
        Epitaph of Jacques de Drincham, Veurne church, as preserved in Gaillard and quoted in Vredius, Tabula XVI. Confirms death date 10 April 1459 and offices held.
      </>
    ),
  },
  {
    n: 6,
    short: "Donche. 'De Familie Van Drincham, gezegd van Vlaanderen.' Vlaamse Stam 42/6 (2006), pp. 548–580.",
    full: (
      <>
        Donche. 'De Familie Van Drincham, gezegd van Vlaanderen.' <em>Vlaamse Stam</em> 42/6 (2006), pp. 548–580. Records-based six-generation reconstruction of the line. Source for the 1393 Broekburg relief waiver (p. 556, citing ADN Lille, Chambres des Comptes, B 421), the 1466 Houtem tomb verbatim (p. 567), the fifth- and sixth-generation members Simon and Margareta (pp. 574–578), and the 1551 Praet purchase attempt (pp. 569–570).
      </>
    ),
  },
  {
    n: 7,
    short: 'Buylaert, Frederik. Repertorium van de Vlaamse adel (ca. 1350 – ca. 1500).',
    full: (
      <>
        Buylaert, Frederik. <em>Repertorium van de Vlaamse adel (ca. 1350 – ca. 1500)</em>. Pages 753 (the line's founder as a bastard of Louis de Male) and 756 (the 1503 attestation of 'joncvrouwe Margriete van Vlaendren gheseit van Drincham').
      </>
    ),
  },
];

const CITES: Record<number, string> = {};
notes.forEach((nt) => {
  CITES[nt.n] = nt.short;
});

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Jan sans terre van Vlaenderen \\u2014 Archival Dossier","description":"Primary source dossier for Jan sans terre van Vlaenderen and the Drincham line.","url":"https://vanvlaenderen.org/research/drincham-dossier","inLanguage":"en","dateModified":"2026-06-12","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
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
            Natural son of Louis II de Male, Count of Flanders; lord of Drincham near Cassel, French Flanders; progenitor of the most plausible documented founding line for the French Flanders Van Vlaenderen surname cluster. Updated April 2026 from direct reading of Vredius; extended June 2026 from Donche's records-based study of the line.
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Archival Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated June 2026</div>
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
            <strong>Primary source:</strong> Olivarius Vredius (Olivier de Wrée), <em>Genealogia Comitum Flandriae</em>, Pars Secunda, Tabula XVI, foll. 281–283 (PDF pp. 291–293), Bruges: J.B. &amp; Lucas Kerchovios, 1642–43.<Cite n={1} text={CITES[1]} /> Direct reading conducted April 2026. Collateral attestation from de l'Espinoy, <em>Recherche des antiquitez et noblesse de Flandres</em> (Douai, 1631), Livre 2, Chapitre XXXI.<Cite n={2} text={CITES[2]} />
          </p>
        </section>

        {/* ── Identity and Parentage ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Jan van Vlaenderen, surnamed <em>sans terre</em> ("without land"), was a natural son of Louis II de Male, Count of Flanders (1330–1384). De l'Espinoy identifies him as the fifth natural son of Louis de Male.<Cite n={2} text={CITES[2]} repeat /> His mother is not securely identified: the secondary literature offers Petronella de la Val,<Cite n={6} text={CITES[6]} loc="citing De Herckenrode and Van Hille" repeat /> but no source examined by this project names her directly; the question remains open.
          </p>
          <p>
            The surname <em>van Vlaenderen</em> — used by Jan and his descendants — is confirmed as a shared marker of comital bastard identity in the Gaillard text quoted by Vredius,<Cite n={4} text={CITES[4]} /> which names all three brothers killed at Nicopolis explicitly under the Van Vlaenderen name:
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

        {/* ── Interactive Diagram ─────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <JanDrinchamDiagram />
          <div className="sr-only">
            <h3>Drincham line lineage &mdash; text summary</h3>
            <p>This diagram shows five generations of the Drincham line descending from Louis II de Male, Count of Flanders (1330&ndash;1384). Generation 2: Jan sans terre van Vlaenderen (died 25 September 1396 at Nicopolis), natural son of Louis de Male (his mother is not securely identified); granted the castle and lordship of Drincham near Cassel on 22 November 1383; married Guillemette de Nevele. Generation 3: Jan van Vlaenderen, Lord of Drincham, married Isabella de Ghistelles Dame de Vissaert. Generation 4: four documented sons &mdash; Jan (Lord of Drincham, married Isabella de Vernieulles), Jacques de Drincham (died 10 April 1459, Bailiff of Veurne, his church epitaph preserved in Gaillard via Vredius is the line's most concrete physical evidence), Loys de Drincham, and Francq de Drincham. Generation 5: Jan III's documented children &mdash; Philippe de Flandres (died unmarried, line terminates), Jan de Flandres (legitimated at Arras, last documented member of the Drincham line in Vredius), and three unnamed daughters. After circa 1473 the Drincham line is no longer documented in Vredius. For the 15th-to-16th-century evidentiary gap and the French Flanders cluster hypothesis, see the Gap Dossier.</p>
          </div>
        </div>

        {/* ── The 1383 Land Grant ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The 1383 Land Grant <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The founding event for the Drincham line is documented in Vredius from de l'Espinoy.<Cite n={1} text={CITES[1]} repeat /><Cite n={2} text={CITES[2]} repeat /> On <strong>22 November 1383</strong>, Louis de Male granted Jan the castle and lordship of Drincham, near Cassel in French Flanders, confiscated from Jean de Scheurvelde. The verbatim French from de l'Espinoy as quoted in Vredius:
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
                  <td style={tdStyle}>Land grant 22 Nov 1383. Killed at Nicopolis 25 Sep 1396. Mother: not securely identified.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></td>
                </tr>
                <tr style={{ background: 'rgba(255,255,255,0.015)' }}>
                  <td style={{ ...tdStyle, color: 'var(--gold)', fontWeight: 600 }}>Gen 2</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>Jan van Vlaenderen<br /><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 400 }}>Lord of Drincham</span></td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>Isabella de Ghistelles<br /><span style={{ fontSize: '0.82rem' }}>Dame de Vissaert</span></td>
                  <td style={tdStyle}>Heir of Gen 1 per the Vredius–Donche transmission. No dates given in source. The founding filiation (Jan sans terre → this Jan) awaits primary confirmation in the ADN Lille B-series record of the lordship's descent after 1396.</td>
                  <td style={tdStyle}><span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`}>Probable (filiation)</span></td>
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
            The most concrete physical evidence for the Drincham line is the epitaph of Jacques de Flandres dict de Drincham at the church in Veurne (Furnes), West Flanders, preserved in Gaillard and quoted in Vredius.<Cite n={5} text={CITES[5]} /> The original French:
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

        {/* ── Beyond Vredius: the Donche Consolidation ─────────────── */}
        <section className={styles.section}>
          <h2>Beyond Vredius: Six Generations to the Mid-Sixteenth Century <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Donche's records-based study of the line<Cite n={6} text={CITES[6]} /> extends the reconstruction past Vredius's c. 1473 horizon to <strong>six generations</strong>, from the founding c. 1388 to the mid-sixteenth century, and establishes the line as the structural twin of the Praet branch: both founded by natural sons of Louis II de Male, both carrying the dynastic house-name in the bridged "van Vlaenderen gezegd van Drincham" form alongside the lordship name, both integrated into Burgundian-noble office across five and more generations, and both intermarrying the same noble kindreds (Gistel, Sint-Omaars, Halewijn, Bambeke). The bridged form is monumentally attested: the 1466 tomb at Houtem names the second-generation Jan, as father of Maria, <em>"Mer Jans van Vlandres gheseit Drincham"</em>,<Cite n={6} text={CITES[6]} loc="p. 567" repeat /> and Margareta, the line's sixth and last generation, is attested in 1503 as <em>"joncvrouwe Margriete van Vlaendren gheseit van Drincham"</em>.<Cite n={7} text={CITES[7]} loc="p. 756" />
          </p>
          <p>
            <strong>The 1393 Broekburg relief waiver.</strong> The line's comital-bastard origin is institutionally confirmed, not merely genealogically asserted. The Broekburg (Bourbourg) feudal-relief account of 1393 records Jan sans terre — styled <em>Messire de Drincham</em> — taking up two fiefs, the inheritances of Jacob van Drincham and Jan van Schuurvelde, both deceased, and owing the count's treasury the relief on each. The verso annotation records that Margareta van Male, Louis II's legitimate daughter and reigning heiress, personally ordered the receiver not to collect: <em>"me commanda que je ne prinsse point argent de mans.r de Drincham"</em>.<Cite n={6} text={CITES[6]} loc="p. 556, citing ADN Lille, Chambres des Comptes, B 421" repeat /> A relief was owed to the count; its remission is a grace only the comital house could grant, and Margareta granted it to her half-brother — a contemporary administrative act predicated on the kinship, entered in the count's own accounts. A direct reading of the Lille original remains an open archival action; the waiver evidences half-sibling recognition, consistent with but not independently proving the specific paternity.
          </p>
          <p>
            <strong>Marriage and escheat reconciled.</strong> The same 1393 account resolves the apparent conflict between the two acquisition traditions — the 1383 escheat grant of the confiscated Scheurvelde-Drincham holdings, quoted above,<Cite n={2} text={CITES[2]} repeat /> and the acquisition by marriage to the heiress Willemine, who brought the original Drincham patrimony.<Cite n={6} text={CITES[6]} repeat /><Cite n={7} text={CITES[7]} loc="p. 753" repeat /> The account has Jan paying reliefs on the two inheritances, Drincham and Schuurvelde: marriage to the heiress and a comital re-grant of escheated holdings are not mutually exclusive, and both describe how the bundle of Drincham and Schuurvelde rights consolidated in Jan's hands.
          </p>
          <p>
            <strong>The later generations.</strong> In Donche's fourth generation the line divides: a senior branch under a further Jan van Drincham, whose heiress Judoca carried the seat out of the surname to the de Jauche and Vilain families, and a cadet under Jacob van Drincham — the Jacques of the Veurne epitaph above, bailiff of Veurne from 1453 to his death in office in 1459. Simon van Drincham, échanson at Mary of Burgundy's court in 1474 and bailiff of Veurne 1477–1486, carries the fifth generation.<Cite n={6} text={CITES[6]} loc="pp. 574–577" repeat /> The sixth and last is Margareta van Drincham, gezegd van Vlaanderen, who married Denijs van Sint-Omaars gezegd van Moerbeke, lord of Hondecouter, in 1496, then Karel van Halewijn, lord of Piennes, and died c. 1529–30.<Cite n={6} text={CITES[6]} loc="pp. 577–578" repeat /> In 1551 the two cadet branches converge: Lodewijk van Vlaanderen, lord of Praet — descendant of another natural son of Louis II de Male — bought the Drincham seat from Gabriel de Jauche, only to be pre-empted by Francisca de Jauche exercising a kinship right.<Cite n={6} text={CITES[6]} loc="pp. 569–570" repeat /> A descendant of one bastard line attempting, a century and a half on, to buy the seat of the other is the first documented instance of the late Maleani kindred acting across its branches.
          </p>
          <p>
            <strong>Two disambiguations.</strong> First, "Jeanne de Flandre dite Drincham" (Gailliard, <em>Bruges et le Franc</em>, Tome I p. 258, married to Jean van Poucke) is a different person — Le Frison's granddaughter through her Praet-side father Jean de Praet, carrying the Drincham epithet by toponym, not a member of this line. Second, the original, pre-cadet de Drincham family — from a Jacob van Drincham sealing in 1312 down to the heiress Willemine c. 1385–88 — is distinct from the post-1396 cadet line that took the seat and its name; the discontinuity is heraldic as well as genealogical, the original family bearing checky argent and azure with a bordure gules against the cadet line's Gistel arms with a free-quarter of Flanders.
          </p>
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Evidence note: the line's existence, comital-bastard origin, and six-generation institutional continuity are Strongly Corroborated across Donche,<Cite n={6} text={CITES[6]} repeat /> Buylaert,<Cite n={7} text={CITES[7]} loc="pp. 753 and 756" repeat /> de l'Espinoy,<Cite n={2} text={CITES[2]} loc="1631, ch. XXXI" repeat /> and de Lichtervelde (1935). The founding filiation — Jan sans terre to the second-generation Jan — is graded Probable pending the ADN Lille B-series record of the lordship's descent after 1396 (see the generations table above).
          </p>
        </section>

        {/* ── Geographic Significance ─────────────────────────────── */}
        <section className={styles.section}>
          <h2>Geographic Significance and the French Flanders Hypothesis <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The documented Drincham line spans roughly 1383 (land grant) to c. 1473 (death of Jacques's wife Guillemette de Bambeke). For approximately ninety years, multiple generations of Van Vlaenderen surname-bearers were physically present in the Cassel area of French Flanders — the precise geographic zone where Geneanet's distributional data shows the heaviest pre-1600 concentration of the surname.
          </p>
          <p>
            The hypothesis — argued in full in the <Link to="/name/surname-origins" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>Four Functions, Three Clusters analysis</Link> — is that this geographic-documentary coincidence is the explanation for the French Flanders cluster. The argument does not depend on the Geneanet count being accurate (it almost certainly reflects noble-tree duplication). It depends on the observation that the earliest securely documented hereditary Van Vlaenderen surname-bearers in the Cassel zone are precisely the documented bastard comital line, making them the most parsimonious founding explanation.
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
            Jan sans terre, Loys le Frison (Praet line), and Loys le Hase were all killed together at Nicopolis on 25 September 1396. The Gaillard text names all three in a single passage under the Van Vlaenderen surname, confirming the name was used by multiple natural sons simultaneously as a shared marker of comital bastard identity — not unique to any one branch.
          </p>
          <p>
            The Drincham line is geographically and genealogically distinct from the Victor line (Meetjesland/Belgian cluster) and the Praet line (Franc de Bruges/Brabant cluster). The three lines represent parallel surname-carrying foundations in different regions of Flanders, each anchored to a specific lordship granted by Louis de Male in the 1373–1399 period.
          </p>
          <p>
            For the full multi-line analysis, see the <Link to="/name/surname-origins" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>Four Functions, Three Clusters</Link> article, and for the Praet line's separate documentation, see the <Link to="/research/praet-dossier" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>Praet Archival Dossier</Link>.
          </p>
        </section>

        {/* ── Notes ─────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Notes and Sources</h2>
          <div className={researchStyles.referenceList}>
            {notes.map(({ n, full }) => (
              <div key={n} id={`fn-${n}`} className={researchStyles.refItem} style={{ scrollMarginTop: '6rem' }}>
                <span className={researchStyles.refNumber}>{n}.</span>
                {full}
                {' '}
                <a
                  href={`#fnref-${n}`}
                  className={researchStyles.refLink}
                  aria-label="Back to text"
                  title="Back to text"
                >
                  ↩
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── Back nav ──────────────────────────────────────────────── */}
        <div style={{ borderTop: '1px solid rgba(232,184,48,0.15)', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
          <Link to="/research" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>
            ← Research
          </Link>
          <Link to="/name/surname-origins" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>
            Four Functions, Three Clusters →
          </Link>
          <Link to="/research/praet-dossier" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>
            Praet Archival Dossier →
          </Link>
          <Link to="/research/victor-dossier" style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}>
            Victor Archival Dossier →
          </Link>
        </div>

      </div>
    </div>
  );
}
