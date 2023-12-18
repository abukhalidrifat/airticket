import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import DatePickerWithRange from "./DatePickerRange";
import { Combobox } from "./Combobox";
import { X } from "lucide-react";

export default function FlightSearch({ topStyle }) {
    const [activeBtn, setActiveBtn] = useState("oneway");
    const [showOptions, setShowOptions] = useState(false);
    const [airportOne, setAirportOne] = useState("");
    const [airportTwo, setAirportTwo] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [kid, setKid] = useState(0);
    const [infant, setInfant] = useState(0);
    useEffect(() => {
        if (adults <= 0) {
            setAdults(1);
        }
    }, [adults]);
    useEffect(() => {
        if (children < 0) {
            setChildren(0);
        }
    }, [children]);
    useEffect(() => {
        if (kid < 0) {
            setKid(0);
        }
    }, [kid]);
    useEffect(() => {
        if (infant < 0) {
            setInfant(0);
        }
    }, [infant]);

    const handleGetAirportOne = (name) => {
        setAirportOne(name);
    };
    const handleGetAirportTwo = (name) => {
        setAirportTwo(name);
    };

    const reverseAirport = () => {
        setAirportOne(airportTwo);
        setAirportTwo(airportOne);
    };

    return (
        <div
            className={`mycontainer p-6 bg-white h-[300px] xlg:h-auto rounded-md relative shadow-md ${topStyle}`}
        >
            <div id="top" className="flex items-center border-b-2 px-4 pb-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0Z"
                    />
                </svg>
                <p className="text-slate-600 text-base font-medium">Flight</p>
            </div>
            <div id="middle" className="flex justify-between xmd:flex-col">
                <div id="button" className="my-2 flex xsm:flex-wrap xsm:gap-y-3">
                    <button
                        onClick={() => setActiveBtn("oneway")}
                        className={`${
                            activeBtn == "oneway"
                                ? "bg-green-400 text-white hover:bg-green-500"
                                : "bg-slate-300 text-slate-600 hover:bg-slate-400"
                        } focus:outline-none font-medium rounded-md text-sm px-3 py-2 me-2 tracking-wide ml-3`}
                    >
                        One Way
                    </button>

                    <button
                        onClick={() => setActiveBtn("roundtrip")}
                        className={`${
                            activeBtn == "roundtrip"
                                ? "bg-green-400 text-white hover:bg-green-500"
                                : "bg-slate-300 text-slate-600 hover:bg-slate-400"
                        } xsm:ml-3 focus:outline-none font-medium rounded-md text-sm px-3 py-2 me-2 tracking-wide ml-1`}
                    >
                        Round Trip
                    </button>
                    <button
                        onClick={() => setActiveBtn("multicity")}
                        className={`${
                            activeBtn == "multicity"
                                ? "bg-green-400 text-white hover:bg-green-500"
                                : "bg-slate-300 text-slate-600 hover:bg-slate-400"
                        } xsm:ml-3 focus:outline-none font-medium rounded-md text-sm px-3 py-2 me-2 tracking-wide ml-1`}
                    >
                        Multi City
                    </button>
                </div>
                <div id="options" className="flex flex-wrap gap-x-4 gap-y-2 xmd:ml-3">
                    <div id="traveller">
                        <button
                            onClick={() => setShowOptions(!showOptions)}
                            className="mt-2 bg-green-400 border-2 border-green-400 text-white text-sm font-medium rounded-lg focus:ring-green-400 focus:border-green-500 block p-2 hover:bg-green-500"
                        >
                            {adults + kid + children + infant} Traveller{" "}
                            <svg
                                className="inline-flex"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                                />
                            </svg>
                        </button>
                        {showOptions && (
                            <div
                                id="travellerModal"
                                className="absolute border-2 border-slate-200 shadow-md bg-white w-[260px] h-[235px] p-4 rounded-md mt-2 z-50 flex flex-col"
                            >
                                <button
                                    onClick={() => setShowOptions(!showOptions)}
                                    className="mb-3 bg-red-400 text-red-950 w-fit p-1 rounded-full self-end"
                                >
                                    <X />
                                </button>
                                <div
                                    id="input"
                                    className="flex justify-between"
                                >
                                    <div>
                                        <label htmlFor="adults">Adults:</label>
                                        <p className="text-xs font-medium text-slate-600">
                                            (12 years & above)
                                        </p>
                                    </div>
                                    <div className="w-24 flex justify-between">
                                        <button
                                            onClick={() =>
                                                setAdults((p) => p - 1)
                                            }
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M19 12.998H5v-2h14z"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-slate-600 text-xl font-medium px-2">
                                            {adults}
                                        </span>
                                        <button
                                            onClick={() =>
                                                setAdults((p) => p + 1)
                                            }
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    id="input"
                                    className="flex justify-between"
                                >
                                    <div>
                                        <label htmlFor="adults">
                                            Children:
                                        </label>
                                        <p className="text-xs font-medium text-slate-600">
                                            (From 5 to under 12)
                                        </p>
                                    </div>
                                    <div className="w-24 flex justify-between">
                                        <button
                                            onClick={() =>
                                                setChildren((p) => p - 1)
                                            }
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M19 12.998H5v-2h14z"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-slate-600 text-xl font-medium px-2 inline-block">
                                            {children}
                                        </span>
                                        <button
                                            onClick={() =>
                                                setChildren((p) => p + 1)
                                            }
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    id="input"
                                    className="flex justify-between"
                                >
                                    <div>
                                        <label htmlFor="adults">Kids:</label>
                                        <p className="text-xs font-medium text-slate-600">
                                            (From 2 to under 5)
                                        </p>
                                    </div>
                                    <div className="w-24 flex justify-between">
                                        <button
                                            onClick={() => setKid((p) => p - 1)}
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M19 12.998H5v-2h14z"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-slate-600 text-xl font-medium px-2">
                                            {kid}
                                        </span>
                                        <button
                                            onClick={() => setKid((p) => p + 1)}
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    id="input"
                                    className="flex justify-between"
                                >
                                    <div>
                                        <label htmlFor="adults">Infants:</label>
                                        <p className="text-xs font-medium text-slate-600">
                                            (Under 2 years)
                                        </p>
                                    </div>
                                    <div className="w-24 flex justify-between">
                                        <button
                                            onClick={() =>
                                                setInfant((p) => p - 1)
                                            }
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M19 12.998H5v-2h14z"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-slate-600 text-xl font-medium px-2">
                                            {infant}
                                        </span>
                                        <button
                                            onClick={() =>
                                                setInfant((p) => p + 1)
                                            }
                                            className="w-8 h-8 pl-1  rounded-full border-2 border-green-600 hover:bg-slate-400"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="18"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <select
                        id="countries"
                        className="mt-2 bg-green-400 border-2 border-green-400 text-white text-sm font-medium rounded-lg focus:ring-green-400 focus:border-green-500 block p-2 hover:bg-green-500"
                    >
                        <option value="US">Economy</option>
                        <option value="US">Business</option>
                        <option value="US">Economy</option>
                        <option value="US">Economy</option>
                    </select>
                </div>
            </div>
            <div
                id="input"
                className="mt-8 flex justify-between items-center xlg:flex-col"
            >
                <div
                    id="searchAirport"
                    className="flex relative gap-2 xlg:flex-col xlg:w-full"
                >
                    <div id="fromDestination" className="ml-3">
                        <label
                            htmlFor="depart"
                            className="text-xl font-medium text-slate-500 self-center"
                        >
                            From:
                        </label>
                        <Combobox
                            className={"mt-3 xlg:w-full "}
                            onSelectAirport={handleGetAirportOne}
                            airportVal={airportOne}
                        />
                    </div>
                    <div
                        id="reverse"
                        className="-mx-2 mt-10 xlg:mt-11 absolute right-[48%] xxl:right-[46%] xlg:right-[5%] xlg:top-16 top-2 z-40 bg-slate-200 rounded-full w-fit p-1 cursor-pointer hover:bg-green-400 hover:text-white transition-all duration-200"
                        onClick={() => reverseAirport()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 21 21"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m8.5 10.5l-4 4l4 4m8-4h-12m8-12l4 4l-4 4m4-4h-12"
                            />
                        </svg>
                    </div>
                    <div id="toDestination" className="lg:ml-3">
                        <label
                            htmlFor="depart"
                            className="text-xl font-medium text-slate-500"
                        >
                            To:
                        </label>
                        <Combobox
                            className={"mt-3 xlg:w-full"}
                            airportVal={airportTwo}
                            onSelectAirport={handleGetAirportTwo}
                        />
                    </div>
                </div>
                <div
                    id="btnAndDate"
                    className="flex flex-wrap justify-between self-stretch"
                >
                    {activeBtn == "oneway" ? (
                        <div
                            id="oneWayDate"
                            className="ml-8 xlg:ml-3 xlg:mt-3 xlg:self-start"
                        >
                            <label
                                htmlFor="depart"
                                className="text-xl font-medium text-slate-500"
                            >
                                Select Date:
                            </label>
                            <div className="mt-3 xlg:w-full">
                                <DatePicker />
                            </div>
                        </div>
                    ) : null}
                    {activeBtn == "roundtrip" ? (
                        <div
                            id="roundWayDate"
                            className="ml-8 xlg:ml-3 xlg:mt-3 xlg:self-start"
                        >
                            <label
                                htmlFor="depart"
                                className="text-xl font-medium text-slate-500"
                            >
                                Select Date:
                            </label>
                            <DatePickerWithRange className={"mt-3"} />
                        </div>
                    ) : null}
                    <div id="btn" className="ml-8 mt-8 self-end">
                        <Link
                            href={route("availableFlights")}
                            as="button"
                            className="mt-2 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm p-2 me-2 mb-2 tracking-wide ring-2 ring-green-400 ring-offset-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="currentColor"
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
