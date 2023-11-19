import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FlightSearch from "../components/FlightSearch";
import FlightDetailsCard from "../components/FlightDetailsCard";
export default function AvailableFlights() {
    const [active, setActive] = useState("cheapest");
    const [priceRange, setPriceRange] = useState(2000);
    const [deparature, setDeparature] = useState([]);
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(29);

    const handleDepartureTime = (time) => {
        if (deparature.includes(time)) {
            const filtered = deparature.filter(function (item) {
                return item !== time;
            });
            setDeparature(filtered);
        } else {
            setDeparature((s) => [...s, time]);
        }
    };

    useEffect(() => {
        function countDown() {
            const startTime = new Date();
            // Set the date we're counting down to
            const countDownDate = new Date(
                startTime.getTime() + 30 * 60000
            ).getTime();

            // Update the count down every 1 second
            const x = setInterval(function () {
                // Get today's date and time
                const now = new Date().getTime();

                // Find the distance between now and the count down date
                const distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // If the count down is finished, write some text
                setSecond(seconds);
                setMinute(minutes);

                if (distance < 0) {
                    clearInterval(x);
                    console.log("[TIMED OUT!]");
                }
            }, 1000);
        }
        countDown();
        return () => countDown();
    }, []);

    return (
        <>
            <Header />
            <br />
            <FlightSearch topStyle={"top-16"} />
            <br />
            <br />
            <br />
            <section className="mycontainer flex justify-between">
                <div id="left" className="bg-white w-[400px] rounded-md p-4">
                    <div id="timeRemaining">
                        <p className="text-lg font-bold text-slate-600 text-center">
                            Session Timeout in
                        </p>
                        <p className="text-2xl font-bold text-slate-400 text-center">
                            {minute} min {second} sec
                        </p>
                    </div>
                    <hr className="mt-6" />
                    <div id="priceRange">
                        <p className="text-lg font-bold text-slate-600 text-left mt-2">
                            Price Range
                        </p>
                        <input
                            type="range"
                            name="price"
                            id="priceRangeInput"
                            className="w-full"
                            min={1000}
                            max={9999}
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        <p className="text-base font-medium text-slate-600 text-left">
                            {"tk " + 1900 + " - " + "tk " + priceRange}
                        </p>
                    </div>
                    <hr className="mt-6" />
                    <div id="deparature" className="mt-3">
                        <p className="text-lg font-bold text-slate-600 mb-4">
                            Departure time in Dhaka
                        </p>
                        <div id="btns" className="flex flex-wrap gap-4">
                            <button
                                className={`border-2
                            rounded-md py-2 px-6 flex flex-col justify-center
                            items-center text-base font-medium  ${
                                deparature.includes("morning")
                                    ? "bg-green-400 text-green-800 border-green-600 hover:bg-green-500"
                                    : "border-slate-600 hover:bg-slate-200  hover:text-slate-700"
                            }`}
                                onClick={() => handleDepartureTime("morning")}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="meteoconsTimeLateMorningFill0"
                                                x1="115"
                                                x2="179.4"
                                                y1="91.4"
                                                y2="203"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#fbbf24"
                                                />
                                                <stop
                                                    offset=".5"
                                                    stop-color="#fbbf24"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#f59e0b"
                                                />
                                            </linearGradient>
                                            <clipPath id="meteoconsTimeLateMorningFill1">
                                                <path
                                                    fill="none"
                                                    d="M0 12h512v282H0z"
                                                />
                                            </clipPath>
                                            <symbol
                                                id="meteoconsTimeLateMorningFill2"
                                                viewBox="0 0 294.4 294.4"
                                            >
                                                <circle
                                                    cx="147.2"
                                                    cy="147.2"
                                                    r="64.4"
                                                    fill="url(#meteoconsTimeLateMorningFill0)"
                                                    stroke="#f8af18"
                                                    stroke-miterlimit="10"
                                                    stroke-width="4.6"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="#fbbf24"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="18.4"
                                                    d="M147.2 47.3V9.2m0 276v-38m70.7-170.7l26.9-26.9M49.6 244.8l27-27m0-141.3l-27-26.9m195.2 195.2l-27-27M47.4 147.3H9.2m276 0h-38"
                                                >
                                                    <animateTransform
                                                        additive="sum"
                                                        attributeName="transform"
                                                        dur="6s"
                                                        repeatCount="indefinite"
                                                        type="rotate"
                                                        values="0 147.2 147.2; 45 147.2 147.2"
                                                    />
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g clip-path="url(#meteoconsTimeLateMorningFill1)">
                                            <use
                                                width="294.4"
                                                height="294.4"
                                                href="#meteoconsTimeLateMorningFill2"
                                                transform="translate(108.73 108.93)"
                                            />
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#374151"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="18"
                                            d="M128 320h256"
                                        />
                                        <path
                                            fill="#374251"
                                            d="M214.5 392q7.2 6.8 7.2 20.6q0 13-5.8 20.2t-16.6 7.2c-5 0-9.3-1.1-12.6-3.4a16.3 16.3 0 0 1-6.7-9.6l12.4-.8c1 2.7 3.4 4 7 4a8 8 0 0 0 6.7-3q2.3-3 2.8-9.6q-4.5 5.3-12.4 5.3q-8.1 0-13.1-4.8t-5.2-12.9a17.9 17.9 0 0 1 5.8-13.8q5.7-5.2 15-5.2t15.5 5.8Zm-15 21.3a8.2 8.2 0 0 0 6-2.3a9 9 0 0 0 2.6-6.2a8.6 8.6 0 0 0-2.1-5.4a8.3 8.3 0 0 0-6.6-2.8a8 8 0 0 0-6.2 2.3a8.4 8.4 0 0 0-2.2 6a8.1 8.1 0 0 0 2.4 6.1a8.4 8.4 0 0 0 6.2 2.3Zm49.2 10h-20.5v-9.9h20.5Zm31.2 15.1h-13.5v-32h-12.6v-9h2.1q5.6 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.2-.5h11Zm52.5 0h-40.6a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l7.9-5.6a16.4 16.4 0 0 0 4.3-4a7.5 7.5 0 0 0 1.2-4.3a6.4 6.4 0 0 0-1.8-4.9a7.1 7.1 0 0 0-5.1-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4c3.6 3 5.4 7 5.4 12.2a16.1 16.1 0 0 1-2.6 9a26.7 26.7 0 0 1-8.2 7.5l-8.8 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Z"
                                        />
                                    </svg>
                                </span>
                                <span className="inline-block">Morning</span>
                                <span className="inline-block">
                                    06:00 - 11:59
                                </span>
                            </button>
                            <button
                                className={`border-2
                            rounded-md py-2 px-6 flex flex-col justify-center
                            items-center text-base font-medium  ${
                                deparature.includes("noon")
                                    ? "bg-green-400 text-green-800 border-green-600 hover:bg-green-500"
                                    : "border-slate-600 hover:bg-slate-200  hover:text-slate-700"
                            }`}
                                onClick={() => handleDepartureTime("noon")}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="meteoconsTimeAfternoonFill0"
                                                x1="115"
                                                x2="179.4"
                                                y1="91.4"
                                                y2="203"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#fbbf24"
                                                />
                                                <stop
                                                    offset=".5"
                                                    stop-color="#fbbf24"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#f59e0b"
                                                />
                                            </linearGradient>
                                            <symbol
                                                id="meteoconsTimeAfternoonFill1"
                                                viewBox="0 0 294.4 294.4"
                                            >
                                                <circle
                                                    cx="147.2"
                                                    cy="147.2"
                                                    r="64.4"
                                                    fill="url(#meteoconsTimeAfternoonFill0)"
                                                    stroke="#f8af18"
                                                    stroke-miterlimit="10"
                                                    stroke-width="4.6"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="#fbbf24"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="18.4"
                                                    d="M147.2 47.3V9.2m0 276v-38m70.7-170.7l26.9-26.9M49.6 244.8l27-27m0-141.3l-27-26.9m195.2 195.2l-27-27M47.4 147.3H9.2m276 0h-38"
                                                >
                                                    <animateTransform
                                                        additive="sum"
                                                        attributeName="transform"
                                                        dur="6s"
                                                        repeatCount="indefinite"
                                                        type="rotate"
                                                        values="0 147.2 147.2; 45 147.2 147.2"
                                                    />
                                                </path>
                                            </symbol>
                                        </defs>
                                        <path
                                            fill="#374251"
                                            d="M185.3 438.4h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm52.5 0H197a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l8-5.6a16.3 16.3 0 0 0 4.2-4a7.5 7.5 0 0 0 1.3-4.3a6.3 6.3 0 0 0-1.9-4.9a7.1 7.1 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.1-13.8t14.7-5q9.1 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.5 9a26.7 26.7 0 0 1-8.2 7.6l-8.8 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Zm28.5-15.1h-20.6v-9.9h20.6Zm31.1 15.1H284v-32h-12.7v-9h2.2q5.5 0 8.7-2.4c2-1.5 3.4-4 4-7.3l.2-.5h11Zm32.1 1.3q-8.8 0-14.4-4a16.2 16.2 0 0 1-6.6-11.5l12.8-1a7.2 7.2 0 0 0 2.8 4.5a8.8 8.8 0 0 0 5.3 1.5a8.5 8.5 0 0 0 6.2-2.2a8.4 8.4 0 0 0 0-11.5a8.5 8.5 0 0 0-6.2-2.2a9.2 9.2 0 0 0-7.1 3l-12.1-1l4.7-28.1H347v10.7h-22.5l-1.7 8.8l.2.1a17.1 17.1 0 0 1 10.4-3q7.8 0 12.5 4.6t4.7 12.5q0 8.6-5.7 13.7t-15.5 5Z"
                                        />
                                        <use
                                            width="294.4"
                                            height="294.4"
                                            href="#meteoconsTimeAfternoonFill1"
                                            transform="translate(108.68 70.93)"
                                        />
                                    </svg>
                                </span>
                                <span className="inline-block">After Noon</span>
                                <span className="inline-block">
                                    12:00 - 17:59
                                </span>
                            </button>
                            <button
                                className={`border-2
                            rounded-md py-2 px-6 flex flex-col justify-center
                            items-center text-base font-medium  ${
                                deparature.includes("evening")
                                    ? "bg-green-400 text-green-800 border-green-600 hover:bg-green-500"
                                    : "border-slate-600 hover:bg-slate-200  hover:text-slate-700"
                            }`}
                                onClick={() => handleDepartureTime("evening")}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 512 512"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="meteoconsTimeLateEveningFill0"
                                                x1="54"
                                                x2="125.8"
                                                y1="16.9"
                                                y2="141.3"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#f3f7fe"
                                                />
                                                <stop
                                                    offset=".5"
                                                    stop-color="#f3f7fe"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#deeafb"
                                                />
                                            </linearGradient>
                                            <linearGradient
                                                id="meteoconsTimeLateEveningFill1"
                                                x1="38.8"
                                                x2="133.4"
                                                y1="20.8"
                                                y2="184.6"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stop-color="#86c3db"
                                                />
                                                <stop
                                                    offset=".5"
                                                    stop-color="#86c3db"
                                                />
                                                <stop
                                                    offset="1"
                                                    stop-color="#5eafcf"
                                                />
                                            </linearGradient>
                                            <symbol
                                                id="meteoconsTimeLateEveningFill2"
                                                viewBox="0 0 192.5 192.5"
                                            >
                                                <path
                                                    fill="url(#meteoconsTimeLateEveningFill1)"
                                                    stroke="#72b9d5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="4.5"
                                                    d="M179.7 120.2a95 95 0 0 1-95.5-94.3a93.2 93.2 0 0 1 3.1-23.7A94.8 94.8 0 0 0 2.3 96a95 95 0 0 0 95.5 94.3c44.5 0 81.8-30 92.4-70.6a98.4 98.4 0 0 1-10.5.6Z"
                                                />
                                            </symbol>
                                            <symbol
                                                id="meteoconsTimeLateEveningFill3"
                                                viewBox="0 0 189.5 120.5"
                                            >
                                                <path
                                                    fill="url(#meteoconsTimeLateEveningFill0)"
                                                    stroke="#e6effc"
                                                    stroke-miterlimit="10"
                                                    stroke-width="4"
                                                    d="m157.3 58l-1.4.1a45.8 45.8 0 0 0 1.4-10.8a45.3 45.3 0 0 0-83.8-23.8a30.1 30.1 0 0 0-45.6 26a30.5 30.5 0 0 0 .4 4.9a32.3 32.3 0 0 0 6 64h123a30.2 30.2 0 0 0 0-60.3Z"
                                                />
                                            </symbol>
                                        </defs>
                                        <path
                                            fill="#374251"
                                            d="M220.2 438.4h-40.6a20.8 20.8 0 0 1 3-11.5q3-4.4 10.8-9.8l7.9-5.6a16.3 16.3 0 0 0 4.3-4a7.5 7.5 0 0 0 1.2-4.3a6.3 6.3 0 0 0-1.9-4.9a7.1 7.1 0 0 0-5-1.7q-7.4 0-7.4 8.5v1.1h-12.2v-1.6q0-8.8 5.2-13.8t14.7-5q9 0 14.4 4.4t5.4 12.2a16 16 0 0 1-2.5 9a26.7 26.7 0 0 1-8.2 7.5l-8.9 5.6c-1.7 1-2.6 2-2.7 2.8h22.5Zm33.6 0h-13.5v-32h-12.7v-9h2.2q5.5 0 8.8-2.4c2-1.5 3.3-4 4-7.3l.1-.5h11.1Zm30-15.1h-20.5v-9.9h20.5Zm44.6 9q-6 7.2-16.2 7.2t-16.3-7.2q-6-7.3-6-19.7t6-19.4q5.9-7.2 16.3-7.2q10.2 0 16.2 7.2t6 19.4q0 12.4-6 19.7Zm-16.2-3.2q9.3 0 9.3-16.4t-9.3-16.3q-9.5 0-9.5 16.3t9.5 16.4Z"
                                        />
                                        <use
                                            width="192.5"
                                            height="192.5"
                                            href="#meteoconsTimeLateEveningFill2"
                                            transform="translate(159.76 139.76)"
                                        >
                                            <animateTransform
                                                additive="sum"
                                                attributeName="transform"
                                                dur="6s"
                                                repeatCount="indefinite"
                                                type="rotate"
                                                values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"
                                            />
                                        </use>
                                        <use
                                            width="189.5"
                                            height="120.5"
                                            href="#meteoconsTimeLateEveningFill3"
                                            transform="translate(214.32 236.93)"
                                        >
                                            <animateTransform
                                                additive="sum"
                                                attributeName="transform"
                                                dur="6s"
                                                repeatCount="indefinite"
                                                type="translate"
                                                values="-6 0; 6 0; -6 0"
                                            />
                                        </use>
                                    </svg>
                                </span>
                                <span className="inline-block">Evening</span>
                                <span className="inline-block">
                                    18:00 - 23:59
                                </span>
                            </button>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div id="airlines">
                        <p className="text-lg my-3 font-bold text-slate-600">
                            Airlines
                        </p>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Air Astra
                            </label>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div id="refund">
                        <p className="text-lg my-3 font-bold text-slate-600">
                            Refundability
                        </p>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Non Refundable
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Partially Refundable
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Rules Wise
                            </label>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div id="airlines">
                        <p className="text-lg my-3 font-bold text-slate-600">
                            Layover City
                        </p>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Dhaka
                            </label>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div id="airlines">
                        <p className="text-lg my-3 font-bold text-slate-600">
                            Number of Stops
                        </p>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Direct Flight
                            </label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                Upto 1
                            </label>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div id="airlines">
                        <p className="text-lg my-3 font-bold text-slate-600">
                            Baggage Policy
                        </p>
                        <div class="flex items-center mb-4">
                            <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-checkbox"
                                class="ms-2 text-sm font-medium text-slate-700"
                            >
                                20 KG
                            </label>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div id="flightDetails">
                        <div id="flightName">
                            <p className="text-3xl font-bold text-center mt-6 text-slate-500">
                                Flights from Dhaka to Chittagong
                            </p>
                        </div>
                        <div id="duration" className="flex justify-center mt-6">
                            <button
                                className={`btn-primary w-[215px] rounded-md hover:text-green-100 ${
                                    active == "earliest"
                                        ? "text-white bg-green-400"
                                        : "bg-white text-slate-700"
                                }`}
                                onClick={() => setActive("earliest")}
                            >
                                Earliest
                            </button>
                            <button
                                className={`btn-primary w-[215px] rounded-md hover:text-green-100 ${
                                    active == "cheapest"
                                        ? "text-white bg-green-400"
                                        : "bg-white text-slate-700"
                                }`}
                                onClick={() => setActive("cheapest")}
                            >
                                Cheapest
                            </button>
                            <button
                                className={`btn-primary w-[215px] rounded-md hover:text-green-100 ${
                                    active == "shortest"
                                        ? "text-white bg-green-400"
                                        : "bg-white text-slate-700"
                                }`}
                                onClick={() => setActive("shortest")}
                            >
                                Shortest
                            </button>
                        </div>
                    </div>
                    <div
                        id="flights"
                        className="flex justify-center items-center mt-8"
                    >
                        <FlightDetailsCard />
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
