import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Introduction from "../../components/Introduction/Introduction";
import SlideShow from "../../components/SlideShow/SlideShow";

export default function HomePage(){
    return(
        <>
        <Hero/>
        <About/>
        <SlideShow />
        <Introduction />
        </>
    )
}