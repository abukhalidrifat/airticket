import React, { useState } from "react";
import { limitChar } from "../../utils/limitchar";
import { Link } from "@inertiajs/react";

export default function FlightDetailsCard() {
    const [activeBtn, setActiveBtn] = useState("from");
    const [activeOtherBtn, setActiveOtherBtn] = useState("baggage");
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div>
            <div className="bg-white rounded-t-lg px-2 py-4 shadow-md flex items-center gap-8">
                <section className="flex flex-col gap-y-8">
                    <div id="firstRow" className="flex items-center gap-6">
                        <div id="logo">
                            <img
                                src="/asssets/bimanbd.png"
                                alt="logo"
                                className="w-14 h-14"
                            />
                        </div>
                        <div id="details">
                            <p id="destination" className="text-sm font-medium">
                                DAC-CXB
                            </p>
                            <p
                                id="airlineName"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                Biman Bangladeh
                            </p>
                            <p
                                id="time"
                                className="text-xs font-medium text-slate-400"
                            >
                                01h 05m
                            </p>
                        </div>
                        <div id="fromTime">
                            <p
                                id="destinationTime"
                                className="text-sm font-medium"
                            >
                                3:30pm
                            </p>
                            <p
                                id="date"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                19 Nov, Sunday
                            </p>
                            <p
                                id="airportName"
                                className="text-xs font-medium text-slate-400"
                            >
                                {limitChar(
                                    "Hazrat Shahjalal International Airport"
                                )}
                            </p>
                        </div>
                        <div id="toTime">
                            <p
                                id="destinationTime"
                                className="text-sm font-medium"
                            >
                                6:30pm
                            </p>
                            <p
                                id="date"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                21 Nov, Sunday
                            </p>
                            <p
                                id="airportName"
                                className="text-xs font-medium text-slate-400"
                            >
                                {limitChar(
                                    "Hazrat Shahjalal International Airport"
                                )}
                            </p>
                        </div>
                        <div id="delay">
                            <p id="isstopping" className="text-sm font-medium">
                                Non-Stop
                            </p>
                            <p
                                id="isdirect"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                Direct Flight
                            </p>
                        </div>
                    </div>
                    <div id="secondRow" className="flex items-center gap-6">
                        <div id="logo">
                            <img
                                src="/asssets/bimanbd.png"
                                alt="logo"
                                className="w-14 h-14"
                            />
                        </div>
                        <div id="details">
                            <p id="destination" className="text-sm font-medium">
                                DAC-CXB
                            </p>
                            <p
                                id="airlineName"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                Biman Bangladeh
                            </p>
                            <p
                                id="time"
                                className="text-xs font-medium text-slate-400"
                            >
                                01h 05m
                            </p>
                        </div>
                        <div id="fromTime">
                            <p
                                id="destinationTime"
                                className="text-sm font-medium"
                            >
                                3:30pm
                            </p>
                            <p
                                id="date"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                19 Nov, Sunday
                            </p>
                            <p
                                id="airportName"
                                className="text-xs font-medium text-slate-400"
                            >
                                {limitChar(
                                    "Hazrat Shahjalal International Airport"
                                )}
                            </p>
                        </div>
                        <div id="toTime">
                            <p
                                id="destinationTime"
                                className="text-sm font-medium"
                            >
                                6:30pm
                            </p>
                            <p
                                id="date"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                21 Nov, Sunday
                            </p>
                            <p
                                id="airportName"
                                className="text-xs font-medium text-slate-400"
                            >
                                {limitChar(
                                    "Hazrat Shahjalal International Airport"
                                )}
                            </p>
                        </div>
                        <div id="delay">
                            <p id="isstopping" className="text-sm font-medium">
                                Non-Stop
                            </p>
                            <p
                                id="isdirect"
                                className="mt-1 text-xs font-medium text-slate-500"
                            >
                                Direct Flight
                            </p>
                        </div>
                    </div>
                </section>
                <div
                    id="price"
                    className="p-3 bg-green-100 text-slate-700 rounded-md"
                >
                    <p
                        id="discountPrice"
                        className="text-base font-bold text-right mr-2"
                    >
                        $ 1000
                    </p>
                    <p
                        id="price"
                        className="mt-2 text-xs font-medium line-through text-slate-600 mr-2 text-right"
                    >
                        $ 2500
                    </p>
                    <Link id="selectTicket" href={route('reviewFlight')} as="button" className="btn-primary m-0 mt-4">Select</Link>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-b-lg py-2 px-2 flex flex-col">
                <span
                    onClick={() => setShowDetails((s) => !s)}
                    className="inline-flex self-end text-sm font-medium text-green-600 cursor-pointer"
                >
                    Details{" "}
                    {!showDetails ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 14.708L6.692 9.4l.708-.708l4.6 4.6l4.6-4.6l.708.708L12 14.708Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="m12 10.108l-4.6 4.6L6.692 14L12 8.692L17.308 14l-.708.708l-4.6-4.6Z"
                            />
                        </svg>
                    )}
                </span>
                {showDetails ? (
                    <section className="mt-4 flex w-[630px]">
                        <div
                            id="deatilsModal"
                            className="bg-white px-4 py-4 rounded-md"
                        >
                            <div id="btns" className="flex">
                                <button
                                    className={`btn-primary w-[180px] flex justify-between ${
                                        activeBtn == "from"
                                            ? "text-white bg-green-400"
                                            : "bg-slate-200 text-slate-700"
                                    }`}
                                    onClick={() => setActiveBtn("from")}
                                >
                                    <span>DAC - CXB</span> <span>1h 00m</span>
                                </button>
                                <button
                                    className={`btn-primary w-[180px] flex justify-between ${
                                        activeBtn == "to"
                                            ? "text-white bg-green-400"
                                            : "bg-slate-200 text-slate-700"
                                    }`}
                                    onClick={() => setActiveBtn("to")}
                                >
                                    <span>CXB - DAC</span> <span>1h 00m</span>
                                </button>
                            </div>
                            <div id="destination" className="flex mt-4">
                                <svg
                                    className="ml-3 text-slate-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 20.556q-.235 0-.47-.077q-.234-.077-.432-.25q-1.067-.98-2.163-2.185q-1.097-1.204-1.992-2.493q-.895-1.29-1.467-2.633q-.572-1.343-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494q-1.097 1.194-2.164 2.175q-.191.173-.434.26q-.244.086-.487.086Zm.003-8.825q.668 0 1.14-.476q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472Z"
                                    />
                                </svg>
                                <div className="ml-2 bg-slate-200 p-2 rounded-md flex w-full justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-xs font-medium text-slate-700">
                                            Departure from Dhaka
                                        </p>
                                    </div>
                                    <p className="text-xs font-medium text-slate-700">
                                        Terminal D :{" "}
                                        {limitChar("Hazrat Shahjalal I")}
                                    </p>
                                </div>
                            </div>
                            <div
                                id="moreDetails"
                                className="flex justify-between my-6"
                            >
                                <div id="details" className="flex gap-4">
                                    <div id="logo">
                                        <img
                                            src="/asssets/bimanbd.png"
                                            alt="logo"
                                            className="w-14 h-14"
                                        />
                                    </div>
                                    <div>
                                        <p
                                            id="destination"
                                            className="text-sm font-medium"
                                        >
                                            DAC-CXB
                                        </p>

                                        <p
                                            id="time"
                                            className="text-xs font-medium text-slate-400"
                                        >
                                            01h 05m
                                        </p>
                                    </div>
                                </div>
                                <div id="fromTime">
                                    <p
                                        id="destinationTime"
                                        className="text-sm font-medium"
                                    >
                                        3:30pm
                                    </p>
                                    <p
                                        id="date"
                                        className="mt-1 text-xs font-medium text-slate-500"
                                    >
                                        19 Nov, Sunday
                                    </p>
                                </div>
                                <div id="toTime">
                                    <p
                                        id="destinationTime"
                                        className="text-sm font-medium"
                                    >
                                        6:30pm
                                    </p>
                                    <p
                                        id="date"
                                        className="mt-1 text-xs font-medium text-slate-500"
                                    >
                                        21 Nov, Sunday
                                    </p>
                                </div>
                            </div>
                            <div
                                id="moreDetails"
                                className="flex justify-between my-6"
                            >
                                <div id="details" className="flex gap-4">
                                    <div id="logo">
                                        <svg
                                            className="rotate-180 ml-3 mt-1 text-slate-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447Z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p
                                            id="destination"
                                            className="text-sm font-medium"
                                        >
                                            DAC-CXB
                                        </p>

                                        <p
                                            id="time"
                                            className="text-xs font-medium text-slate-400"
                                        >
                                            01h 05m
                                        </p>
                                    </div>
                                </div>
                                <div id="fromTime">
                                    <p
                                        id="destinationTime"
                                        className="text-sm font-medium"
                                    >
                                        3:30pm
                                    </p>
                                    <p
                                        id="date"
                                        className="mt-1 text-xs font-medium text-slate-500"
                                    >
                                        19 Nov, Sunday
                                    </p>
                                </div>
                                <div id="toTime">
                                    <p
                                        id="destinationTime"
                                        className="text-sm font-medium"
                                    >
                                        6:30pm
                                    </p>
                                    <p
                                        id="date"
                                        className="mt-1 text-xs font-medium text-slate-500"
                                    >
                                        21 Nov, Sunday
                                    </p>
                                </div>
                            </div>
                            <div id="destination" className="flex">
                                <svg
                                    className="ml-3 text-green-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 20.556q-.235 0-.47-.077q-.234-.077-.432-.25q-1.067-.98-2.163-2.185q-1.097-1.204-1.992-2.493q-.895-1.29-1.467-2.633q-.572-1.343-.572-2.622q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 1.279-.572 2.613q-.572 1.333-1.458 2.632q-.885 1.3-1.981 2.494q-1.097 1.194-2.164 2.175q-.191.173-.434.26q-.244.086-.487.086Zm.003-8.825q.668 0 1.14-.476q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472Z"
                                    />
                                </svg>
                                <div className="ml-2 bg-slate-200 p-2 rounded-md flex w-full justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-xs font-medium text-slate-700">
                                            Departure from Dhaka
                                        </p>
                                    </div>
                                    <p className="text-xs font-medium text-slate-700">
                                        Terminal D :{" "}
                                        {limitChar("Hazrat Shahjalal I")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white ml-3 rounded-md p-2">
                            <div id="btns" className="flex">
                                <button
                                    className={`btn-primary w-[100px] ${
                                        activeOtherBtn == "baggage"
                                            ? "text-white bg-green-400"
                                            : "bg-slate-200 text-slate-700"
                                    }`}
                                    onClick={() => setActiveOtherBtn("baggage")}
                                >
                                    Baggage
                                </button>
                                <button
                                    className={`btn-primary w-[100px] ${
                                        activeOtherBtn == "policy"
                                            ? "text-white bg-green-400"
                                            : "bg-slate-200 text-slate-700"
                                    }`}
                                    onClick={() => setActiveOtherBtn("policy")}
                                >
                                    Policy
                                </button>
                            </div>
                            {activeOtherBtn == "baggage" ? (
                                <div id="baggage" className="mt-4">
                                    <div
                                        id="bagDetailsTo"
                                        className="flex justify-between px-2"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">
                                                DAC-CXB
                                            </p>
                                            <p className="text-xs font-medium text-slate-500">
                                                Economy
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-500">
                                                Baggage
                                            </p>
                                            <p className="text-sm font-semibold text-slate-700">
                                                20 kg / person
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div
                                        id="bagDetailsReturn"
                                        className="flex justify-between px-2"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">
                                                CXB-DAC
                                            </p>
                                            <p className="text-xs font-medium text-slate-500">
                                                Economy
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-500">
                                                Baggage
                                            </p>
                                            <p className="text-sm font-semibold text-slate-700">
                                                20 kg / person
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    id="policy"
                                    className="mt-4 text-slate-600 text-xs"
                                >
                                    <p>
                                        Refunds and Date Changes are done as per
                                        the following policies.
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-bold">
                                            Refund Amount
                                        </span>
                                        <span>
                                            = Paid Amount – (Airline’s
                                            Cancellation Fee* + ST Service Fee)
                                        </span>
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-bold">
                                            Date Change Amount
                                        </span>
                                        <span>
                                            = Airline’s Date Change Fee* + Fare
                                            Difference + ST Service Fee
                                        </span>
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-bold">
                                            Airlines Cancellation Fee
                                        </span>
                                        <span className="inline-block">
                                            Prior Departure : 0 BDT
                                        </span>
                                        <span className="inline-block">
                                            After Departure : 0 BDT
                                        </span>
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-bold">
                                            Airlines Date Change Fee
                                        </span>
                                        <span className="inline-block">
                                            Prior Departure : 0 BDT
                                        </span>
                                        <span className="inline-block">
                                            After Departure : 0 BDT
                                        </span>
                                    </p>
                                    <p className="mt-2">
                                        <span className="font-bold">
                                            *Fees are shown for all traveler
                                        </span>
                                        <span className="inline-block">
                                            *ST Convenience fee is
                                            non-refundable. We can not guarantee
                                            the accuracy of airline refund/date
                                            change fees as
                                        </span>
                                    </p>
                                    <span className="mt-4 cursor-pointer inline-block text-blue-500 text-xs font-bold">
                                        Show More Info
                                    </span>
                                </div>
                            )}
                        </div>
                    </section>
                ) : null}
            </div>
        </div>
    );
}
