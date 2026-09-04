import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Layers, Sparkles } from 'lucide-react';
import { Github } from '../ui/Icons';
import { projects } from '../../data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="page-wrapper fade-in" style={{ textAlign: 'center', padding: '64px 20px' }}>
        <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 12 }}>Projet introuvable</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
          Le projet demandé n'existe pas ou a été déplacé.
        </p>
        <Link to="/projets" className="btn-primary">
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="page-wrapper fade-in">
      {/* Top Navigation */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => navigate(-1)}
          className="btn-secondary"
          style={{ padding: '6px 14px', fontSize: 'var(--font-size-xs)' }}
        >
          <ArrowLeft size={14} />
          Retour
        </button>
        <Link
          to="/projets"
          style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textDecoration: 'none' }}
        >
          Tous les projets ({projects.length})
        </Link>
      </div>

      {/* Header */}
      <div className="section-header" style={{ marginBottom: 20 }}>
        <span className="section-label">Projet</span>
        <h1 className="section-title">{project.title}</h1>
        <p className="section-description" style={{ maxWidth: '100%' }}>
          {project.shortDesc}
        </p>
      </div>

      {/* Tags & Action links */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
        <div className="tech-tags">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: 'var(--font-size-xs)' }}
            >
              <ExternalLink size={14} />
              Démo en direct
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: 'var(--font-size-xs)' }}
            >
              <Github size={14} />
              Code GitHub
            </a>
          )}
        </div>
      </div>

      {/* Hero Image */}
      <img
        src={project.image}
        alt={project.title}
        className="project-detail-image fade-in-up"
        onError={e => {
          e.target.style.display = 'none';
        }}
      />

      {/* Detailed Description */}
      <div className="fade-in-up stagger-1" style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: '28px',
        marginBottom: 32,
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 14, fontWeight: 700 }}>
          À propos de ce projet
        </h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 'var(--line-height-relaxed)', whiteSpace: 'pre-line', fontSize: 'var(--font-size-base)' }}>
          {project.description}
        </div>
      </div>

      {/* Previous / Next navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 16,
        paddingTop: 24,
        borderTop: '1px solid var(--border-default)'
      }}>
        {prevProject ? (
          <Link
            to={`/projets/${prevProject.id}`}
            className="btn-secondary"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            <ArrowLeft size={13} />
            {prevProject.title}
          </Link>
        ) : <div />}

        {nextProject && (
          <Link
            to={`/projets/${nextProject.id}`}
            className="btn-secondary"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            {nextProject.title}
            <ExternalLink size={13} style={{ transform: 'rotate(45deg)' }} />
          </Link>
        )}
      </div>
    </div>
  );
}
