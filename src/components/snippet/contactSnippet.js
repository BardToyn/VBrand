import "./contactSnippet.css"

import king from "../../img/icons/king.webp"
import text from "../../img/icons/contact-text.svg"

const contactSnippet = () => {
    return ( 
        <a href="/" className="contact-link cursor-active">
            <img className="contact-link-text" src={text} alt="contact" />
            <div className="contact-link-circle">
                <img src={king} alt="contact-icon" className="contact-link-img" />
            </div>
        </a>
    );
}
 
export default contactSnippet;