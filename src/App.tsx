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
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [researchSubpage, setResearchSubpage] = useState<'main' | 'victor' | 'louis-friese'>('main');

  const handleNav = (tab: Tab) => {
    setActiveTab(tab);
    setResearchSubpage('main');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResearchNav = (subpage: 'main' | 'victor' | 'louis-friese') => {
    setResearchSubpage(subpage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed background: procedural scrolling family tree — always present, never repeats */}
      <FamilyTreeCanvas />

      <Nav active={activeTab} onNav={handleNav} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {activeTab === 'home'    && <HomePage onNav={handleNav} />}
        {activeTab === 'mill'    && <MillPage />}
        {activeTab === 'name'    && <NamePage onNavigate={(tab) => handleNav(tab as Tab)} />}
        {activeTab === 'research' && researchSubpage === 'main' && <ResearchPage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'victor' && <VictorLineagePage onNavigate={handleResearchNav} />}
        {activeTab === 'research' && researchSubpage === 'louis-friese' && <LouisFrieseLineagePage onNavigate={handleResearchNav} />}
        {activeTab === 'dna'     && <DnaPage />}
        {activeTab === 'about'   && <AboutPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>
    </>
  );
}
