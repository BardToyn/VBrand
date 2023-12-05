import React, { useState, useEffect } from 'react';

import DeskHeader from './deskHeader';
import MenuHeader from './menu';

import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={`header-container ${menuVisible ? 'hidden' : ''}`}>
      <DeskHeader scrolled={scrolled} toggleMenu={toggleMenu} />
      <MenuHeader toggleMenu={toggleMenu} menuVisible={menuVisible} />
    </div>
  );
};

export default Header;
