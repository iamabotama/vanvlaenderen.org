import { useState } from 'react';
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
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
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

        {/* ── How to Participate (top CTA) ─────────────────────────── */}
        <div className={dnaStyles.participateBlock}>
          <h2 className={dnaStyles.participateHeading}>{t('dna.participate_heading')}</h2>
          <p className={dnaStyles.participateIntro}>{t('dna.participate_intro')}</p>
          <p className={dnaStyles.participateStep}>
            <strong>{t('dna.participate_step1_label')}</strong>{' '}{t('dna.participate_step1_body')}
          </p>
          <p className={dnaStyles.participateStep}>
            <strong>{t('dna.participate_step2_label')}</strong>{' '}{t('dna.participate_step2_body')}
          </p>
          <p className={dnaStyles.participateStep}>
            <strong>{t('dna.participate_step3_label')}</strong>{' '}{t('dna.participate_step3_body')}
          </p>
          <div className={dnaStyles.participateButtonWrap}>
            <button
              className={dnaStyles.joinTeamBtn}
              onClick={() => goTo('contact')}
            >
              {t('dna.participate_button')}
            </button>
          </div>
          <div className={dnaStyles.participateAlternative}>
            <strong>{t('dna.participate_alternative_label')}</strong>{' '}{t('dna.participate_alternative_body')}
          </div>
        </div>

        <section className={styles.section}>
          <h2>{t('dna.testing_heading')}</h2>
          <p>
            {t('dna.testing_intro_pre')}{' '}
            <button
              onClick={() => nav('/research/victor-dossier')}
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
            >
              {t('dna.testing_intro_victor_text')}
            </button>{' '}{t('dna.testing_intro_mid1')}{' '}
            <button
              onClick={() => nav('/research/drincham-dossier')}
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
            >
              {t('dna.testing_intro_drincham_text')}
            </button>{' '}{t('dna.testing_intro_mid2')}{' '}
            <button
              onClick={() => nav('/research/praet-dossier')}
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
            >
              {t('dna.testing_intro_praet_text')}
            </button>{' '}{t('dna.testing_intro_post')}
          </p>
          <p>{t('dna.testing_hypotheses_intro')}</p>
          <p>
            <strong>{t('dna.testing_hyp1_label')}</strong>{' '}{t('dna.testing_hyp1_body')}
          </p>
          <p>
            <strong>{t('dna.testing_hyp2_label')}</strong>{' '}{t('dna.testing_hyp2_body')}
          </p>
          <p>
            {t('dna.testing_toponymy_pre')}{' '}
            <button
              onClick={() => nav('/name/surname-origins')}
              style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
            >
              {t('dna.testing_toponymy_linktext')}
            </button>{' '}{t('dna.testing_toponymy_post')}
          </p>
          <p>{t('dna.testing_predictions_intro')}</p>
          <p>
            <strong>{t('dna.testing_pred1_label')}</strong>{' '}{t('dna.testing_pred1_body')}
          </p>
          <p>
            <strong>{t('dna.testing_pred2_label')}</strong>{' '}{t('dna.testing_pred2_body')}
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
              <button
                className={dnaStyles.dnaCardToggle}
                onClick={() => toggle('ydna')}
                aria-expanded={!!expanded['ydna']}
                aria-controls="dna-ydna-expanded"
              >
                <div className={dnaStyles.dnaCardHeader}>
                  <div className={dnaStyles.dnaType}>{t('dna.dna_ydna')}</div>
                  <div className={dnaStyles.dnaCardChevron}>{expanded['ydna'] ? '−' : '+'}</div>
                </div>
                <div className={dnaStyles.dnaDesc}>
                  {t('dna.dna_ydna_desc')}
                </div>
              </button>
              {expanded['ydna'] && (
                <div id="dna-ydna-expanded" className={dnaStyles.dnaCardExpanded}>
                  <div className={dnaStyles.dnaCardExpandedItem}>
                    <strong>{t('dna.dna_ydna_already_label')}</strong>
                    {t('dna.dna_ydna_already_body')}
                  </div>
                  <div className={dnaStyles.dnaCardExpandedItem}>
                    <strong>{t('dna.dna_ydna_considering_label')}</strong>
                    {t('dna.dna_ydna_considering_body')}
                  </div>
                </div>
              )}
            </div>
            <div className={dnaStyles.dnaCard}>
              <button
                className={dnaStyles.dnaCardToggle}
                onClick={() => toggle('autosomal')}
                aria-expanded={!!expanded['autosomal']}
                aria-controls="dna-autosomal-expanded"
              >
                <div className={dnaStyles.dnaCardHeader}>
                  <div className={dnaStyles.dnaType}>{t('dna.dna_autosomal')}</div>
                  <div className={dnaStyles.dnaCardChevron}>{expanded['autosomal'] ? '−' : '+'}</div>
                </div>
                <div className={dnaStyles.dnaDesc}>
                  {t('dna.dna_autosomal_desc')}
                </div>
              </button>
              {expanded['autosomal'] && (
                <div id="dna-autosomal-expanded" className={dnaStyles.dnaCardExpanded}>
                  <div className={dnaStyles.dnaCardExpandedItem}>
                    <strong>{t('dna.dna_autosomal_already_label')}</strong>
                    {t('dna.dna_autosomal_already_body')}
                  </div>
                  <div className={dnaStyles.dnaCardExpandedItem}>
                    <strong>{t('dna.dna_autosomal_considering_label')}</strong>
                    {t('dna.dna_autosomal_considering_body')}
                  </div>
                </div>
              )}
            </div>
            <div className={dnaStyles.dnaCard}>
              <button
                className={dnaStyles.dnaCardToggle}
                onClick={() => toggle('mtdna')}
                aria-expanded={!!expanded['mtdna']}
                aria-controls="dna-mtdna-expanded"
              >
                <div className={dnaStyles.dnaCardHeader}>
                  <div className={dnaStyles.dnaType}>{t('dna.dna_mtdna')}</div>
                  <div className={dnaStyles.dnaCardChevron}>{expanded['mtdna'] ? '−' : '+'}</div>
                </div>
                <div className={dnaStyles.dnaDesc}>
                  {t('dna.dna_mtdna_desc')}
                </div>
              </button>
              {expanded['mtdna'] && (
                <div id="dna-mtdna-expanded" className={dnaStyles.dnaCardExpanded}>
                  <div className={dnaStyles.dnaCardExpandedItem}>
                    <strong>{t('dna.dna_mtdna_already_label')}</strong>
                    {t('dna.dna_mtdna_already_body')}
                  </div>
                  <div className={dnaStyles.dnaCardExpandedItem}>
                    <strong>{t('dna.dna_mtdna_considering_label')}</strong>
                    {t('dna.dna_mtdna_considering_body')}
                  </div>
                </div>
              )}
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

        <section className={styles.section}>
          <h2>{t('dna.notes_heading')}</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            {t('dna.notes_intro')}
          </p>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
            <p>
              {t('dna.notes_source_1_label')} {t('dna.notes_source_1_text')}
            </p>
            <p>
              {t('dna.notes_source_2_label')} {t('dna.notes_source_2_text')}{' '}
              <button
                onClick={() => { nav('/name/surname-origins'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}
              >
                {t('dna.notes_source_2_linktext')}
              </button>
            </p>
            <p>
              {t('dna.notes_source_3_label')} {t('dna.notes_source_3_text')}{' '}
              <a href="https://doi.org/10.1098/rspb.2013.2400" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                DOI: 10.1098/rspb.2013.2400
              </a>
            </p>
            <p>
              {t('dna.notes_source_4_label')} {t('dna.notes_source_4_text')}{' '}
              <a href="https://discover.familytreedna.com/y-dna/R-FT1573/tree" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>
                {t('dna.notes_source_4_linktext')}
              </a>
            </p>
          </div>
        </section>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            {t('dna.cta_body')}
          </div>
          <div className={styles.ctaNote}>
            {t('dna.cta_note')}
          </div>
          <button
            className={dnaStyles.joinTeamBtn}
            onClick={() => goTo('contact')}
          >
            {t('dna.cta_button')}
          </button>
        </div>

      </div>
    </div>
  );
}
