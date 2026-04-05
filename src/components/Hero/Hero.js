import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hero.scss";

// We'll use the existing slideshow images to create a stunning crossfade background
import bg1 from "../../assets/images/hero_1.png";
import bg2 from "../../assets/images/Hero_2.png";
import bg3 from "../../assets/images/Hero_3.png";
import bg4 from "../../assets/images/Hero_4.png";

const backgrounds = [bg1, bg2, bg3, bg4];

export default function Hero() {
    const navigate = useNavigate();
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000); // 5 second crossfade
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-hero">
            {backgrounds.map((bg, idx) => (
                <div 
                    key={idx}
                    className={`home-hero__bg ${idx === currentBg ? 'home-hero__bg--active' : ''}`}
                    style={{ backgroundImage: `url(${bg})` }}
                />
            ))}
            
            <div className="home-hero__overlay"></div>

            <div className="home-hero__content">
                <span className="home-hero__label">Renovation & Remodeling Company</span>
                <h1 className="home-hero__title">Xeus Home</h1>
                <p className="home-hero__slogan">The home solution you deserve</p>
                
                <div className="home-hero__actions">
                    <button 
                        className="home-hero__btn home-hero__btn--primary" 
                        onClick={() => navigate('/contact-us')}
                    >
                        Get a Free Quote
                    </button>
                    <button 
                        className="home-hero__btn home-hero__btn--outline" 
                        onClick={() => navigate('/our-projects')}
                    >
                        View Our Work
                    </button>
                </div>
            </div>
        </section>
    );
}