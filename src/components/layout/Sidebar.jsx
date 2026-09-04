import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, FolderOpen, Zap, Briefcase,
  GraduationCap, Award, User, FileText, Shield,
  Sun, Moon
} from 'lucide-react';
import { Github, Linkedin, TikTok, Facebook } from '../ui/Icons';
import { socialLinks } from '../../data/portfolio';

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
  tiktok: TikTok,
  facebook: Facebook,
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
