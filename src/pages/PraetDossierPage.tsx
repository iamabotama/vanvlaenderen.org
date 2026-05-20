
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { useNav } from '../hooks/useNav';
import { Helmet } from 'react-helmet-async';

export default function PraetDossierPage() {
  const { goToResearch } = useNav();
  return (
    <div className={styles.page}>
      <Helmet>
        <title>The Praet Line — Archival Dossier | vanvlaenderen.org</title>
        <meta name="description" content="Archival dossier for the House of Flanders-Praet. Descent from Louis Friese to Lodewijk IV (d. 1556), the Aalter Vrijhof as the line's Meetjesland anchor (1516–c. 1590), the post-1545 generation under active research, and late-16th-century cadet branches." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/praet-dossier" />
        <meta property="og:title" content="The Praet Line — Archival Dossier" />
        <meta property="og:description" content="Archival dossier for the House of Flanders-Praet. Descent from Louis Friese to Lodewijk IV (d. 1556), the Aalter Vrijhof as the line's Meetjesland anchor (1516–c. 1590), the post-1545 generation under active research, and late-16th-century cadet branches." />
        <meta property="og:url" content="https://vanvlaenderen.org/research/praet-dossier" />
        <meta property="og:type" content="article" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"ScholarlyArticle","headline":"The Praet Line \\u2014 Archival Dossier","description":"Archival dossier for the Praet line: Louis Friese van Vlaenderen through Lodewijk IV (Louis of Praet, Knight of the Golden Fleece, d. 1555).","url":"https://vanvlaenderen.org/research/praet-dossier","inLanguage":"en","dateModified":"2026-04-19","author":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"publisher":{"@type":"Organization","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"isPartOf":{"@type":"WebSite","name":"Van Vlaenderen","url":"https://vanvlaenderen.org"},"copyrightYear":2026,"copyrightHolder":[{"@type":"Person","name":"Michael Van Flandern"},{"@type":"Person","name":"Constance Van Flandern"}],"license":"https://creativecommons.org/licenses/by/4.0/"}`}} />
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
            <strong>Note on primary sources:</strong> the two principal authorities for this lineage are Philippe de l&rsquo;Espinoy, <em>Recherche des antiquitez et noblesse de Flandres</em> (Douai, 1631), and Olivarius Vredius (Olivier de Wree), <em>Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum</em> (Bruges, 1643). Both are published antiquarian works of recognised scholarly standing. Vredius has been accessed directly at 300 DPI and the relevant sections read in April 2026; Espinoy is cited through Vredius&rsquo;s verbatim extracts and through FMG MedLands summaries. Vredius&rsquo;s coverage of the Praet line spans Tabula XVI pp. 275&ndash;289 (Louis Friese, Johan I, Lodewijk II, Lodewijk III) and Tabula XIX pp. 387&ndash;388 (Lodewijk IV, Jossine van Praet, Jan II). Note: Vredius also published an earlier <em>Sigilla Comitum Flandriae</em> (Bruges, 1639) &mdash; a study of the counts&rsquo; seals &mdash; which is a separate work. The genealogical proofs for bastard lines are in the 1643 <em>Genealogia</em>, not the 1639 <em>Sigilla</em>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Louis Friese van Vlaenderen — also styled Lodewijk de Fries, Louis le Frison, and Louis le Friese de Flandre — was an illegitimate son of Louis II de Male, Count of Flanders (1330-1384). Wikipedia's article on Louis of Praet confirms that Lodewijk IV van Vlaenderen (Louis of Praet) was descended through his father from a bastard son of Louis of Male, count of Flanders, establishing the comital-bastard ancestry of the entire Praet branch.<sup>[2]</sup>
          </p>
          <p>
            FMG MedLands, summarising Vredius (1643), preserves the following verbatim extract: <em>messire Loys de Frise fils bastard de Loys de Male conte de Flandre, lequel il eut d une fille de Monsieur de Borre.</em> This passage directly attests Louis Friese's name, his bastard status, his father Louis de Male, and his maternal descent from the family of Monsieur de Borre.<sup>[1][3]</sup>
          </p>
          <p>
            FMG MedLands, summarising Espinoy (1631), preserves a record that in 1420 the lands and baronies of Praet and La Woestine were conveyed to the illegitimate son of Louis de Male, styled <em>Messire Louys de Flandres dit le Frizon.</em> This passage directly attests his territorial grant and the variant surname le Frizon.<sup>[1][4]</sup>
          </p>
          <p>
            Pattou's Batards de Flandres (2014) further identifies him as Louis le Friese, bastard of Flanders, lord of Praet and La Woestine, born approximately 1350, confirming the above.<sup>[5]</sup>
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
            The Heerlijkheid Praet is documented as having ancient roots in Oedelem (now Beernem, West Flanders), held by the original van Praet baronial family from at least the twelfth century. A published genealogical study of the van Praet family (Lauwens, 2010) records that in 1373 the leengoed of Praet in Oedelem was sold to Louis de Male, after which it passed as a grant to Louis Friese.<sup>[6]</sup>
          </p>
          <p>
            The Woestine lordship (Woesten, West Flanders) accompanied Praet. Louis Friese's second wife, Maria van Ghistelles, held the lordships of Zweveghem and Rosebeke in her own right, strengthening the Praet branch's position in western Flanders.<sup>[5]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>Marriage and Descent <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            Two marriages are attested. The first wife is connected to La Woestine but is unnamed in the accessible sources. The second wife, Maria van Ghistelles, is documented in Pattou's compilation as married after 25 September 1373. From these marriages Louis Friese left at least one son, Johan I van Vlaenderen (lord of Praet), whose marriage in 1420 to Johanna van Reygersvliet is recorded in the GenealogieOnline West-Europese Adel database.<sup>[5][7]</sup>
          </p>
        </section>

        <section className={styles.section}>
          <h2>The Surname van Vlaenderen <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelCorroborated}`}>Strongly Corroborated</span></h2>
          <p>
            The consistent use of van Vlaenderen by Louis Friese and his descendants is the central genealogical point for this project. Like his half-brother Victor, Louis Friese bore the surname in a period when it functioned not as a geographic descriptor but as a marker of comital illegitimate descent — crystallising as a hereditary identifier at the precise moment the Dampierre line's hold on Flanders ended with Louis de Male's death in 1384. Pattou's compilation documents van Vlaenderen styling through at least five further generations of the Praet line.<sup>[2][5]</sup>
          </p>
        </section>

        <section className={researchStyles.referenceList}>
          <h3>Notes & Bibliography</h3>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>1.</span>
            Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Foundation for Medieval Genealogy, MedLands: Flanders &amp; Hainaut</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Wikipedia. Louis II, Count of Flanders. <a href="https://en.wikipedia.org/wiki/Louis_II,_Count_of_Flanders" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Wikipedia, Louis II, Count of Flanders</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            Vredius, Olivarius (Olivier de Wree). <em>Genealogia Comitum Flandriae, Pars secunda: continens probationes XII posteriorum tabularum.</em> Bruges: J.B. &amp; Lucas Kerchovios, 1643. Vol. 2 of 2. [496 pp.] Not freely digitised; held at major European research libraries.{' '}
            <a href="https://www.rct.uk/collection/1021446" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Royal Collection Trust catalogue entry</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            Espinoy, Philippe de l'Espinoy. <em>Recherche des antiquitez et noblesse de Flandres.</em> Douai: veuve M. Wyon, 1631. BnF shelfmark M-1432.{' '}
            <a href="https://gallica.bnf.fr/ark:/12148/bpt6k1180858" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Free access (Gallica / BnF)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Pattou, Etienne. Batards de Flandres. 2014. <a href="https://docplayer.fr/21492316-Batards-de-flandres.html" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Pattou, Batards de Flandres (2014)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Lauwens, Patrik. Verhalen uit de genealogie Van Praet. September 2010. <a href="https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">Lauwens, Verhalen uit de genealogie Van Praet (2010)</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            GenealogieOnline. West-Europese Adel: Johan I van Vlaanderen Heer van Praet. <a href="https://www.genealogieonline.nl/en/west-europese-adel/I75517.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">GenealogieOnline, Johan I van Vlaanderen, Heer van Praet</a>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <button 
            onClick={() => goToResearch('louis-friese')} 
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
            Back to Louis Friese Lineage
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
