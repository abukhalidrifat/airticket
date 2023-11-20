import React from "react";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import BookingDetailsCard from "../components/BookingDetailsCard";
import TravelerDetails from "../components/TravelerDetails";
import TimeOut from "../components/TimeOut";
import FareSummary from "../components/FareSummary";

export default function ReviewFlight() {
    return (
        <>
            <section>
                <Header />
                <br />
                <br />
                <br />
                <br />
                <div className="mycontainer flex gap-8">
                    <div id="left" className="w-2/3">
                        <div id="topPart" className="flex justify-between mb-4">
                            <div
                                id="booking"
                                className="text-green-400 text-2xl font-semibold"
                            >
                                Review Your Booking
                            </div>
                            <div id="breadcrumb">
                                <Breadcrumb />
                            </div>
                        </div>
                        <div id="flightDetails" className="mt-12">
                            <BookingDetailsCard />
                        </div>
                        <div
                            id="booking"
                            className="text-green-400 text-2xl font-semibold my-8"
                        >
                            Enter Traveler Details
                        </div>
                        <div id="travellerDetails">
                            <TravelerDetails/>
                        </div>
                    </div>
                    <div id="right" className="w-1/3 mt-16">
                        <div id="timeout"  className="mt-4 border bg-white p-4 rounded-md shadow-md w-full">
                            <TimeOut/>
                        </div>
                            <FareSummary/>
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
        </>
    );
}
