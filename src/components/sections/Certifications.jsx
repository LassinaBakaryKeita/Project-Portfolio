import { Award, ExternalLink, Clock } from 'lucide-react';
import { certifications } from '../../data/portfolio';

export default function Certifications() {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-label">Certifications</span>
        <h1 className="section-title">Certifications</h1>
        <p className="section-description">
          Certifications et formations complémentaires qui enrichissent mon profil.
        </p>
      </div>

      {certifications.length === 0 ? (
        <div className="empty-state">
          <Clock size={36} />
          <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 600, color: 'var(--text-secondary)' }}>
            À venir
          </h3>
          <p>
            Des certifications seront ajoutées prochainement. Restez connecté !
          </p>
        </div>
      ) : (
        <div>
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="cert-card fade-in-up"
              style={{ animationDelay: `${i * 0.08}s`, cursor: cert.credentialUrl ? 'pointer' : 'default' }}
              onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
            >
              <div className="cert-icon">
                <Award size={18} />
              </div>
              <div className="cert-body">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <p className="cert-name">{cert.name}</p>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                  </div>
                  {cert.credentialUrl && (
                    <ExternalLink size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: 2 }} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
