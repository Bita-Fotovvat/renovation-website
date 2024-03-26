import "./About.scss";
import AboutPhoto from "../../assets/images/about.jpg";

export default function About(){

    return(
        <>
                <section className="about__wrappermobile">
        {/* <section className="about__photo"></section> */}
        <article className="about__parentmobile">
            <h1 className="about__maintitlemobile">Renontario</h1>
            <h2 className="about__titlemobile">Your Renovation Company</h2>
            <img className="about__photomobile" src={AboutPhoto} alt="renovation company about" />
            <p className="about__contentmobile">
            Welcome to Renontario, where we specialize in revitalizing spaces through
            exceptional renovation services. With a focus on quality craftsmanship, 
            efficiency, and affordability, we're committed to turning your vision 
            into reality. Whether it's a residential upgrade or a commercial transformation,
            Renontario is your trusted partner in achieving beautiful, fast, and 
            cost-effective renovations.
            </p>
            {/* <button className="about__buttonmobile">Want to know more about us?</button> */}
        </article>
        </section>
        
        <section className="about__wrapper">
            {/* <section className="about__photo"></section> */}
            <img className="about__photo" src={AboutPhoto} alt="renovation company about" />
            <article className="about__parent">
                <h1 className="about__maintitle">Renontario</h1>
                <h2 className="about__title">Your Renovation Company</h2>
                {/* <button className="about__button">Want to know more about us?</button> */}
            </article>
        </section>
        {/* <img className="about__photodesktop" src={AboutPhoto} alt="renovation company about" /> */}
        <p className="about__content">
                Welcome to Renontario, where we specialize in revitalizing spaces through
                exceptional renovation services. With a focus on quality craftsmanship, 
                efficiency, and affordability, we're committed to turning your vision 
                into reality. Whether it's a residential upgrade or a commercial transformation,
                Renontario is your trusted partner in achieving beautiful, fast, and 
                cost-effective renovations.
                </p>
        </>
    )
}