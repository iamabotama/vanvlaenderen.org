import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './InnerPage.module.css';
import dnaStyles from './DnaPage.module.css';
import vintageFamilyPhoto from '../assets/images/vintage-family-photo.jpg';
import cronikeShields from '../assets/images/heraldic/cronike-van-vlaenderen-shields-double-page.jpg';
import { useNav } from '../hooks/useNav';
import { Helmet } from 'react-helmet-async';

export default function DnaPage() {
  const { goTo } = useNav();
  const nav = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <Helmet>
        <title>DNA Project — Y-DNA Research | vanvlaenderen.org</title>
        <meta name="description" content="A collaborative Y-DNA research project investigating whether Van Vlaenderen families share a common medieval paternal ancestor. Reference Big Y-700 result on haplogroup R-FT1573." />
        <link rel="canonical" href="https://vanvlaenderen.org/dna" />
        <meta property="og:title" content="The Van Vlaenderen DNA Project" />
        <meta property="og:description" content="Investigating whether Van Vlaenderen families share a common medieval paternal ancestor. Reference Big Y-700 result on haplogroup R-FT1573 — seeking additional male-line testers." />
        <meta property="og:url" content="https://vanvlaenderen.org/dna" />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* ── Hero: shields image + text ────────────────────────────── */}
      <div className={styles.heroStrip}>
        <div
          className={styles.heroImg}
          style={{ backgroundImage: `url(${cronikeShields})`, backgroundPosition: 'center top' }}
        >
          <div className={styles.heroImgOverlay} />
        </div>
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>{t('dna.hero_eyebrow')}</div>
          <h1>{t('dna.hero_title')}</h1>
          <div className="gold-rule" />
          <p className={styles.heroLead}>
            {t('dna.hero_lead')}
          </p>
        </div>
      </div>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2>{t('dna.origin_heading')}</h2>
          <p>{t('dna.origin_p1')}</p>
          <p>{t('dna.origin_p2')}</p>
          <p>{t('dna.origin_p3')}</p>
          <p>{t('dna.origin_p4')}</p>
          <p>{t('dna.origin_p5')}</p>
          <p>
            <strong>{t('dna.origin_p6')}</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('dna.research_stands_heading')}</h2>
          <p>{t('dna.research_stands_p1')}</p>
          <p>{t('dna.research_stands_p2')}</p>
          <p>
            <strong>{t('dna.research_stands_p3')}</strong>
          </p>
          <p>{t('dna.research_stands_p4')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('dna.testing_heading')}</h2>
          <p>{t('dna.testing_intro')}</p>
          <p>{t('dna.testing_hypotheses_intro')}</p>
          <p>
            <strong>{t('dna.testing_hyp1_label')}</strong>{' '}{t('dna.testing_hyp1_body')}
          </p>
          <p>
            <strong>{t('dna.testing_hyp2_label')}</strong>{' '}{t('dna.testing_hyp2_body')}
          </p>
          <p>
            <strong>{t('dna.testing_hyp3_label')}</strong>{' '}{t('dna.testing_hyp3_body')}{' '}
            <button
              onClick={() => nav('/name/surname-origins')}
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
            >
              {t('dna.testing_hyp3_linktext')}
            </button>{' '}{t('dna.testing_hyp3_body_after')}
          </p>
          <p>{t('dna.testing_predictions_intro')}</p>
          <p>
            <strong>{t('dna.testing_pred1_label')}</strong>{' '}{t('dna.testing_pred1_body')}
          </p>
          <p>
            <strong>{t('dna.testing_pred2_label')}</strong>{' '}{t('dna.testing_pred2_body')}
          </p>
          <p>
            <strong>{t('dna.testing_pred3_label')}</strong>{' '}{t('dna.testing_pred3_body')}
          </p>
          <p>{t('dna.testing_p_mixed')}</p>
          <p style={{ fontSize: '0.85em', opacity: 0.75, marginTop: '-0.5em' }}>
            <em>
              {t('dna.testing_p_mixed_source_label')}
              <a href="https://doi.org/10.1098/rspb.2013.2400" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                {t('dna.testing_p_mixed_source_text')}
              </a>
            </em>
          </p>
          <p>
            <em>{t('dna.testing_close')}</em>
          </p>
        </section>

        <section className={styles.section}>
          <h2>{t('dna.zeeland_heading')}</h2>
          <p>{t('dna.zeeland_p1')}</p>
          <p>{t('dna.zeeland_p2')}</p>
          <p>{t('dna.zeeland_p3')}</p>
        </section>

        <div className={styles.pullQuote}>
          <blockquote>
            "{t('dna.pullquote')}"
          </blockquote>
        </div>

        <div className={dnaStyles.familyPhotoContainer}>
          <img
            src={vintageFamilyPhoto}
            alt="Vintage family photograph — early 20th century"
            className={dnaStyles.familyPhoto}
          />
          <div className={dnaStyles.familyPhotoCaption}>
            {t('dna.family_photo_caption')}
          </div>
        </div>

        <section className={styles.section}>
          <h2>{t('dna.dna_heading')}</h2>
          <p>
            {t('dna.dna_intro')}
          </p>
          <div className={dnaStyles.dnaGrid}>
            <div className={dnaStyles.dnaCard}>
              <div className={dnaStyles.dnaType}>{t('dna.dna_ydna')}</div>
              <div className={dnaStyles.dnaDesc}>
                {t('dna.dna_ydna_desc')}
              </div>
            </div>
            <div className={dnaStyles.dnaCard}>
              <div className={dnaStyles.dnaType}>{t('dna.dna_autosomal')}</div>
              <div className={dnaStyles.dnaDesc}>
                {t('dna.dna_autosomal_desc')}
              </div>
            </div>
            <div className={dnaStyles.dnaCard}>
              <div className={dnaStyles.dnaType}>{t('dna.dna_mtdna')}</div>
              <div className={dnaStyles.dnaDesc}>
                {t('dna.dna_mtdna_desc')}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('dna.project_heading')}</h2>
          <p>{t('dna.project_p1')}</p>
          <p>{t('dna.project_p2')}</p>
          <p>{t('dna.project_p3')}</p>
          <p>{t('dna.project_p4')}</p>
          <p>{t('dna.project_p5')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('dna.privacy_heading')}</h2>
          <p>{t('dna.privacy_intro')}</p>
          <p>
            <strong>{t('dna.privacy_ydna_label')}</strong>{' '}{t('dna.privacy_ydna_body')}
          </p>
          <p>
            <strong>{t('dna.privacy_control_label')}</strong>{' '}{t('dna.privacy_control_body')}
          </p>
          <p>
            <strong>{t('dna.privacy_publish_label')}</strong>{' '}{t('dna.privacy_publish_body')}
          </p>
          <p>
            <strong>{t('dna.privacy_aggregate_label')}</strong>{' '}{t('dna.privacy_aggregate_body')}
          </p>
          <p>{t('dna.privacy_close')}</p>
        </section>

        <div className={dnaStyles.testingServices}>
          <div className={dnaStyles.servicesHeading}>{t('dna.services_heading')}</div>
          <div className={dnaStyles.servicesGrid}>
            {[
              { name: t('dna.service_familytreedna'),  note: t('dna.service_familytreedna_note'),  url: 'https://www.familytreedna.com' },
              { name: t('dna.service_ancestry'),    note: t('dna.service_ancestry_note'),            url: 'https://www.ancestry.com/dna' },
              { name: t('dna.service_23andme'),        note: t('dna.service_23andme_note'),            url: 'https://www.23andme.com' },
              { name: t('dna.service_myheritage'), note: t('dna.service_myheritage_note'),              url: 'https://www.myheritage.com/dna' },
            ].map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className={dnaStyles.serviceCard}>
                <div className={dnaStyles.serviceName}>{s.name}</div>
                <div className={dnaStyles.serviceNote}>{s.note}</div>
                <div className={dnaStyles.serviceArrow}>↗</div>
              </a>
            ))}
          </div>
        </div>

        <button 
          className={styles.ctaBox}
          onClick={() => goTo('contact')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: '100%', textAlign: 'center' }}
        >
          <div className={styles.ctaText}>
            {t('dna.cta_body')}
          </div>
          <div className={styles.ctaNote}>
            {t('dna.cta_note')}
          </div>
        </button>

      </div>
    </div>
  );
}
