// MenuHeader.js
import React from 'react';

const MenuHeader = ({ toggleMenu, menuVisible }) => {
  return (
    <div className={`burger-menu ${menuVisible ? 'visible' : ''}`}>
      <div className="burger-menu_content">
        <button className="header-burger-btn header-burger-btn_close" onClick={toggleMenu}>
          <svg className="header-burger-btn_icon" width="100%" height="100%" viewBox="6 6 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#fff" />
          </svg>
        </button>
        <nav className="burger-menu-nav">
            <a href="/pages/about.html" className="burger-menu-link_big link-anim" data-replace="Агенство">
                <span>Агенство</span>
            </a>
            <a href="/pages/services.html" className="burger-menu-link_big link-anim" data-replace="Услуги">
                <span>Услуги</span>
            </a>
            <a href="/" className="burger-menu-link_big link-anim" data-replace="Кейсы">
                <span>Кейсы</span>
            </a>
            <a href="/" className="burger-menu-link_big link-anim" data-replace="Контакты">
                <span>Контакты</span>
            </a>
        </nav>
      </div>
    </div>
  );
};

export default MenuHeader;