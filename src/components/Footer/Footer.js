import "./Footer.scss";
import PhoneIcon from "../../assets/icons/phone.png";
// import AddressIcon from "../../assets/icons/address.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import EmailIcon from "../../assets/icons/email.png";
// import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router";

export default function Footer(){
    const navigate = useNavigate();
    return(
    <footer className="footer">
        <section className="footer__parent">            
            <section className="footer__container1">
                <h3 className="footer__title">Connect with Us</h3>
                <section className="footer__phoneparent">
                    <img className="footer__icon" src={PhoneIcon} alt="phone icon" />
                    <section className="footer__phoneparent--text">
                        <p className="footer__phone">(437) 599-1717</p>
                    </section>
                </section>
                <section className="footer__emailparent">
                    <img className="footer__icon"  src={EmailIcon} alt="email icon" />
                    <p className="footer__email">xeushome@gmail.com</p>
                </section>
                {/* <section className="footer__icon--instaparent"> */}
                    {/* <a className="footer__icon--instaparent" href="https://www.instagram.com/renontario?igsh=aWxsOHFnenp6Y3lr&utm_source=qr" target="_blank">
                        <img className="footer__icon--insta" src={InstagramIcon} alt="instagram icon"/>
                        <p className="footer__icon--instatext">instagram.com/renontario</p>
                    </a> */}
                {/* </section> */}
                {/* <section className="footer__icon--fbparent"> */}
                    {/* <a className="footer__icon--fbparent" href="https://www.facebook.com/profile.php?id=61559220082147&mibextid=LQQJ4d" target="_blank">
                        <img  className="footer__icon--insta" src={FacebookIcon} alt="facebook icon" />
                        <p className="footer__icon--instatext">facebook.com/renontario</p>
                    </a> */}
                {/* </section> */}
            </section>
            <section className="footer__container2">
                <h2 className="footer__logoreplacement">Xeus Home</h2>
                {/* <img  className="footer__logo" src={Logo} alt="company logo" onClick={()=> navigate("/")}/> */}
            </section>         
        </section>
        <section className="footer__copyrightparent">
                <p className="footer__copyright">Copyright © Xeus Home Ltd. 2024<br/>All Rights Reserved.</p>
                <p className="footer__copyright">Designed and Developed by Bita Fotovvat</p>
            </section>
</footer>
    )
}