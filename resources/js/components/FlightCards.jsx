import React from "react";
import { limitChar } from "../../utils/limitchar";

export default function FlightCards() {
    return (
        <div className="bg-slate-200 p-4 rounded-md flex items-center hover:border-green-400 border-slate-300 border-2 cursor-pointer">
            <div id="from">
                <p className="text-slate-700 font-semibold text-base">Dhaka</p>
                <p className="text-slate-500 font-medium text-sm">
                    {limitChar("Hazrat Shahjalal International Airport")}
                </p>
            </div>
            <div id="middle" className="mx-4">
                <div className="h-6 bg-slate-400 w-[.8px] ml-3"></div>
                <svg
                className="rotate-45 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5L22 16z"
                    />
                </svg>
                <div className="h-6 bg-slate-400 w-[.8px] ml-3"></div>
            </div>
            <div id="to">
            <p className="text-slate-700 font-semibold text-base">Cox's Bazar</p>
                <p className="text-slate-500 font-medium text-sm">
                    {limitChar("Hazrat Shahjalal International Airport")}
                </p>
            </div>
        </div>
    );
}
