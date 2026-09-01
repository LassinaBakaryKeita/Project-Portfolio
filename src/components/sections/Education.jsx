import { GraduationCap, ExternalLink } from 'lucide-react';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-label">Académique</span>
        <h1 className="section-title">Formation</h1>
        <p className="section-description">
          Mon parcours académique et les établissements qui ont forgé mes connaissances.
        </p>
      </div>

      <div>
        {education.map((edu, i) => (
          <div
            key={edu.id}
            className="education-card fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="education-icon">
              <GraduationCap size={20} />
            </div>
            <div className="education-body">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="education-institution"
                        style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', transition: 'color var(--transition-fast)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = ''}
                      >
                        {edu.institution} <ExternalLink size={11} />
                      </a>
                    ) : (
                      <p className="education-institution">{edu.institution}</p>
                    )}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div className="education-date">
                    {edu.startDate} — {edu.current ? 'Présent' : edu.endDate}
                  </div>
                  {edu.current && (
                    <span style={{
                      display: 'inline-block',
                      marginTop: 4,
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      background: 'var(--accent-bg)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                    }}>
                      En cours
                    </span>
                  )}
                </div>
              </div>
              {edu.location && (
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: 4 }}>
                  📍 {edu.location}
                </p>
              )}
              {edu.description && (
                <p className="education-desc">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
