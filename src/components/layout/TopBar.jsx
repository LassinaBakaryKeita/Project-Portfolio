import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FolderOpen, Zap, Briefcase,
  GraduationCap, Award, User, FileText
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const mobileNavItems = [
  { to: '/', label: 'Aperçu', icon: LayoutDashboard },
  { to: '/projets', label: 'Projets', icon: FolderOpen },
  { to: '/competences', label: 'Skills', icon: Zap },
  { to: '/experiences', label: 'Expériences', icon: Briefcase },
  { to: '/a-propos', label: 'À propos', icon: User },
];

export default function TopBar({ theme, toggleTheme, activeTab, setActiveTab, showTabs }) {
  return (
    <>
      {/* Desktop/Tablet TopBar */}
      <div className="topbar">
        <div style={{ width: 38 }} />

        {showTabs && (
          <div className="segmented-tabs">
            <button
              className={`segmented-tab ${activeTab === 'profil' ? 'active' : ''}`}
              onClick={() => setActiveTab('profil')}
            >
              Profil
            </button>
            <button
              className={`segmented-tab ${activeTab === 'travail' ? 'active' : ''}`}
              onClick={() => setActiveTab('travail')}
            >
              Travail
            </button>
          </div>
        )}

        {!showTabs && <div />}

        <div className="topbar-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav" role="navigation" aria-label="Navigation principale mobile">
        {mobileNavItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
        <button
          className="mobile-nav-item"
          onClick={toggleTheme}
          aria-label="Changer de thème"
        >
          {theme === 'dark'
            ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          }
          <span>Thème</span>
        </button>
      </nav>
    </>
  );
}
