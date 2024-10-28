import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">My Logo</div>
      <button className="header__burger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__menu">
          <li><Link to="/" onClick={toggleMenu}>Головна</Link></li>
          <li><Link to="/machines" onClick={toggleMenu}>Станки</Link></li>
          <li><Link to="/reports" onClick={toggleMenu}>Звіти</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
