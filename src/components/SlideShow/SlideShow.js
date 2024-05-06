import "./SlideShow.scss";
import { useState, useEffect, useRef } from "react";
import Image1 from "../../assets/images/slideshows/first-order.jpg";
import Image2 from "../../assets/images/slideshows/deck.jpg";
import Image3 from "../../assets/images/slideshows/aboutushero.jpg";

export default function SlideShow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const slideImages = [Image1, Image2, Image3];
    const delay = 5000;

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

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slideImages.map((image, idx) => (
                    <div
                        className="slide"
                        key={idx}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {slideImages.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${
                            index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
