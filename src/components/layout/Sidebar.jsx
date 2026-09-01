import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FolderOpen, Zap, Briefcase,
  GraduationCap, Award, User, FileText, Shield,
  Github, Linkedin, Sun, Moon
} from 'lucide-react';
import { socialLinks } from '../../data/portfolio';

// TikTok icon SVG (not in Lucide)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.41a8.16 8.16 0 004.77 1.52V7.38a4.85 4.85 0 01-1-.69z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const navItems = [
  { to: '/', label: 'Aperçu', icon: LayoutDashboard },
  { to: '/projets', label: 'Projets', icon: FolderOpen },
  { to: '/competences', label: 'Compétences', icon: Zap },
  { to: '/experiences', label: 'Expériences', icon: Briefcase },
  { to: '/formation', label: 'Formation', icon: GraduationCap },
  { to: '/certifications', label: 'Certifications', icon: Award },
  { to: '/a-propos', label: 'À propos', icon: User },
  { to: '/cv', label: 'CV', icon: FileText },
];

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
};

export default function Sidebar({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <div className="sidebar-logo">LBK</div>
        <span className="sidebar-name">Lassina B. K.</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={16} />
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        {/* Social links */}
        <div className="social-links">
          {socialLinks.map(link => {
            const IconComponent = socialIconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-link"
                title={link.label}
              >
                {IconComponent && <IconComponent />}
              </a>
            );
          })}
        </div>

        {/* Privacy + Theme */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 6px' }}>
          <NavLink
            to="/confidentialite"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            style={{ padding: '6px 8px', fontSize: '11px', gap: '6px' }}
          >
            <Shield size={13} />
            <span className="nav-label" style={{ fontSize: '11px' }}>Confidentialité</span>
          </NavLink>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </aside>
  );
}
