import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import meetjeslandMap from '../assets/images/heraldic/meetjesland-map.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Introductory note ──────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>About this dossier</span>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            This dossier documents what is currently unknown. A gap of approximately 130 years separates
            the last confirmed bearers of the van Vlaenderen surname in the medieval comital record from
            the earliest confirmed Van Vlaenderen generation in the Meetjesland parish registers. Naming
            the gap precisely, recording what has been searched, and identifying the archival targets most
            likely to close it is itself a research contribution. This page will be updated as evidence emerges.
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
            with continuous parish-record coverage from the 1580s through Charles Louis van Vlaenderen's emigration in 1881.
            The 1547 Bruges estate records (TBO 184, bundle 21300) push this anchor back further &mdash; placing
            Van Vlaenderen individuals in the same geographic zone approximately 30 years before Jeremiah's birth.
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
            The gap between Adam's last attestation and the lower anchor is approximately 130 years.
          </p>
          <p>
            <em>The Praet line.</em> Louis Friese van Vlaenderen (d. Nicopolis, 1396) founded a parallel
            comital-bastard branch whose surname use is documented across six generations through to
            Jan II van Vlaenderen (d. 10 December 1545). The legitimate Praet male line ends with Jan II,
            who died without issue. However, a documented cadet branch &mdash; Josse de Flandre, son of
            Lodewijk II and grandson of Johan I, married Martina van Moerkerke &mdash; survived until at
            least 1592, directly overlapping with the first parish-record generation of the Meetjesland
            cluster. The surname form used by Josse's descendants has not yet been confirmed in sources
            currently reviewed, but the branch is documented and the question remains open.
          </p>
          <p>
            The gap, precisely stated, is not a single span but a structural problem: two comital lines
            bearing the surname are documented above 1545; a commoner cluster bearing the surname is
            documented below 1547; and no record has yet been located connecting either upper line to
            the lower cluster.
          </p>
        </section>

        {/* ── Knesselare Charter ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The 1517 Knesselare Charter &mdash; Closest Known Bridge <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            The single most significant piece of evidence currently in hand for the gap period is a charter
            of 1517 [FMG 891] recording Lodewijk IV van Vlaenderen holding six fiefs at Knesselare from
            the seigneurie of Wessegem.
          </p>
          <p>
            Knesselare sits geographically between the Praet lordship (Oedelem/Beernem) and the core
            Van Vlaenderen Meetjesland cluster. The Wessegem seigneurie is the same lordship held by
            Victor van Vlaenderen and his sons in the 15th century. This charter therefore places a
            Praet-line van Vlaenderen in direct territorial contact with the research zone, holding rights
            derived from Victor's former lordship, 30 years before the TBO 184 cluster and 58 years
            before Jeremiah's estimated birth.
          </p>
          <p>
            This charter does not establish a family connection between the Praet van Vlaenderens and
            the commoner Van Vlaenderen cluster. But it confirms that the two lines were operating in
            overlapping territory during the gap period, and that the Wessegem seigneurie &mdash; the
            geographic and genealogical anchor of the entire research &mdash; remained in van Vlaenderen
            hands well into the 16th century.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            <strong>Archival note:</strong> cited in FMG MedLands [891] via Vredius (1643).
            Underlying archive not yet directly consulted.
          </p>
        </section>

        {/* ── Evidence from the Gap Period ──────────────────────────── */}
        <section className={styles.section}>
          <h2>Evidence from the Gap Period</h2>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
            Bruges State Archives, TBO 184, bundle 21300 (1547) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h3>
          <p>
            Estate records for Joos, Jacob, and Phillip van Vlaenderen, dated 1547. Jacob's land is
            described as adjacent to Phillip's &mdash; a strong indicator of family relationship. These
            are the earliest primary sources yet located for the Meetjesland cluster and predate the
            first parish-record generation by approximately 30 years. They are Bucket 4 hereditary
            surname attestations. No connection to either comital line is established.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            <strong>Archival signature:</strong> Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21300.
            Consulted April 2026. Reference: case 2026/0451.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>
            Bruges State Archives, TBO 184, bundle 21302 (1549) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>
          </h3>
          <p>
            Guardianship record for Joos van Vlaenderen, 1549. Confirms the same Meetjesland cluster
            two years after bundle 21300.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            <strong>Archival signature:</strong> Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21302.
            Consulted April 2026. Reference: case 2026/0451.
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
            van Vlaenderen cluster in Zeeland. Strengthens East Flanders as the surname's geographic core.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Debrabandere, <em>Woordenboek van de familienamen in België en Noord-Frankrijk</em> (WFB2), 2003</h3>
          <p>
            Van Vlaenderen entry read via CBG Familienamenbank. Pure place-name classification; three
            attestations (1280, 1376, 1426), all pre-cluster, none in the Meetjesland. Entry uncorrected
            in 2010 and 2019 corrigenda. Does not engage with the East Flanders parish-record concentration.
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
            The single highest-priority unread source.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
            2. Buylaert &mdash; Josse de Flandre cadet branch documentation
          </h3>
          <p>
            Josse de Flandre's line (son of Lodewijk II, grandson of Johan I) is documented by Buylaert [FMG 881, 882] as surviving
            until at least 1592 &mdash; directly overlapping with the first Meetjesland parish-record generation.
            The underlying Buylaert prosopographical sources have not been consulted directly. Tracing Josse's
            children and grandchildren into parish or estate records, whether under <em>van Vlaenderen</em>,{' '}
            <em>de Flandre</em>, or a variant form, is the shortest archival path to closing the Praet gap.
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
            Most direct route to additional 14th-century charter evidence for either comital line.
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
            with the others &mdash; the 1547 TBO 184 cluster could represent a mixed population
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
            Current status: plausible. Not evidenced. ~130-year gap.
          </p>

          <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.75rem', marginTop: '2rem' }}>
            Hypothesis B &mdash; Descent from the Praet line <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelHypothesis}`}>Hypothesis</span>
          </h3>
          <p>
            The Praet line, founded by Louis Friese, continued for at least six attested generations
            and was anchored at the Vrijhof at Aalter &mdash; squarely within the Meetjesland &mdash;
            from the 1516 marriage of Lodewijk IV van Vlaenderen to Jossine van Praet through to
            the Vrijhof's destruction by Geuzen forces around 1590. Lodewijk IV's tomb is at Aalter;
            his successor Jacob van Vlaanderen and his wife Catharina van Boetzelaer held the Vrijhof
            from 1552, and Catharina's exile in 1567 marks the point at which the senior line's
            residence at Aalter ended. The Josse de Flandre cadet branch, documented to at least
            1592 (Buylaert), represents an additional Praet-line van Vlaenderen population that
            may have survived into the parish-record period. Under this hypothesis the TBO 184
            individuals and/or Jeremiah's generation descend either from Josse's branch or from
            a less-documented Aalter-area Praet cadet. The gap would be closed by tracing Josse's
            descendants through Buylaert's sources, and by searching Aalter-area parish and
            leenhof records 1580&ndash;1620 for surname continuations after the Vrijhof's destruction.
          </p>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Current status: substantially strengthened by the April 2026 Vredius direct-reading.
            Aalter is now an attested Praet residence for the period 1516&ndash;1590, eliminating
            the previous &ldquo;Brabant-only&rdquo; framing of the Praet line. The post-1545
            generation (Jacob, Catharina, son Lodewijk V) is documented but the parentage of Jacob
            and the fate of any Lodewijk V descendants remain open research questions pending
            consultation of Buylaert 2011 (<em>Repertorium van de Vlaamse adel</em>, pp. 740&ndash;746)
            and Decavele 2004. Josse's branch continuation post-1592 not yet established. Note:
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
            <em> filius M&apos;her Robzecht</em> &mdash; son of Sir Robert &mdash; though whether
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
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21300 (1547). Estate records, Joos, Jacob,
            and Phillip van Vlaenderen. Consulted April 2026. Reference: case 2026/0451.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Rijksarchief Brugge, Brugse Vrije, TBO 184, nr. 21302 (1549). Guardianship record,
            Joos van Vlaenderen. Consulted April 2026. Reference: case 2026/0451.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025.
            Adam van Vlaendren [855]; Lodewijk IV Knesselare charter [891]; Josse de Flandre [881, 882].{' '}
            <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
              Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut
            </a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            Buylaert, Frederik. Prosopographical research on Flemish nobility. Cited via FMG MedLands
            [881, 882] for Josse de Flandre and cadet Praet branches. Underlying sources not yet
            directly consulted.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Debrabandere, Frans. <em>Woordenboek van de familienamen in België en Noord-Frankrijk.</em>{' '}
            LJ Veen, 2003. Van Vlaenderen entry via CBG Familienamenbank.{' '}
            <a href="https://www.cbgfamilienamen.nl" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
              cbgfamilienamen.nl
            </a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Debrabandere, Frans. <em>Woordenboek van de familienamen in Zeeland.</em> 2009.
            Searched in full &mdash; no hereditary surname bearers.{' '}
            <a href="https://www.naamkunde.net/wp-content/uploads/2010/01/WZF-Debrabandere.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
              Free PDF, naamkunde.net
            </a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            Gysseling, M. &amp; Debrabandere, F. <em>Persoonsnamen in de Vier Ambachten, 14e en 15e eeuw.</em>{' '}
            KCTD vol. 71 (1999), pp. 491&ndash;588.{' '}
            <a href="https://openjournals.ugent.be/hctd" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
              Free via KCTD portal
            </a>{' '}
            &mdash; not yet read.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>8.</span>
            Limburg-Stirum, Th. de. <em>Cartulaire de Louis de Male, comte de Flandre.</em>{' '}
            Bruges, 1898&ndash;1901. Held at{' '}
            <a href="http://lib.ugent.be/catalog/rug01:002005149" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">
              Ghent University Library
            </a>{' '}
            &mdash; not yet consulted.
          </div>
        </section>

      </div>
    </div>
  );
}
