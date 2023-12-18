import React, { useEffect } from "react";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperDemo() {
    useEffect(() => {
        new Swiper(".swiper", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: 2,
            spaceBetween: 50,
            autoplay: {
                delay: 3000,
            },

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
        });
    }, []);

    return (
        <>
            <div className="swiper">
                <div className="swiper-wrapper flex">
                    <div className="swiper-slide bg-red-400 w-32">Slide 1</div>
                    <div className="swiper-slide bg-yellow-400 w-32">
                        Slide 2
                    </div>
                    <div className="swiper-slide bg-green-700 w-32">
                        Slide 3
                    </div>
                    <div className="swiper-slide bg-blue-700 w-32">Slide 4</div>
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                <div className="swiper-scrollbar"></div>
            </div>
        </>
    );
}
