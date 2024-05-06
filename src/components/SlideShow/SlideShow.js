import "./SlideShow.scss";
import { useState, useEffect, useRef } from "react";
import Image1 from "../../assets/images/slideshows/first-order.jpg";

export default function SlideShow(){
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const slideImages = [Image1, "#00C49F", "#FFBB28"];
    const delay = 2500;

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]);

    return(
        <div className="slideshow">
            <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
            {slideImages.map((backgroundColor, index) => (
                <div
                className="slide"
                key={index}
                style={{ backgroundColor }}
                ></div>
            ))}
            </div>
  
            <div className="slideshowDots">
                {slideImages.map((_, idx) => (
                <div 
                key={idx} 
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                    setIndex(idx);
                }}
                ></div>
            ))}
            </div>
        </div>     
    );
}