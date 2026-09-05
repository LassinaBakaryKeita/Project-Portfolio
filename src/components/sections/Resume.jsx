import { Download, FileText, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { profile, experiences, education, skills, socialLinks } from '../../data/portfolio';

export default function Resume() {
  const totalProjects = 13;
  const allSkillsCount = skills.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-label">Curriculum Vitae</span>
        <h1 className="section-title">Mon CV</h1>
        <p className="section-description">
          Aperçu de mon profil professionnel. Téléchargez le PDF pour la version complète.
        </p>
      </div>

      {/* Download button */}
      <div style={{ marginBottom: 28, display: 'flex', gap: 10 }}>
        {profile.cvUrl ? (
          <a href={profile.cvUrl} download className="btn-primary">
            <Download size={15} />
            Télécharger le CV (PDF)
          </a>
        ) : (
          <button
            className="btn-primary"
            onClick={() => {
              window.open(`mailto:${profile.email}?subject=Demande de CV — Portfolio Lassina Bakary Keïta`, '_blank');
            }}
          >
            <Mail size={15} />
            Demander le CV par email
          </button>
        )}
        <a
          href={socialLinks.find(s => s.id === 'linkedin')?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Linkedin size={15} />
          Voir sur LinkedIn
        </a>
      </div>

      {/* CV Preview Card */}
      <div className="resume-preview fade-in-up">
        {/* Header */}
        <div className="resume-header">
          <img
            src={profile.photo}
            alt={profile.name}
            className="resume-photo"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div>
            <h2 className="resume-name">{profile.firstName} {profile.name}</h2>
            <p className="resume-role">{profile.title}</p>
            <div className="resume-contacts">
              <span className="resume-contact-item">
                <Mail size={12} />
                {profile.email}
              </span>
              <span className="resume-contact-item">
                <MapPin size={12} />
                Fès, Maroc
              </span>
              <a
                href={socialLinks.find(s => s.id === 'github')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Github size={12} />
                GitHub
              </a>
            </div>
          </div>
        </div>


        {/* Summary */}
        <h3 className="resume-section-title">Profil</h3>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
          Étudiant en Ingénierie Logicielle & Intelligence Artificielle à l'ENSAF (Fès, Maroc),
          avec un fort intérêt pour le développement web et une affinité particulière pour le backend.
          Je m'intéresse également à l'intégration de l'Intelligence Artificielle dans les applications
          afin de concevoir des produits plus intelligents, utiles et interactifs.
          À travers mes projets personnels, académiques et professionnels, je développe progressivement
          une vision orientée produit et architecture logicielle.
        </p>

        {/* Formation */}
        <h3 className="resume-section-title">Formation</h3>
        {education.map(edu => (
          <div key={edu.id} style={{ marginBottom: 10, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <GraduationCap size={14} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>{edu.degree}</p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                {edu.institution} · {edu.startDate} — {edu.current ? 'Présent' : edu.endDate}
              </p>
            </div>
          </div>
        ))}

        {/* Experience */}
        <h3 className="resume-section-title">Expériences</h3>
        {experiences.map(exp => (
          <div key={exp.id} style={{ marginBottom: 10, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Briefcase size={14} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
                {exp.title} — {exp.organization}
              </p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                {exp.startDate} — {exp.endDate}
              </p>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: 2 }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}

        {/* Skills summary */}
        <h3 className="resume-section-title">Compétences ({allSkillsCount} technologies)</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {skills.flatMap(cat => cat.items).map(skill => (
            <span key={skill.name} className="tech-tag">{skill.name}</span>
          ))}
        </div>

        {/* Notice if no PDF */}
        {!profile.cvUrl && (
          <div
            className="resume-download-area"
            style={{ marginTop: 28, cursor: 'pointer' }}
            onClick={() => window.open(`mailto:${profile.email}?subject=Demande de CV`, '_blank')}
          >
            <FileText size={28} />
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
              Le PDF du CV complet sera disponible prochainement.
              <br />
              Contactez-moi directement pour le recevoir.
            </p>
            <button className="btn-secondary">
              <Mail size={14} />
              Demander par email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
