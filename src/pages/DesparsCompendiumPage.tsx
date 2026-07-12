import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import innerStyles from './InnerPage.module.css';
import styles from './DesparsCompendiumPage.module.css';

// Build-time imports — markdown bundled into the JS so prerender outputs full HTML.
import compendiumEN from '../content/despars-compendium.en.md?raw';
import compendiumNL from '../content/despars-compendium.nl.md?raw';

const COMPENDIUM_VERSION = '3.2';
const PDF_PATH = `/downloads/despars-compendium-v${COMPENDIUM_VERSION}.pdf`;

// Toggle to true once the PDF artifact lands in public/downloads/.
const PDF_AVAILABLE = true;

/**
 * Extract a heading's plain-text content from a React-Markdown children tree.
 * Recurses through nested elements (strong, em, etc.) and concatenates text.
 */
function extractText(node: unknown): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && node !== null && 'props' in node) {
    const props = (node as { props?: { children?: unknown } }).props;
    return extractText(props?.children);
  }
  return '';
}

/**
 * Derive a stable id from heading text.
 * For entry headings whose text begins with a citation code (A.1, B.7, etc.),
 * the code itself becomes the id — matching the inline citation convention
 * used on line pages ("per Despars compendium B.7" → href="#B.7").
 * For non-entry headings (Parts, sections), fall back to a kebab-cased slug.
 */
function headingId(text: string): string {
  const trimmed = text.trim();
  const codeMatch = trimmed.match(/^([A-Z]\.\d+(?:\.\d+)?)\b/);
  if (codeMatch) return codeMatch[1];
  return trimmed
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Custom markdown components: derive ids on h2/h3 headings, and add an
 * anchor-link affordance to h3 entry headings for easy citation.
 */
const markdownComponents: Components = {
  h2: ({ children, ...props }) => {
    const text = extractText(children);
    const id = headingId(text);
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const text = extractText(children);
    const id = headingId(text);
    return (
      <h3 id={id} {...props}>
        {children}
        <a
          href={`#${id}`}
          className={styles.anchorLink}
          aria-label={`Link to ${text}`}
        >
          §
        </a>
      </h3>
    );
  },
};

export default function DesparsCompendiumPage() {
  const { t, i18n } = useTranslation();

  // Choose the locale-specific markdown source.
  const markdownSource = useMemo(() => {
    const lang = i18n.language?.toLowerCase().split('-')[0];
    return lang === 'nl' ? compendiumNL : compendiumEN;
  }, [i18n.language]);

  return (
    <div className={innerStyles.page}>
      <div className={innerStyles.content}>
        <h1>{t('despars_compendium.heading')}</h1>

        <p dangerouslySetInnerHTML={{ __html: t('despars_compendium.intro') }} />

        <div className={styles.downloadStrip}>
          <span className={styles.version}>
            {t('despars_compendium.version_line', { version: COMPENDIUM_VERSION })}
          </span>
          {PDF_AVAILABLE ? (
            <a
              className={styles.downloadButton}
              href={PDF_PATH}
              download
            >
              {t('despars_compendium.download_button', { version: COMPENDIUM_VERSION })}
            </a>
          ) : (
            <span className={styles.pdfPending}>
              {t('despars_compendium.pdf_pending')}
            </span>
          )}
        </div>

        <div className={styles.body}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {markdownSource}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
