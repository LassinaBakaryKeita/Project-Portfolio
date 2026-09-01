import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactReasons, profile } from '../../data/portfolio';

// EmailJS configuration — create a .env file with these values
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

const initialForm = {
  prenom: '',
  nom: '',
  email: '',
  raison: '',
  message: '',
};

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Validate
    if (!form.prenom || !form.nom || !form.email || !form.message) {
      setStatus('error');
      setErrorMsg('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Check EmailJS config
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Fallback: mailto link
      const subject = encodeURIComponent(`[Portfolio] ${form.raison || 'Message'} — ${form.prenom} ${form.nom}`);
      const body = encodeURIComponent(
        `Prénom: ${form.prenom}\nNom: ${form.nom}\nEmail: ${form.email}\nRaison: ${form.raison}\n\nMessage:\n${form.message}`
      );
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
      setStatus('success');
      setForm(initialForm);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.prenom} ${form.nom}`,
          from_email: form.email,
          reason: form.raison || 'Non spécifié',
          message: form.message,
          to_email: profile.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
    }
  };

  if (status === 'success') {
    return (
      <div className="alert alert-success" style={{ padding: '24px', flexDirection: 'column', alignItems: 'center', gap: 12, borderRadius: 'var(--radius-lg)' }}>
        <CheckCircle size={32} />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 600, fontSize: 'var(--font-size-md)', color: 'var(--color-success)', marginBottom: 4 }}>
            Message envoyé avec succès !
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
            Je vous répondrai dans les plus brefs délais.
          </p>
        </div>
        <button
          className="btn-secondary"
          onClick={() => setStatus('idle')}
          style={{ marginTop: 8 }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Name row */}
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="prenom">Prénom *</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            className="form-input"
            placeholder="Votre prénom"
            value={form.prenom}
            onChange={handleChange}
            required
            autoComplete="given-name"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="nom">Nom *</label>
          <input
            id="nom"
            name="nom"
            type="text"
            className="form-input"
            placeholder="Votre nom"
            value={form.nom}
            onChange={handleChange}
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      {/* Email */}
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="votre@email.com"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
      </div>

      {/* Reason */}
      <div className="form-group">
        <label className="form-label" htmlFor="raison">Motif du contact</label>
        <select
          id="raison"
          name="raison"
          className="form-select"
          value={form.raison}
          onChange={handleChange}
        >
          <option value="">Sélectionner un motif</option>
          {contactReasons.map(r => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Décrivez votre projet, votre demande ou votre message..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="alert alert-error">
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      {/* Actions */}
      <div className="form-actions">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader size={15} className="spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={15} />
              Envoyer le message
            </>
          )}
        </button>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => { setForm(initialForm); setStatus('idle'); }}
        >
          Réinitialiser
        </button>
      </div>
    </form>
  );
}
