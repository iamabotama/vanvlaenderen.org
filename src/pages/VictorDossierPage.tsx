import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Cite } from '../components/Footnote';

// Single source for this page's footnotes. Each note carries a concise `short`
// form (shown in the inline hover/tap popover) and the `full` citation (rendered
// in the Notes & Bibliography list at the foot of the page). Editing a note in
// one place keeps the popover and the bottom note in sync. `CITES` is derived
// from the array so the inline <Cite> markers need no separate map.
const notes = [
  {
    n: 1,
    short: 'Vredius, Olivarius (Olivier de Wree). Genealogia Comitum Flandriae…, Pars Secunda. Bruges: J.B. & Lucas Kerchovios, 1642–43.',
    full: (
      <>
        Vredius, Olivarius (Olivier de Wree). <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>. Bruges: J.B. &amp; Lucas Kerchovios, 1642&ndash;43. Tabula XVI, pp. 285&ndash;287 (charter transcriptions for Victor&rsquo;s three sons) and pp. 267&ndash;275 (Louis I de Cressy bastard cohort) and pp. 275&ndash;289 (Louis II de Male bastard cohort). Direct reading of the 1643 print conducted April 2026. Vredius transcribes the three charters from the Ghent partition court registers (<em>In actis curiae partitionum Gandensium, Ex regist. part.</em> f.56). The underlying RAG register has not yet been independently verified; <em>Curiae partitionum Gandensium</em> may correspond to the RAG Jaarregisters van de Keure or Staten van Goed series.
      </>
    ),
  },
  {
    n: 2,
    short: 'Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. v5.0, January 2025.',
    full: (
      <>
        Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. v5.0, January 2025. Tertiary compilation consulted as a pointer to primary sources; not used as a fact-level authority in this dossier.{' '}
        <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
      </>
    ),
  },
  {
    n: 3,
    short: 'Inventaris Onroerend Erfgoed. Hoeve Hof van Wessegem.',
    full: (
      <>
        Inventaris Onroerend Erfgoed. Hoeve Hof van Wessegem. Quote: &lsquo;Eind 14de eeuw vinden we Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male, als heren van Wessegem; in 1431 terug bij het kroondomein gevoegd.&rsquo;{' '}
        <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Inventaris Onroerend Erfgoed, Erfgoedobject 33384</a>
      </>
    ),
  },
  {
    n: 4,
    short: 'Ursel, een Meetjeslands dorp.',
    full: (
      <>
        Ursel, een Meetjeslands dorp. States that in 1399 Wessegem passed to Victor van Vlaanderen, another bastard son of Louis van Male.{' '}
        <a href="https://mijnplatteland.com/meetjesland/ursel/" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ursel, een Meetjeslands dorp</a>
      </>
    ),
  },
  {
    n: 5,
    short: 'Bethune, J.B. de. Epitaphes et monuments des eglises de la Flandre. Third part. 1900.',
    full: (
      <>
        Bethune, J.B. de. <em>Epitaphes et monuments des eglises de la Flandre.</em> Third part. 1900. p.356. Oostborch (Oostburg, Zeeuws-Vlaanderen) epitaph for Jacqueline de Wilde and Josse van Vlaenderen, also preserved in Vredius (1643) pp.286&ndash;287, from which it is cited above. Print only &mdash; not digitised; not yet consulted directly by the project. Held at KBR Brussels (Royal Library of Belgium) and Ghent University Library.
      </>
    ),
  },
  {
    n: 6,
    short: 'Degryse, R. Willem Beukel(s) van Hughevliet. De Vlaamse Gids 38 (1954).',
    full: (
      <>
        Degryse, R. Willem Beukel(s) van Hughevliet. <em>De Vlaamse Gids</em> 38 (1954).{' '}
        <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">DBNL, Vlaamse Stam (1954)</a>
      </>
    ),
  },
  {
    n: 7,
    short: 'Tailler, Margaux. Corvers en zeeschuimers van den Vlaemsche zeecoste… Master of Arts in History, Ghent University, 2011.',
    full: (
      <>
        Tailler, Margaux. <em>Corvers en zeeschuimers van den Vlaemsche zeecoste: Kaapvaart en piraterij onder Jan zonder Vrees.</em> Master of Arts in History, Ghent University, 2011. Supervised by Jan Dumolyn. Notes the appointment of &lsquo;een nieuwe admiraal: Victor van Vlaanderen.&rsquo;{' '}
        <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ghent University Library, Thesis RUG01-001786522 (2012)</a>
      </>
    ),
  },
  {
    n: 8,
    short: 'Verschelde, Karel. Geschiedenis van Middelburg in Vlaenderen. Brugge, 1867.',
    full: (
      <>
        Verschelde, Karel. <em>Geschiedenis van Middelburg in Vlaenderen</em>. Brugge, 1867. Bewysstukken N&deg; 1, pp. 220&ndash;222; the three 'mher Victoors van Vlaenderen kindren lande' boundary clauses at p. 221; index entry 'Van Vlaenderen, Victor &mdash; 221.' Transcribes the 17 July 1441 koopbrief from the original deed held at the Rijksarchief Gent ('Staetsarchiven te Gent'). The same attestation is independently cited in K. de Flou, <em>Woordenboek der Toponymie van Westelijk Vlaanderen</em>, Vol. 16 col. 554 ('Gesch. Middelb., 221').
      </>
    ),
  },
];

const CITES: Record<number, string> = {};
notes.forEach((nt) => {
  CITES[nt.n] = nt.short;
});

export default function VictorDossierPage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Victor van Vlaenderen — Archival Dossier | vanvlaenderen.org</title>
        <meta name="description" content="Primary source dossier for Victor van Vlaenderen. Fifteenth-century Ghent charter evidence (1427, 1441, 1446) for his natural sons — Lodewyc, Janne, and Adam — and his lordship of Ursel and Wessegem in the Meetjesland." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/victor-dossier" />
        <meta property="og:title" content="Victor van Vlaenderen — Archival Dossier" />
        <meta property="og:description" content="Primary source dossier for Victor van Vlaenderen. Fifteenth-century Ghent charter evidence (1427, 1441, 1446) for his natural sons — Lodewyc, Janne, and Adam — and his lordship of Ursel and Wessegem in the Meetjesland." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/victor-dossier" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Victor van Vlaenderen \\u2014 Archival Dossier","description":"Primary source dossier for Victor van Vlaenderen: 1427 and 1441/42 charter evidence from the Vredius (1643) transcriptions, Hof van Wessegem heritage record, and the Alix van Boyeghem connection.","url":"https://vanvlaenderen.org/research/victor-dossier","inLanguage":"en","dateModified":"2026-06-12","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Victor van Vlaenderen","item":"https://vanvlaenderen.org/research/victor"},{"@type":"ListItem","position":4,"name":"Archival Dossier","item":"https://vanvlaenderen.org/research/victor-dossier"}]}`}} />
      </Helmet>
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Archival Evidence</div>
          <h1>Victor van Vlaenderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Bastard son of Louis II de Male, Count of Flanders; lord of Wessegem in Ursel; attested father of Lodewyc, Janne, and Adam van Vlaendren. Updated April 2026 with the primary charter data from the direct reading of Vredius (1643); June 2026 with the 1441 Cadzand attestation of Victor's children.
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
            This dossier follows a four-level evidentiary framework. <strong>Directly attested</strong> statements rest on quoted charter language or explicit documentary summaries in a published authority. <strong>Strongly corroborated</strong> statements are supported by concordant published sources. <strong>Probable</strong> statements are source-based but require fuller inspection of underlying editions. <strong>Hypotheses</strong> are genealogical inferences proposed for further testing.
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
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Source-based but require fuller inspection of underlying edition.</span>
            </div>
            <div className={researchStyles.methodItem}>
              <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`} style={{ marginLeft: 0, marginBottom: '5px' }}>Hypothesis</span>
              <span style={{ fontSize: '0.8rem', display: 'block' }}>Genealogical inferences proposed for further testing.</span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid rgba(232, 184, 48, 0.1)', paddingTop: '1rem' }}>
            <strong>Note:</strong> the charter transcriptions cited in this dossier are taken from the project's April 2026 direct reading of Vredius (1643), <em>Pars secunda</em>; page references are to the 1643 Bruges print.
          </p>
        </section>

        {/* ── Identity and Parentage ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II de Male, Count of Flanders. Espinoy (1631), Livre 2, Ch. XXXI, p. 69, records his parentage among the natural sons of Louis II (without citing a source), and his mother is named in her own charter of 12 May 1427 (see the charter nucleus below). He is identified as Seigneur d'Ursele et de Wesseghem and as a Burgundian admiral.
          </p>
        </section>

        {/* ── Territorial Setting ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Territorial Setting: Wessegem and Ursel <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The Flemish heritage inventory for the Hof van Wessegem<Cite n={3} text={CITES[3]} /> states that by the end of the fourteenth century 'Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male,' were lords of Wessegem, and that the property reverted to the comital domain in 1431.
          </p>
          <p>
            A local Ursel history<Cite n={4} text={CITES[4]} /> states that in 1399 Wessegem passed to Victor van Vlaanderen, 'another bastard son of Louis van Male,' and that he often resided there.
          </p>
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Note on spelling: the Vredius print (1643, p. 286)<Cite n={1} text={CITES[1]} loc="p. 286" /> renders the 1441 charter&rsquo;s lordship designation as &lsquo;Orsele ende van Wesseghem&rsquo; &mdash; an alternative spelling of &lsquo;Ursele.&rsquo; The 1446 charter on the following page uses &lsquo;Orsele en van Wesseghem&rsquo; again. The form &lsquo;Desele&rsquo; sometimes appearing in secondary OCR transcriptions of the charter is an artifact: the Middle Dutch blackletter capital &lsquo;U&rsquo;/&lsquo;V&rsquo; is easily misread as &lsquo;D.&rsquo; All references in Vredius point consistently to Ursel (the parish) and Wessegem (the seigneurie within it).
          </p>
        </section>

        {/* ── Victor's Testament ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Victor's Testament (1430) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The testament of 'her Victor van Vlaendren', dated 1430, named executors 'mher Robert van Vlaendren heere van Elverdinghe, Vlamertinghe, Burggrave van Ypre en Karle van Vlaendren beede sijn broeders.'<Cite n={1} text={CITES[1]} loc="p. 285 (citing the Vander Strate MS)" repeat /> It confirms Victor was alive in 1430 and had at least two brothers &mdash; Robert [Roeland] and Karel van Vlaenderen.
          </p>
        </section>

        {/* ── Direct Charter Nucleus ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Direct Charter Nucleus <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>Charter 1: 12 May 1427</h3>
          <p>
            A charter from the Ghent partition court records transcribes:<Cite n={1} text={CITES[1]} loc="p. 285 (In actis curiae partitionum Gandensium, Ex regist. part. f.56)" repeat /> 'Joncfr. Mergriete Haelfhuuts Heinricx Mayen...wijf, moeder van Mer Victoere van Vlaenderen' donated property to 'Lodekinen ende Hannekinen mher Victoers hears soens naturlicke kinderen die by heeft by Alyssen van Boyeghem' and 'Adaemkine svoorsz mer Victoers natuerlick zone die hy heeft by Gertruden Liendekins.'
          </p>
          <p>
            This charter directly attests: (1) Mergriete Haelfhuuts as Victor's mother; (2) Lodewyc and Janne as Victor's natural sons by Alix van Boyeghem; (3) Adam as Victor's natural son by Gertrud Lindekens; (4) the distinction between the two mothers.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>Charter 2: 10 March 1441 O.S. (= 10 March 1442 N.S.)</h3>
          <p>
            A charter from the same Ghent partition records transcribes:<Cite n={1} text={CITES[1]} loc="p. 286" repeat /> &lsquo;Joncfr. Mergriete Aelfhuuts Heindricx Maye&hellip;wijf&rsquo; donated property to &lsquo;Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen&hellip;mer Victor van Vlaendren heere was van Orsele ende van Wesseghem&hellip;zone was vande voorz Joncf. Mergriete.&rsquo; Direct inspection of the print confirms the spelling as &lsquo;Orsele&rsquo; &mdash; an alternative rendering of Ursele, not a separate place name.
          </p>
          <p>
            This charter directly attests: (1) all three sons named together; (2) Victor described as deceased (&lsquo;wijlen&rsquo;); (3) the lordship spelled &lsquo;Orsele ende van Wesseghem&rsquo;; (4) Mergriete as Victor&rsquo;s mother.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>Charter 3: 18 March 1446 O.S. (= 18 March 1447 N.S.)</h3>
          <p>
            A charter transcribes:<Cite n={1} text={CITES[1]} loc="pp. 286&ndash;287" repeat /> 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem' donated money from 'joncfr Margriete Aelhuuts zijn groete vrauwe' to 'Christiane van Rouse fil Gheerarts.'
          </p>
          <p>
            This charter directly attests: (1) Adam is alive as late as 18 March 1447 N.S. &mdash; his death terminus, previously set at 1442, is now extended five years; (2) Adam explicitly names Victor as 'Rudder, Heer van Orsele en van Wesseghem' &mdash; Knight, Lord of Ursel and Wessegem; (3) Margriete Aelfhuuts remains Adam's active patroness in 1446, four years after the previous donation; (4) the lordship now spelled 'Orsele' &mdash; confirming Ursel and Wessegem as a paired designation.
          </p>
        </section>

        {/* ── The 1441 Cadzand Koopbrief ──────────────────────────── */}
        <section className={styles.section}>
          <h2>The 1441 Cadzand Koopbrief <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            A fourth fifteenth-century instrument extends the documented footprint one generation past Victor himself &mdash; and ten years past his death. On 17 July 1441 Pieter Bladelin ('dit le leestmakere', burgher of Bruges and later founder of Middelburg-in-Vlaanderen) purchased a fief of approximately 178 <em>gemeten</em> of land and <em>schorre</em> in the parish of Cadzand from Vrancke van Praet, heer van Moerkerke, and his mother vrouwe Jakemine, widow of mher Lodewyc, heer van Moerkerke. In the deed's boundary descriptions for the <em>polre van den anworpe</em>, the adjoining land is named three times as that of the children of mher Victor van Vlaenderen. The first of the three clauses:
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
            "Item bet oost van daer, inden zeluen polre, zesse ende tsestich ghemeten eene line ende achte ende tachtentich roeden tusschen pieter clamps lande an de westzide, ende mher Victoors van Vlaenderen kindren lande an de oostzide."
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'normal' }}>
              From the 1441 Cadzand koopbrief.<Cite n={8} text={CITES[8]} loc="Bewysstukken N&deg; 1, p. 221" /> Translation: "Item, further east from there, in the same polder, sixty-six gemeten one line and eighty-eight roeden, between Pieter Clamp's land on the west side, and the land of mher Victor van Vlaenderen's children on the east side."
            </div>
          </div>
          <p>
            The third of the three clauses places the children's land <em>an beeden ziden</em> &mdash; on both sides &mdash; of a parcel of roughly 49 gemeten, indicating a substantial contiguous block of their holding in this polder. This is the first known post-1431 territorial attestation of Victor's children as a body. It places their holding in the West-Flemish coastal zone &mdash; the same Aardenburg&ndash;Cadzand orbit as the line's other coastal holdings, adjacent to Bladelin's land assembly for Middelburg-in-Vlaanderen &mdash; and it ties the Praet-Moerkerke line, as vendor, into the same transaction. The neighbouring landholders named alongside (Pieter Clamp, Adriaen van Borssele) situate the holding in the seigneurial-coastal milieu of the Brugse Vrije.
          </p>
          <p>
            The landholding itself is Directly Attested: the deed is transcribed verbatim from the original held at the Rijksarchief Gent, and independently confirmed by the source's own names-index ('Van Vlaenderen, Victor &mdash; 221').<Cite n={8} text={CITES[8]} loc="Bewysstukken N&deg; 1, p. 221 (orig. deed, Rijksarchief Gent)" repeat /> The deed names the children only collectively. Identifying the 1441 <em>kindren</em> with Victor's three documented natural sons &mdash; Lodewyc, Janne, and Adam, named in the 12 May 1427 charter above &mdash; is <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span> rather than Directly Attested: the 1441 deed supplies the territorial fact but no personal names, the 1427 charter supplies the names but not the holding, and no competing set of children of Victor is attested.
          </p>
        </section>

        {/* ── Chronology ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Chronology <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gold)', textAlign: 'left' }}>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Person</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Event</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Date</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px' }}>Victor</td>
                  <td style={{ padding: '10px' }}>Active (Ursel history)</td>
                  <td style={{ padding: '10px' }}>1399</td>
                  <td style={{ padding: '10px' }}>Local history</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px' }}>Victor</td>
                  <td style={{ padding: '10px' }}>Married Jeanne de Gavre</td>
                  <td style={{ padding: '10px' }}>1420 (contract)</td>
                  <td style={{ padding: '10px' }}>Vredius (1643) p.285; Espinoy (1631) p. 68</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px' }}>Victor</td>
                  <td style={{ padding: '10px' }}>Testament</td>
                  <td style={{ padding: '10px' }}>1430</td>
                  <td style={{ padding: '10px' }}>Vredius (1643) p.285</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px' }}>Adam</td>
                  <td style={{ padding: '10px' }}>Named in charter</td>
                  <td style={{ padding: '10px' }}>12 May 1427</td>
                  <td style={{ padding: '10px' }}>Vredius (1643) p.285</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px' }}>Victor's children</td>
                  <td style={{ padding: '10px' }}>Named as adjoining landholders at Cadzand ('mher Victoors van Vlaenderen kindren lande')</td>
                  <td style={{ padding: '10px' }}>17 Jul 1441</td>
                  <td style={{ padding: '10px' }}>Verschelde 1867, p. 221</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px' }}>Victor</td>
                  <td style={{ padding: '10px' }}>Deceased ('wijlen')</td>
                  <td style={{ padding: '10px' }}>before 10 Mar 1442 N.S.</td>
                  <td style={{ padding: '10px' }}>Vredius (1643) p.285</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px' }}>Adam</td>
                  <td style={{ padding: '10px' }}>Named in charter</td>
                  <td style={{ padding: '10px' }}>10 Mar 1442 N.S.</td>
                  <td style={{ padding: '10px' }}>Vredius (1643) p.285</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Adam</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Active donor in charter</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>18 Mar 1447 N.S.</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Vredius (1643) pp.286&ndash;7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Lodewyc's Descendants ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Lodewyc van Vlaenderen &mdash; Documented Descendants <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Lodewyc (also Louis) van Vlaenderen married Jacqueline de Wilde (-Apr 1482, bur Oostborch). An epitaph at Oostborch,<Cite n={5} text={CITES[5]} loc="p. 356" /> also preserved in Vredius,<Cite n={1} text={CITES[1]} loc="pp. 286&ndash;287 (Gaillard MS)" repeat /> records the burial of 'Jacquemine de Wilde, ghesellenede van Lodewijc van Vlaenderen, fs Victor...naturelicken zone van...Lodewijc van Male' who died 1482, and nearby 'haer Joos van Vlaenderen fs Lodewijcx.'
          </p>
          <p>
            Lodewyc and Jacqueline had two documented children:
          </p>
          <p>
            <strong>(1) Josse van Vlaenderen</strong> (-young, bur Oostborch). Documented by the same Oostborch epitaph. Died young &mdash; cannot be the Joos van Vlaenderen appearing in the 1547 Brugse Vrije probate record. His existence does, however, confirm that the name Josse/Joos was in active use within Victor's direct line in the mid-to-late 15th century.
          </p>
          <p>
            <strong>(2) Margareta van Vlaenderen.</strong> Charters dated 1478 and 1486 record that 'Marguerite de Flandres' married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe.<Cite n={1} text={CITES[1]} loc="p. 287 (Grimarez, Ghent partition registers)" repeat />
          </p>
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Note on Oostborch: this is an older spelling of Oostburg, in Zeeuws-Vlaanderen (south of Sluis, now the Netherlands). It sits roughly 12&nbsp;km north of the Meetjesland border and was part of the medieval Franc de Bruges. The Oostburg church burial places Lodewyc&rsquo;s wife Jacqueline de Wilde and their son Joos firmly in the coastal Zeeuws-Vlaanderen orbit &mdash; not in the inland Meetjesland parishes where the later Van Vlaenderen surname cluster concentrates. A systematic onomastic sweep of Gysseling&rsquo;s Vier Ambachten corpus (c.&nbsp;1240&ndash;1500) returned no Bucket&nbsp;4 attestations of the surname in Zeeuws-Vlaanderen, confirming it arrived there from elsewhere.
          </p>
        </section>

        {/* ── Naval and Military Activity ─────────────────────────── */}
        <section className={styles.section}>
          <h2>Naval and Military Activity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            A DBNL article<Cite n={6} text={CITES[6]} /> states: 'Victor was, en dit is belangrijk, kapitein van de vesting Biervliet.' A UGent-hosted study on Flemish corsair warfare<Cite n={7} text={CITES[7]} /> notes the appointment of 'een nieuwe admiraal: Victor van Vlaanderen.' These sources support Victor's coastal and naval command role.
          </p>
        </section>

        {/* ── Genealogical Significance ───────────────────────────── */}
        <section className={styles.section}>
          <h2>Genealogical Significance <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span></h2>
          <p>
            The published record establishes an illegitimate comital branch rooted in the Ursel/Wessegem region, with Victor's acknowledged natural sons bearing the surname form <em>van Vlaendren</em> across three directly attested primary documents spanning 1427&ndash;1447. This does not by itself prove continuous descent to the later parish-record Van Vlaenderens of the Meetjesland. It does, however, provide a substantial medieval documentary nucleus that makes such a continuity hypothesis materially stronger than a mere coincidence-of-surname explanation.
          </p>
          <p>
            The 150-year documentary gap between Adam's last attestation (18 March 1447) and Franciscus van Vlaenderen in Ghent (1568) is the central open question in the project. A systematic onomastic sweep of the Zeeuws-Vlaanderen record (Gysseling, Vier Ambachten, c.1240–1500) has confirmed the surname is not indigenous to that region — it arrives into Bassevelde/Assenede from the Ghent hinterland. The primary remaining bridge candidates are the Staten van Goed series at RAG (Ambacht Assenede I &amp; II) and the Landboek/Leenhof records. For the full distributional and documentary analysis of the surname's origin, see the{' '}
            <Link
              to="/name/surname-origins"
              style={{ color: 'var(--gold)', textDecoration: 'underline', fontSize: 'inherit' }}
            >
              Four Functions, Three Clusters analysis →
            </Link>
          </p>
        </section>

        {/* ── Notes & Bibliography ────────────────────────────────── */}
        <section className={researchStyles.referenceList}>
          <h3>Notes &amp; Bibliography</h3>
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
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <Link
            to="/research/victor"
            style={{
              color: 'var(--gold)',
              fontSize: '16px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Return to Victor Lineage
          </Link>
          <Link
            to="/research/bibliography"
            style={{
              color: 'var(--gold)',
              fontSize: '14px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginLeft: '1.5rem',
            }}
          >
            Full Bibliography &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
