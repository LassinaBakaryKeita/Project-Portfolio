import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Overview from './components/sections/Overview';
import Projects from './components/sections/Projects';
import ProjectDetail from './components/sections/ProjectDetail';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Privacy from './components/sections/Privacy';
import NotFound from './components/sections/NotFound';

import { useTheme } from './hooks/useTheme';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'instant' });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PortfolioApp() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <Layout
      theme={theme}
      toggleTheme={toggleTheme}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Overview activeTab={activeTab} setActiveTab={setActiveTab} />}
        />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/formation" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/cv" element={<Resume />} />
        <Route path="/confidentialite" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  );
}
