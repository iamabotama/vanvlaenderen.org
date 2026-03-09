import { useState } from 'react';
import Nav from './components/Nav';
import FamilyTreeCanvas from './components/FamilyTreeCanvas';
import DNAHelix from './components/DNAHelix';
import HomePage from './pages/HomePage';
import MillPage from './pages/MillPage';
import NamePage from './pages/NamePage';
import DnaPage from './pages/DnaPage';
import ContactPage from './pages/ContactPage';
import './App.css';

type Tab = 'home' | 'mill' | 'name' | 'dna' | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const handleNav = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed background: procedural scrolling family tree — always present, never repeats */}
      <FamilyTreeCanvas />

      {/* Fixed DNA helix — only shown on the Are We Connected page */}
      {activeTab === 'dna' && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }} aria-hidden="true">
          <DNAHelix opacity={0.28} speed={0.18} />
        </div>
      )}

      <Nav active={activeTab} onNav={handleNav} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {activeTab === 'home'    && <HomePage onNav={handleNav} />}
        {activeTab === 'mill'    && <MillPage />}
        {activeTab === 'name'    && <NamePage onNavigate={(tab) => handleNav(tab as Tab)} />}
        {activeTab === 'dna'     && <DnaPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>
    </>
  );
}
