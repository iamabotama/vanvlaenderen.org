import { useState } from 'react';
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

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [researchSubpage, setResearchSubpage] = useState<'main' | 'victor' | 'louis-friese' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier'>('main');

  const handleNav = (tab: Tab) => {
    setActiveTab(tab);
    setResearchSubpage('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResearchNav = (subpage: 'main' | 'victor' | 'louis-friese' | 'contact' | 'victor-dossier' | 'praet-dossier' | 'praet-lineage-dossier') => {
    if (subpage === 'contact') {
      handleNav('contact');
    } else {
      setResearchSubpage(subpage as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
