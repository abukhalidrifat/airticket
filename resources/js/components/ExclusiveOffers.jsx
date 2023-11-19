import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function ExclusiveOffers() {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <section className="bg-slate-200 py-20 -mt-24">
            <div className="mycontainer ">
            <div>
                <p className="text-4xl mb-6 font-bold text-black tracking-wide">Exclusive Offers</p>

                <swiper-container
                    autoplay="true"
                    pagination-clickable="true"
                    slides-per-view="3"
                    speed="500"
                    loop="true"
                    css-mode="true"
                >
                    {slides.map((data,index) => (
                        <swiper-slide key={index}>
                            <div className="w-[350px] h-[170px] bg-red-500">

                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
        </div>
        </section>
    );
}
