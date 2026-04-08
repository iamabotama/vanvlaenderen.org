import { useState, useEffect, useCallback } from 'react';
import Nav from './components/Nav';
import type { Tab } from './components/Nav';
import FamilyTreeCanvas from './components/FamilyTreeCanvas';
import HomePage from './pages/HomePage';
import MillPage from './pages/MillPage';
import NamePage from './pages/NamePage';
import DnaPage from './pages/DnaPage';
import ResearchPage from './pages/ResearchPage';
import VictorLineagePage from './pages/VictorLineagePage';
import LouisFrieseLineagePage from './pages/LouisFrieseLineagePage';
import VictorDossierPage from './pages/VictorDossierPage';
import PraetDossierPage from './pages/PraetDossierPage';
import PraetLineageDossierPage from './pages/PraetLineageDossierPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import { LineagePage } from './components/Lineage';
import './App.css';

/* ── History helpers ──────────────────────────────────────────────── */

type ResearchSubpage = 'main' | 'victor' | 'louis-friese' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier';

interface AppState {
  tab: Tab;
  subpage: ResearchSubpage;
}

const VALID_TABS: Tab[] = ['home', 'mill', 'name', 'dna', 'research', 'lineage', 'about', 'contact'];
const VALID_SUBPAGES: ResearchSubpage[] = ['main', 'victor', 'louis-friese', 'victor-dossier', 'praet-dossier', 'praet-lineage-dossier'];

/** Build a URL hash from app state, e.g. #research/victor or #name */
function stateToHash(state: AppState): string {
  if (state.tab === 'home') return '';
  if (state.tab === 'research' && state.subpage !== 'main') {
    return `#${state.tab}/${state.subpage}`;
  }
  return `#${state.tab}`;
}

/** Parse a URL hash into app state */
function hashToState(hash: string): AppState {
  const raw = hash.replace(/^#\/?/, '');
  if (!raw) return { tab: 'home', subpage: 'main' };

  const parts = raw.split('/');
  const tab = parts[0] as Tab;
  if (!VALID_TABS.includes(tab)) return { tab: 'home', subpage: 'main' };

  if (tab === 'research' && parts[1]) {
    const subpage = parts[1] as ResearchSubpage;
    if (VALID_SUBPAGES.includes(subpage)) {
      return { tab, subpage };
    }
  }

  return { tab, subpage: 'main' };
}

/* ── App component ────────────────────────────────────────────────── */

export default function App() {
  const initial = hashToState(window.location.hash);
  const [activeTab, setActiveTab] = useState<Tab>(initial.tab);
  const [researchSubpage, setResearchSubpage] = useState<ResearchSubpage>(initial.subpage);

  /** Push a new history entry and update state */
  const navigate = useCallback((tab: Tab, subpage: ResearchSubpage = 'main', replace = false) => {
    const newState: AppState = { tab, subpage };
    const hash = stateToHash(newState);
    const url = hash || window.location.pathname + window.location.search;

    if (replace) {
      window.history.replaceState(newState, '', hash ? url : window.location.pathname + window.location.search);
    } else {
      window.history.pushState(newState, '', url);
    }

    setActiveTab(tab);
    setResearchSubpage(subpage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /** Handle browser back/forward */
  useEffect(() => {
    const onPopState = (_event: PopStateEvent) => {
      // Derive state from the hash, which is always in sync
      const state = hashToState(window.location.hash);
      setActiveTab(state.tab);
      setResearchSubpage(state.subpage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', onPopState);

    // Replace initial state so the first entry has proper state data
    const currentState: AppState = { tab: activeTab, subpage: researchSubpage };
    window.history.replaceState(currentState, '', stateToHash(currentState) || window.location.pathname + window.location.search);

    return () => window.removeEventListener('popstate', onPopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNav = useCallback((tab: Tab) => {
    navigate(tab, 'main');
  }, [navigate]);

  const handleResearchNav = useCallback((subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => {
    if (subpage === 'contact') {
      navigate('contact', 'main');
    } else {
      navigate('research', subpage as ResearchSubpage);
    }
  }, [navigate]);

  return (
    <>
      {/* Fixed background: procedural scrolling family tree — always present, never repeats */}
      <FamilyTreeCanvas />

      <Nav active={activeTab} onNav={handleNav} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {activeTab === 'home'    && <HomePage onNav={handleNav} />}
        {activeTab === 'mill'    && <MillPage onNavigate={(tab) => handleNav(tab as Tab)} />}
        {activeTab === 'name'    && <NamePage onNavigate={(tab) => handleNav(tab as Tab)} />}
        {activeTab === 'research' && researchSubpage === 'main' && <ResearchPage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'victor' && <VictorLineagePage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'louis-friese' && <LouisFrieseLineagePage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'victor-dossier' && <VictorDossierPage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'praet-dossier' && <PraetDossierPage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'praet-lineage-dossier' && <PraetLineageDossierPage onNavigate={handleResearchNav} />}
        {activeTab === 'dna'     && <DnaPage onNavigate={(tab) => handleNav(tab as Tab)} />}
        {activeTab === 'lineage' && <LineagePage />}
        {activeTab === 'about'   && <AboutPage onNavigate={handleNav} />}
        {activeTab === 'contact' && <ContactPage />}
      </main>
    </>
  );
}
