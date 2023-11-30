import React, { useState } from "react";
import FlightCards from "./FlightCards";

export default function FlightRoutes() {
    const [activeBtn, setActiveBtn] = useState("domestic");
    return (
        <div className="py-8">
            <div className="mycontainer text-center">
                <p className="text-4xl mt-16 font-bold tracking-wide">
                    Top Domestic & International Routes
                </p>
                <p className="w-2/3 text-base m-auto mt-4 font-normal tracking-wide text-gray-500">
                    Make your next trip unforgettable with ShareTrip! From
                    business class to economy class flights on international
                    trips or domestic ones, choose from hundreds of airlines
                </p>
                <div id="button" className="my-8">
                    <button
                        onClick={() => setActiveBtn("domestic")}
                        className={`${
                            activeBtn == "domestic"
                                ? "bg-green-400 text-white hover:bg-green-500"
                                : "bg-slate-300 text-slate-600 hover:bg-slate-400"
                        } focus:outline-none font-medium rounded-full text-base px-5 py-3 me-2 tracking-wide ml-6`}
                    >
                        Domestic
                    </button>

                    <button
                        onClick={() => setActiveBtn("intl")}
                        className={`${
                            activeBtn == "intl"
                                ? "bg-green-400 text-white hover:bg-green-500"
                                : "bg-slate-300 text-slate-600 hover:bg-slate-400"
                        } focus:outline-none  font-medium rounded-full text-base px-5 py-3 me-2 tracking-wide ml-6`}
                    >
                        International
                    </button>
                </div>
                <div
                    id="airlines"
                    className="text-left mt-12 mb-16 flex flex-wrap gap-3"
                >
                    <FlightCards/>
                    <FlightCards/>
                    <FlightCards/>
                    <FlightCards/>
                    <FlightCards/>
                    <FlightCards/>
                    <FlightCards/>
                    <FlightCards/>
                </div>
            </div>
        </div>
    );
}
