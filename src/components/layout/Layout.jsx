import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function Layout({ children, theme, toggleTheme }) {
  const [activeTab, setActiveTab] = useState('profil');
  const location = useLocation();
  const isOverview = location.pathname === '/';

  return (
    <div className="app-shell">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">
        <TopBar
          theme={theme}
          toggleTheme={toggleTheme}
          showTabs={isOverview}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* Pass activeTab down to overview via React.cloneElement or context */}
        {isOverview
          ? children({ activeTab, setActiveTab })
          : children
        }
      </div>
    </div>
  );
}
