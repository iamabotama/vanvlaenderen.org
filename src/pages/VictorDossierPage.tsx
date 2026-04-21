import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { useNav } from '../hooks/useNav';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function VictorDossierPage() {
  const { goToResearch } = useNav();
  const navigate = useNavigate();
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Victor van Vlaenderen \\u2014 Archival Dossier","description":"Primary source dossier for Victor van Vlaenderen: 1427 and 1441/42 charter evidence, FMG MedLands documentation, Hof van Wessegem heritage record, and the Alix van Boyeghem connection.","url":"https://vanvlaenderen.org/research/victor-dossier","inLanguage":"en","dateModified":"2026-04-19","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
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
            Bastard son of Louis II de Male, Count of Flanders; lord of Wessegem in Ursel; attested father of Lodewyc, Janne, and Adam van Vlaendren. Updated April 2026 with FMG MedLands primary charter data.
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
            <strong>Note:</strong> FMG footnote numbers in square brackets refer to the Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut document (v5.0, January 2025).
          </p>
        </section>

        {/* ── Identity and Parentage ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Victor van Vlaanderen, also styled Victor de Flandre, belongs to the illegitimate comital line descending from Louis II de Male, Count of Flanders. FMG MedLands lists him as illegitimate child 9 of Louis II, noting that Espinoy records his parentage (no source cited) [841], and that his mother is named in her 12 May 1427 charter. He is identified as Seigneur d'Ursele et de Wesseghem and as a Burgundian admiral.
          </p>
        </section>

        {/* ── Territorial Setting ─────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Territorial Setting: Wessegem and Ursel <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The Flemish heritage inventory for the Hof van Wessegem states that by the end of the fourteenth century 'Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male,' were lords of Wessegem, and that the property reverted to the comital domain in 1431.
          </p>
          <p>
            A local Ursel history states that in 1399 Wessegem passed to Victor van Vlaanderen, 'another bastard son of Louis van Male,' and that he often resided there.
          </p>
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Note on spelling: the Vredius print (1643, p. 286) renders the 1441 charter&rsquo;s lordship designation as &lsquo;Orsele ende van Wesseghem&rsquo; &mdash; an alternative spelling of &lsquo;Ursele.&rsquo; The 1446 charter on the following page uses &lsquo;Orsele en van Wesseghem&rsquo; again. The form &lsquo;Desele&rsquo; sometimes appearing in secondary OCR transcriptions of the charter is an artifact: the Middle Dutch blackletter capital &lsquo;U&rsquo;/&lsquo;V&rsquo; is easily misread as &lsquo;D.&rsquo; All references in Vredius point consistently to Ursel (the parish) and Wessegem (the seigneurie within it).
          </p>
        </section>

        {/* ── Victor's Testament ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Victor's Testament (1430) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The testament of 'her Victor van Vlaendren', dated 1430, named executors 'mher Robert van Vlaendren heere van Elverdinghe, Vlamertinghe, Burggrave van Ypre en Karle van Vlaendren beede sijn broeders.' This is summarised in FMG MedLands from Vredius (1643) <em>Pars secunda</em> p.285, citing the Vander Strate manuscript. It confirms Victor was alive in 1430 and had at least two brothers &mdash; Robert [Roeland] and Karel van Vlaenderen.
          </p>
        </section>

        {/* ── Direct Charter Nucleus ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Direct Charter Nucleus <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>Charter 1: 12 May 1427</h3>
          <p>
            FMG MedLands [846] summarises a charter from Vredius (1643), <em>Pars secunda</em> p.285, citing the Ghent partition court records (<em>In actis curiae partitionum Gandensium, Ex regist. part.</em> f.56): 'Joncfr. Mergriete Haelfhuuts Heinricx Mayen...wijf, moeder van Mer Victoere van Vlaenderen' donated property to 'Lodekinen ende Hannekinen mher Victoers hears soens naturlicke kinderen die by heeft by Alyssen van Boyeghem' and 'Adaemkine svoorsz mer Victoers natuerlick zone die hy heeft by Gertruden Liendekins.'
          </p>
          <p>
            This charter directly attests: (1) Mergriete Haelfhuuts as Victor's mother; (2) Lodewyc and Janne as Victor's natural sons by Alix van Boyeghem; (3) Adam as Victor's natural son by Gertrud Lindekens; (4) the distinction between the two mothers.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>Charter 2: 10 March 1441 O.S. (= 10 March 1442 N.S.)</h3>
          <p>
            FMG MedLands [847,852,854] summarises a charter from Vredius (1643) citing the same Ghent partition records: &lsquo;Joncfr. Mergriete Aelfhuuts Heindricx Maye&hellip;wijf&rsquo; donated property to &lsquo;Lodewyc, Janne ende Adam van Vlaendren natuerliche sonen van wijlen edelen&hellip;mer Victor van Vlaendren heere was van Orsele ende van Wesseghem&hellip;zone was vande voorz Joncf. Mergriete.&rsquo; Direct inspection of the Vredius print (p. 286) confirms the spelling as &lsquo;Orsele&rsquo; &mdash; an alternative rendering of Ursele, not a separate place name.
          </p>
          <p>
            This charter directly attests: (1) all three sons named together; (2) Victor described as deceased (&lsquo;wijlen&rsquo;); (3) the lordship spelled &lsquo;Orsele ende van Wesseghem&rsquo;; (4) Mergriete as Victor&rsquo;s mother.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>Charter 3: 18 March 1446 O.S. (= 18 March 1447 N.S.)</h3>
          <p>
            FMG MedLands [855] summarises a charter from Vredius (1643), <em>Pars secunda</em> pp.286&ndash;7: 'Adam van Vlandren natuerlicke sone va mer Victor van Vlaendren, Rudder, Heer van Orsele en van Wesseghem' donated money from 'joncfr Margriete Aelhuuts zijn groete vrauwe' to 'Christiane van Rouse fil Gheerarts.'
          </p>
          <p>
            This charter directly attests: (1) Adam is alive as late as 18 March 1447 N.S. &mdash; his death terminus, previously set at 1442, is now extended five years; (2) Adam explicitly names Victor as 'Rudder, Heer van Orsele en van Wesseghem' &mdash; Knight, Lord of Ursel and Wessegem; (3) Margriete Aelfhuuts remains Adam's active patroness in 1446, four years after the previous donation; (4) the lordship now spelled 'Orsele' &mdash; confirming Ursel and Wessegem as a paired designation.
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
                  <td style={{ padding: '10px' }}>15 Sep 1420</td>
                  <td style={{ padding: '10px' }}>FMG [844]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px' }}>Victor</td>
                  <td style={{ padding: '10px' }}>Testament</td>
                  <td style={{ padding: '10px' }}>1430</td>
                  <td style={{ padding: '10px' }}>FMG [842]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px' }}>Adam</td>
                  <td style={{ padding: '10px' }}>Named in charter</td>
                  <td style={{ padding: '10px' }}>12 May 1427</td>
                  <td style={{ padding: '10px' }}>FMG [853]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px' }}>Victor</td>
                  <td style={{ padding: '10px' }}>Deceased ('wijlen')</td>
                  <td style={{ padding: '10px' }}>before 10 Mar 1442 N.S.</td>
                  <td style={{ padding: '10px' }}>FMG [847]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '10px' }}>Adam</td>
                  <td style={{ padding: '10px' }}>Named in charter</td>
                  <td style={{ padding: '10px' }}>10 Mar 1442 N.S.</td>
                  <td style={{ padding: '10px' }}>FMG [854]</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Adam</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>Active donor in charter</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>18 Mar 1447 N.S.</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>FMG [855]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Lodewyc's Descendants ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Lodewyc van Vlaenderen &mdash; Documented Descendants <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Lodewyc (also Louis) van Vlaenderen married Jacqueline de Wilde (-Apr 1482, bur Oostborch). An epitaph at Oostborch (source: Bethune (1900) <em>Epitaphes</em>, third part, p.356 [848]) records the burial of 'Jacquemine de Wilde, ghesellenede van Lodewijc van Vlaenderen, fs Victor...naturelicken zone van...Lodewijc van Male' who died 1482, and nearby 'haer Joos van Vlaenderen fs Lodewijcx.'
          </p>
          <p>
            Lodewyc and Jacqueline had two documented children:
          </p>
          <p>
            <strong>(1) Josse van Vlaenderen</strong> (-young, bur Oostborch). Documented by the same Oostborch epitaph [849]. Died young &mdash; cannot be the Joos van Vlaenderen appearing in the 1547 Brugse Vrije probate record. His existence does, however, confirm that the name Josse/Joos was in active use within Victor's direct line in the mid-to-late 15th century.
          </p>
          <p>
            <strong>(2) Margareta van Vlaenderen.</strong> Charters dated 1478 and 1486 [FMG 850] record that 'Marguerite de Flandres' married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe.
          </p>
          <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Note on Oostborch: this is an older spelling of Oostburg, in Zeeuws-Vlaanderen (south of Sluis, now the Netherlands). It sits roughly 12&nbsp;km north of the Meetjesland border and was part of the medieval Franc de Bruges. The Oostburg church burial places Lodewyc&rsquo;s wife Jacqueline de Wilde and their son Joos firmly in the coastal Zeeuws-Vlaanderen orbit &mdash; not in the inland Meetjesland parishes where the later Van Vlaenderen surname cluster concentrates. A systematic onomastic sweep of Gysseling&rsquo;s Vier Ambachten corpus (c.&nbsp;1240&ndash;1500) returned no Bucket&nbsp;4 attestations of the surname in Zeeuws-Vlaanderen, confirming it arrived there from elsewhere.
          </p>
        </section>

        {/* ── Naval and Military Activity ─────────────────────────── */}
        <section className={styles.section}>
          <h2>Naval and Military Activity <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            A DBNL article states: 'Victor was, en dit is belangrijk, kapitein van de vesting Biervliet.' A UGent-hosted study on Flemish corsair warfare notes the appointment of 'een nieuwe admiraal: Victor van Vlaanderen.' These sources support Victor's coastal and naval command role.
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
            <button
              onClick={() => { navigate('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
            >
              Four Functions, Three Clusters analysis →
            </button>
          </p>
        </section>

        {/* ── Notes & Bibliography ────────────────────────────────── */}
        <section className={researchStyles.referenceList}>
          <h3>Notes &amp; Bibliography</h3>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            FMG. Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. v5.0, updated January 2025. All footnote numbers in square brackets refer to this source.
          </p>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Vredius, Olivarius (Olivier de Wree). <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>. Bruges: J.B. &amp; Lucas Kerchovios, 1642&ndash;43. Tabula XVI, pp. 285&ndash;287 (charter transcriptions for Victor&rsquo;s three sons) and pp. 267&ndash;275 (Louis I de Cressy bastard cohort) and pp. 275&ndash;289 (Louis II de Male bastard cohort). Direct reading of the 1643 print conducted April 2026. Vredius transcribes the three charters from the Ghent partition court registers (<em>In actis curiae partitionum Gandensium, Ex regist. part.</em> f.56). The underlying RAG register has not yet been independently verified; <em>Curiae partitionum Gandensium</em> may correspond to the RAG Jaarregisters van de Keure or Staten van Goed series.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Foundation for Medieval Genealogy, MedLands: Flanders, Hainaut. v5.0, January 2025. Victor and Adam entries, footnotes [841]&ndash;[855]. Used here as a collateral summary of the Vredius charters; all square-bracketed footnote numbers in this dossier refer to the FMG footnote apparatus.{' '}
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            Inventaris Onroerend Erfgoed. Hoeve Hof van Wessegem. Quote: &lsquo;Eind 14de eeuw vinden we Lodewijk de Haze en Victor van Vlaanderen, bastaardzoons van Lodewijk van Male, als heren van Wessegem; in 1431 terug bij het kroondomein gevoegd.&rsquo;{' '}
            <a href="https://inventaris.onroerenderfgoed.be/erfgoedobjecten/33384" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Inventaris Onroerend Erfgoed, Erfgoedobject 33384</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            Ursel, een Meetjeslands dorp. States that in 1399 Wessegem passed to Victor van Vlaanderen, another bastard son of Louis van Male.{' '}
            <a href="https://mijnplatteland.com/meetjesland/ursel/" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ursel, een Meetjeslands dorp</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Bethune, J.B. de. <em>Epitaphes et monuments des eglises de la Flandre.</em> Third part. 1900. p.356. [FMG 848&ndash;849]. Oostborch (Oostburg, Zeeuws-Vlaanderen) epitaph for Jacqueline de Wilde and Josse van Vlaenderen. Print only &mdash; not digitised. Held at KBR Brussels (Royal Library of Belgium) and Ghent University Library.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Degryse, R. Willem Beukel(s) van Hughevliet. <em>De Vlaamse Gids</em> 38 (1954).{' '}
            <a href="https://www.dbnl.org/tekst/_vla001195401_01/_vla001195401_01_0055.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">DBNL, Vlaamse Stam (1954)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Tailler, Margaux. <em>Corvers en zeeschuimers van den Vlaemsche zeecoste: Kaapvaart en piraterij onder Jan zonder Vrees.</em> Master of Arts in History, Ghent University, 2011. Supervised by Jan Dumolyn. Notes the appointment of &lsquo;een nieuwe admiraal: Victor van Vlaanderen.&rsquo;{' '}
            <a href="https://libstore.ugent.be/fulltxt/RUG01/001/786/522/RUG01-001786522_2012_0001_AC.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ghent University Library, Thesis RUG01-001786522 (2012)</a>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <button
            onClick={() => goToResearch('victor')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--gold)',
              fontSize: '16px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Return to Victor Lineage
          </button>
          <button
            onClick={() => goToResearch('bibliography')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
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
          </button>
        </div>
      </div>
    </div>
  );
}
