import "./Burger.scss";
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";

export default function Burger(){
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    // Close menu when route changes (e.g., user clicks a menu link)
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return(
    <div ref={menuRef}>
        <section className={`burger__parent ${open ? 'openburger' : ''}`} open={open} onClick={()=>{setOpen(!open)}}>
            <div className={`burger__div1 ${open ? 'open' : ''}`}></div>
            <div className={`burger__div2 ${open ? 'open' : ''}`}></div>
            <div className={`burger__div3 ${open ? 'open' : ''}`}></div>
        </section>
        <Navbar open={open}/>
    </div>
    )
}