import "./Hero.scss";
import HeroImage from "../../assets/images/Hero.png";
import Logo from "../../assets/logo/logo.png";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function Hero(){

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let formData = {
                name: document.querySelector('.hero__form--name').value,
                city: document.querySelector('.hero__form--city').value,
                phone: document.querySelector('.hero__form--phone').value,
                email: document.querySelector('.hero__form--email').value,
                message: document.querySelector('.hero__form--message').value,
            };
            const response = await axios.post(`http://localhost:8080/requests`, formData);
            if (response.status === 201) {
                alert("Success! You will be contacted soon.");
            } else {
                console.error('Failed to submit:', response);
                alert('Failed to submit your request. Please try again.');
            }
        } catch (error) {
            console.error('Error saving to requests:', error);
            alert('An error occurred while submitting your request. Please try again.');
        }
    };
    

    return(
    <section className="hero__parent">
        <section className="hero__childmobile"></section>
        <section className="hero__child1">
            <section className="hero__branding">
                {/* <h1 className="hero__brandname">Renontario</h1> */}
                {/* <p className="hero__about1">slogan</p> */}
                <img className="hero__logo" src={Logo} alt="renontario logo" />
                <p className="hero__about2">Renovation & Remodeling Company</p>
            </section>
            {/* <p className="hero__about3">Schedule a Consultation</p> */}
            {/* <p className="hero__about4">Enter your contact information to get a quotation</p> */}
            <form className="hero__form" onSubmit={handleSubmit}>
                <section className="hero__form--parent">
                    <input className="hero__form--name" name="name" type="name" placeholder="Name" />
                    <input className="hero__form--city" name="city" type="city" placeholder="City" />
                </section>
                <input className="hero__form--phone" name="phone" type="tel" placeholder="Phone Number" />
                <input className="hero__form--email" name="email" type="email"  placeholder="Email" />
                <input className="hero__form--message" name="message" type="message"  placeholder="Message (optional)"/>
                {/* <input className="hero__form--message" type="phone"  placeholder="Message (optional)" /> */}
                <button className="hero__form--button" type="submit">Submit</button>
            </form>
        </section>
        <section className="hero__child2">
            {/* <img src={HeroImage} alt="Hero Image" className="hero__image" /> */}
        </section>
    </section>
    )
}