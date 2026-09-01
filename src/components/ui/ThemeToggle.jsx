import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="icon-btn"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
      title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
