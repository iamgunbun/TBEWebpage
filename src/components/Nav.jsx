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
        <div className="nav-left">
          {/* Mobile Menu Button (Hamburger) */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            &#9776; {/* Unicode for hamburger icon */}
          </button>
        </div>
        <div className="nav-logo">
          <img 
            src="/static/tbelogo.png" 
            alt={`${siteData.bandName} Logo`} 
            className="nav-logo-image"
          />
        </div>
        <div className={`nav-right ${isMobileMenuOpen ? 'open' : ''}`}>
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
      </div>
    </nav>
  );
};

export default Nav;
