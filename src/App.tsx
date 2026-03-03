import { useState } from 'react';
import Nav from './components/Nav';
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
      <Nav active={activeTab} onNav={handleNav} />
      <main>
        {activeTab === 'home'    && <HomePage onNav={handleNav} />}
        {activeTab === 'mill'    && <MillPage />}
        {activeTab === 'name'    && <NamePage />}
        {activeTab === 'dna'     && <DnaPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>
    </>
  );
}
