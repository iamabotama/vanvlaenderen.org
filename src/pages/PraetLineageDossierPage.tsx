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
    short: 'Vredius, Olivarius (Olivier de Wree). Genealogia Comitum Flandriae…, Pars Secunda: Continens Probationes XII posteriorum tabularum. Bruges: J.B. & Lucas Kerchovios, 1642–43.',
    full: (
      <>
        Vredius, Olivarius (Olivier de Wree). <em>Genealogia Comitum Flandriae a Balduino Ferreo usque ad Philippum IV. Hisp. Regem</em>, Pars Secunda: <em>Continens Probationes XII posteriorum tabularum</em>. Bruges: J.B. &amp; Lucas Kerchovios, 1642&ndash;43. Tabula XVI, pp. 275&ndash;289 (Louis II de Male bastard cohort, including Louis Friese and the Praet descent through Lodewijk III); Tabula XIX, pp. 387&ndash;388 (Lodewijk IV, Jossine van Praet, and Jan II at Aalter). Direct reading of the 1643 print conducted April 2026. All tomb-inscription quotations in this dossier are verified against the Vredius print.
      </>
    ),
  },
  {
    n: 2,
    short: 'Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025. Section B: Heeren van Praet.',
    full: (
      <>
        Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. v5.0, January 2025. Section B: Heeren van Praet. Tertiary compilation consulted as a pointer to primary sources; not used as a fact-level authority in this dossier.{' '}
        <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
      </>
    ),
  },
  {
    n: 3,
    short: 'Bethune, J.B. de. Epitaphes et monuments des eglises de la Flandre. Third part. 1900.',
    full: (
      <>
        Bethune, J.B. de. <em>Epitaphes et monuments des eglises de la Flandre.</em> Third part. 1900. Epitaph transcriptions for Aeltere, Beveren bij Roeselare, Languemarc, and Veere. Print only &mdash; not digitised; not yet consulted directly by the project (only the second part's p. 233 is in hand). Cited above solely in the transparent as-cited-in form. Held at KBR Brussels and Ghent University Library.
      </>
    ),
  },
  {
    n: 4,
    short: 'Lauwens, Patrik. Verhalen uit de genealogie Van Praet. 2010.',
    full: (
      <>
        Lauwens, Patrik. <em>Verhalen uit de genealogie Van Praet.</em> 2010.{' '}
        <a href="https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Lauwens, Verhalen uit de genealogie Van Praet (2010)</a>
      </>
    ),
  },
  {
    n: 5,
    short: 'Nederland’s Adelsboek. Vol. 6 (1908). ’s-Gravenhage: W.P. van Stockum en Zoon. Van Boetzelaer entry.',
    full: (
      <>
        Nederland&rsquo;s Adelsboek. Vol. 6 (1908). &rsquo;s-Gravenhage: W.P. van Stockum en Zoon. Van Boetzelaer entry.{' '}
        <a href="https://archive.org/details/nederlandsadelsb28unse_4" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Internet Archive (1908 volume)</a>
      </>
    ),
  },
  {
    n: 6,
    short: 'Buylaert, Frederik. Repertorium van de Vlaamse adel (ca. 1350–ca. 1500). Gent: Academia Press, 2011. P. 747.',
    full: (
      <>
        Buylaert, Frederik. <em>Repertorium van de Vlaamse adel (ca. 1350&ndash;ca. 1500).</em> Gent: Academia Press, 2011. Prosopographical register of Flemish noble families 1350&ndash;1500; p. 747 documents Josse de Flandre and the cadet Praet branch (within the project's pp. 736&ndash;759 direct reading). See also by the same author: <em>Eeuwen van ambitie: De adel in laatmiddeleeuws Vlaanderen</em> (Brussels: Royal Academy, 2010), the accompanying narrative history.{' '}
        <a href="https://lib.ugent.be/nl/catalog/rug01:001699683" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Ghent University Library catalogue</a>
      </>
    ),
  },
  {
    n: 7,
    short: 'Verhoustraete, Arthur. ‘De heren van Praet te Oedelem.’ Jaarboek 1967 (Bos en Beverveld), pp. 101–113.',
    full: (
      <>
        Verhoustraete, Arthur. &lsquo;De heren van Praet te Oedelem.&rsquo; <em>Jaarboek 1967</em> (Bos en Beverveld), pp. 101&ndash;113. The full van Vlaenderen&ndash;Praet genealogy: the 1545 senior-line failure, the collateral continuation via Joos &rarr; Jacob &rarr; Lodewijk V, the 1591 sonless terminus, and the post-1591 title succession through female links (pp. 109&ndash;112).
      </>
    ),
  },
  {
    n: 8,
    short: 'Serrure, C.P., ed. Vaderlandsch Museum, Deel 5. Gent, 1863. ‘De geslachten Van Praet, Van Moerkercke…,’ pp. 295–310.',
    full: (
      <>
        Serrure, C.P., ed. <em>Vaderlandsch Museum</em>, Deel 5. Gent, 1863. &lsquo;De geslachten Van Praet, Van Moerkercke&hellip;,&rsquo; pp. 295&ndash;310 &mdash; the published edition of a 17th-century Praet-Moerkercke family compilation; names Joos&rsquo;s children Jacob, Philips, and Philippote and anchors Joos to Lodewijk II via the Gruuthuse marriage.
      </>
    ),
  },
  {
    n: 9,
    short: 'Valkeneers, Nina & Soen, Violet. ‘Praet, Bronkhorst en Boetzelaer…’ (2014), pp. 265–284.',
    full: (
      <>
        Valkeneers, Nina &amp; Soen, Violet. &lsquo;Praet, Bronkhorst en Boetzelaer. Adellijke weduwes in de bres voor het calvinisme tijdens en na de Beeldenstorm (1566&ndash;1567)&rsquo; (2014), pp. 265&ndash;284. Documents Jacob van Vlaanderen &times; Catharina van Boetzelaer and the post-1545 generation at the Vrijhof, Aalter.
      </>
    ),
  },
  {
    n: 10,
    short: 'Rijksarchief Brugge, Brugse Vrije, TBO 184, nrs. 21300–21302 (1545–49). The Honnelede wardship file.',
    full: (
      <>
        Rijksarchief Brugge, Brugse Vrije, TBO 184, nrs. 21300&ndash;21302 (1545&ndash;49). The Honnelede wardship file: Joos&rsquo;s sons Jacob and Philips as minor wards.
      </>
    ),
  },
  {
    n: 11,
    short: 'Gailliard. Bruges et le Franc. Tome I, p. 261.',
    full: (
      <>
        Gailliard. <em>Bruges et le Franc.</em> Tome I, p. 261 &mdash; the Aalter tombstone transcription <em>&lsquo;obiit MDLVIII&rsquo;</em> for Lodewijk IV (the 1558 reading of the death-year cross-flag).
      </>
    ),
  },
  {
    n: 12,
    short: 'de Smet, ed. Recueil des chroniques de Flandre. Tome III, p. 39 (Kronyk van Jan van Dixmude).',
    full: (
      <>
        de Smet, ed. <em>Recueil des chroniques de Flandre.</em> Tome III, p. 39 (Kronyk van Jan van Dixmude) &mdash; &lsquo;Jan van Vlaendren, de heere Van Praet&rsquo; at the battle of Brouwershaven, 13 January 1426. Independently: Despars, <em>Cronijcke van den lande&hellip; van Vlaenderen</em>, Vol. III, pp. 298&ndash;299.
      </>
    ),
  },
];

const CITES: Record<number, string> = {};
notes.forEach((nt) => {
  CITES[nt.n] = nt.short;
});

export default function PraetLineageDossierPage() {
  const lineageData = [
    { gen: '1', name: 'Louis Friese van Vlaenderen', dates: 'c.1350 \u2013 25 Sep 1396', role: 'Bastard of Flanders; Lord of Praet & Woestine', spouse: '1) Unknown (La Woestine) 2) Marie van Gistel', sources: 'Vredius (1643), Pars secunda, pp. 276\u2013277 (Damhouder & Grimarez MSS); Espinoy (1631), Livre 2, Ch. XXXI, p. 68', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: '2', name: 'Johan I van Vlaenderen', dates: 'd. after 10 Sep 1439', role: 'Lord of Praet & Woestine; named at the battle of Brouwershaven, 13 Jan 1426', spouse: 'Johanna van Reygersvliet', sources: 'Charter 10 Sep 1439 and Van Hecke MS, Vredius (1643) p. 277; de Smet, Recueil des chroniques de Flandre, T. III p. 39; Despars, Cronijcke Vol. III pp. 298\u2013299', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: '3', name: 'Lodewijk II van Vlaenderen', dates: 'd. 1488', role: 'Lord of Praet, Woestine, Bevere, Onnele', spouse: 'Louise de Bruges dau. of Jan van Gruuthuse', sources: 'Aalter tomb inscription and de l\u2019Espinoy via Vredius pp. 277\u2013278', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: '4', name: 'Lodewijk III van Vlaenderen', dates: 'd. New Year\u2019s 1490', role: 'Lord of Praet', spouse: 'Isabelle de Bourgogne (d. 12 Nov 1504, bur Gent)', sources: 'Aalter tomb inscription via Vredius p. 279', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: '5', name: 'Lodewijk IV van Vlaenderen', dates: 'd. 1555 (Vredius/Verhoustraete) or 1558 (tombstone per Gailliard; preferred)', role: 'Knight of the Golden Fleece (1531); Grand Bailiff Ghent & Bruges; Stadtholder Holland, Zeeland & Utrecht (1544–1546); Advisor to Emperor Charles V', spouse: 'Jossine van Praet (d. 10 Dec 1546, bur Aeltere)', sources: 'Aalter tomb inscription via Vredius p. 387; Gailliard, Bruges et le Franc, T. I p. 261', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: '6', name: 'Jan II van Vlaenderen', dates: 'd. 10 Dec 1545', role: 'Lord of Woestine, Elverdinghe, Vlamertinghe; predeceased father without issue \u2014 end of the senior direct line only', spouse: 'Jacqueline de Bourgogne (remarried; d. 1556 in childbirth)', sources: 'Epitaph Aeltere via Vredius p. 388', level: 'Directly attested', levelClass: researchStyles.levelAttested },
    { gen: '4 (cadet)', name: 'Joos (Josse) van Vlaenderen', dates: 'd. bef. 30 Nov 1545', role: 'Son of Lodewijk II; Heer van Onlede, Beveren, Wijkhuize; his branch inherited Praet after the 1545 senior failure', spouse: 'Martina van Moerkerke', sources: 'Verhoustraete 1967, pp. 101\u2013113; Serrure 1863 (Vaderlandsch Museum Deel 5); RAB TBO 184 nrs. 21300\u201321302', level: 'Strongly corroborated', levelClass: researchStyles.levelCorroborated },
    { gen: '5 (cadet)', name: 'Jacob van Vlaanderen', dates: 'd. 17 Aug 1566', role: 'Son of Joos; received Praet & Woestijne at Aalter by act of 25 Sep 1550', spouse: 'Catharina van Boetzelaer (m. 1551/52)', sources: 'Verhoustraete 1967; Valkeneers & Soen, \u2018Praet, Bronkhorst en Boetzelaer\u2019 (2014)', level: 'Strongly corroborated', levelClass: researchStyles.levelCorroborated },
    { gen: '6 (cadet)', name: 'Lodewijk V van Vlaanderen', dates: 'b. 1559 \u2013 d. 31 Oct 1591', role: 'Last male of the line; died sonless in exile \u2014 the surname ends', spouse: 'Maria van Marnix (d. 1580, childless)', sources: 'Verhoustraete 1967, pp. 101\u2013113; Valkeneers & Soen (2014)', level: 'Strongly corroborated', levelClass: researchStyles.levelCorroborated },
  ];

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Praet Lineage Detail — Van Vlaenderen Research | vanvlaenderen.org</title>
        <meta name="description" content="Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through the 1545 failure of the senior line and the collateral continuation (Joos, Jacob, Lodewijk V) to the 1591 terminus — the research control for Van Vlaenderen surname attribution." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/praet-lineage-dossier" />
        <meta property="og:title" content="Praet Lineage Detail — Van Vlaenderen Research" />
        <meta property="og:description" content="Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through the 1545 failure of the senior line and the collateral continuation (Joos, Jacob, Lodewijk V) to the 1591 terminus — the research control for Van Vlaenderen surname attribution." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/praet-lineage-dossier" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"Praet Lineage Detail \\u2014 Van Vlaenderen Research","description":"Generation-by-generation documentation of the Praet descent from Louis Friese van Vlaenderen through Jean I, Louis II, Jacob, and Lodewijk IV.","url":"https://vanvlaenderen.org/research/praet-lineage-dossier","inLanguage":"en","dateModified":"2026-04-19","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Louis Friese van Vlaenderen","item":"https://vanvlaenderen.org/research/louis-friese"},{"@type":"ListItem","position":4,"name":"Lineage Detail","item":"https://vanvlaenderen.org/research/praet-lineage-dossier"}]}`}} />
      </Helmet>
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen &middot; Lineage Dossier</div>
          <h1>The House of Flanders-Praet</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Documented lineage from Louis Friese van Vlaenderen (d. 1396) through the failure of the senior direct line (1545) and its collateral continuation — Joos, Jacob, Lodewijk V — to the death of the last male of the line in 1591, with primary-source confirmed generation data. Updated June 2026 with the collateral chain and the post-1591 title succession.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Lineage Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated June 2026</div>
        </div>

        {/* ── Methodology ──────────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Method</span>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            This dossier has been substantially upgraded from the previous version. All generation data now rests on the charter texts, epitaph transcriptions, and manuscript extracts preserved in Vredius (1643, direct reading April 2026) and de l'Espinoy (1631), with Gailliard, Verhoustraete, Serrure, and the Bruges archival records carrying the later generations. Evidence levels have been revised accordingly. The intermediate generations &mdash; previously classified as 'strongly corroborated' &mdash; are now largely directly attested via epitaphs or dated charters.
          </p>
          <p style={{ fontSize: '0.85rem', marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', borderTop: '1px solid rgba(232, 184, 48, 0.1)', paddingTop: '1rem' }}>
            <strong>Source chain note:</strong> Espinoy (1631) and Vredius (1643) are the principal 17th-century authorities, and both are cited directly: Vredius from the project's April 2026 direct reading of the 1643 print, Espinoy from Livre 2, Chapter XXXI of the Douai edition. Traceability runs to those originals. Where a claim is known to the project only through a source not yet read in the original, the citation says so explicitly.
          </p>
        </section>

        {/* ── Lineage Summary Table ──────────────────────────────── */}
        <section className={styles.section}>
          <h2>Lineage Summary Table</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--gold)', textAlign: 'left' }}>
                  <th style={{ padding: '10px', color: 'var(--gold)', whiteSpace: 'nowrap' }}>Gen</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Name &amp; Dates</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Title / Role</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Spouse</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Sources</th>
                  <th style={{ padding: '10px', color: 'var(--gold)' }}>Evidence</th>
                </tr>
              </thead>
              <tbody>
                {lineageData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(232, 184, 48, 0.1)', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                    <td style={{ padding: '10px', textAlign: 'center' }}>{row.gen}</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>{row.name}<br /><span style={{ fontWeight: 'normal', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{row.dates}</span></td>
                    <td style={{ padding: '10px' }}>{row.role}</td>
                    <td style={{ padding: '10px' }}>{row.spouse}</td>
                    <td style={{ padding: '10px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{row.sources}</td>
                    <td style={{ padding: '10px' }}>
                      <span className={`${researchStyles.evidenceLevel} ${row.levelClass}`} style={{ marginLeft: 0, whiteSpace: 'nowrap' }}>{row.level}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Generation Notes ────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Generation Notes</h2>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Louis Friese van Vlaenderen (c.1350 &ndash; 25 Sep 1396) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Vredius (1643), Pars secunda, p. 276,<Cite n={1} text={CITES[1]} /> quotes Damhouder's manuscript memoir: 'messire Loys de Frise fils bastard de...Loys de Male conte de Flandre, lequel il eut dune fille de Monsieur de Borre.' His grant of Praet is recorded by Espinoy (1631), Livre 2, Ch. XXXI, p. 68: Louis de Male 'en avancement de son mariage avec Dame Marie de Guistelles, Dame de Zweueghem et de Rosebeke' granted 'les terres et Baronies de Praet et de la Woestine' to his illegitimate son 'Messire Louys de Flandres dit le Frizon' (no source cited). Vredius p. 277, quoting Grimarez's memoir, records that Louis 'eut en partage [la Wostine] par acte du 25 de septembre 1373' and died at Nicopolis. (On the day of the 1373 act: the Grimarez memoir reads '25 de septembre'; the donation letters printed in Vredius's Probationes — direct reading, April 2026 — are dated 25 December 1373, the date carried throughout this research and corroborated by Serrure 1863 and Lauwens.)
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Johan I van Vlaenderen (d. after 10 Sep 1439) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              A charter dated 10 Sep 1439, preserved in Vredius (1643), Pars secunda, p. 277 (quoting the Collecta Damhouderii, fol. 276 T), is directly issued by 'Ian van Vlaenderen Heere van Praet ande vander Woestine ende Burghemeesters ende Schepenen vanden selven Heerschepe van Praet.' This is Johan I's own charter &mdash; directly attested. His marriage to Johanna van Reygersvliet is recorded in the Van Hecke manuscript annotations quoted on the same Vredius page: 'Iean de Flandre Seign. de Praet et de la Woestine' married 'Ieanne de Reyghersvliet fille de Henry, fils de Gautier.' No primary source confirming her parentage and marriage has been identified &mdash; the marriage itself is therefore strongly corroborated, her parentage probable. Espinoy (1631), Livre 2, Ch. XXXI, p. 68, records the 1431 settlement of 'messire Louys son pere en son vivant Seigneur de Praet et de la Woestine' between Johan I and his mother.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              <strong>Brouwershaven, 13 January 1426</strong> <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span> &mdash; a dated military-service fixpoint between the 1420 and 1439 anchors. The Kronyk van Jan van Dixmude, narrating Philip the Good's Holland-Zeeland campaign, names among those at the battle of Brouwershaven: <em>&lsquo;Jan van Vlaendren, de heere Van Praet, Jan van Eghemond ende zomeghe andere&rsquo;</em> (de Smet, <em>Recueil des chroniques de Flandre</em>, Tome III, p. 39).<Cite n={12} text={CITES[12]} /> Despars carries the same 1426 Brouwershaven roll independently: <em>&lsquo;Jan van Vlaenderen, die heere van Praet ende van der Woestijne&rsquo;</em> (<em>Cronijcke van den lande&hellip; van Vlaenderen</em>, Vol. III, pp. 298&ndash;299). The identification of this lord of Praet with Johan I &mdash; whose documented window comfortably brackets the date &mdash; is strongly corroborated.
            </p>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Johan I&rsquo;s Five Documented Children</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              (a) <strong>Lodewijk II</strong> &mdash; the heir; Aalter tomb attested (Vredius pp. 277&ndash;278); (b) <strong>Ioanna (Jeanne) de Flandre</strong> &mdash; m. Jean, Lord of Pouques; 1446 partition record, Vredius p. 278 (a further marriage-contract document of 24 Jan 1441 is known to the project only through Buylaert (2011) p. 567,<Cite n={6} text={CITES[6]} /> as cited in C. Cawley, 'Medieval Lands', FMG<Cite n={2} text={CITES[2]} />); (c) <strong>Margareta (Marguerite) de Flandre</strong> &mdash; m. Louis de Bailleul; Grimarez and Van Hecke extracts, Vredius p. 278 (attribution structurally inferential, see note below); (d) <strong>Lisbette (Isabelle) de Flandre</strong> &mdash; m. Waleran, Lord of Landas and Warlain; Vredius p. 279; (e) <strong>Landrada de Flandre</strong> &mdash; Canoness at St. Waudru, Mons; never married; Vredius p. 279. A March 1442 Ghent partition records the three minor children (Lodewijk II, Lisbette, and Landrada) under guardianship after Johan I&rsquo;s death; Ioanna and Margareta were by then already married.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--text-muted)', marginTop: '0.75rem', fontStyle: 'italic' }}>
              <strong>Correction noted.</strong> An earlier version of this dossier attributed seven children to Johan I, including Jean de Flandre (d. 1523, Heer van Onlede en Beveren, Grand Bailiff of Bruges) and Josse de Flandre (d. after 1526). Direct reading of Vredius in April 2026 resolves these two figures as sons of Lodewijk II, not of Johan I: the Beveren tomb inscription on Vredius p. 280 explicitly identifies Jean&rsquo;s father as &lsquo;Messire <strong>Loys</strong> de Flandres, Chevalier, Saigneur de Praet&rsquo; (i.e., Lodewijk II, d. 1488). Damhouder&rsquo;s list of Lodewijk II&rsquo;s six children by Louise de Bruges on Vredius p. 278 confirms both Jean and Josse as Lodewijk II&rsquo;s sons. Margareta de Flandre&rsquo;s attribution to Johan I is structurally inferential (from the &lsquo;sorores Ludovici Patris&rsquo; heading on Vredius p. 278) rather than directly textual, and is treated here as probable. Buylaert 2011 (not yet consulted directly) is the definitive arbiter on these attributions.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem', background: 'rgba(96, 165, 250, 0.06)', border: '1px solid rgba(96, 165, 250, 0.15)', borderRadius: '4px', padding: '1.25rem' }}>
            <h4 style={{ color: '#60a5fa', fontSize: '1rem', marginBottom: '0.5rem' }}>Note on Joos (Josse) van Vlaenderen (cadet branch &mdash; the line&rsquo;s continuation)</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              Joos (Josse) van Vlaenderen (d. before 30 November 1545) heads the documented cadet branch of the Praet line, descending from Lodewijk II (not Johan I as earlier framed). He is distinct from Victor&rsquo;s grandson Josse, son of Lodewyc by Jacqueline de Wilde, who died young at Oostburg (Oostborch). This Joos married Martina van Moerkerke; when the senior line failed in 1545, the lordship and the surname passed to his branch &mdash; his son Jacob received Praet and Woestijne in 1550, and Jacob&rsquo;s son Lodewijk V carried the line to its 1591 terminus (see &lsquo;The 1545 Senior Failure, the Collateral Continuation, and the 1591 Terminus&rsquo; below). Sources: Verhoustraete, &lsquo;De heren van Praet te Oedelem,&rsquo; <em>Jaarboek 1967</em> (Bos en Beverveld), pp. 101&ndash;113;<Cite n={7} text={CITES[7]} /> Serrure 1863 (<em>Vaderlandsch Museum</em> Deel 5);<Cite n={8} text={CITES[8]} /> RAB TBO 184 nrs. 21300&ndash;21302 (1545&ndash;49).<Cite n={10} text={CITES[10]} />
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk II van Vlaenderen (d. 1488) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Two primary sources agree on the year (1488) but disagree on the day. The Aalter tomb inscription, quoted in Vredius p. 277, reads: &lsquo;Voor den hooghen autaer light M&rsquo;her LODEWYC van Vlaenderen/ Heere van Praet/ ende vanden lande van Woestine/ Bevere/ ende Ornlede/ fs. M&rsquo;her Jans/ Rudder/ Heere van Praet&hellip; die starf 1488. op S. Baefs dach&rsquo; &mdash; St. Bavo&rsquo;s day, 1 October 1488. De l&rsquo;Espinoy, quoted by Vredius p. 278, reads: &lsquo;lequel Messire Loys de Flandre, mourut en l&rsquo;an 1488, le jour de S. Berthelemy&rsquo; &mdash; St. Bartholomew&rsquo;s day, 24 August 1488. Both sources agree he married &lsquo;vrau Loije van Brugghe fs mijns heeren Jans heere van Gruuthuuse&rsquo; &mdash; Louise de Bruges, daughter of Jan van de Aa dit de Bruges, Heer van Gruuthuse en Grimbergen.
            </p>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Lodewijk II&rsquo;s Six Documented Children</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              Damhouder&rsquo;s extract, quoted in Vredius p. 278, names six children by Louise de Bruges: &lsquo;Loys, Iean, Iaques, Ioffe, Loyfe, &amp; Iehenne de Flandre.&rsquo; (a) <strong>Lodewijk III (Loys)</strong> &mdash; the heir, see below; (b) <strong>Jean de Flandre</strong> (d. 6 September 1523), Heer van Onlede en Beveren bij Roeselare, Grand Bailiff of Bruges and the Brugse Vrije; Beveren tomb inscription (Vredius p. 280); (c) <strong>Jaques (Jacques) de Flandre</strong> &mdash; named only in Damhouder&rsquo;s list; no further biographical detail in Vredius, and his identification is not established. He did not inherit Praet (it passed to his brother Lodewijk III), and he must not be confused with <strong>Jacob van Vlaanderen</strong> (d. 1566), Joos&rsquo;s son one generation later, who <em>did</em> inherit &mdash; receiving Praet and Woestijne in 1550 (see the collateral continuation below); (d) <strong>Josse (Ioffe) de Flandre</strong> &mdash; Joos van Vlaenderen (d. before 30 Nov 1545), inherited Onlede, Beveren, and Wijchuize after his brother Jean; married Martina van Moerkerke; the cadet branch through which the line continued after 1545 [Buylaert (2011) p. 747; Verhoustraete 1967]; (e) <strong>Louise (Loyfe) de Flandre</strong>; (f) <strong>Iehenne (Jeanne) de Flandre</strong>. Note on possible name confusion: this Iehenne (daughter of Lodewijk II) is a different person from Johan I&rsquo;s daughter Ioanna-m-Pouckes (see above); the two Jeannes are in adjacent generations and must not be conflated.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk III van Vlaenderen (d. New Year&rsquo;s 1490) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              The Aalter tomb inscription quoted in Vredius p. 279 reads: &lsquo;Op den Maendagh 1490 starf M&rsquo;her LOYS van Vlaendren/ heere van Praet/ die ghetrauwt hadde Vrauwe ISABELLE van Bourgongnen; hy light alhier by zijnen Vader&rsquo; &mdash; a Monday in 1490, buried beside his father. His death is dated to New Year&rsquo;s 1490. Grimarez&rsquo;s reading &lsquo;1488. 1. Ianvier,&rsquo; quoted on the same Vredius page, is a conflation with his father Lodewijk II&rsquo;s death year (1488) &mdash; a logged known error, not a competing date. His marriage to Isabelle de Bourgogne, daughter of Jean b&acirc;tard de Bourgogne Heer van Elverdinghe en Vlamertinghe and Marie d&rsquo;Halluin, is confirmed by the same tomb (Vredius p. 279). Isabelle died &lsquo;12 Nov 1504&rsquo; and was buried &lsquo;te Gent, te Galilee.&rsquo;
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk IV van Vlaenderen / Louis of Praet (d. 1555 or 1558) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              The Aalter tomb inscription, quoted in Vredius p. 387, records his full titulature: &lsquo;M&rsquo;her LODEWYC van Vlaendren/ Rudder vander Ordre vanden Gulden Vliese/ Heere van Praet/ vanden lande vander Woestyne/ Elverdijnghe/ Vlamertijnghe/ Spiete/ ende vander Mersch/ Raed/ Upper-camerlinck/ Chief vande Financien van de K.M. Carolus den V. ende sijnen Hoogh-Bailliu van Brugghe/ ende van &rsquo;t Brughsche Vrije/ te sijnen overlijden Gouverneur ende Capitain van Vlaendren/ die starf 1555.&rsquo; Knight of the Golden Fleece (1531); Grand Bailiff of Ghent and Bruges; Stadtholder of Holland, Zeeland and Utrecht (1544&ndash;1546); Advisor to Emperor Charles V.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Married Jossine van Praet, daughter of Charles van Praet Heer van Moerkercke, heiress of the original Praet baronial family. The same Aalter tomb inscription records her death: &lsquo;Ende Me-vrauwe IOSYNE van Praet/ Vrauwe van Moerkercke/ M&rsquo;her Charles van Praet/ Heere van Moerkercke dochter was/ M&rsquo;her LODEWYCX ghesselnede/ die starf 1546. den 10. December&rsquo; &mdash; died 10 December 1546, buried beside her husband at Aalter (Vredius p. 387).
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              <strong>Death-year cross-flag</strong> <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelProbable}`}>Probable</span> &mdash; Lodewijk IV&rsquo;s death year is attested two ways. Vredius&rsquo;s print of the Aalter inscription reads &lsquo;die starf 1555,&rsquo; and Verhoustraete likewise carries 1555. Gailliard, however, reports the tombstone itself as <em>&lsquo;obiit MDLVIII&rsquo;</em> &mdash; 1558 (<em>Bruges et le Franc</em>, Tome I, p. 261).<Cite n={11} text={CITES[11]} /> The project&rsquo;s working preference is 1558, weighting the epigraphic transcription over the secondary print tradition, held at Probable pending a re-examination of the Aalter monument.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem', background: 'rgba(212, 168, 48, 0.06)', border: '1px solid rgba(212, 168, 48, 0.15)', borderRadius: '4px', padding: '1.25rem' }}>
            <h4 style={{ color: 'var(--gold)', fontSize: '1rem', marginBottom: '0.5rem' }}>The 1517 Knesselare Charter &mdash; Research Significance</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              A charter of 1517 &mdash; known to the project through De Raadt, <em>Sceaux armori&eacute;s des Pays-Bas</em>, vol. I (1898), p. 456, as cited in C. Cawley, 'Medieval Lands' (FMG); the De Raadt volume has not yet been read directly &mdash; records Lodewijk IV holding six fiefs at Knesselare from the seigneurie of Wessegem in 1517. Knesselare is one of the parishes in the active research coverage, and it sits geographically between the Praet lordship (Oedelem/Beernem) and the core Van Vlaenderen cluster in the Meetjesland. This charter does not establish a family connection between the Praet van Vlaenderens and the commoner Van Vlaenderens who later appear in Knesselare parish records. But it confirms that the Praet branch had territorial interests in the precise geographic area where your ancestors lived &mdash; which is relevant to the branch-control problem identified in the research design.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Jan II van Vlaenderen (d. 10 Dec 1545) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              The Aalter tomb inscription, quoted in Vredius p. 388, reads: &lsquo;Inde selve tombe light Jo. IAN van Vlaendren/ Heere van Woestine/ Elverdinghe/ ende Vlamertinghe/ fil. mijns Heeren Lodewijc/ Heere van Praet/ ende van Vrauw&rsquo; Josijne voorseyt/ die starf 1545. den 10. December; hy hadde ghetrauwt Vrauw&rsquo; IAQVELINE van Bourgongnen/ fil. M&rsquo;her Adolf/ Heere van Bevere/ starf sonder generatie.&rsquo; Grimarez on the same page adds that he &lsquo;mourut, sans generation, avant son pere, en l&rsquo;an 1545&rsquo; &mdash; he predeceased his father Lodewijk IV, dying without issue. His death ends the <strong>senior direct male line only</strong>: the lordship and the surname passed to the collateral branch of Joos van Vlaenderen, whose son Jacob received Praet and Woestijne at Aalter in 1550 (see below). A separate epitaph at Veere &mdash; B&eacute;thune, <em>Epitaphes</em> (third part, 1900), p. 392,<Cite n={3} text={CITES[3]} /> as cited in C. Cawley, 'Medieval Lands' (FMG); not yet read directly &mdash; records that his widow Jacqueline de Bourgogne remarried Jan Heer van Cruijningen and died &lsquo;van haer laetste kint&rsquo; at Beveren in 1556 &mdash; in childbirth with her last child by her second husband &mdash; and that she was childless by Jan van Vlaenderen.
            </p>
          </div>
        </section>

        {/* ── Documented Cadet Connections ─────────────────────────── */}
        <section className={styles.section}>
          <h2>Documented Cadet Connections</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            The following are now documented from primary sources, replacing the previous Geni-only entries.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Joos (Josse) van Vlaenderen (son of Lodewijk II, d. before 30 Nov 1545) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Named as Lodewijk II&rsquo;s son &lsquo;Ioffe de Flandre&rsquo; in Damhouder&rsquo;s list of the six children on Vredius p. 278; documented by Buylaert (2011, p. 747) and Verhoustraete (1967). After the death in 1523 of his brother Jean de Flandre Heer van Onlede, Joos inherited &lsquo;de heerlijkheden Onlede, Beveren en Wijchuize.&rsquo; He married Martina van Moerkerke and had &lsquo;verschillende kinderen&rsquo;; Serrure 1863 (<em>Vaderlandsch Museum</em> Deel 5) names his children Jacob, Philips, and Philippote, and his sons Jacob and Philips appear as minor wards in the Honnelede wardship file (RAB TBO 184 nrs. 21300&ndash;21302, 1545&ndash;49). He died <strong>before 30 November 1545</strong> <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>: the wardship file names him posthumously (<em>&lsquo;Joncher Joost van Vlaendren, in syn leven heere van Honnelede&rsquo;</em>), with its earliest account year beginning on St. Andrew&rsquo;s Day, 30 November 1545 (RAB, Brugse Vrije, Staten van Goed, TBO 184 nrs. 21300&ndash;21302, 1545&ndash;49). The older printed death-year 1553 (Verhoustraete) rests on the same bundle and is corrected against the original. This is the cadet branch through which the Praet line continued after the 1545 senior failure.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Jacob van Vlaanderen (son of Joos, d. 17 Aug 1566) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Joos&rsquo;s elder son, and Lodewijk IV&rsquo;s nearest heir after the senior line failed. He received Woestijne and Praet at Aalter by act of 25 September 1550, married Catharina van Boetzelaer in 1551/52, and died on 17 August 1566, buried at Beveren (Verhoustraete 1967; Valkeneers &amp; Soen, &lsquo;Praet, Bronkhorst en Boetzelaer,&rsquo; 2014). He is a different man from the 15th-century &lsquo;Jaques de Flandre&rsquo; of Damhouder&rsquo;s list (a son of Lodewijk II who did not inherit, and whose identification is not established) &mdash; the two must not be conflated.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lodewijk V van Vlaanderen (son of Jacob, b. 1559 &ndash; d. 31 Oct 1591) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Jacob&rsquo;s son and the last male of the line. A Calvinist, he married Maria van Marnix, who died childless in 1580; he sold the encumbered Praet/Aalter estate before his death and died sonless on All Saints&rsquo; Eve, 31 October 1591, in exile (Verhoustraete 1967, pp. 101&ndash;113; Valkeneers &amp; Soen 2014). With his death the surname &lsquo;van Vlaenderen&rsquo; in this branch ends &mdash; see the terminus section below.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Francoise van Praet van Moerkerke (fl. c.1519) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Documented in two independent published sources. Nederland's Adelsboek (1908)<Cite n={5} text={CITES[5]} /> records Wessel van Boetzelaer married c.1519 'Francina van Praet.' The Lauwens genealogical study (2010)<Cite n={4} text={CITES[4]} /> records 'Francoise van Praet van Moerkerken, vrouwe van Carnesse, huwde Wessel van den Boetzelaer, heer van Langerak en Asperen.' Her precise generation within the Praet-Moerkerke line requires further investigation.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Margareta van Vlaenderen (dau. of Lodewyc, Victor's son) <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Charters dated 1478 and 1486, preserved in Vredius (1643) p. 287 (Grimarez, from the Ghent partition registers), record that 'Marguerite de Flandres' (daughter of Lodewyc van Vlaenderen, Victor's son) married firstly Lodewijk van Baenst Heer van Santvelde and secondly Adriaan van Schouteten Heer van Erpe. This is from Victor's line, not the Praet line &mdash; noted here to distinguish the two Margaretha van Vlaenderens documented in the 15th century.
            </p>
          </div>
        </section>

        {/* ── The 1545 Senior Failure, the Collateral Continuation, and the 1591 Terminus ── */}
        <section className={styles.section}>
          <h2>The 1545 Senior Failure, the Collateral Continuation, and the 1591 Terminus</h2>
          <p>
            The line did <strong>not</strong> end on 10 December 1545 with Jan II&rsquo;s death &mdash; that date ends only the <strong>senior direct line</strong>. The lordship and the surname passed to a collateral branch, and the chain is documented <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span>: Lodewijk II &rarr; <strong>Joos (Josse) van Vlaenderen</strong> (d. before 30 Nov 1545) &rarr; <strong>Jacob van Vlaanderen</strong> (received Praet and Woestijne at Aalter by act of 25 September 1550; married Catharina van Boetzelaer 1551/52; d. 17 August 1566) &rarr; <strong>Lodewijk V van Vlaanderen</strong> (b. 1559; married Maria van Marnix, who died childless in 1580). Verhoustraete&rsquo;s genealogy of the lords of Praet, Serrure&rsquo;s 1863 edition of the Praet-Moerkercke compilation, the Valkeneers/Soen study of the Boetzelaer marriage, and the Honnelede wardship file (RAB TBO 184 nrs. 21300&ndash;21302, 1545&ndash;49) converge on this chain.
          </p>
          <p>
            <strong>The line ends in 1591.</strong> Lodewijk V died sonless on All Saints&rsquo; Eve, 31 October 1591, in exile &mdash; the last male of the line. With his death the surname &lsquo;van Vlaenderen&rsquo; in this branch ends. (The project records this as a <em>Line Ends</em> determination for the surname-bearing titled line, on Verhoustraete&rsquo;s narrative and its archival apparatus.)
          </p>
          <p>
            <strong>After 1591 the title leaves the surname</strong> <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span>. The lordship of Praet-Woestijne did not die with Lodewijk V: it descended by proximity of blood, through female links, to a succession of men of entirely different surnames &mdash; Baudry van Roisin (1592), then de Longueval &rarr; de Mouchy &rarr; Thesart &rarr; von Salm &rarr; de Lalaing &rarr; de Rubempr&eacute; (Verhoustraete 1967, pp. 109&ndash;112). Every successor kept his own patrilineal surname; none became &lsquo;van Vlaenderen.&rsquo; This is the documented demonstration that <strong>the surname tracks the patriline while the title passes freely through women</strong> &mdash; the cleanest case study in the research for the surname-versus-title distinction.
          </p>
          <p>
            <strong>Scope guard.</strong> The 1591 terminus is the end of the <em>titled</em> line &mdash; senior plus the one collateral branch that inherited the title. It is <strong>not</strong> a claim that the comital-agnatic male line went biologically extinct: Verhoustraete follows only the title-holder and is silent on the non-inheriting cadets (Joos&rsquo;s younger son Philips; the three unnamed children of Lodewijk II; Philippote&rsquo;s issue). That open question &mdash; whether an untitled cadet line survived elsewhere &mdash; is treated in the <Link to="/research/gap-dossier" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Gap Dossier</Link>.
          </p>
        </section>

        {/* ── Research Significance ────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Research Significance</h2>
          <p>
            The Praet branch provides independent corroboration that <em>van Vlaenderen</em> functioned as inherited comital identity across seven generations, from the 1373 founding grant to the 1591 terminus. The 1517 Knesselare charter is a new finding that places the Praet van Vlaenderens in direct territorial contact with the Meetjesland research cluster during the gap period. The branch functions as a research control: men styled <em>van Vlaenderen</em> in 16th-century Flemish records must be tested against Praet geography, patronymics, and witness networks before being assigned to Victor's descent.
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
            to="/research/louis-friese"
            style={{
              color: 'var(--gold)',
              fontSize: '16px',
              textDecoration: 'underline',
              fontFamily: 'var(--font-ui)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            Back to Louis Friese Lineage
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
