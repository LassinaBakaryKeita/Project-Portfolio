import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found fade-in">
      <div className="not-found-code">404</div>
      <h1>Page introuvable</h1>
      <p>
        La page que vous recherchez semble ne pas exister ou a été déplacée vers une autre adresse.
      </p>
      <Link to="/" className="btn-primary" style={{ marginTop: 12 }}>
        <Home size={15} />
        Retour à l'accueil
      </Link>
    </div>
  );
}
