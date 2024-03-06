import "./Header.scss";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    return(
    <header className="header">
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__list--item" onClick={()=>navigate("/")}>Home</li>
                <li className="header__list--item" onClick={()=>navigate("/services")}>Services</li>
                <li className="header__list--item">About Us</li>
                <li className="header__list--item">Contact Us</li>
                <li className="header__list--item">Log In</li>
                <li className="header__list--item">Get a Quote</li>
                <li className="header__list--item">Request an Appointment</li>
            </ul>
        </nav>
    </header>
    )
}