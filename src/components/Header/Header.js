import "./Header.scss";
import Burger from "./Burger";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState("/");

    return(
    <>
    <header className="header">
        <nav className="header__nav">
            <ul className="header__list">
                <li className={`header__list--item ${activeLink === '/' ? 'headeractive':''}`} onClick={()=> {
                    navigate("/"); 
                    setActiveLink('/'); 
                    }}>Home</li>
                <li className={`header__list--item ${activeLink === '/services' ? 'headeractive':''}`} onClick={()=>{
                    navigate("/services");
                    setActiveLink('/services')}}>Our Portfolio</li>
                <li className="header__list--item">About Us</li>
                <li className="header__list--item">Contact Us</li>
                {/* <li className="header__list--item">Log In</li>
                <li className="header__list--item">Get a Quote</li>
                <li className="header__list--item">Request an Appointment</li> */}
            </ul>
        </nav>
    </header>
    <Burger />
    </>
    )
}