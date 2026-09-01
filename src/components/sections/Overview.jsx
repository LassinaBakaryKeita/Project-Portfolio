import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FolderOpen, Download, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { profile, projects } from '../../data/portfolio';
import ContactForm from '../ui/ContactForm';

export default function Overview({ activeTab, setActiveTab }) {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="overview-wrapper fade-in">
      <div className="overview-composer-area">

        {/* Greeting */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="overview-greeting fade-in-up">
            Bonjour, je suis{' '}
            <span>{profile.firstName}</span> 👋
          </h1>
          <p className="overview-subtitle fade-in-up stagger-1" style={{ marginTop: 10 }}>
            <TypeAnimation
              sequence={profile.typedStrings.flatMap(s => [s, 2000])}
              wrapper="span"
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
              className="typing-wrapper"
            />
          </p>
        </div>

        {/* Composer box */}
        <div className="composer-box fade-in-up stagger-2">
          <img
            src={profile.photo}
            alt={profile.name}
            className="composer-avatar"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <p className="composer-text">
            {activeTab === 'profil'
              ? `Étudiant en ${profile.title} — passionné par le développement web, mobile et l'IA.`
              : `Vous avez un projet ou une opportunité ? Laissez-moi un message !`
            }
          </p>
          <div className="composer-badge">
            <Sparkles size={12} />
            Portfolio
          </div>
        </div>

        {/* Tab content */}
        {activeTab === 'profil' ? (
          <>
            {/* Quick actions */}
            <div className="quick-actions fade-in-up stagger-3">
              <Link to="/projets" className="quick-action-btn primary">
                <FolderOpen size={15} />
                Voir mes projets
              </Link>
              {profile.cvUrl ? (
                <a href={profile.cvUrl} download className="quick-action-btn">
                  <Download size={15} />
                  Télécharger le CV
                </a>
              ) : (
                <Link to="/cv" className="quick-action-btn">
                  <Download size={15} />
                  Mon CV
                </Link>
              )}
              <button
                className="quick-action-btn"
                onClick={() => setActiveTab('travail')}
              >
                <Mail size={15} />
                Me contacter
              </button>
            </div>

            {/* Featured projects preview */}
            {featuredProjects.length > 0 && (
              <div className="fade-in-up stagger-4">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 12
                }}>
                  <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Projets récents
                  </span>
                  <Link to="/projets" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 500, textDecoration: 'none' }}>
                    Tous les projets <ArrowRight size={12} />
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {featuredProjects.map(project => (
                    <Link
                      key={project.id}
                      to={`/projets/${project.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '10px 14px',
                        border: '1px solid var(--border-default)',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-card)',
                        textDecoration: 'none',
                        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--border-strong)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border-default)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: 40, height: 40,
                          borderRadius: 'var(--radius-sm)',
                          objectFit: 'cover',
                          border: '1px solid var(--border-default)',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {project.title}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {project.technologies.slice(0, 3).join(' · ')}
                        </div>
                      </div>
                      <ArrowRight size={14} color="var(--text-muted)" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Work tab — contact form */
          <div className="fade-in-up stagger-2">
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
}
