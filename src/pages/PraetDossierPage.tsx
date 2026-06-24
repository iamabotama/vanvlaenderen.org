
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
    short: 'Vredius, Genealogia Comitum Flandriae, Pars secunda (Bruges, 1643). Direct reading April 2026 (Tabula XVI, pp. 275–289; Tabula XIX, pp. 387–388).',
    full: (
      <>
        Vredius, Olivarius (Olivier de Wree). <em>Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum.</em> Bruges: J.B. &amp; Lucas Kerchovios, 1643. Vol. 2 of 2. [496 pp.] Direct reading conducted April 2026 (Tabula XVI, pp. 275&ndash;289; Tabula XIX, pp. 387&ndash;388). Not freely digitised; held at major European research libraries.{' '}
        <a href="https://www.rct.uk/collection/1021446" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Royal Collection Trust catalogue entry</a>
      </>
    ),
  },
  {
    n: 2,
    short: "Espinoy, Recherche des antiquitez et noblesse de Flandres (Douai, 1631). Livre 2, Chapitre XXXI. BnF shelfmark M-1432.",
    full: (
      <>
        Espinoy, Philippe de l'Espinoy. <em>Recherche des antiquitez et noblesse de Flandres.</em> Douai: veuve M. Wyon, 1631. Livre 2, Chapitre XXXI. BnF shelfmark M-1432.{' '}
        <a href="https://gallica.bnf.fr/ark:/12148/bpt6k1180858" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Free access (Gallica / BnF)</a>
      </>
    ),
  },
  {
    n: 3,
    short: 'FMG, MedLands: Flanders, Hainaut — tertiary compilation consulted as a pointer to primary sources; not used as a fact-level authority.',
    full: (
      <>
        Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. Tertiary compilation consulted as a pointer to primary sources; not used as a fact-level authority in this dossier. <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
      </>
    ),
  },
  {
    n: 4,
    short: 'Pattou, Etienne. Batards de Flandres. 2014. Tertiary compilation; cited only as the origin of the c. 1350 birth estimate.',
    full: (
      <>
        Pattou, Etienne. Batards de Flandres. 2014. Tertiary compilation consulted as a pointer to primary sources; cited above only as the origin of the c. 1350 birth estimate. <a href="https://docplayer.fr/21492316-Batards-de-flandres.html" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Pattou, Batards de Flandres (2014)</a>
      </>
    ),
  },
  {
    n: 5,
    short: 'Lauwens, Patrik. Verhalen uit de genealogie Van Praet. September 2010.',
    full: (
      <>
        Lauwens, Patrik. Verhalen uit de genealogie Van Praet. September 2010. <a href="https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Lauwens, Verhalen uit de genealogie Van Praet (2010)</a>
      </>
    ),
  },
];

const CITES: Record<number, string> = {};
notes.forEach((nt) => {
  CITES[nt.n] = nt.short;
});

export default function PraetDossierPage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>The Praet Line — Archival Dossier | vanvlaenderen.org</title>
        <meta name="description" content="Archival dossier for the House of Flanders-Praet. Descent from Louis Friese to Lodewijk IV (d. 1555/1558), the Aalter Vrijhof as the line's Meetjesland anchor (1516–c. 1590), the post-1545 collateral continuation (the 1550 act to Jacob, then Lodewijk V to the 1591 terminus), and the non-inheriting late-16th-century cadet branches." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/praet-dossier" />
        <meta property="og:title" content="The Praet Line — Archival Dossier" />
        <meta property="og:description" content="Archival dossier for the House of Flanders-Praet. Descent from Louis Friese to Lodewijk IV (d. 1555/1558), the Aalter Vrijhof as the line's Meetjesland anchor (1516–c. 1590), the post-1545 collateral continuation (the 1550 act to Jacob, then Lodewijk V to the 1591 terminus), and the non-inheriting late-16th-century cadet branches." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/praet-dossier" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"The Praet Line \\u2014 Archival Dossier","description":"Archival dossier for the Praet line: Louis Friese van Vlaenderen through Lodewijk IV (Louis of Praet, Knight of the Golden Fleece, d. 1555/1558) and the post-1545 collateral continuation to the 1591 terminus.","url":"https://vanvlaenderen.org/research/praet-dossier","inLanguage":"en","dateModified":"2026-04-19","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://vanvlaenderen.org/"},{"@type":"ListItem","position":2,"name":"Research","item":"https://vanvlaenderen.org/research"},{"@type":"ListItem","position":3,"name":"Louis Friese van Vlaenderen","item":"https://vanvlaenderen.org/research/louis-friese"},{"@type":"ListItem","position":4,"name":"Archival Dossier","item":"https://vanvlaenderen.org/research/praet-dossier"}]}`}} />
      </Helmet>
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Archival Dossier</div>
          <h1>Louis Friese van Vlaenderen</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Bastard son of Louis II de Male, Count of Flanders; lord of Praet and Woestine; founder of the Praet branch of the van Vlaenderen surname.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Archival Dossier</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Methodology & Evidence Levels</span>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
            This dossier follows the same evidentiary framework as the Victor van Vlaenderen dossier. Directly attested statements rest on quoted charter language or an explicit documentary summary in a published authority.
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
            <strong>Note on primary sources:</strong> the two principal authorities for this lineage are Philippe de l&rsquo;Espinoy, <em>Recherche des antiquitez et noblesse de Flandres</em> (Douai, 1631), and Olivarius Vredius (Olivier de Wree), <em>Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum</em> (Bruges, 1643). Both are published antiquarian works of recognised scholarly standing. Vredius has been accessed directly at 300 DPI and the relevant sections read in April 2026; Espinoy is cited through Vredius&rsquo;s verbatim extracts and from the project&rsquo;s reading of the 1631 Douai edition (Livre 2, Chapter XXXI). Vredius&rsquo;s coverage of the Praet line spans Tabula XVI pp. 275&ndash;289 (Louis Friese, Johan I, Lodewijk II, Lodewijk III) and Tabula XIX pp. 387&ndash;388 (Lodewijk IV, Jossine van Praet, Jan II). Note: Vredius also published an earlier <em>Sigilla Comitum Flandriae</em> (Bruges, 1639) &mdash; a study of the counts&rsquo; seals &mdash; which is a separate work. The genealogical proofs for bastard lines are in the 1643 <em>Genealogia</em>, not the 1639 <em>Sigilla</em>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Louis Friese van Vlaenderen — also styled Lodewijk de Fries, Louis le Frison, and Louis le Friese de Flandre — was an illegitimate son of Louis II de Male, Count of Flanders (1330-1384). The comital-bastard ancestry of the entire Praet branch runs through him: Vredius's Tabula XVI and the manuscript extracts printed in his Probationes carry the descent from Louis Friese to the lords of Praet, and Espinoy independently records the founding grant.<Cite n={1} text={CITES[1]} /><Cite n={2} text={CITES[2]} />
          </p>
          <p>
            Vredius (1643), Pars secunda, p. 276, quoting Damhouder's manuscript memoir, preserves the following verbatim extract: <em>messire Loys de Frise fils bastard de Loys de Male conte de Flandre, lequel il eut d une fille de Monsieur de Borre.</em> This passage directly attests Louis Friese's name, his bastard status, his father Louis de Male, and his maternal descent from the family of Monsieur de Borre.
          </p>
          <p>
            Espinoy (1631), Livre 2, Ch. XXXI, p. 68, records that the lands and baronies of Praet and La Woestine — <em>les terres et Baronies de Praet et de la Woestine</em> — were conveyed by Louis de Male <em>en avancement de son mariage</em> to his illegitimate son, styled <em>Messire Louys de Flandres dit le Frizon.</em> This passage directly attests his territorial grant and the variant surname le Frizon.
          </p>
          <p>
            The birth estimate of c. 1350 used in this dossier derives from Etienne Pattou's 'Batards de Flandres' compilation (2014) — a tertiary register consulted as a pointer, not a documentary authority. It is a chronological inference, not a documented date.<Cite n={4} text={CITES[4]} />
          </p>
        </section>

        <section className={styles.section}>
          <h2>Battle of Nicopolis and Death <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Louis Friese was killed at the Battle of Nicopolis on 25 September 1396 alongside his half-brothers Loys &ldquo;le Hase&rdquo; (lord of Wessegem) and Jan sans terre (lord of Drincham) &mdash; three of Louis II's nine documented bastard sons fallen on a single day. The death is preserved in narrative attestation in Despars's <em>Cronijcke</em> Vol. III p. 173 (Despars compendium B.7) and is corroborated by the Latin chronicle witness of Heuterus, transmitted via Vredius A.7. Lichtervelde 1935 p. 50 names Le Frison specifically as <em>auteur de la Maison de Flandre dite de Praet</em>. The standard scholarship date is 25 September; Despars dates the battle to 27 September and Lichtervelde to 28 September, with the variants treated as transmission errors per the Despars compendium F.2. The Nicopolis death is the founding moment of the Praet line as a research subject: Le Frison's widow Marie van Ghistelle survived him and raised their son Jean de Praet, and the surname-bearing descent runs through them.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Territorial Holdings: Praet and Woestine <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            The Heerlijkheid Praet is documented as having ancient roots in Oedelem (now Beernem, West Flanders), held by the original van Praet baronial family from at least the twelfth century. A published genealogical study of the van Praet family (Lauwens, 2010) records that in 1373 the leengoed of Praet in Oedelem was sold to Louis de Male, after which it passed as a grant to Louis Friese.<Cite n={5} text={CITES[5]} />
          </p>
          <p>
            The Woestine lordship (Woesten, West Flanders) accompanied Praet. Louis Friese's second wife, Maria van Ghistelles, held the lordships of Zweveghem and Rosebeke in her own right — Espinoy styles her <em>Dame Marie de Guistelles, Dame de Zweueghem et de Rosebeke</em> — strengthening the Praet branch's position in western Flanders.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Marriage and Descent <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Two marriages are attested. The first wife is connected to La Woestine but is unnamed in the accessible sources. The second wife, Maria van Ghistelles, is named in the manuscript extracts printed by Vredius — <em>dame Marie de Guistelles fille de messire Rogier</em> — and by Espinoy, whose record of the founding grant <em>en avancement de son mariage avec Dame Marie de Guistelles</em> ties the marriage to the 25 December 1373 donation. From these marriages Louis Friese left at least one son, Johan I van Vlaenderen (lord of Praet), whose marriage to Johanna van Reygersvliet is recorded in the Van Hecke manuscript annotations printed by Vredius (p. 277).
          </p>
        </section>

        <section className={styles.section}>
          <h2>The Surname van Vlaenderen <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            The consistent use of van Vlaenderen by Louis Friese and his descendants is the central genealogical point for this project. Like his half-brother Victor, Louis Friese bore the surname in a period when it functioned not as a geographic descriptor but as a marker of comital illegitimate descent — crystallising as a hereditary identifier at the precise moment the Dampierre line's hold on Flanders ended with Louis de Male's death in 1384. The van Vlaenderen styling is documented through six further generations of the Praet line in the tomb inscriptions and charters printed by Vredius and set out in the lineage dossier.
          </p>
        </section>

        <section className={researchStyles.referenceList}>
          <h3>Notes & Bibliography</h3>
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
