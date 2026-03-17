import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';


interface ResearchPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese') => void;
}

export default function ResearchPage({ onNavigate }: ResearchPageProps) {
  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${manuscriptNoblewoman})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>Van Vlaenderen · Genealogical Research</div>
          <h1>The Van Vlaenderen Heritage</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            A shared comital-bastard lineage descending from Louis II "de Male," Count of Flanders.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>Research Overview</h2>
          <div className={researchStyles.dossierMeta}>Updated: March 2026</div>
        </div>

        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            The "Van Vlaenderen" surname carries a rich and complex heritage, rooted not in a single unbroken lineage, 
            but in the intertwined histories of several prominent branches descending from <strong>Louis II de Male</strong>, 
            the last Count of Flanders from the House of Dampierre (1330–1384). While Louis II de Male had one legitimate 
            daughter, Margaret III, who inherited his titles, he also fathered numerous illegitimate children. These "natural" 
            children, though excluded from direct succession to the County, were often recognized, ennobled, and played significant 
            roles in the political and social landscape of medieval Flanders. Crucially, many of them carried the distinguished 
            surname "Van Vlaenderen," signifying their comital bloodline.
          </p>
          <p>
            This research page introduces two of the most significant of these illegitimate lines: the descendants of 
            <strong>Victor van Vlaenderen</strong> and the <strong>House of Flanders-Praet</strong>, founded by 
            <strong>Louis "Friese" van Vlaenderen</strong>. By examining these parallel lineages, we aim to provide a 
            comprehensive understanding of how the "Van Vlaenderen" name became a marker of a shared, albeit unconventional, 
            noble heritage that continues to resonate today.
          </p>
        </section>

        <section className={researchStyles.methodologyBox}>
          <span className={researchStyles.methodologyTitle}>Methodology</span>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Directly Attested</span>
              Rest on quoted charter language or explicit documentary summaries.
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Strongly Corroborated</span>
              Supported by concordant published historical or heritage authorities.
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Probable</span>
              Source-based but require fuller inspection of underlying editions.
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>Hypothesis</span>
              Genealogical inferences proposed for further testing, not proved facts.
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>The Significance of "Natural" Children in Medieval Flanders</h2>
          <p>
            In the late medieval period, illegitimate children of high-ranking nobility, particularly those of reigning monarchs 
            or powerful counts, were often acknowledged and integrated into the aristocratic fabric. These "natural" children were 
            distinct from common-born bastards; they received education, lands, titles, and often played key roles in administration, 
            diplomacy, and military affairs. Their surnames, such as "Van Vlaenderen" or "de Flandre," served as a constant reminder 
            of their prestigious, albeit non-successional, lineage.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Exploring the Branches</h2>
          <p>
            This research site presents two detailed investigations into the major branches of the Van Vlaenderen family:
          </p>
        </section>

        <div className={researchStyles.branchCards}>
          <div className={researchStyles.branchCard}>
            <h3>Victor van Vlaenderen</h3>
            <p>
              Lord of Wessegem and one of Louis II de Male's recognized illegitimate sons. Victor established a notable lineage 
              in the Ursel/Wessegem region, with documented sons bearing the Van Vlaenderen surname. His descendants were prominent 
              in the local gentry of Flanders.
            </p>
            <button 
              onClick={() => onNavigate?.('victor')} 
              className={researchStyles.branchLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              View Victor's Lineage →
            </button>
          </div>

          <div className={researchStyles.branchCard}>
            <h3>Louis "Friese" van Vlaenderen</h3>
            <p>
              Progenitor of the House of Flanders-Praet and another influential illegitimate son of Louis II de Male. Louis "Friese" 
              was granted the lordships of Praet and Woestine, establishing a powerful cadet branch. Though the direct noble line 
              became extinct in 1556, the Van Vlaenderen surname persisted through younger sons and cadet branches.
            </p>
            <button 
              onClick={() => onNavigate?.('louis-friese')} 
              className={researchStyles.branchLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              View Louis "Friese"'s Lineage →
            </button>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Conclusion</h2>
          <p>
            The "Van Vlaenderen" surname, as carried by the descendants of Louis II de Male's illegitimate children, represents 
            a fascinating aspect of Flemish history. It signifies a shared heritage of comital blood, influence, and adaptation 
            across centuries. By understanding these distinct yet interconnected branches, we gain a deeper appreciation for the 
            enduring legacy of the Counts of Flanders and the many individuals who proudly bore their name.
          </p>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            Do you have research that connects to the lines of Victor van Vlaenderen or the Praet branch?
          </div>
          <div className={styles.ctaNote}>
            We are actively seeking to bridge the gap between the 15th-century records and 
            the early modern parish registers, and to further document both lineages.
          </div>
        </div>
      </div>
    </div>
  );
}
