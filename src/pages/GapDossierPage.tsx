import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import meetjeslandMap from '../assets/images/heraldic/meetjesland-map.jpg';
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
    short: 'Rijksarchief Brugge, Brugse Vrije, TBO 184, nrs. 21300–21302 (1545–49) — the Honnelede wardship file. Consulted April 2026 (case 2026/0451).',
    full: (
      <>
        Rijksarchief Brugge, Brugse Vrije, TBO 184, nrs. 21300&ndash;21302 (1545&ndash;49). The
        Honnelede wardship file: Joos van Vlaenderen's minor sons Jacob and Philips as wards;
        the 1547&ndash;48 entry <em>&lsquo;nopende Phelipe van Vlaendren &hellip; In Lande van
        Hollandt ende Zeelandt&rsquo;</em> at nr. 21300, Rekening B, fol. 16r. Consulted April 2026.
        Reference: case 2026/0451.
      </>
    ),
  },
  {
    n: 2,
    short: "Verhoustraete, 'De heren van Praet te Oedelem,' Jaarboek 1967 (Bos en Beverveld), pp. 101–113.",
    full: (
      <>
        Verhoustraete, Arthur. &lsquo;De heren van Praet te Oedelem.&rsquo; <em>Jaarboek 1967</em>{' '}
        (Bos en Beverveld), pp. 101&ndash;113. The 1545 senior-line failure, the collateral
        continuation (Joos &rarr; Jacob &rarr; Lodewijk V), the 1591 sonless terminus, and the
        post-1591 title succession (pp. 109&ndash;112).
      </>
    ),
  },
  {
    n: 3,
    short: 'Serrure (ed.), Vaderlandsch Museum, Deel 5 (Gent, 1863), pp. 295–310.',
    full: (
      <>
        Serrure, C.P., ed. <em>Vaderlandsch Museum</em>, Deel 5. Gent, 1863. &lsquo;De geslachten
        Van Praet, Van Moerkercke&hellip;,&rsquo; pp. 295&ndash;310 &mdash; names Joos's children
        Jacob, Philips, and Philippote; anchors Joos to Lodewijk II via the Gruuthuse marriage.
      </>
    ),
  },
  {
    n: 4,
    short: 'Lauwens, Verhalen uit de genealogie Van Praet (2021).',
    full: (
      <>
        Lauwens, Patrik. <em>Verhalen uit de genealogie Van Praet.</em> 2021. The senior line's
        Mijnsheerenland van Moerkerken / Hof van Holland litigation context for Philips's maternal
        van Moerckercke standing.
      </>
    ),
  },
  {
    n: 5,
    short: "Valkeneers & Soen, 'Praet, Bronkhorst en Boetzelaer…' (2014), pp. 265–284.",
    full: (
      <>
        Valkeneers, Nina &amp; Soen, Violet. &lsquo;Praet, Bronkhorst en Boetzelaer. Adellijke
        weduwes in de bres voor het calvinisme tijdens en na de Beeldenstorm (1566&ndash;1567)&rsquo;
        (2014), pp. 265&ndash;284. Jacob van Vlaanderen &times; Catharina van Boetzelaer; the
        Calvinist banishment and confiscation behind the over-determined 1591 terminus.
      </>
    ),
  },
  {
    n: 6,
    short: 'FMG, MedLands: Flanders, Hainaut (v5.0, 2025) — the tertiary pointer that carries the De Raadt citation.',
    full: (
      <>
        Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025.
        Tertiary compilation consulted as a pointer to primary sources; not used as a fact-level
        authority. The De Raadt citation above is taken from its footnote apparatus.{' '}
        <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
          Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut
        </a>
      </>
    ),
  },
  {
    n: 7,
    short: 'Buylaert, Repertorium van de Vlaamse adel (ca. 1350–1500) (Gent, 2011), p. 747.',
    full: (
      <>
        Buylaert, Frederik. <em>Repertorium van de Vlaamse adel (ca. 1350&ndash;ca. 1500).</em>{' '}
        Gent: Academia Press, 2011. P. 747 (Josse de Flandre and the cadet Praet branch), read
        directly within the project&rsquo;s pp. 736&ndash;759 pass.
      </>
    ),
  },
  {
    n: 8,
    short: 'Debrabandere, Woordenboek van de familienamen in België en Noord-Frankrijk (WFB2, 2003), via CBG Familienamenbank.',
    full: (
      <>
        Debrabandere, Frans. <em>Woordenboek van de familienamen in België en Noord-Frankrijk.</em>{' '}
        LJ Veen, 2003. Van Vlaenderen entry via CBG Familienamenbank.{' '}
        <a href="https://www.cbgfamilienamen.nl" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
          cbgfamilienamen.nl
        </a>
      </>
    ),
  },
  {
    n: 9,
    short: 'Debrabandere, Woordenboek van de familienamen in Zeeland (WFZ, 2009) — searched in full; no hereditary bearers.',
    full: (
      <>
        Debrabandere, Frans. <em>Woordenboek van de familienamen in Zeeland.</em> 2009.
        Searched in full &mdash; no hereditary surname bearers.{' '}
        <a href="https://www.naamkunde.net/wp-content/uploads/2010/01/WZF-Debrabandere.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
          Free PDF, naamkunde.net
        </a>
      </>
    ),
  },
  {
    n: 10,
    short: 'Gysseling & Debrabandere, Persoonsnamen in de Vier Ambachten, 14e–15e eeuw, KCTD 71 (1999), pp. 491–588 — not yet read.',
    full: (
      <>
        Gysseling, M. &amp; Debrabandere, F. <em>Persoonsnamen in de Vier Ambachten, 14e en 15e eeuw.</em>{' '}
        KCTD vol. 71 (1999), pp. 491&ndash;588.{' '}
        <a href="https://openjournals.ugent.be/hctd" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
          Free via KCTD portal
        </a>{' '}
        &mdash; not yet read.
      </>
    ),
  },
  {
    n: 11,
    short: 'Limburg-Stirum, Cartulaire de Louis de Male (Bruges, 1898–1901) — not yet consulted.',
    full: (
      <>
        Limburg-Stirum, Th. de. <em>Cartulaire de Louis de Male, comte de Flandre.</em>{' '}
        Bruges, 1898&ndash;1901. Held at{' '}
        <a href="http://lib.ugent.be/catalog/rug01:002005149" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
          Ghent University Library
        </a>{' '}
        &mdash; not yet consulted.
      </>
    ),
  },
];

const CITES: Record<number, string> = {};
notes.forEach((nt) => {
  CITES[nt.n] = nt.short;
});

export default function GapDossierPage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>The Documentary Gap, 1447–1580 | vanvlaenderen.org</title>
        <meta name="description" content="The 1447–1580 documentary gap between the comital bastard lines and the first parish-register Van Vlaenderen families of the Meetjesland. Archival evidence in hand, active targets, and four working hypotheses including a parallel West Flanders origin question." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/gap-dossier" />
        <meta property="og:title" content="The Documentary Gap, 1447–1580 — Van Vlaenderen Research" />
        <meta property="og:description" content="The 1447–1580 documentary gap between the comital bastard lines and the first parish-register Van Vlaenderen families of the Meetjesland. Archival evidence in hand, active targets, and four working hypotheses including a parallel West Flanders origin question." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/gap-dossier" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"The Documentary Gap, 1447\u20131580","description":"The evidentiary gap between the last confirmed comital-line van Vlaenderen bearer (1447) and the Meetjesland parish cluster (fl. 1547\u2013). Archival evidence, search record, active targets, and working hypotheses.","url":"https://vanvlaenderen.org/research/gap-dossier","inLanguage":"en","dateModified":"2026-04-12","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"The Gap (1447\u20131580)","item":"https://vanvlaenderen.org/research/gap-dossier"}]}`}} />
      </Helmet>

      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${meetjeslandMap})`, backgroundPosition: 'center center' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Research Dossier</div>
          <h1>The Documentary Gap</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            1447&ndash;1580. The span between the last confirmed comital-line bearer and the first Meetjesland parish generation. This dossier names the gap, records what has been searched, and tracks the archival work required to close it.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Research Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated June 2026</div>
        </div>

        {/* ── Introductory note ──────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>About this dossier</span>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            This dossier documents what is currently unknown. A gap of more than 130 years separates
            the last confirmed bearer of the surname in Victor's comital line (1447) from the earliest
            confirmed Van Vlaenderen generation in the Meetjesland parish registers; the parallel Praet
            line is documented to its 1591 terminus, but no record connects either line to the parish
            cluster. Naming the gap precisely, recording what has been searched, and identifying the
            archival targets most likely to close it is itself a research contribution. This page will
            be updated as evidence emerges.
          </p>
          <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid rgba(232, 184, 48, 0.1)', paddingTop: '1rem' }}>
            <strong>Evidence levels</strong> follow the same four-tier framework used throughout the research dossiers:
            <strong> Directly Attested</strong> (primary source; quoted or in hand),
            <strong> Strongly Corroborated</strong> (concordant published sources),
            <strong> Probable</strong> (source-based; fuller inspection pending),
            <strong> Hypothesis</strong> (inference proposed for archival testing).
          </p>
        </section>

        {/* ── The Problem ───────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Problem</h2>
          <p>
            The Van Vlaenderen research has two well-documented clusters separated by a substantial chronological gap.
          </p>
          <p>
            <strong>The lower anchor</strong> — the Meetjesland parish cluster — is well established from the 1580s onward.
            The earliest generation in the documented American line is Jeremiah van Vlaenderen, born approximately 1575
            in the Meetjesland. The cluster concentrates in Waarschoot, Oostwinkel, Bassevelde, and adjacent parishes,
            with continuous parish-record coverage from the 1580s through Charles Louis van Vlaenderen's emigration in 1875.
            (The 1547 Bruges records in TBO 184, formerly read on this page as an early extension of this commoner anchor,
            are now identified as the wardship file of the Praet line's cadet branch and belong to the upper anchor instead
            &mdash; see the evidence section below.)
          </p>
          <p>
            <strong>The upper anchor is not a single line but two</strong>, both descending from Louis II de Male
            and both documented using <em>van Vlaenderen</em> as a hereditary surname.
          </p>
          <p>
            <em>Victor's line.</em> Victor van Vlaenderen's three natural sons &mdash; Lodewyc, Janne, and Adam &mdash;
            are directly attested across three charters spanning 1427 to 1447. Adam van Vlandren is the last confirmed
            bearer of the surname in this line, his final attestation being a charter of 18 March 1447 N.S.
            After that date, no further record of any of Victor's sons has been located in any source yet consulted.
            The gap between Adam's last attestation and the lower anchor is more than 130 years.
          </p>
          <p>
            <em>The Praet line.</em> Louis Friese van Vlaenderen (d. Nicopolis, 1396) founded a parallel
            comital-bastard branch whose surname use is documented across seven generations. The
            <strong> senior direct line</strong> failed when Jan II van Vlaenderen died without issue on
            10 December 1545, predeceasing his father Lodewijk IV &mdash; but the line did not end there.
            The lordship and the surname passed to a documented collateral branch: Joos (Josse) van
            Vlaenderen, son of Lodewijk II (d. before 30 Nov 1545, m. Martina van Moerkerke) &rarr; his son Jacob van
            Vlaanderen (d. 1566), who received Praet and Woestijne at Aalter by act of 25 September 1550 and married
            Catharina van Boetzelaer &rarr; Lodewijk V van Vlaanderen, who died sonless on
            31 October 1591, in Calvinist exile &mdash; the last male of the titled line, with whom the
            surname in that branch ends (Verhoustraete 1967, pp. 101&ndash;113<Cite n={2} text={CITES[2]} />; Serrure 1863<Cite n={3} text={CITES[3]} />). The titled
            Praet line is therefore documented to 1591, directly overlapping the first parish-record
            generation of the Meetjesland cluster.
          </p>
          <p>
            The gap, precisely stated, is not a single span but a structural problem: two comital lines
            bearing the surname are documented above the gap &mdash; Victor's to 1447, the Praet line to
            1591; a commoner cluster bearing the surname is documented in the parish registers from the
            1580s; and no record has yet been located connecting either upper line to the lower cluster.
          </p>
        </section>

        {/* ── Knesselare Charter ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The 1517 Knesselare Charter &mdash; Closest Known Bridge <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`}>Probable</span></h2>
          <p>
            The single most significant lead for the gap period is a charter
            of 1517 recording Lodewijk IV van Vlaenderen holding six fiefs at Knesselare from
            the seigneurie of Wessegem. The charter itself has not yet been examined &mdash; the record
            reaches this project at third hand (see the archival note below) &mdash; so the claim is carried
            as Probable pending direct verification.
          </p>
          <p>
            Knesselare sits geographically between the Praet lordship (Oedelem/Beernem) and the core
            Van Vlaenderen Meetjesland cluster. The Wessegem seigneurie is the same lordship held by
            Victor van Vlaenderen and his sons in the 15th century. This charter therefore places a
            Praet-line van Vlaenderen in direct territorial contact with the research zone, holding rights
            derived from Victor's former lordship, 58 years before Jeremiah's estimated birth.
          </p>
          <p>
            This charter does not establish a family connection between the Praet van Vlaenderens and
            the commoner Van Vlaenderen cluster. But it confirms that the two lines were operating in
            overlapping territory during the gap period, and that the Wessegem seigneurie &mdash; the
            geographic and genealogical anchor of the entire research &mdash; remained in van Vlaenderen
            hands well into the 16th century.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            <strong>Archival note:</strong> known to the project through De Raadt, <em>Sceaux armori&eacute;s
            des Pays-Bas</em>, vol. I (1897), p. 456, as cited in C. Cawley, &lsquo;Medieval Lands&rsquo; (FMG).<Cite n={6} text={CITES[6]} />
            Neither the De Raadt volume nor the underlying archive has yet been directly consulted.
          </p>
        </section>

        {/* ── Evidence from the Gap Period ──────────────────────────── */}
        <section className={styles.section}>
          <h2>Evidence from the Gap Period</h2>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
            Bruges State Archives, TBO 184, bundles 21300&ndash;21302 (1545&ndash;49) &mdash; the Honnelede wardship file <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h3>
          <p>
            Wardship and estate records naming Joos van Vlaenderen and his minor sons Jacob and Phillip
            (Phelips).<Cite n={1} text={CITES[1]} /> An earlier version of this page read these bundles as the earliest attestations
            of the Meetjesland commoner cluster, with &lsquo;no connection to either comital line
            established.&rsquo; That reading is superseded: the family of this file is now identified as
            the <strong>Praet line's cadet branch</strong>. Serrure 1863 names Joos's children Jacob,
            Philips, and Philippote; the Gruuthuse marriage anchors Joos as a son of Lodewijk II; and the
            ward Jacob is the same Jacob van Vlaanderen who received Praet and Woestijne at Aalter by act
            of 25 September 1550 (Verhoustraete 1967). The identification is Strongly Corroborated.<Cite n={7} text={CITES[7]} />
            These records therefore belong to the gap's <em>upper</em> (comital) anchor, not its lower
            (commoner) one.
          </p>
          <p>
            The file also preserves the single most consequential gap-period datapoint for the cadet
            question: a 1547&ndash;48 entry concerning the younger ward, <em>&lsquo;nopende Phelipe van
            Vlaendren &hellip; In Lande van Hollandt ende Zeelandt&rsquo;</em> &mdash; a legal matter in
            Holland-Zeeland concerning Philips (RAB TBO 184 nr. 21300, Rekening B, fol. 16r). Philips is
            last attested there, around 1547&ndash;48; see the cadet-frontier section below.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            <strong>Archival signature:</strong> Rijksarchief Brugge, Brugse Vrije, TBO 184, nrs. 21300&ndash;21302.
            Consulted April 2026. Reference: case 2026/0451.
          </p>
        </section>

        {/* ── Title-Loss ≠ Male-Line Extinction: The Cadet Frontier ──── */}
        <section className={styles.section}>
          <h2>Title-Loss Is Not Male-Line Extinction: The Cadet Frontier</h2>
          <p>
            The Praet line's documented end in 1591 is the end of the <em>titled</em> line. It is not a
            male-line-extinction claim, and the distinction reframes the gap question in three steps.
          </p>
          <p>
            <strong>Cadet survival is a demonstrated mechanism in this family</strong>{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>.
            When the senior Praet line failed in 1545 (Jan II dying before his father), the lordship and
            the surname did not die: they passed to the collateral branch of Joos van Vlaenderen, whose
            son Jacob received Praet and Woestijne in 1550 and whose grandson Lodewijk V carried the line
            to 1591 (Verhoustraete 1967; Serrure 1863; RAB TBO 184 nrs. 21300&ndash;21302). The line
            demonstrably survived a senior failure once, through a cadet. That the cadet branch then also
            went sonless does not retract the mechanism &mdash; it means the question moves one
            cadet-degree further out.
          </p>
          <p>
            <strong>The 1591 end was over-determined</strong>{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>.
            Lodewijk V's sonless death coincided with childlessness (Maria van Marnix died childless in
            1580), debt (the forced sale of the Praet/Aalter estate), confiscation (the lordships
            sequestered during Catharina van Boetzelaer's Calvinist banishment), and religious exile
            (Lodewijk V was a Calvinist who died abroad). A title leaving a surname under that confluence
            carries no information about whether agnatic cadets survived elsewhere &mdash; a poorer,
            untitled, possibly Protestant cadet would have had neither the standing nor the confessional
            eligibility to claim a Flemish Catholic fief in 1591 (Verhoustraete 1967; Valkeneers &amp;
            Soen 2014<Cite n={5} text={CITES[5]} />).
          </p>
          <p>
            <strong>The named frontier.</strong> The title-focused sources follow only the title-holder
            and are silent &mdash; not negative &mdash; on the non-inheriting cadets. Three stand
            untraced: (1) <strong>Philips van Vlaenderen</strong>, Joos's younger son, a ward of the
            Honnelede file, last attested around 1547&ndash;48 in a legal matter <em>'In Lande van
            Hollandt ende Zeelandt'</em> (RAB TBO 184 nr. 21300, Rekening B, fol. 16r) &mdash; plausibly
            connected, through his maternal van Moerckercke line, to the Mijnsheerenland van Moerkerken
            interests the senior line litigated before the Hof van Holland (Lauwens 2021<Cite n={4} text={CITES[4]} />); (2) the
            <strong> three unnamed children of Lodewijk II</strong> &mdash; Verhoustraete records six
            children but names only three; and (3) the issue of Joos's daughter{' '}
            <strong>Philippote</strong> (female-line, so not surname-bearing, noted for completeness).
            Philips is the prime untraced-cadet lead.
          </p>
          <p>
            <strong>A Protestant northern emigration of the Philips cadet</strong>{' '}
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span>.
            The mechanism that would produce a surviving, untitled, record-elusive agnatic cadet: after
            the Habsburg-Catholic reconquest of Flanders, the family's Protestants were banished,
            confiscated, or exiled, and Philips already had a documented legal foothold in
            Holland-Zeeland. A Protestant Philips &mdash; or his children &mdash; would have been far more
            likely to relocate to the Dutch Republic, where he would be invisible to the Flemish
            title-record but traceable in Dutch records. This is offered strictly as a hypothesis to
            test, and the documented negatives must be stated honestly: the Nationaal Archief
            finding-aids, checked in June 2026, contain <em>no</em> Philips and <em>no</em> van
            Vlaenderen in the Hof van Holland inventory beyond a single 1589 item concerning Petronella
            van Praet, and none in the Mijnsheerenland heerlijkheid records; and the post-1585 Zeeland
            'van Vlaenderen' cluster is the expected naming signature of the Flemish refugee wave, not a
            Philips signal. The decisive tests are archival: the Hof van Holland litigation series and
            the Mijnsheerenland succession register, neither name-indexed online.
          </p>
          <p style={{ background: 'rgba(212, 168, 48, 0.06)', border: '1px solid rgba(212, 168, 48, 0.2)', borderRadius: '4px', padding: '1rem' }}>
            <strong>The load-bearing caveat.</strong> Any surviving Philips line would be a{' '}
            <em>separate</em> comital-agnatic survival and a Y-DNA-relevant patriline lead &mdash;{' '}
            <strong>not</strong> automatically this project's American / Meetjesland line. Philips bears
            on the comital-survival and Y-DNA questions; he is not (yet) a bridge across the gap this
            dossier documents, and nothing on this page should be read as presenting him as one.
          </p>
        </section>

        {/* ── Search Record ─────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Search Record &mdash; Negative and Partial Results</h2>
          <p>
            The following sources have been searched without producing a bridging record:
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Debrabandere, <em>Woordenboek van de familienamen in Zeeland</em> (WFZ), 2009</h3>
          <p>
            Searched in full. One attestation in Zeeland (Aardenburg, 1309&ndash;10) refers to Count Robert
            de Béthune himself &mdash; Bucket 2 titular usage, not a surname bearer. No hereditary
            van Vlaenderen cluster in Zeeland. Strengthens East Flanders as the surname's geographic core.<Cite n={9} text={CITES[9]} />
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Debrabandere, <em>Woordenboek van de familienamen in België en Noord-Frankrijk</em> (WFB2), 2003</h3>
          <p>
            Van Vlaenderen entry read via CBG Familienamenbank. Pure place-name classification; three
            attestations (1280, 1376, 1426), all pre-cluster, none in the Meetjesland. Entry uncorrected
            in 2010 and 2019 corrigenda. Does not engage with the East Flanders parish-record concentration.<Cite n={8} text={CITES[8]} />
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>AGATHA portal &mdash; Staten van Goed searches, March 2026</h3>
          <p>
            Searched Ambacht Assenede I &amp; II, Boekhoute I&ndash;III, Waarschoot/Oostwinkel/Ronsele,
            and Heerlijkheid Praet met Oedelem for Van Vlaenderen entries to build the Rijksarchief Gent
            request list. Results being processed.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Familiekunde Vlaanderen, Aalter &mdash; visit March 2026</h3>
          <p>
            Archivist absent during visit. Follow-up correspondence pending.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Rijksarchief Gent &mdash; Goal 1 and Goal 2 threads (appointment March 31, 2026)</h3>
          <p>
            Twenty documents requested across two research threads. Results being processed.
            Any record naming a Van Vlaenderen individual between 1447 and 1580 in the Meetjesland zone would be significant.
          </p>
        </section>

        {/* ── Active Archival Targets ───────────────────────────────── */}
        <section className={styles.section}>
          <h2>Active Archival Targets</h2>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            1. Gysseling &amp; Debrabandere, <em>Persoonsnamen in de Vier Ambachten</em> (GYSS. 1999), KCTD vol. 71
          </h3>
          <p>
            Personal names in Boekhoute, Assenede, Axel, and Hulst &mdash; the heart of the research zone &mdash;
            in the 14th and 15th centuries. Free via the KCTD portal at{' '}
            <a href="https://openjournals.ugent.be/hctd" target="_blank" rel="noopener noreferrer" className={researchStyles.refLink}>openjournals.ugent.be/hctd</a>.
            The single highest-priority unread source.<Cite n={10} text={CITES[10]} />
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            2. The non-inheriting Praet cadets &mdash; Philips and the unnamed children of Lodewijk II
          </h3>
          <p>
            The titled continuation of Joos's branch is now traced to its 1591 terminus (Verhoustraete 1967),
            so the live target is the untitled cadets the title-record never follows: Philips van Vlaenderen
            (last attested 1547&ndash;48, with the Holland-Zeeland legal matter of RAB TBO 184 nr. 21300,
            Rekening B, fol. 16r), the three unnamed children of Lodewijk II, and Philippote's issue.
            For Philips, the decisive series are the Hof van Holland litigation records and the
            Mijnsheerenland van Moerkerken succession register (neither name-indexed online); for the
            Flemish cadets, parish, estate, and leenhof records 1545&ndash;1620, whether under{' '}
            <em>van Vlaenderen</em>, <em>de Flandre</em>, or a variant form. See the cadet-frontier
            section above for the scope caveat.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            3. Rijksarchief Gent &mdash; Raad van Vlaanderen records
          </h3>
          <p>
            Court records of the Council of Flanders. Family disputes, property litigation, and testamentary
            proceedings often preserved surname continuity across generations that parish records missed.
            Recommended next archival target for both the Victor and Praet threads.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            4. Leenregisters &mdash; Kasselrij Oudburg and Brugse Vrije
          </h3>
          <p>
            The Wessegem seigneurie passed through van Vlaenderen hands from Victor through Lodewijk IV
            (confirmed 1517). Leenregisters tracking those holdings may record van Vlaenderen individuals
            through the gap period. The chain of Wessegem tenure is itself an archival thread worth
            following independently of the surname record.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            5. Verbeurde Goederen 1382 (VG), ARA Brussels, Rekenkamer 1163
          </h3>
          <p>
            Confiscated goods list compiled immediately after the Ghent rebellion of 1382, during Louis II
            de Male's final years. May contain van Vlaenderen individuals from the comital milieu. Requires
            ARA Brussels visit or remote request.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            6. Limburg-Stirum, <em>Cartulaire de Louis de Male</em> (CLM), Bruges, 1898&ndash;1901
          </h3>
          <p>
            Primary cartulary for Louis II de Male's reign with an alphabetical personal names index.
            Explicitly cited in the WFB2 apparatus. Held at{' '}
            <a href="http://lib.ugent.be/catalog/rug01:002005149" target="_blank" rel="noopener noreferrer" className={researchStyles.refLink}>Ghent University Library</a>.
            Most direct route to additional 14th-century charter evidence for either comital line.<Cite n={11} text={CITES[11]} />
          </p>
        </section>

        {/* ── Working Hypotheses ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Working Hypotheses</h2>
          <p>
            Four hypotheses are currently viable. The first three address the Meetjesland
            documentary gap directly; the fourth is a parallel question about a separate
            West Flanders surname presence that overlaps with but is distinct from this
            dossier&apos;s primary question. None of the four is mutually exclusive
            with the others &mdash; the parish-register cluster could represent a mixed population
            drawing from more than one origin.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
            Hypothesis A &mdash; Descent from Victor's line <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span>
          </h3>
          <p>
            One of Victor's three sons (most probably Adam, the last attested) had descendants who settled
            in the Meetjesland as the family's comital identity faded into the commoner population.
            The surname persisted as a hereditary identifier. The gap would be closed by locating estate
            or leenregister records naming van Vlaenderen individuals in the Ursel/Assenede/Boekhoute
            zone between 1447 and 1547.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Current status: plausible. Not evidenced. Gap of more than 130 years.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>
            Hypothesis B &mdash; Descent from the Praet line <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span>
          </h3>
          <p>
            The Praet line, founded by Louis Friese, continued for seven attested generations
            and was anchored at the Vrijhof at Aalter &mdash; squarely within the Meetjesland &mdash;
            from the 1516 marriage of Lodewijk IV van Vlaenderen to Jossine van Praet through to
            the Vrijhof's destruction by Geuzen forces around 1590. Lodewijk IV's tomb is at Aalter;
            his successor Jacob van Vlaanderen (Joos's son, who received Praet and Woestijne by act
            of 25 September 1550) and his wife Catharina van Boetzelaer held the Vrijhof, and
            Catharina's exile in 1567 marks the point at which the titled line's residence at Aalter
            ended. The titled line itself is now traced to its terminus &mdash; Lodewijk V's sonless
            death in 1591 &mdash; so under this hypothesis Jeremiah's generation descends from one of
            the <em>non-inheriting</em> Praet cadets: Philips, the unnamed children of Lodewijk II,
            or a less-documented Aalter-area cadet (see the cadet-frontier section above). The gap
            would be closed by tracing those cadets into parish, estate, or leenhof records
            1545&ndash;1620.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Current status: substantially strengthened by the April 2026 Vredius direct-reading and
            reframed by the June 2026 Verhoustraete reading. Aalter is an attested Praet residence
            for the period 1516&ndash;1590, eliminating the previous &ldquo;Brabant-only&rdquo;
            framing of the Praet line. The post-1545 generation is now resolved: Jacob is Joos's son
            and inherited in 1550; his son Lodewijk V died sonless in 1591 (Verhoustraete 1967;
            Valkeneers &amp; Soen 2014). The open territory is the non-inheriting cadets &mdash; and
            the load-bearing caveat from the cadet-frontier section applies: a surviving Philips line
            would be a separate comital-agnatic survival, not automatically the Meetjesland line. Note:
            in late medieval and early modern records, the alternation between <em>de Flandre</em>
            and <em>van Vlaenderen</em> often reflects the scribe's working language (Latin/French
            vs. Dutch) rather than the family's chosen identity &mdash; the same individual can appear
            under both forms in different documents.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>
            Hypothesis C &mdash; Independent Bucket 4 emergence <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span>
          </h3>
          <p>
            The Meetjesland Van Vlaenderens acquired the surname independently of either comital line &mdash;
            through the Bucket 3 mechanism (an office-holder's son inheriting the name rather than the
            office) or through geographic association with the former comital territory. Under this
            hypothesis no documentary chain connects the clusters and the gap is structural rather
            than resolvable by archival work alone.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Current status: cannot be excluded. Y-DNA testing is the primary tool for distinguishing
            Hypothesis C from Hypotheses A and B.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>
            Hypothesis D &mdash; A separate West Flanders origin <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span>
          </h3>
          <p>
            This hypothesis addresses a question parallel to the Meetjesland gap rather than
            competing with Hypotheses A&ndash;C. The historical West Flanders / Ypres&ndash;Cassel
            surname presence may be the product of its own founding event, distinct from the
            Meetjesland question this dossier primarily addresses. Two specific Vredius-attested
            Maleanus figures provide West Flanders bridge candidates:{' '}
            <strong>Robert van Vlaendren of Elverdinghe</strong> (d. 21 January 1434), Counsellor
            and Chamberlain to Jean the Fearless and Philip the Good, whose natural son Jean was
            legitimised by Philip the Good at Hesdin on the last day of July 1448 (mother
            Marie de le Voerde); and <strong>Karle van Vlaendren of Gruterssale</strong>
            (d. 15 September 1491, tomb at Langemark), whose Vredius-attested tombstone reads
            <em> filius M&apos;her Robrecht</em> &mdash; son of Sir Robert &mdash; though whether
            this refers to Robert of Elverdinghe or to a different Robert remains unresolved.
            Karle's line exits the surname through his daughter's marriage into the de Crane
            family; the 1448 Jean legitimisation has no traced subsequent descent in the
            records examined. The Drincham line (Jan sans terre) remains the strongest progenitor
            candidate for the broader French Flanders / Volckerinckhove cluster; Robert and Karle
            would account for a distinct, smaller West Flanders / Ypres-area presence.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Current status: documentary basis established by the April 2026 Vredius direct-reading;
            downstream descent for both Jean (1448 legitimation) and Karle (d. 1491) remains
            untraced. Hypothesis D does not directly address the Meetjesland gap but is recorded
            here for completeness, as the West Flanders bridge candidates are part of the same
            Maleanus bastard cohort and the questions are parallel.
          </p>
        </section>

        {/* ── Y-DNA ─────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Y-DNA as a Parallel Verification Strategy</h2>
          <p>
            Documentary research alone cannot currently distinguish between the three Meetjesland-gap
            hypotheses (A, B, and C). Y-DNA testing offers a complementary path: if additional
            male-line Van Vlaenderen descendants can be recruited for comparison, a shared haplogroup
            across geographically separated lines would support a common patrilineal ancestor
            (Hypotheses A or B), while divergent haplogroups between branches would support independent
            emergence (Hypothesis C). Hypothesis D &mdash; the parallel West Flanders question &mdash;
            would similarly be informed by recruiting testers from any surviving lines descended from
            Robert van Vlaendren of Elverdinghe or Karle of Gruterssale. The American line has been
            tested (haplogroup R-FT1573, Big Y-700); no close database matches have been found to date.
            A documented descendant of Philips van Vlaenderen (the cadet-frontier lead above) would
            supply a comparison line for the comital patriline itself &mdash; though a result there
            bears on the comital-survival question, not automatically on the American line's descent.
          </p>
          <p>
            The full genetic genealogy project &mdash; including haplogroup details, methodology, and
            how to participate &mdash; is documented on the{' '}
            <Link
              to="/dna"
              style={{ color: 'var(--gold)', textDecoration: 'underline', font: 'inherit' }}
            >
              DNA page
            </Link>.
          </p>
        </section>

        {/* ── Notes & Bibliography ──────────────────────────────────── */}
        <section className={researchStyles.referenceList}>
          <h2>Notes &amp; Bibliography</h2>
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

      </div>
    </div>
  );
}
