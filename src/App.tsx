import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
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
  return (
    <>
      {/* Fixed background: procedural scrolling family tree */}
      <FamilyTreeCanvas />

      {/* Nav derives its own active state from the router */}
      <Nav />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/"                              element={<HomePage />} />
          <Route path="/mill"                          element={<MillPage />} />
          <Route path="/name"                          element={<NamePage />} />
          <Route path="/dna"                           element={<DnaPage />} />
          <Route path="/research"                      element={<ResearchPage />} />
          <Route path="/research/victor"               element={<VictorLineagePage />} />
          <Route path="/research/louis-friese"         element={<LouisFrieseLineagePage />} />
          <Route path="/research/victor-dossier"       element={<VictorDossierPage />} />
          <Route path="/research/praet-dossier"        element={<PraetDossierPage />} />
          <Route path="/research/praet-lineage-dossier" element={<PraetLineageDossierPage />} />
          <Route path="/lineage"                       element={<LineagePage />} />
          <Route path="/about"                         element={<AboutPage />} />
          <Route path="/contact"                       element={<ContactPage />} />
          {/* Catch-all */}
          <Route path="*"                              element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
