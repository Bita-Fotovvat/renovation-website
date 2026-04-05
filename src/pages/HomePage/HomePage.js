import "./HomePage.scss";
import { Helmet } from 'react-helmet-async';
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Introduction from "../../components/Introduction/Introduction";

export default function HomePage(){
    return(
        <main className="home-page">
            <Helmet>
                <title>Xeus Home | Premium Renovations</title>
            </Helmet>
            <Hero/>
            <About/>
            <Introduction />
        </main>
    )
}