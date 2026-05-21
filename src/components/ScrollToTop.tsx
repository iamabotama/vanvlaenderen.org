/**
 * ScrollToTop
 *
 * Mounted once in App.tsx, this component watches the router location and
 * scrolls to the top of the page whenever the pathname changes. Replaces the
 * per-callsite window.scrollTo(...) that lived in the old useNav hook and
 * Nav.tsx — those went away when internal navigation was converted from
 * <button onClick={navigate(...)}> to react-router <Link to=...>.
 *
 * Pathname changes (cross-page navigation) → instant jump to top. Animated
 * scroll between pages is disorienting: the new page's content streaks past
 * before settling, and there's no spatial relationship to animate through.
 * Real page loads don't animate; SPA navigation shouldn't either.
 *
 * Hash navigation (in-page anchors like #larmuseau-2013-cuckoldry on the
 * BibliographyPage) is left alone — those use scrollIntoView({ behavior:
 * 'smooth' }) per-page, and within a single page smooth scroll *is* helpful
 * because the user has spatial orientation to the content being traversed.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let per-page hash logic handle in-page anchors
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
