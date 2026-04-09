import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';
import manuscriptNoblewoman from '../assets/images/heraldic/cronike-van-vlaenderen-countess-of-flanders.jpg';
import { OverviewDiagram } from '../components/Diagrams';

interface ResearchPageProps {
  onNavigate?: (subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => void;
}

export default function ResearchPage({ onNavigate }: ResearchPageProps) {
  const { t } = useTranslation();

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
          <div className={styles.eyebrow}>{t('research.hero_eyebrow')}</div>
          <h1>{t('research.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            Louis II de Male, Count of Flanders (1330&ndash;1384), fathered at least thirteen illegitimate children. Two of his natural sons founded surname-bearing lines that used <em>van Vlaenderen</em> as a hereditary identifier: Victor van Vlaenderen and Louis Friese van Vlaenderen.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={researchStyles.dossierHeader}>
          <h2 className={researchStyles.dossierTitle}>{t('research.dossier_title')}</h2>
          <div className={researchStyles.dossierMeta}>Updated April 2026</div>
        </div>

        {/* ── Two-Line Structure ──────────────────────────────────── */}
        <section className={styles.section}>
          <h2>The Two Surname-Bearing Lines</h2>
          <p>
            The research is structured around two documented lines descending from Louis de Male. Both lines used <em>van Vlaenderen</em> (and its variants: van Vlaendren, de Flandre, de Flandres) as a hereditary surname &mdash; not a geographic descriptor, but a marker of comital illegitimate descent that crystallised at the precise moment the Dampierre line's hold on Flanders ended with Louis de Male's death in 1384.
          </p>
        </section>

        {/* ── Overview Diagram ────────────────────────────────────── */}
        <div className={researchStyles.treeContainer}>
          <div className={researchStyles.treeTitle}>Louis II de Male &mdash; The Two Surname-Bearing Bastard Lines</div>
          <OverviewDiagram />
        </div>

        {/* ── Branch Cards ────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>Research Branches</h2>
        </section>

        <div className={researchStyles.branchCards}>
          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => onNavigate?.('victor')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('victor'); } }}
            aria-label="Victor van Vlaenderen"
          >
            <h3>Victor van Vlaenderen</h3>
            <p>
              Natural son of Louis de Male. Lord of Ursel and Wessegem. Three natural sons documented across three primary charters (1427, 1441, 1446). Adam van Vlaendren (fl. 1427 &ndash; 18 Mar 1447 N.S.) is the last confirmed 15th-century bearer and the primary research focus for bridging the evidentiary gap to the early modern parish records.
            </p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              Explore Victor's Line &rarr;
            </span>
          </div>

          <div
            className={researchStyles.branchCard}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            onClick={() => onNavigate?.('louis-friese')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('louis-friese'); } }}
            aria-label="Louis Friese van Vlaenderen"
          >
            <h3>Louis Friese van Vlaenderen</h3>
            <p>
              Natural son of Louis de Male. Lord of Praet and Woestine. Killed at Nicopolis 1396. Founded the House of Flanders-Praet &mdash; six generations using van Vlaenderen as a hereditary surname. The 1517 Knesselare charter places the Praet branch in direct territorial contact with the Meetjesland research cluster.
            </p>
            <span className={researchStyles.branchLink} aria-hidden="true">
              Explore the Praet Line &rarr;
            </span>
          </div>
        </div>

        {/* ── Methodology ─────────────────────────────────────────── */}
        <section className={researchStyles.methodologyBox} style={{ marginTop: '3rem' }}>
          <span className={researchStyles.methodologyTitle}>{t('research.methodology_title')}</span>
          <div className={researchStyles.methodologyGrid}>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_attested_label')}</span>
              {t('research.method_attested_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_corroborated_label')}</span>
              {t('research.method_corroborated_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_probable_label')}</span>
              {t('research.method_probable_text')}
            </div>
            <div className={researchStyles.methodItem}>
              <span className={researchStyles.methodLabel}>{t('research.method_hypothesis_label')}</span>
              {t('research.method_hypothesis_text')}
            </div>
          </div>
        </section>

        {/* ── Archival Dossiers ────────────────────────────────────── */}
        <section className={styles.section} style={{ marginTop: '3rem' }}>
          <h2>Archival Dossiers</h2>
          <p>For researchers seeking the underlying documentary evidence, we maintain detailed archival dossiers with full charter transcriptions, epitaph data, and source analysis.</p>
          <div className={researchStyles.branchCards}>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => onNavigate?.('victor-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('victor-dossier'); } }}
              aria-label="Victor van Vlaenderen Dossier"
            >
              <h3>Victor van Vlaenderen Dossier</h3>
              <p>Three-charter nucleus (1427, 1441, 1446), Victor's 1430 testament, Lodewyc's descendants, and the Oostborch epitaph evidence.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => onNavigate?.('praet-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('praet-dossier'); } }}
              aria-label="Louis Friese Archival Dossier"
            >
              <h3>Louis Friese: Archival Dossier</h3>
              <p>Primary source extracts and territorial history of the House of Flanders-Praet.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Archival Evidence &rarr;
              </span>
            </div>
            <div
              className={researchStyles.branchCard}
              role="button"
              tabIndex={0}
              style={{ borderTop: '3px solid var(--gold)', cursor: 'pointer' }}
              onClick={() => onNavigate?.('praet-lineage-dossier')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate?.('praet-lineage-dossier'); } }}
              aria-label="House of Praet Lineage Dossier"
            >
              <h3>House of Praet: Lineage Dossier</h3>
              <p>Six generations with primary-source confirmed data. Johan I's seven children, Josse de Flandre cadet branch, and the 1517 Knesselare charter.</p>
              <span className={researchStyles.branchLink} aria-hidden="true">
                View Lineage Evidence &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* ── Conclusion ──────────────────────────────────────────── */}
        <section className={styles.section}>
          <h2>{t('research.conclusion_title')}</h2>
          <p>
            {t('research.conclusion_p1')}
          </p>
        </section>

        <div className={styles.ctaBox} onClick={() => onNavigate?.('contact')} style={{ cursor: 'pointer' }}>
          <div className={styles.ctaText}>
            {t('research.cta_text')}
          </div>
          <div className={styles.ctaNote}>
            {t('research.cta_note')}
          </div>
        </div>
      </div>
    </div>
  );
}
