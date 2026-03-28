import { useState } from 'react';
import styles from './InnerPage.module.css';
import aboutStyles from './AboutPage.module.css';
import michaelConstanceGhent from '../assets/images/michael-constance-ghent.jpg';
import type { Tab } from '../components/Nav';

interface AboutPageProps {
  onNavigate?: (tab: Tab) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className={styles.page}>

      {/* ── Text-only Hero ────────────────────────────────────────── */}
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>Van Vlaenderen · About This Project</div>
        <h1>The Van Vlaenderen Research Initiative</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          A genealogical and historical project dedicated to documenting the origins, 
          migration patterns, and familial connections of the Van Vlaenderen surname.
        </p>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>Research Scope and Methodology</h2>
          <p>
            Our work focuses on the <strong>Meetjesland region of East Flanders</strong>, 
            specifically the parishes and villages of Bassevelde, Boekhoute, Waarschoot, 
            Oostwinkel, and their surrounding areas. We employ a multi-disciplinary approach 
            that integrates traditional archival research with modern genetic genealogy.
          </p>
          <p>
            Our primary source material includes:
          </p>
        </section>

        <div className={aboutStyles.sourcesList}>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>Parish Registers and Civil Records</div>
            <div className={aboutStyles.sourceDesc}>
              Systematic indexing of births, marriages, and deaths from the 17th century forward.
            </div>
          </div>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>Estate Inventories (<em>Staten van Goed</em>)</div>
            <div className={aboutStyles.sourceDesc}>
              Analysis of inheritance and property records to reconstruct family structures.
            </div>
          </div>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>Land Registers and Notarial Archives</div>
            <div className={aboutStyles.sourceDesc}>
              Mapping land ownership and legal transactions to trace geographic movement.
            </div>
          </div>
          <div className={aboutStyles.sourceItem}>
            <div className={aboutStyles.sourceLabel}>Y-DNA Analysis</div>
            <div className={aboutStyles.sourceDesc}>
              Utilizing paternal-line genetic testing to investigate shared origins between geographically distinct branches.
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <p>
            We maintain a strict distinction between documented evidence and working hypotheses. 
            Our findings are subject to ongoing revision as new archival material and DNA results 
            become available.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Project Origins</h2>
          <p>
            The initiative was established by siblings <strong>Michael and Constance Van Flandern</strong>. 
            The project's initial impetus was a personal effort to reconstruct our own family history, 
            which had been obscured by the early loss of family members in our father's generation. 
            This absence of inherited records necessitated a rigorous, source-based approach that 
            eventually expanded into a broader study of the Van Vlaenderen surname across time and region.
          </p>
        </section>

        <div className={aboutStyles.photoContainer}>
          <img
            src={michaelConstanceGhent}
            alt="Michael and Constance conducting field research in East Flanders"
            className={aboutStyles.photo}
          />
          <div className={aboutStyles.photoCaption}>
            Michael and Constance Van Flandern conducting field research in East Flanders.
          </div>
        </div>

        <section className={styles.section}>
          <h2>Collaborative Goals</h2>
          <p>
            This website serves as a platform for organizing findings, referencing primary sources, 
            and facilitating collaboration with the broader research community. We are committed to 
            an open-exchange model and welcome contact from researchers, historians, and family 
            historians across disciplines and geographies.
          </p>
          <p>
            We are actively seeking:
          </p>
        </section>

        <div className={aboutStyles.collaborationGrid}>
          <div className={aboutStyles.collaborationCard}>
            <div className={aboutStyles.collaborationTitle}>Historians and Genealogists</div>
            <div className={aboutStyles.collaborationDesc}>
              Particularly those specializing in the Meetjesland or Flemish migratory patterns.
            </div>
          </div>
          <div className={aboutStyles.collaborationCard}>
            <div className={aboutStyles.collaborationTitle}>DNA Participants</div>
            <div className={aboutStyles.collaborationDesc}>
              Individuals bearing the Van Vlaenderen surname (in any historical spelling) interested in Y-DNA testing.
            </div>
          </div>
          <div className={aboutStyles.collaborationCard}>
            <div className={aboutStyles.collaborationTitle}>Family Researchers</div>
            <div className={aboutStyles.collaborationDesc}>
              Descendants with relevant primary source documents, such as family bibles or 19th-century correspondence.
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <p>
            By bridging the gap between 15th-century comital records and early modern parish registers, 
            we aim to provide a comprehensive account of the Van Vlaenderen heritage.
          </p>
        </section>

        <button 
          className={styles.ctaBox}
          onClick={() => onNavigate?.('contact')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '100%', textAlign: 'center' }}
        >
          <div className={styles.ctaText}>
            Are you a researcher, historian, or descendant interested in contributing?
          </div>
          <div className={styles.ctaNote}>
            We welcome collaboration and look forward to hearing from you.
          </div>
        </button>

      </div>
    </div>
  );
}
