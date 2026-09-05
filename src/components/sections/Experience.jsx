import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-label">Parcours</span>
        <h1 className="section-title">Expériences</h1>
        <p className="section-description">
          Mon parcours professionnel et associatif chaque expérience qui forge mon profil.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className="timeline-item fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="timeline-dot">
              <div className="timeline-dot-inner" />
            </div>
            <div className="timeline-content">
              <div className="timeline-date">
                {exp.startDate} — {exp.current ? 'Présent' : exp.endDate}
              </div>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-org">{exp.organization}</p>
              <p className="timeline-desc">{exp.description}</p>
              {exp.tags && exp.tags.length > 0 && (
                <div className="tech-tags" style={{ marginTop: 12 }}>
                  {exp.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
