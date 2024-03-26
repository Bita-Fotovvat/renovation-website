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
                <li className= "header__list--brandname" onClick={()=> navigate("/")}>Renontario</li>
                <li className={`header__list--item ${activeLink === '/' ? 'headeractive':''}`} onClick={()=> {
                    navigate("/"); 
                    setActiveLink('/'); 
                    }}>Home</li>
                <li className={`header__list--item ${activeLink === '/our-projects' ? 'headeractive':''}`} onClick={()=>{
                    navigate("/our-projects");
                    setActiveLink('/our-projects')}}>Our Projects</li>
                <li className={`header__list--item ${activeLink === '/about-us' ? 'headeractive':''}`} onClick={()=>{
                    navigate("/about-us");
                    setActiveLink('/about-us')}}>About Us</li>
                <li className={`header__list--item ${activeLink === '/contact-us' ? 'headeractive':''}`} onClick={()=>{
                    navigate("/contact-us");
                    setActiveLink('/contact-us')}}>Contact Us</li>
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