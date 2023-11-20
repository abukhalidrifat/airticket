import React from "react";

export default function BookingDetailsCard() {
    return (
        <>
            <div
                id="card"
                className="mt-4 border bg-white p-4 rounded-md shadow-md"
            >
                <div id="top" className="flex justify-between items-center">
                    <p className="text-xl font-medium text-slate-700">
                        DAC-CXB
                    </p>
                    <button className="btn-primary">View Baggage</button>
                </div>
                <hr className="my-4" />
                <div id="middle" className="flex justify-between items-center">
                    <div
                        id="aircraftDetails"
                        className="flex gap-4 items-center"
                    >
                        <img
                            src="/asssets/bimanbd.png"
                            alt="airline logo"
                            className="w-14"
                        />
                        <div>
                            <p className="text-slate-500 text-sm font-normal">
                                Biman Bangladesh Airlines
                            </p>
                            <p className="text-slate-700 text-base font-normal">
                                BG | 127
                            </p>
                            <p className="text-slate-700 text-sm font-medium">
                                Aircraft: Boeing 737-800{" "}
                                <span className="ml-4">Operated By: BG</span>
                            </p>
                        </div>
                    </div>
                    <div id="class">
                        <p className="text-slate-700 text-base font-normal">
                            Economy Class
                        </p>
                    </div>
                </div>
                <hr className="my-4" />
                <div id="bottom" className="flex justify-between items-center mb-4">
                    <div id="depart">
                        <p className="text-slate-500 text-sm font-normal">
                            Depart
                        </p>
                        <p className="text-slate-700 text-base font-medium mt-3">
                            19:30
                        </p>
                        <p className="text-slate-500 text-xs font-medium mt-0.5">
                            Mon, 20 Nov 2023
                        </p>
                        <p className="text-slate-700 text-sm font-medium mt-3">
                            Dhaka (DAC)
                        </p>
                    </div>
                    <div id="time">
                        <p className="text-slate-500 text-sm font-normal ml-10 mb-2">
                            45 minutes
                        </p>
                        <div
                            id="line"
                            className="w-[170px] h-0.5 bg-green-400 relative rounded-full"
                        >
                            <span className="w-[20px] h-0.5 bg-green-400 inline-block absolute right-[-3px] rotate-45 bottom-[7.25px] rounded-full"></span>
                        </div>
                        <p className="text-slate-600 text-sm font-medium ml-10 mt-2">
                            Non Stop
                        </p>
                    </div>
                    <div id="arrive">
                    <p className="text-slate-500 text-sm font-normal">
                            Depart
                        </p>
                        <p className="text-slate-700 text-base font-medium mt-3">
                            19:30
                        </p>
                        <p className="text-slate-500 text-xs font-medium mt-0.5">
                            Mon, 20 Nov 2023
                        </p>
                        <p className="text-slate-700 text-sm font-medium mt-3">
                            Dhaka (DAC)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
