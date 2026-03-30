import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './InnerPage.module.css';
import contactStyles from './ContactPage.module.css';
import polaroidCollage from '../assets/images/polaroid-collage.jpg';

export default function ContactPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mkoprkaj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || 'General Enquiry',
          message: form.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(t('contact.form_error'));
      }
    } catch (err) {
      setError(t('contact.form_error'));
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const reasons = [
    {
      icon: '⚜',
      title: t('contact.reason_name_title'),
      text: t('contact.reason_name_text'),
    },
    {
      icon: '⚜',
      title: t('contact.reason_docs_title'),
      text: t('contact.reason_docs_text'),
    },
    {
      icon: '⚜',
      title: t('contact.reason_dna_title'),
      text: t('contact.reason_dna_text'),
    },
    {
      icon: '⚜',
      title: t('contact.reason_local_title'),
      text: t('contact.reason_local_text'),
    },
    {
      icon: '⚜',
      title: t('contact.reason_question_title'),
      text: t('contact.reason_question_text'),
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>{t('contact.hero_eyebrow')}</div>
        <h1>{t('contact.hero_title')}</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          {t('contact.hero_lead')}
        </p>
      </div>

      <div className={styles.content}>

        <div className={contactStyles.twoCol}>

          {/* Left: Why get in touch */}
          <div className={contactStyles.reasons}>
            <h2>{t('contact.reasons_title')}</h2>
            <div className={contactStyles.reasonsList}>
              {reasons.map(r => (
                <div key={r.title} className={contactStyles.reasonItem}>
                  <div className={contactStyles.reasonIcon}>{r.icon}</div>
                  <div>
                    <div className={contactStyles.reasonTitle}>{r.title}</div>
                    <div className={contactStyles.reasonText}>{r.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Privacy note */}
            <div className={contactStyles.privacyNote}>
              <span className={contactStyles.privacyIcon}>⚜</span>
              <span>
                {t('contact.privacy_text')}
              </span>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={contactStyles.formWrap}>
            <h2>{t('contact.form_title')}</h2>
            {sent ? (
              <div className={contactStyles.sentMsg}>
                <div className={contactStyles.sentIcon}>✓</div>
                <div>{t('contact.form_success')}</div>
              </div>
            ) : (
              <form className={contactStyles.form} onSubmit={handleSubmit}>
                {error && (
                  <div className={contactStyles.errorMsg}>
                    {error}
                  </div>
                )}
                <div className={contactStyles.field}>
                  <label htmlFor="name">{t('contact.form_name')}</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder={t('contact.form_name_placeholder')}
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className={contactStyles.field}>
                  <label htmlFor="email">{t('contact.form_email')}</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder={t('contact.form_email_placeholder')}
                    value={form.email} onChange={handleChange} required
                  />
                </div>
                <div className={contactStyles.field}>
                  <label htmlFor="subject">{t('contact.form_subject')}</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">{t('contact.form_subject_placeholder')}</option>
                    <option value="Van Vlaenderen Family Research">{t('contact.form_subject_research')}</option>
                    <option value="Van Vlaenderen DNA Project">{t('contact.form_subject_dna')}</option>
                    <option value="Van Vlaenderen Documents or Photographs">{t('contact.form_subject_docs')}</option>
                    <option value="The Van Vlaenderensmolen">{t('contact.form_subject_mill')}</option>
                    <option value="General Enquiry">{t('contact.form_subject_general')}</option>
                  </select>
                </div>
                <div className={contactStyles.field}>
                  <label htmlFor="message">{t('contact.form_message')}</label>
                  <textarea
                    id="message" name="message" rows={6}
                    placeholder={t('contact.form_message_placeholder')}
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className={contactStyles.submitBtn} disabled={loading}>
                  {loading ? t('contact.form_sending') : t('contact.form_submit')}
                </button>
              </form>
            )}
          </div>

        </div>

        <div className={styles.pullQuote}>
          <blockquote>
            "{t('contact.pull_quote')}"
          </blockquote>
        </div>

        <div className={contactStyles.collageContainer}>
          <img
            src={polaroidCollage}
            alt={t('contact.collage_caption')}
            className={contactStyles.collageImage}
          />
          <div className={contactStyles.collageCaption}>
            {t('contact.collage_caption')}
          </div>
        </div>

      </div>
    </div>
  );
}
