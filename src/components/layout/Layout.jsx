import React, { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function Layout({
  children,
  theme,
  toggleTheme,
  activeTab: propActiveTab,
  setActiveTab: propSetActiveTab,
}) {
  const [internalActiveTab, setInternalActiveTab] = useState('profil');
  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab !== undefined ? propSetActiveTab : setInternalActiveTab;

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
        {typeof children === 'function' ? (
          children({ activeTab, setActiveTab })
        ) : children ? (
          React.isValidElement(children) && isOverview
            ? React.cloneElement(children, { activeTab, setActiveTab })
            : children
        ) : (
          <Outlet context={{ activeTab, setActiveTab }} />
        )}
      </div>
    </div>
  );
}
