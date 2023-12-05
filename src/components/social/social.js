import "./Footer.css"

import arrow from "../../img/icons/arrow.svg"

const Social = () => {
    return ( 
        <div className="footer-social">
            <a href="/" className="footer-social-item">
                <p className="footer-social-text">instagramm</p>
                <img className="footer-social-arrow" src={arrow} alt="arrow"/>
            </a>
            <a href="/" className="footer-social-item">
                <p className="footer-social-text">instagramm</p>
                <img className="footer-social-arrow" src={arrow} alt="arrow"/>
            </a>
            <a href="/" className="footer-social-item">
                <p className="footer-social-text">instagramm</p>
                <img className="footer-social-arrow" src={arrow} alt="arrow"/>
            </a>
            <a href="/" className="footer-social-item">
                <p className="footer-social-text">instagramm</p>
                <img className="footer-social-arrow" src={arrow} alt="arrow"/>
            </a>
        </div>
    );
}
 
export default Social;