import "./AboutUsPage.scss";

export default function AboutUsPage(){
    return(
        <>
        <main className="aboutus__main">
            <div className="aboutus__heroimage">
                <p className="aboutus__title">About Us</p>
                </div>
            <article className="aboutus__wrapper">
                {/* <h1 className="aboutus__title">About Us</h1> */}
                <h2 className="aboutus__heading">What We Do</h2>
                <p className="aboutus__subcontent1">Renontario is a leading home remodeling and renovations company serving clients all over Ontario.</p>
                <p className="aboutus__subcontent2">We specialize in a wide range of home remodeling and renovation projects, both interior and exterior. This includes full interior remodeling, additions to homes, as well as kitchen and bathroom updates, and basement overhauls, among others. Additionally, we are proficient in the renovation and restoration of several historic homes throughout the GTA region. As your primary contractor, we commit to securing all necessary permits and conducting thorough inspections, providing our clients with assurance and peace of mind for their home projects.</p>
                <h2 className="aboutus__heading">Our Team</h2>
                <p className="aboutus__subcontent3">Our team brings together a unique blend of talented project managers, innovative engineers, and creative designers, all dedicated to converting your home into a stunning living area. Each project benefits from the integrated expertise of our team ensuring a personalized approach to every remodeling or renovation project.</p>
                {/* <h2 className="aboutus__getquote">Get a Free Consultaion/ Quote</h2> */}
            </article>
        </main>
        </>
    )
}