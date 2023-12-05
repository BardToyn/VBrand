import React from 'react';
import './Marquee.css'; // Создайте файл Marquee.css для стилей
import kinecticLogo from "../../img/icons/kinetic_logo.webp"

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
        <div className="marquee-content">
          <p className='marquee-text'>Следи за Нами!</p>
          <img className='marquee-logo' alt='Logo' src={kinecticLogo} />
        </div>
      </div>
    </div>
  );
}

export default Marquee;