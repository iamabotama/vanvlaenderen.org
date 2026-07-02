import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

interface ReadingEntry {
  author: string;
  year: string;
  title: string;
  note: string;
  links?: { label: string; url: string }[];
  availability?: string;
}

const READING_LIST: { group: string; entries: ReadingEntry[] }[] = [
  {
    group: 'The County of Flanders and the Comital House',
    entries: [
      {
        author: 'Warlop, E.',
        year: '1975–76',
        title: 'The Flemish Nobility Before 1300',
        note: 'The foundational English-language prosopographical study of Flemish noble families. The alphabetic repertory of noble families in volumes 3–4 is an essential reference for tracing any lineage with pre-1300 roots in Flanders, including the van Praet family. Available in four volumes.',
        links: [
          { label: 'Amazon', url: 'https://www.amazon.com/s?k=Warlop+Flemish+Nobility+Before+1300' },
          { label: 'Free download (Internet Archive)', url: 'https://archive.org/details/flemishnobilityb0002unse_q5k3' },
          { label: 'Used copies (AbeBooks)', url: 'https://www.abebooks.com/book-search/title/flemish-nobility-before-1300/' },
        ],
      },
      {
        author: 'Prevenier, W. & Blockmans, W.',
        year: '1986',
        title: 'The Burgundian Netherlands',
        note: 'The standard illustrated survey of the Burgundian Low Countries 1380–1530 — exactly the period in which the van Vlaenderen surname crystallises and the Praet line flourishes. Provides essential political and cultural context for Louis de Male and his bastard children. Richly illustrated.',
        links: [
          { label: 'Amazon', url: 'https://www.amazon.com/Burgundian-Netherlands-Walter-Prevenier/dp/0521306116' },
          { label: 'Free download (Internet Archive)', url: 'https://archive.org/details/burgundiannether0000prev' },
          { label: 'Used copies (AbeBooks)', url: 'https://www.abebooks.com/9780521306119/Burgundian-Netherlands-Prevenier-Walter-Wim-0521306116/plp' },
        ],
      },
      {
        author: 'Blockmans, W. & Prevenier, W.',
        year: '1999',
        title: 'The Promised Lands: The Low Countries Under Burgundian Rule, 1369–1530',
        note: 'The accessible single-volume companion to The Burgundian Netherlands. Organised thematically around the key problems of Burgundian history — state formation, social structure, urban economy — rather than as a chronological narrative. Better suited as a first read than the 1986 volume.',
        links: [
          { label: 'Amazon', url: 'https://www.amazon.com/Promised-Lands-Countries-Burgundian-Rule/dp/0812216504' },
          { label: 'Used copies (AbeBooks)', url: 'https://www.abebooks.com/book-search/title/promised-lands-low-countries-under-burgundian/' },
        ],
      },
    ],
  },
  {
    group: 'Flemish Nobility and Social Structure',
    entries: [
      {
        author: 'Buylaert, F.',
        year: '2010',
        title: 'Eeuwen van ambitie: De adel in laatmiddeleeuws Vlaanderen',
        note: 'The most important recent study of the Flemish nobility in the 14th–15th centuries, by the same Buylaert whose Repertorium van de Vlaamse adel (2011) documents the Josse de Flandre cadet branch. Demonstrates the nobility\'s adaptability and social mobility during exactly the period our research covers. In Dutch. An English-language article by the same author ("The late medieval crisis of the nobility reconsidered: the case of Flanders", Journal of Social History 45, 2012) covers the main arguments and is freely available.',
        links: [
          { label: 'Amazon', url: 'https://www.amazon.com/Eeuwen-Van-Ambitie-Laatmiddeleeuws-Verhandelingen/dp/9065690751' },
          { label: 'Free download (Academia.edu)', url: 'https://www.academia.edu/2418411/Frederik_Buylaert_Eeuwen_van_ambitie' },
        ],
      },
    ],
  },
  {
    group: 'The Meetjesland: Regional History and Rural Economy',
    entries: [
      {
        author: 'Augustyn, B. & Thoen, E.',
        year: '1987',
        title: '\'Van veen tot bos: Krachtlijnen van de landschapsevolutie van het Noordvlaamse Meetjesland van de 12e tot de 19e eeuw\'',
        note: 'The key article on the landscape history of the northern Flemish Meetjesland from the 12th to the 19th century — covering precisely the geographic area of our research. Documents the transition from peat extraction to the sandy-loam landscape that characterises the area in the parish-record period. In Dutch. Published in Historisch-Geografisch Tijdschrift.',
        availability: 'Not widely available outside Belgian library systems. Can be requested through interlibrary loan or directly from the authors\' institutional repositories at Ghent University.',
      },
      {
        author: 'Stichting Achiel De Vos (ed. J. Taeldeman; subsequently M. Devos)',
        year: '1989–present',
        title: 'Meetjeslandse Toponiemen tot 1600 (series)',
        note: 'Twenty parish monographs and twelve standalone glossaria compiled under the successive scientific editorship of Profs. Johan Taeldeman and Magda Devos at UGent. Approximately 18,000 pre-1600 place-name attestations across the Meetjesland and adjacent Ambachten, drawn from RAG, ARA, SAG, and local archives. The single most relevant corpus for surname-evidence work in the project\'s home region; priority volumes for Van Vlaenderen research are Waarschoot (2017), Oostwinkel-Ronsele (2006), Ursel (2008), Vinderhoute (2001), and Zomergem (1997). Eeklo (1994) and the standalone Bassevelde / Assenede / Oosteeklo glossaria are consulted; the five priority volumes are acquisition pending.',
        links: [
          { label: 'Free access (Stichting Achiel De Vos)', url: 'https://meetjeslandseplaatsnamen.org/digitale-bronnen' },
        ],
      },
    ],
  },
  {
    group: 'Archival Research Methodology and Palaeography',
    entries: [
      {
        author: 'Munby, L.',
        year: '2003',
        title: 'Reading and Understanding Old Documents: A Guide to Palaeography',
        note: 'A practical English-language guide to reading historical handwriting, focused on secretary hand and other scripts common in early modern documents. Useful companion for working through the kinds of documents encountered in Belgian state archives.',
        links: [
          { label: 'Amazon', url: 'https://www.amazon.com/s?k=Munby+Reading+Understanding+Old+Documents+Palaeography' },
          { label: 'Used copies (AbeBooks)', url: 'https://www.abebooks.com/book-search/title/reading-understanding-old-documents/' },
        ],
      },
      {
        author: 'Moens, J.',
        year: 'Various editions',
        title: 'Inleiding tot de historische kritiek',
        note: 'Standard Belgian introduction to historical source criticism and archival methodology. Covers the evaluation of primary sources, dating conventions, and document types encountered in Flemish archives. In Dutch. Available through Ghent University library and Belgian academic publishers.',
      },
    ],
  },
  {
    group: 'Digital Genealogy and Genetic Methods',
    entries: [
      {
        author: 'Bettinger, B. & Wayne, D.',
        year: '2016',
        title: 'Genetic Genealogy in Practice',
        note: 'The National Genealogical Society\'s standard reference for DNA evidence in genealogical research. Covers Y-DNA, autosomal, and mtDNA methods with specific guidance on using DNA to break through brick walls — the primary use case for this project\'s Y-DNA research thread.',
        links: [
          { label: 'Amazon', url: 'https://www.amazon.com/Genetic-Genealogy-Practice-National-Genealogical/dp/1935815296' },
          { label: 'Used copies (AbeBooks)', url: 'https://www.abebooks.com/book-search/title/genetic-genealogy-practice/' },
        ],
      },
    ],
  },
  {
    group: 'Primary Sources and Reference Works',
    entries: [
      {
        author: 'Cawley, C.',
        year: '2025 (v5.0)',
        title: 'MedLands: Flanders, Hainaut (online)',
        note: 'The Foundation for Medieval Genealogy\'s encyclopaedia of territories and noble families in the medieval western world. A tertiary compilation used for orientation and cross-checking, not as a fact-level authority — claims on this site are cited to primary sources and critical editions (see the dossier notes). Free to access online. Version 5.0 updated January 2025.',
        links: [
          { label: 'Free access (FMG)', url: 'https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm' },
        ],
      },
      {
        author: 'Vredius, O. (Olivier de Wrée)',
        year: '1643',
        title: 'Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem, Pars Secunda: Continens Probationes XII posteriorum tabularum',
        note: 'Published in Bruges in 1643, this is the 17th-century primary source compilation that is the direct basis for all bastard-line charter evidence in this project. Tabula XVI, foll. 275–288 covers Victor van Vlaenderen and all collateral bastard lines. Note: Vredius also published a separate Sigilla Comitum Flandriae (Bruges, 1639) — a study of the counts\' seals — which is a different work. The genealogical proofs for bastard lines are in the 1643 Genealogia.',
      },
    ],
  },
  {
    group: 'Heraldry and Sigillography',
    entries: [
      {
        author: 'Nieus, Jean-François',
        year: '2021',
        title: 'Aristocratic seal ownership in twelfth-century Flanders: A world in between',
        note: 'A sigillographic study of noble seal usage in the County of Flanders, 1071–1200. Establishes that territorial designations in the elite Flemish milieu functioned as political and dynastic language, not mere geographic labels — the strongest contextual argument against the pure-toponymy hypothesis for the Van Vlaenderen surname. Key findings: Philip of Alsace places the Flemish lion on the comital seal from 1163; Michael II of Harnes (castellan of Cassel) confirmed at the Dover Recognitio; Baldwin II lord of Praat confirmed c.1190–1200. Preprint; forthcoming in peer-reviewed publication.',
        links: [
          { label: 'Preprint (Academia.edu)', url: 'https://www.academia.edu' },
        ],
        availability: 'Preprint on file with project. Cite as forthcoming until peer-reviewed publication confirmed.',
      },
    ],
  },
];

export default function MethodologyPage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Methodology & Sources — Van Vlaenderen Research | vanvlaenderen.org</title>
        <meta name="description" content="Transcription and translation methodology for the Van Vlaenderen archival research project, plus a curated reading list of primary and secondary sources." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/methodology" />
        <meta property="og:title" content="Methodology & Sources — Van Vlaenderen Research" />
        <meta property="og:description" content="How archival documents are transcribed and translated, and the historiographical sources that underpin the research." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/methodology" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Research Foundations</div>
          <h1>Methodology &amp; Sources</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            How archival documents are read, transcribed, and translated — and the
            published works that form the historiographical foundation for this research.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Research Foundations</h2>
          <div className={researchStyles.dossierMeta}>Updated June 2026</div>
        </div>

        {/* ── Section 1: Transcription & Translation Methodology ── */}
        <section className={styles.section}>
          <h2>Transcription and Translation Methodology</h2>
          <p>
            Archival documents in this project are transcribed using an iterative,
            multi-system approach. Gemini (Google) serves as the primary real-time
            reading tool: integrated directly into the browser, it can analyse document
            images without a separate upload step, allowing the researcher to ask
            questions about specific characters, words, or passages while actively
            zooming and navigating the original scan. This ambient availability makes
            it the natural first pass for difficult passages.
          </p>
          <p>
            Outputs from Gemini are then cross-checked against independent readings
            from Claude (Anthropic), GPT-4 (OpenAI), Transkribus, and Tryleo. Where
            readings converge across systems, confidence is high. Where they diverge,
            the researcher returns to the original image, zooming to individual
            characters and applying knowledge of the letter forms, abbreviations, and
            spelling conventions of the period.
          </p>
          <p>
            Translation follows the same iterative logic. Early modern Dutch and Latin
            passages are translated independently by multiple systems, with the
            researcher cross-checking against known vocabulary, named entities already
            established in the research, and the documentary context. Passages involving
            specialist palaeographic challenges &mdash; secretary hand abbreviations,
            damaged text, unusual personal names &mdash; are treated as uncertain until
            verified by at least two independent readings.
          </p>
          <p>
            Each AI system is given learning samples from the same document hand before
            being asked to transcribe difficult passages, allowing the system to calibrate
            to individual scribal idiosyncrasies. This is the same principle professional
            palaeographers apply when learning a new hand.
          </p>
          <p>
            AI tools in this project are research instruments, not citation sources.
            Every claim on this site traces to a named primary or secondary authority.
            Tool outputs that cannot be verified against a named source are flagged
            as provisional.
          </p>
        </section>

        {/* ── Section 1b: The dual name-form convention ───────────── */}
        <section className={styles.section}>
          <h2>
            Reading the Dual Name-Form: "van Vlaenderen gheseyt van [lordship]"
            <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>
              Strongly Corroborated
            </span>
          </h2>
          <p>
            One naming pattern recurs often enough in the project's sources that it is treated
            as a convention rather than as scribal idiosyncrasy: the bridged dual form
            <em> "van Vlaenderen gheseyt van [lordship]"</em>, in which a single person carries
            both the house-name and a territorial title, explicitly linked by a "called /
            known-as" bridge word (<em>gheseyt / gheseit / gezegd</em>).
          </p>
          <p>
            The form is attested verbatim for at least five distinct bearers, across two
            independent lordship-lineages, in both word-orders, over the span 1466–1522.
            In the Praet line: <em>"Joncheer Antheunis van Vlaenderen, gheseyt van Praet"</em>{' '}
            (Antoine, d. 1522, tombstone transcribed in Gailliard, <em>Bruges et le Franc</em>,
            Tome I, p. 260), and <em>"Jan van Vlaendren gheseit van Praet"</em> and{' '}
            <em>"Joos van Vlaendren gheseit van Praet"</em> (both 1520; Buylaert,{' '}
            <em>Repertorium van de Vlaamse adel</em>). In the Drincham line:{' '}
            <em>"Mer Jans van Vlandres gheseit Drincham"</em> (tomb of 1466 at Houtem,
            transcribed via Donche, "De Familie Van Drincham, gezegd van Vlaanderen,"{' '}
            <em>Vlaamse Stam</em> 42/6, 2006, p. 567) and{' '}
            <em>"joncvrouwe Margriete van Vlaendren gheseit van Drincham, vrouwe van Krubeke"</em>{' '}
            (1503 fief register; Buylaert, p. 756).
          </p>
          <p>
            Why this matters methodologically: a genuine origin-name ("from Flanders") is never
            bridged to a specific lordship — a scribe has no reason to write "van Vlaenderen,
            called van Praet" if "van Vlaenderen" merely records where a family came from. The
            dual form records two coexisting identifiers — a heritable house-name and a current
            territorial title — which is the documented behaviour of a noble lineage-surname
            carried by a lordholder. Five bearers across two separate lordship-branches of one
            kin-group, over roughly fifty-five years, is decisive against reading the form as
            one individual's quirk. When the project encounters any "van Vlaenderen" attestation
            paired with a lordship, this convention is the interpretive frame applied — and it
            is held falsifiable: a cadet documented holding a current seigneurial title yet
            bearing "van Vlaenderen" alone, or a titleless cadet consistently bearing a
            non-Vlaenderen surname, would break the rule.
          </p>
        </section>

        {/* ── Section 2: Recommended Reading ─────────────────────── */}
        <section className={styles.section}>
          <h2>Recommended Reading</h2>
          <p>
            The following works form the historiographical foundation for this project.
            They are the sources against which our findings are tested and the
            authorities whose frameworks we apply. Entries are grouped by theme.
            Acquisition links are provided where available.
          </p>

          {READING_LIST.map((group) => (
            <div key={group.group} style={{ marginTop: '2.5rem' }}>
              <h3 style={{
                color: 'var(--gold)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(232,184,48,0.2)',
              }}>
                {group.group}
              </h3>

              {group.entries.map((entry, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(232,184,48,0.15)',
                  borderRadius: '4px',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '1rem',
                }}>
                  <p style={{ marginBottom: '0.4rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{entry.author}</strong>
                    {' '}
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>({entry.year}).</span>
                    {' '}
                    <em style={{ color: 'var(--gold-light)' }}>{entry.title}.</em>
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>
                    {entry.note}
                  </p>
                  {entry.availability && (
                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                      <em>Note: {entry.availability}</em>
                    </p>
                  )}
                  {entry.links && entry.links.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
                      {entry.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={researchStyles.refLink}
                          style={{ fontSize: '0.85rem' }}
                        >
                          {link.label} &rarr;
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* ── Back nav ────────────────────────────────────────────── */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(232,184,48,0.15)' }}>
          <Link
            to="/research"
            className={researchStyles.refLink}
            style={{ fontSize: '0.9rem' }}
          >
            &larr; Back to Research Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
