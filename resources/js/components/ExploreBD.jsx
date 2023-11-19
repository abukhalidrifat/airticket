import React from "react";
import ExploreCards from "./ExploreCards";

export default function ExploreBD() {
    return (
        <div className="mycontainer">
            <p className="text-4xl mt-16 font-bold tracking-wide">
                Explore Bangladesh
            </p>
            <p className="w-2/3 text-base mt-4 font-normal tracking-wide text-gray-500">
                Prepare to experience Bangladesh's rich culture and explore the
                majestic beauties of Cox’s Bazar, Sylhet, Bandarban, Sajek
                Valley, Rangamati etc. Plan your trip now!
            </p>
            <div className="mt-10 mb-20 flex gap-5">
            <ExploreCards/>
            <ExploreCards/>
            <ExploreCards/>
            <ExploreCards/>
            </div>
        </div>
    );
}
