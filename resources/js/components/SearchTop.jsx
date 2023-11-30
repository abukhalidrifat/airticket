import React from "react";
import AirlinesCard from "./AirlinesCard";

export default function SearchTop({bgColor='bg-slate-200'}) {
    return (
        <div className={`py-8 ${bgColor}`}>
            <div className="mycontainer text-center">
                <p className="text-4xl mt-16 font-bold tracking-wide">
                    Search Top Airlines
                </p>
                <p className="w-2/3 text-base m-auto mt-4 font-normal tracking-wide text-gray-500">
                    ShareTrip's user-friendly platform connects you to top
                    airlines instantly. Enjoy a comfortable and hassle-free
                    journey on any destination and get tickets of top airlines
                    easily
                </p>
                <div
                    id="airlines"
                    className="text-left mt-8 mb-16 flex flex-wrap gap-3"
                >
                    <AirlinesCard />
                    <AirlinesCard />
                    <AirlinesCard />
                    <AirlinesCard />
                    <AirlinesCard />
                    <AirlinesCard />
                    <AirlinesCard />
                    <AirlinesCard />
                </div>
            </div>
        </div>
    );
}
