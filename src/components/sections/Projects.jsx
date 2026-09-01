import { useState } from 'react';
import { Search } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolio';

export default function Projects() {
  const [filter, setFilter] = useState('');

  // Get all unique technologies
  const allTechs = [...new Set(projects.flatMap(p => p.technologies))].sort();

  const filtered = filter
    ? projects.filter(p => p.technologies.includes(filter))
    : projects;

  return (
    <div className="page-wrapper-wide fade-in">
      <div className="section-header">
        <span className="section-label">Réalisations</span>
        <h1 className="section-title">Mes projets</h1>
        <p className="section-description">
          {projects.length} projets réalisés au fil de ma formation — du web au mobile, du C à React.
        </p>
      </div>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        <button
          className={`tech-tag ${!filter ? 'active' : ''}`}
          onClick={() => setFilter('')}
          style={{
            cursor: 'pointer',
            border: '1px solid var(--border-default)',
            background: !filter ? 'var(--text-primary)' : 'var(--bg-card)',
            color: !filter ? 'var(--text-inverse)' : 'var(--text-secondary)',
            padding: '5px 14px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 500,
            transition: 'all var(--transition-fast)',
          }}
        >
          Tous ({projects.length})
        </button>
        {allTechs.slice(0, 10).map(tech => (
          <button
            key={tech}
            className="tech-tag"
            onClick={() => setFilter(filter === tech ? '' : tech)}
            style={{
              cursor: 'pointer',
              border: '1px solid var(--border-default)',
              background: filter === tech ? 'var(--text-primary)' : 'var(--bg-card)',
              color: filter === tech ? 'var(--text-inverse)' : 'var(--text-secondary)',
              padding: '5px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 500,
              transition: 'all var(--transition-fast)',
            }}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map((project, i) => (
          <div
            key={project.id}
            className="fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <Search size={32} />
          <p>Aucun projet trouvé pour ce filtre.</p>
        </div>
      )}
    </div>
  );
}
