import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import ExploreCards from "./ExploreCards";
// register Swiper custom elements
register();

export default function TourPackage() {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="bg-slate-200 py-16">
            <div className="mycontainer">
                <p className="text-4xl mt-16 font-bold tracking-wide">
                    Our Tour Packages for You
                </p>
                <p className="w-2/3 text-base mt-4 font-normal tracking-wide text-gray-500">
                    Plan your dream gateway and choose from uncountable tour
                    packages at ShareTrip. Book our holiday packages for the
                    best deals on any international trip.
                </p>
                <div id="slider" className="mt-8 mb-16">
                    <swiper-container
                        autoplay="true"
                        pagination-clickable="true"
                        slides-per-view="4"
                        grab-cursor="true"
                        speed="500"
                        loop="true"
                        css-mode="true"
                        space-between="20"
                    >
                        {slides.map((data, index) => (
                            <swiper-slide key={index}>
                                <ExploreCards />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>
        </div>
    );
}
