import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Carousel = ({contentArray}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === contentArray.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? contentArray.length - 1 : prevIndex - 1
        );
    };

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            if(!isHovered){
                nextSlide();
            }
        }, 3000)

        return () => clearInterval(intervalId);
    }, [isHovered])
    

    return(
        <div 
            className="relative mx-auto overflow-hidden md:w-2/3 content-center rounded-xl m-2 w-11/12"
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
        >
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {contentArray.map((item, index) => (
                    <img
                        key={index}
                        src={item.imgSrc}
                        alt={item.altText}
                        className="w-full h-64 object-cover flex-shrink-0 object-center"
                    />
                ))}
            </div>
            <button 
                onClick={prevSlide} 
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                <ChevronLeft />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                <ChevronRight />
            </button>
        </div>
    )
}

export default Carousel;
