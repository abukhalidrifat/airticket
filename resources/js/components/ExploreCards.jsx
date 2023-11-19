import React from "react";
import seaImg from "../../../public/asssets/sea.jpg";

export default function ExploreCards() {
    return (
        <div>
            <div className="w-[280px] h-[320px] bg-red-500 rounded-lg relative overflow-hidden">
                <img src={seaImg} alt="img" className="h-full object-bottom " />
                <div className="absolute bottom-0 w-full opacity-80">
                    <div className="bg-gray-700 w-full p-3 text-white">
                    <p className="text-lg font-semibold">Cox's Bazar</p>
                    <p className="text-sm font-normal">98 Hotels available</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
