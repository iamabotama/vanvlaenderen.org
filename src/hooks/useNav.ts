/**
 * useNav — thin wrapper around React Router's useNavigate
 * that speaks the site's semantic route names.
 *
 * Replaces all onNavigate / onNav callback props across the app.
 * Any page component can call:
 *   const { goTo, goToResearch } = useNav();
 *   goTo('contact')
 *   goToResearch('praet-dossier')
 */
import { useNavigate } from 'react-router-dom';

export type TopTab = 'home' | 'mill' | 'name' | 'dna' | 'research' | 'lineage' | 'about' | 'contact';
export type ResearchSubpage = 'main' | 'victor' | 'louis-friese' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier' | 'methodology' | 'bibliography' | 'gap-dossier';

const TOP_PATHS: Record<TopTab, string> = {
  home:     '/',
  mill:     '/mill',
  name:     '/name',
  dna:      '/dna',
  research: '/research',
  lineage:  '/lineage',
  about:    '/about',
  contact:  '/contact',
};

const RESEARCH_PATHS: Record<ResearchSubpage, string> = {
  main:                    '/research',
  victor:                  '/research/victor',
  'louis-friese':          '/research/louis-friese',
  'victor-dossier':        '/research/victor-dossier',
  'praet-dossier':         '/research/praet-dossier',
  'praet-lineage-dossier': '/research/praet-lineage-dossier',
  'methodology':           '/research/methodology',
  'bibliography':          '/research/bibliography',
  'gap-dossier':           '/research/gap-dossier',
};

export function useNav() {
  const navigate = useNavigate();

  const goTo = (tab: TopTab | string) => {
    const path = TOP_PATHS[tab as TopTab] ?? '/';
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToResearch = (subpage: ResearchSubpage | string) => {
    if (subpage === 'contact') {
      navigate('/contact');
    } else {
      const path = RESEARCH_PATHS[subpage as ResearchSubpage] ?? '/research';
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { goTo, goToResearch };
}
