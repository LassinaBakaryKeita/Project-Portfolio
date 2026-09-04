import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { privacyPolicy } from '../../data/portfolio';

export default function Privacy() {
  return (
    <div className="page-wrapper fade-in">
      <div style={{ marginBottom: 24 }}>
        <Link to="/" className="btn-secondary" style={{ padding: '6px 14px', fontSize: 'var(--font-size-xs)' }}>
          <ArrowLeft size={14} />
          Retour à l'accueil
        </Link>
      </div>

      <div className="section-header">
        <span className="section-label">Légal & Confidentialité</span>
        <h1 className="section-title">Politique de Confidentialité</h1>
        <p className="section-description">
          Dernière mise à jour : {privacyPolicy.lastUpdated}
        </p>
      </div>

      <div className="prose fade-in-up" style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h2>1. Introduction</h2>
        <p>
          Bienvenue sur le portfolio de <strong>Lassina Bakary Keïta</strong>. Cette politique de confidentialité explique en toute transparence comment vos informations personnelles sont traitées lors de votre visite sur ce site.
        </p>

        <h2>2. Informations collectées via le formulaire</h2>
        <p>
          Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être transmises :
        </p>
        <ul>
          <li>Prénom et Nom</li>
          <li>Adresse e-mail</li>
          <li>Motif du contact</li>
          <li>Contenu de votre message</li>
        </ul>
        <p>
          Ces données sont collectées uniquement afin de pouvoir répondre à vos sollicitations ou collaborations professionnelles. Elles ne sont jamais vendues, cédées ou utilisées à des fins de prospection non consentie.
        </p>

        <h2>3. Utilisation des services tiers</h2>
        <p>
          L'envoi des messages s'effectue via le service sécurisé <strong>EmailJS</strong> ou directement via votre messagerie électronique (mailto). Aucun stockage persistant des messages n'est effectué sur un serveur tiers non autorisé.
        </p>

        <h2>4. Cookies et stockage local</h2>
        <p>
          Ce site respecte scrupuleusement votre vie privée : il ne dépose aucun cookie traceur, publicitaire ou de profilage. Le stockage local de votre navigateur (<code>localStorage</code>) est uniquement utilisé pour mémoriser votre préférence d'affichage du thème (mode clair ou mode sombre).
        </p>

        <h2>5. Hébergement & Sécurité</h2>
        <p>
          Le site est hébergé de manière sécurisée via <strong>Vercel</strong> avec chiffrement HTTPS automatique pour protéger l'intégrité et la confidentialité des échanges.
        </p>

        <h2>6. Vos droits & Contact</h2>
        <p>
          Vous pouvez à tout moment demander des précisions ou la suppression d'un message envoyé en écrivant directement à l'adresse suivante : <a href="mailto:lassinabakarykeita@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>lassinabakarykeita@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
