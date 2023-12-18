import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import ExploreCards from "./ExploreCards";
// register Swiper custom elements
register();

export default function PopularDestination() {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className="py-16">
            <div className="mycontainer">
                <p className="text-4xl mt-16 font-bold tracking-wide">
                    Most Popular Destinations
                </p>
                <p className="w-2/3 text-base mt-4 font-normal tracking-wide text-gray-500">
                    Expand your travel horizons with new facets! Explore the
                    world by choosing your ideal travel destinations in Asia,
                    Europe, America, Australia and more with ShareTrip.
                </p>
                <div id="slider" className="mt-8 mb-16">
                    <swiper-container
                        autoplay="true"
                        pagination-clickable="true"
                        slides-per-view="4"
                        speed="500"
                        loop="true"
                        css-mode="true"
                        space-between="20"
                    >
                        {slides.map((data, index) => (
                            <swiper-slide key={index}>
                                <ExploreCards/>
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>
            </div>
        </div>
    );
}
