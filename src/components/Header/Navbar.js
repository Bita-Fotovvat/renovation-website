import "./Navbar.scss";
import Burger from "../Header/Burger";
import Brand from "./Brand";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState("/");

    return(
        <>
        <nav className="navbar">
            <ul className="navbar__list">
                <li className={`navbar__list--item ${activeLink === '/' ? 'headeractive':''}`} onClick={()=> {
                    navigate("/"); 
                    setActiveLink('/'); 
                    }}>Home</li>
                <li className={`navbar__list--item ${activeLink === '/services' ? 'headeractive':''}`} onClick={()=>{
                    navigate("/services");
                    setActiveLink('/services')}}>Our Portfolio</li>
                <li className="navbar__list--item">About Us</li>
                <li className="navbar__list--item">Contact Us</li>
                {/* <li className="header__list--item">Log In</li>
                <li className="header__list--item">Get a Quote</li>
                <li className="header__list--item">Request an Appointment</li> */}
            </ul>
        </nav>
        </>
    )
}