import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import styles from './InnerPage.module.css';
import researchStyles from './ResearchPage.module.css';

// ── Types ──────────────────────────────────────────────────────────────────
interface BibEntry {
  type: string;
  author: string;
  year: string;
  title: string;
  publisher?: string;
  note: string;
  url?: string;
  urlLabel?: string;
  availability?: string;
}

interface BibGroup {
  heading: string;
  entries: BibEntry[];
}

interface BibData {
  lastUpdated: string;
  sections: {
    primarySources: {
      label: string;
      subsections: Record<string, { label: string; entries: BibEntry[] }>;
    };
    scholarlyLiterature: {
      label: string;
      groups: BibGroup[];
    };
  };
}

// ── Type badge colours (match original) ───────────────────────────────────
const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  'Primary Source':        { bg: 'rgba(232,184,48,0.15)',  color: '#e8b830' },
  'Finding Aid':           { bg: 'rgba(74,222,128,0.15)',  color: '#4ade80' },
  'Belgian Historiography':{ bg: 'rgba(147,197,253,0.15)', color: '#93c5fd' },
  'Meetjesland':           { bg: 'rgba(196,165,255,0.15)', color: '#c4a5ff' },
  'Methodology':           { bg: 'rgba(251,191,36,0.15)',  color: '#fbbf24' },
  'Genetic Genealogy':     { bg: 'rgba(52,211,153,0.15)',  color: '#34d399' },
};

function typeBadge(type: string) {
  const c = TYPE_COLORS[type] ?? { bg: 'rgba(255,255,255,0.1)', color: '#ccc' };
  return (
    <span style={{
      background: c.bg, color: c.color,
      fontSize: '0.7rem', fontFamily: 'var(--font-ui)',
      letterSpacing: '0.08em', textTransform: 'uppercase',
      padding: '2px 8px', borderRadius: '3px',
      border: `1px solid ${c.color}33`, whiteSpace: 'nowrap',
    }}>
      {type}
    </span>
  );
}

// ── Entry card ─────────────────────────────────────────────────────────────
function EntryCard({ e }: { e: BibEntry }) {
  return (
    <div style={{
      borderLeft: '2px solid rgba(232,184,48,0.25)',
      paddingLeft: '1rem', marginBottom: '1.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
        {typeBadge(e.type)}
        <span style={{ color: 'var(--gold)', fontWeight: 600, fontFamily: 'var(--font-ui)', fontSize: '0.9rem' }}>
          {e.author}
        </span>
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>({e.year})</span>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
        {e.title}
      </div>
      {e.publisher && (
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
          {e.publisher}
        </div>
      )}
      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.6 }}>
        {e.note}
      </div>
      {e.url && (
        <a href={e.url} target="_blank" rel="noopener noreferrer" className={researchStyles.refLink}
          style={{ display: 'inline-block', marginTop: '0.4rem', fontSize: '0.8rem' }}>
          {e.urlLabel ?? e.url}
        </a>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function BibliographyPage() {
  const { t } = useTranslation();
  const [data, setData] = useState<BibData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/bibliography.json')
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Sources &amp; Scholarship — Van Vlaenderen</title>
        <meta name="description" content="Primary sources, archival finding aids, and scholarly literature cited in the Van Vlaenderen research dossiers." />
        <link rel="canonical" href="https://vanvlaenderen.org/research/bibliography" />
      </Helmet>

      <div className={styles.inner}>
        <h1>Sources &amp; Scholarship</h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2rem', maxWidth: '680px', lineHeight: 1.7 }}>
          The primary sources, archival finding aids, and scholarly literature that underpin the research
          presented in the dossiers. Entries in the first section are directly quoted or cited.
          Entries in the second section are recommended reading for researchers interested in the broader
          historiographical context.
        </p>

        {error && (
          <p style={{ color: '#f87171' }}>Bibliography data could not be loaded.</p>
        )}

        {data && (
          <>
            {/* ── I. Primary Sources ── */}
            <section className={styles.section}>
              <h2>{data.sections.primarySources.label}</h2>
              {Object.values(data.sections.primarySources.subsections).map(sub => (
                <div key={sub.label} style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-ui)',
                    fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: '1rem' }}>
                    {sub.label}
                  </h3>
                  {sub.entries.map((e, i) => <EntryCard key={i} e={e} />)}
                </div>
              ))}
            </section>

            {/* ── II. Scholarly Literature ── */}
            <section className={styles.section}>
              <h2>{data.sections.scholarlyLiterature.label}</h2>
              {data.sections.scholarlyLiterature.groups.map(group => (
                <div key={group.heading} style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-ui)',
                    fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: '1rem' }}>
                    {group.heading}
                  </h3>
                  {group.entries.map((e, i) => <EntryCard key={i} e={e} />)}
                </div>
              ))}
            </section>

            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '2rem' }}>
              Last updated: {data.lastUpdated}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
