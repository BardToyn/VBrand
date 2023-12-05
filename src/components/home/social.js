import Marquee from "../marquee/Marquee";

import "./social.css"

import arrow from "../../img/icons/arrow-services.svg"

const Social = () => {
    return ( 
        <section className='home-social'>
            <Marquee />
            <div className="home-social-list">
                <div className="home-social-item">
                    <p className="home-social-item-text">Instagramm</p>
                    <img className="home-social-item-icon" src={arrow} alt="arrow" />
                </div>
                <div className="home-social-item">
                    <p className="home-social-item-text">Telegram</p>
                    <img className="home-social-item-icon" src={arrow} alt="arrow" />
                </div>
                <div className="home-social-item">
                    <p className="home-social-item-text">Youtube</p>
                    <img className="home-social-item-icon" src={arrow} alt="arrow" />
                </div>
                <div className="home-social-item">
                    <p className="home-social-item-text">Яндекс Дзен</p>
                    <img className="home-social-item-icon" src={arrow} alt="arrow" />
                </div>
            </div>
        </section>
    );
}
 
export default Social;