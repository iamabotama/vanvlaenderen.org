
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';

interface PraetDossierPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => void;
}

export default function PraetDossierPage({ onNavigate }: PraetDossierPageProps) {
  return (
    <div className={styles.page}>
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
            <strong>Note on primary sources:</strong> the two principal authorities for this lineage are Philippe de l'Espinoy, Recherche des antiquitez et noblesse de Flandres (Douai, 1631), and Olivarius Vredius (Olivier de Wree), Sigilla Comitum Flandriae et Inscriptiones Diplomatum (Bruges, 1639). Both are published antiquarian works of recognised scholarly standing. Neither has been accessed directly; both are cited through the Foundation for Medieval Genealogy MedLands summaries.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Identity and Parentage <span className={`${researchStyles.evidenceLevel} ${researchStyles.levelAttested}`}>Directly Attested</span></h2>
          <p>
            Louis Friese van Vlaenderen — also styled Lodewijk de Fries, Louis le Frison, and Louis le Friese de Flandre — was an illegitimate son of Louis II de Male, Count of Flanders (1330-1384). Wikipedia's article on Louis of Praet confirms that Lodewijk IV van Vlaenderen (Louis of Praet) was descended through his father from a bastard son of Louis of Male, count of Flanders, establishing the comital-bastard ancestry of the entire Praet branch.<sup>[2]</sup>
          </p>
          <p>
            FMG MedLands, summarising Vredius (1639), preserves the following verbatim extract: <em>messire Loys de Frise fils bastard de Loys de Male conte de Flandre, lequel il eut d une fille de Monsieur de Borre.</em> This passage directly attests Louis Friese's name, his bastard status, his father Louis de Male, and his maternal descent from the family of Monsieur de Borre.<sup>[1][3]</sup>
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
            Louis Friese's death is directly attested in multiple independent sources. Wikipedia's article on Louis II, Count of Flanders records that Louis the Frisian, lord of Woestyne, was killed at the Battle of Nicopolis on 28 September 1396. This date is corroborated by Pattou's compilation. His death at Nicopolis alongside his brothers Louis le Haeze and Jean Sans Terre makes 28 September 1396 one of the most firmly anchored dates in the Praet lineage.<sup>[2][5]</sup>
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
            Foundation for Medieval Genealogy. MedLands: Flanders, Hainaut. <a href="https://fmg.ac/Projects/MedLands/FLANDERS,%20HAINAUT.htm" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">fmg.ac/Projects/MedLands/FLANDERS, HAINAUT.htm</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>2.</span>
            Wikipedia. Louis II, Count of Flanders. <a href="https://en.wikipedia.org/wiki/Louis_II,_Count_of_Flanders" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">en.wikipedia.org/wiki/Louis_II,_Count_of_Flanders</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>3.</span>
            Vredius, Olivarius (Olivier de Wree). Sigilla Comitum Flandriae et Inscriptiones Diplomatum. Bruges, 1639.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>4.</span>
            Espinoy, Philippe de l'Espinoy. Recherche des antiquitez et noblesse de Flandres. Douai, 1631.
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>5.</span>
            Pattou, Etienne. Batards de Flandres. 2014. <a href="https://docplayer.fr/21492316-Batards-de-flandres.html" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">docplayer.fr/21492316-Batards-de-flandres.html</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>6.</span>
            Lauwens, Patrik. Verhalen uit de genealogie Van Praet. September 2010. <a href="https://www.laurentii.be/Verhalen%20uit%20de%20genealogie%20Van%20Praet.pdf" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">laurentii.be/Verhalen uit de genealogie Van Praet.pdf</a>
          </div>
          <div className={researchStyles.refItem}>
            <span className={researchStyles.refNumber}>7.</span>
            GenealogieOnline. West-Europese Adel: Johan I van Vlaanderen Heer van Praet. <a href="https://www.genealogieonline.nl/en/west-europese-adel/I75517.php" className={researchStyles.refLink} target="_blank" rel="noopener noreferrer">genealogieonline.nl/en/west-europese-adel/I75517.php</a>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(232, 184, 48, 0.2)' }}>
          <button 
            onClick={() => onNavigate?.('louis-friese')} 
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
        </div>
      </div>
    </div>
  );
}
