import "./Hero.scss";
import HeroImage from "../../assets/images/Hero.png"

export default function Hero(){
    return(
    <section className="hero__parent">
        <section className="hero__child1">
            <h1 className="hero__brandname">Renobelle</h1>
            <p className="hero__about1">Building Dreams</p>
            <p className="hero__about2">Renovating Realities</p>
            <p className="hero__about3">Renovation <br/>& <br/>Remodeling</p>
        </section>
        <section className="hero__child2">
            <img src={HeroImage} alt="Hero Image" className="hero__image" />
        </section>
    </section>
    )
}