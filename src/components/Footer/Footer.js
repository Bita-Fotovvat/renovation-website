import "./Footer.scss";
import PhoneIcon from "../../assets/icons/phone.png";
import AddressIcon from "../../assets/icons/address.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import EmailIcon from "../../assets/icons/email.png";
import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router";

export default function Footer(){
    const navigate = useNavigate();
    return(
<footer className="footer">
    <section className="footer__container1">
        <section className="footer__mobileparent">
            <h3 className="footer__title">Connect with Us</h3>
            <img  className="footer__mobilelogo" src={Logo} alt="company logo" onClick={()=> navigate("/")}/>
        </section>
        <section className="footer__phoneparent">
            <img className="footer__icon" src={PhoneIcon} alt="phone icon" />
            <section className="footer__phoneparent--text">
                <p className="footer__phone">(289) 489-9689</p>
                <p className="footer__phone">(437) 599-1717</p>
            </section>
        </section>
        <section className="footer__emailparent">
            <img className="footer__icon"  src={EmailIcon} alt="email icon" />
            <p className="footer__email">renontario@gmail.com</p>
        </section>
        <img className="footer__icon--insta" src={InstagramIcon} alt="email icon" />
        <img  className="footer__icon" src={FacebookIcon} alt="email icon" />
    </section>
    <section className="footer__container2">
        <img  className="footer__logo" src={Logo} alt="company logo" onClick={()=> navigate("/")}/>
    </section> 
</footer>

    )
}