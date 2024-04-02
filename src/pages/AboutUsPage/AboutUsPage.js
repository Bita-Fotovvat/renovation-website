import "./AboutUsPage.scss";
import OurTeam from "../../assets/images/aboutus1.jpg";
import WhyHireUs from "../../assets/images/whyhireus.jpg";
import { useNavigate } from "react-router-dom";

export default function AboutUsPage(){
    const navigate = useNavigate();
    return(
        <main className="aboutus__main">
            <div className="aboutus__heroimage"></div>
            <article className="aboutus__wrapper">
                <h1 className="aboutus__title">About Us</h1>
                <h2 className="aboutus__heading1">What We Do</h2>
                <p className="aboutus__subcontent1">Renontario is a leading home remodeling and renovation company serving clients all over Ontario.</p>
                <p className="aboutus__subcontent2">We specialize in a wide range of home remodeling and renovation projects, both interior and exterior. This includes full interior remodeling, additions to homes, as well as kitchen and bathroom updates, and basement overhauls, among others. Additionally, we are proficient in the renovation and restoration of several historic homes throughout the GTA region. As your primary contractor, we commit to securing all necessary permits and conducting thorough inspections, providing our clients with assurance and peace of mind for their home projects.</p>
                <section className="aboutus__ourteamparent">
                    <h2 className="aboutus__heading2">Our Team</h2>
                    <img className="aboutus__image--ourteam" src={OurTeam} alt="our renovation team" />
                    <section className="aboutus__titleimage">
                        <p className="aboutus__subcontent3">Our team brings together a unique blend of talented project managers, innovative engineers, and creative designers, all dedicated to converting your home into a stunning living area. Each project benefits from the integrated expertise of our team ensuring a personalized approach to every remodeling or renovation project.</p>
                    </section>
                </section>
                <h2 className="aboutus__heading3">Why Hire Us?</h2>
                <img className="aboutus__image--whyhireus" src={WhyHireUs} alt="why hire us" />
                <p className="aboutus__subcontent4">Embarking on a home renovation journey can be both exciting and daunting. The key to a successful renovation is partnering with the right contractor. This is where choosing a Renontario as your contractor makes a significant difference. Renontario represents a commitment to integrity, professionalism, and high standards in home renovations.
                We understand the apprehension that can come with renovation projects—stories of incomplete jobs, delays, and subpar work are not uncommon. <br/> However, Renontario is your assurance of quality. It signifies that you are working with a contractor who has pledged to uphold rigorous industry standards, ensuring your project is handled with the utmost care and expertise.
                By choosing Renontario, you're not just hiring a professional; you're gaining peace of mind. We are committed to providing detailed quotes, offering a solid warranty, and working with a written contract, thereby reducing the risks of overpriced or poorly executed work. We promise transparency, quality, and satisfaction for all our renovation projects.
                </p>
                <section className="aboutus__contactwrapper">
                    <h2 className="aboutus__headingfinal">Ready to Start?</h2>
                    <h3 className="aboutus__subheadingfinal">Schedule Your Free Consultaion</h3>
                    {/* <h2 className="aboutus__getquote">Get a Free Consultaion/ Quote</h2> */}
                    <button className="aboutus__button" onClick={()=>navigate("/contact-us")}>Contact Us</button>            
                </section>
            </article>
        </main>
    )
}