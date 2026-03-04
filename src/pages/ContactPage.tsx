import { useState } from 'react';
import styles from './InnerPage.module.css';
import contactStyles from './ContactPage.module.css';
import polaroidCollage from '../assets/images/polaroid-collage.jpg';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@vanvlaenderen.org?subject=${encodeURIComponent(form.subject || 'Van Vlaenderen Enquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.textHero}>
        <div className={styles.eyebrow}>Van Vlaenderen · Connect</div>
        <h1>Get in Touch</h1>
        <div className="gold-rule" />
        <p className={styles.heroLead}>
          Whether you carry the Van Vlaenderen name, descend from the family, or simply
          have a question about the history — we would love to hear from you.
          No obligation. No pressure. Just curiosity shared.
        </p>
      </div>

      <div className={styles.content}>

        <div className={contactStyles.twoCol}>

          {/* Left: Why get in touch */}
          <div className={contactStyles.reasons}>
            <h2>Why Reach Out?</h2>
            <div className={contactStyles.reasonsList}>
              {[
                {
                  icon: '🌳',
                  title: 'You carry the name',
                  text: 'If your surname is Van Vlaenderen — in any spelling — we want to know your story. Every branch of the family matters.',
                },
                {
                  icon: '📜',
                  title: 'You have documents or photographs',
                  text: 'Old letters, birth certificates, photographs, land records — any document connected to the Van Vlaenderen family is valuable.',
                },
                {
                  icon: '🧬',
                  title: 'You have taken a DNA test',
                  text: 'If you have tested with AncestryDNA, 23andMe, or FamilyTreeDNA and have Van Vlaenderen ancestry, your results could connect the branches.',
                },
                {
                  icon: '🗺️',
                  title: 'You have local knowledge',
                  text: 'If you live in or near the Meetjesland and know stories about the Van Vlaenderen family or the mill at Vinderhoute, please share them.',
                },
                {
                  icon: '❓',
                  title: 'You have a question',
                  text: 'Genealogical research can be confusing. If you have a question about the Van Vlaenderen family or how to research your own roots, ask away.',
                },
              ].map(r => (
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
              <span className={contactStyles.privacyIcon}>🔒</span>
              <span>
                Your personal information is never shared, sold, or published without your
                explicit consent. This is a private family research project.
              </span>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={contactStyles.formWrap}>
            <h2>Send a Message</h2>
            {sent ? (
              <div className={contactStyles.sentMsg}>
                <div className={contactStyles.sentIcon}>✓</div>
                <div>Your message has been prepared in your email client. Thank you for reaching out to the Van Vlaenderen archive.</div>
              </div>
            ) : (
              <form className={contactStyles.form} onSubmit={handleSubmit}>
                <div className={contactStyles.field}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="e.g. Jan Van Vlaenderen"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className={contactStyles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
                <div className={contactStyles.field}>
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    <option value="Van Vlaenderen Family Research">Family Research</option>
                    <option value="Van Vlaenderen DNA Project">DNA Project</option>
                    <option value="Van Vlaenderen Documents or Photographs">Documents or Photographs</option>
                    <option value="The Van Vlaenderensmolen">The Mill</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div className={contactStyles.field}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message" name="message" rows={6}
                    placeholder="Tell us about your connection to the Van Vlaenderen family…"
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className={contactStyles.submitBtn}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>

        <div className={styles.pullQuote}>
          <blockquote>
            "Family history is not just about the past. It is about understanding who we are
            and where we come from — and perhaps finding others who share that journey."
          </blockquote>
        </div>

        <div className={contactStyles.collageContainer}>
          <img
            src={polaroidCollage}
            alt="Family photographs pinned to a corkboard with clothespins"
            className={contactStyles.collageImage}
          />
          <div className={contactStyles.collageCaption}>
            Every family has photographs. Every photograph tells part of the story.
            Share yours with the Van Vlaenderen archive.
          </div>
        </div>

      </div>
    </div>
  );
}
