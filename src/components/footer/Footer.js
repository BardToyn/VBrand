
import "./Footer.css"

import bgFooter from "../../img/video/footer-bg.mp4"

const Footer = () => {
    return ( 
        <footer className="footer">
            <a className="footer-top cursor-white" href="/">
                <div className="footer-top-shape"></div>
                <video className="footer-video" autoPlay loop muted>
                    <source src={bgFooter} type="video/mp4" />
                </video>
                <div className="footer-top-content">
                    <h2 className="footer-title">
                        Обсудить проект
                    </h2>
                    <p className="footer-subtitle">
                        Мы любим общаться с людьми, которые увлечены своим брендом и бизнесом. Свяжитесь с нами, чтобы узнать, что мы можем придумать для вашей компании.
                    </p>
                </div>
            </a>
            <div className="footer-btm">
                <nav className="footer-nav">
                    <a className="footer-link cursor-active" href="mailto:hello@vbrand.ru">
                        hello@vbrand.ru
                    </a>
                    <a className="footer-link cursor-active" href="tel:+79286222622">
                        +7 (928) 622-26-22
                    </a>
                    <a className="footer-link cursor-active" href="https://yandex.ru/maps/-/CDedRN1C" target="blank_">
                        г. Ростов-на-Дону, ул. Нансена, 355
                    </a>
                </nav>
                <div className="footer-btm-list">
                    <a className="footer-link cursor-active" href="https://www.instagram.com/thevorontsov/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="blank_">
                        instagram
                    </a>
                    <a className="footer-link cursor-active" href="https://t.me/vbrandru" target="blank_">
                        telegram
                    </a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;