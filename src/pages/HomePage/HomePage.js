import "./HomePage.scss";
import { Helmet } from 'react-helmet-async';
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Introduction from "../../components/Introduction/Introduction";
import Process from "../../components/Process/Process";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../../components/Testimonials/Testimonials";
import ServiceAreas from "../../components/ServiceAreas/ServiceAreas";
import CtaBanner from "../../components/CtaBanner/CtaBanner";

export default function HomePage(){
    return(
        <main className="home-page">
            <Helmet>
                <title>Xeus Home | Premium Renovations</title>
                <link rel="canonical" href="https://xeushome.ca" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Xeus Home",
                    "url": "https://xeushome.ca",
                    "description": "Premium full home, kitchen, bathroom, and basement renovations across the GTA.",
                    "publisher": { "@type": "Organization", "name": "Xeus Home", "logo": { "@type": "ImageObject", "url": "https://xeushome.ca/og-image.jpg" } },
                })}</script>
            </Helmet>
            <Hero/>
            <About/>
            <WhyChooseUs />
            <Introduction />
            <Process />
            <FeaturedProjects />
            <Testimonials />
            <ServiceAreas />
            <CtaBanner />
        </main>
    )
}
