import "./Hero.scss";
import HeroImage from "../../assets/images/Hero.png"
import { useState, useEffect } from 'react';

export default function Hero(){
    return(
    <section className="hero__parent">
        <section className="hero__child1">
            <h1 className="hero__brandname">Renontario</h1>
            <p className="hero__about1">slogan</p>
            <p className="hero__about2">Renovation & Remodeling Company</p>
            <p className="hero__about3">Need a Quote or Consultation?</p>
            <p className="hero__about4">Enter your contact information and get a free quotation</p>
            <form className="hero__form">
                <input className="hero__form--name"  type="name" placeholder="Name" />
                <input className="hero__form--email" type="email"  placeholder="Email" />
                <input className="hero__form--phone" type="phone"  placeholder="Phone Number" />
                <button>Get Quotation</button>
            </form>
        </section>
        <section className="hero__child2">
            {/* <img src={HeroImage} alt="Hero Image" className="hero__image" /> */}
        </section>
    </section>
    )
}