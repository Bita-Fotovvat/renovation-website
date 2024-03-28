import "./Burger.scss";
import { useState, useRef } from 'react';
import Navbar from "./Navbar";

export default function Burger(){
    const [open, setOpen] = useState(false);

    return(
    <>
        <section className={`burger__parent ${open ? 'openburger' : ''}`} open={open} onClick={()=>{setOpen(!open)}}>
            <div className={`burger__div1 ${open ? 'open' : ''}`}></div>
            <div className={`burger__div2 ${open ? 'open' : ''}`}></div>
            <div className={`burger__div3 ${open ? 'open' : ''}`}></div>
        </section>
        <Navbar open={open}/>
    </>
    )
}