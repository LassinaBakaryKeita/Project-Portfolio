import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, Code2, BrainCircuit, MapPin, Mail, FolderOpen, FileText } from 'lucide-react';
import { profile } from '../../data/portfolio';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Formation d\'excellence',
      description: 'Cycle Ingénieur en Génie Logiciel & IA (ILIA) à l\'ENSAF'
    },
    {
      icon: BrainCircuit,
      title: 'Passion pour l\'IA & la Data',
      description: 'Apprentissage continu en Machine Learning, Deep Learning et algorithmique avancée'
    },
    {
      icon: Code2,
      title: 'Polyvalence technique',
      description: 'Développement d\'applications Web modernes (React, JS), Mobiles (Flutter) et Logicielles (Python, C)'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      description: 'Actuellement basé à Fès, Maroc'
    }
  ];

  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-label">Présentation</span>
        <h1 className="section-title">À propos de moi</h1>
        <p className="section-description">
          Découvrez mon parcours, mes motivations et ma vision du génie logiciel et de l'intelligence artificielle.
        </p>
      </div>

      <div className="about-grid fade-in-up">
        {/* Photo column */}
        <div>
          <img
            src={profile.photo}
            alt={profile.name}
            className="profile-photo-large"
            onError={e => {
              e.target.style.display = 'none';
            }}
          />
          <div style={{ marginTop: 16, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link to="/projets" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              <FolderOpen size={15} />
              Voir mes projets
            </Link>
            <Link to="/cv" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
              <FileText size={15} />
              Consulter mon CV
            </Link>
          </div>
        </div>

        {/* Text column */}
        <div className="about-text-content">
          <div>
            <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 8, fontWeight: 700 }}>
              Bonjour ! Je suis <span style={{ color: 'var(--accent)' }}>{profile.name}</span>
            </h2>
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 'var(--font-size-sm)', marginBottom: 16 }}>
              {profile.title}
            </p>
          </div>

          <p style={{ whiteSpace: 'pre-line' }}>
            {profile.bio}
          </p>

          <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 600, marginTop: 12 }}>
            Points clés de mon profil
          </h3>

          <div className="about-highlights">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="highlight-item" style={{ alignItems: 'flex-start' }}>
                  <Icon size={18} style={{ marginTop: 2 }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>{item.title} : </strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: 16,
            padding: '16px',
            background: 'var(--surface-subtle)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)'
          }}>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', margin: 0 }}>
              💡 <strong>À la recherche d'opportunités :</strong> Je suis ouvert aux collaborations, stages et projets innovants alliant développement moderne et solutions d'intelligence artificielle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
