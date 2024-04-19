import "./SlideShow.scss";
import {useState} from 'react';

export default function SlideShow(){

    const Slideshow = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
    
        const goToNext = () => {
            const isLastSlide = currentIndex === images.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };
    
        return (
            <div>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                <button onClick={goToNext}>Next</button>
            </div>
        );
    };

    return(
    <>
    </>
    );
}