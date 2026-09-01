import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { id, title, shortDesc, image, technologies, liveUrl, githubUrl } = project;

  return (
    <div className="project-card">
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          className="project-card-image"
          loading="lazy"
          onError={e => {
            e.target.style.background = 'var(--surface-subtle)';
            e.target.style.minHeight = '160px';
          }}
        />
      </div>

      {/* Body */}
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{shortDesc}</p>

        {/* Footer */}
        <div className="project-card-footer">
          <div className="tech-tags">
            {technologies.slice(0, 3).map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
            {technologies.length > 3 && (
              <span className="tech-tag">+{technologies.length - 3}</span>
            )}
          </div>
          <div className="card-links">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link-btn"
                aria-label={`Code source de ${title} sur GitHub`}
                title="Code source GitHub"
                onClick={e => e.stopPropagation()}
              >
                <Github size={14} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link-btn"
                aria-label={`Voir ${title} en ligne`}
                title="Voir en ligne"
                onClick={e => e.stopPropagation()}
              >
                <ExternalLink size={14} />
              </a>
            )}
            <Link
              to={`/projets/${id}`}
              className="card-link-btn"
              aria-label={`Détails de ${title}`}
              title="Voir les détails"
            >
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
