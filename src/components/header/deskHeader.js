import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/icons/logo.svg';

const DeskHeader = ({ scrolled, toggleMenu }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="header-logo cursor-active">
          <img alt="logo" src={logo} />
        </Link>
        <nav className="header-nav">
          <Link to="/about" className="header-nav-link cursor-active">
            <span>О нас</span>
          </Link>
          <Link to="/services" className="header-nav-link cursor-active">
            <span>Услуги</span>
          </Link>
          <button className="header-burger-btn cursor-active" onClick={toggleMenu}>
            <div className="burger-btn-line"></div>
            <div className="burger-btn-line"></div>
            <div className="burger-btn-line"></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DeskHeader;
