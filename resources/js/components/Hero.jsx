import React from "react";
import planeImg from "../../../public/asssets/plane.jpg";
import FlightSearch from "./FlightSearch";

export default function Hero() {
    return (
        <>
            <div className="relative w-full">
                <img
                    src={planeImg}
                    alt="plane"
                    className="h-[350px] w-full object-cover"
                />
                <div className="bg-gray-800 opacity-80 w-full h-[350px] absolute top-0 left-0">
                    <div style={{ marginTop:'180px' }} className="text-white mycontainer">
                        <p className="text-4xl font-medium">
                            Welcome to AirTicket
                        </p>
                        <p className="mt-3 ml-1 text-xl font-normal">
                            Find flights tickets.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-200">
            <FlightSearch topStyle={'-top-16'}/>
            </div>
        </>
    );
}
