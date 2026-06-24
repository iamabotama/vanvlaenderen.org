import { useState, useRef, useEffect, useCallback, useId } from 'react';
import styles from './Footnote.module.css';

interface CiteProps {
  /** Note number; must match the id of a `#fn-{n}` item in the Notes list. */
  n: number;
  /** Short citation text shown in the hover/tap popover. */
  text: string;
  /** Optional page/locator for this specific citation, shown in the popover (e.g. "p. 287"). */
  loc?: string;
  /**
   * Set on every citation of a note AFTER its first on the page. The first
   * citation owns `id="fnref-{n}"` (the back-link target); repeats omit it so
   * the id stays unique. All markers still link to `#fn-{n}`.
   */
  repeat?: boolean;
}

/**
 * Inline citation marker with a progressive-enhancement popover.
 *
 * - With no JS, it renders as a plain superscript anchor to `#fn-{n}` at the
 *   bottom of the page (accessible, crawlable, jumps natively).
 * - With JS, hover / keyboard focus / tap shows the note in place; clicking
 *   "pins" it open until you click away or press Escape.
 *
 * SSR-safe: the popover starts closed on both server and client, so there is
 * no hydration mismatch.
 */
export function Cite({ n, text, loc, repeat }: CiteProps) {
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popId = useId();

  const show = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setOpen(true);
  }, []);

  const scheduleHide = useCallback(() => {
    if (pinned) return;
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpen(false), 140);
  }, [pinned]);

  useEffect(() => {
    if (!pinned) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setPinned(false);
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPinned(false);
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [pinned]);

  useEffect(() => () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }, []);

  return (
    <span
      ref={wrapRef}
      className={styles.wrap}
      onMouseEnter={show}
      onMouseLeave={scheduleHide}
    >
      <sup className={styles.sup}>
        <a
          href={`#fn-${n}`}
          id={repeat ? undefined : `fnref-${n}`}
          className={styles.ref}
          aria-describedby={open ? popId : undefined}
          onFocus={show}
          onBlur={scheduleHide}
          onClick={(e) => {
            // JS path: show the note in place rather than jumping away.
            e.preventDefault();
            setPinned((p) => {
              const next = !p;
              setOpen(next);
              return next;
            });
          }}
        >
          {n}
        </a>
      </sup>
      {open && (
        <span
          role="tooltip"
          id={popId}
          className={styles.popover}
          onMouseEnter={show}
          onMouseLeave={scheduleHide}
        >
          <span>
            <span className={styles.popNum}>{n}</span>
            <span className={styles.popText}>{loc ? `${text} — ${loc}` : text}</span>
          </span>
          <br />
          <a href={`#fn-${n}`} className={styles.popJump}>full note ↓</a>
        </span>
      )}
    </span>
  );
}
