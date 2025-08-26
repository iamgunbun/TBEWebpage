import React, { useState } from 'react';
import { siteData } from '../data/siteData';

const Nav = ({ theme, toggleTheme, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* The nav-left div has been removed to center the content */}
        <div className="nav-logo">
          <img 
            src="/static/tbelogo.png" 
            alt={`${siteData.bandName} Logo`} 
            className="nav-logo-image"
          />
        </div>
        {/* The nav-right div has been removed */}
        <ul className="nav-links">
          {siteData.navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href || '#'} 
                onClick={() => {
                  if (item.page) {
                    setPage(item.page);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="nav-link-item"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
