import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ExclusiveOffers from "../components/ExclusiveOffers";
import ExploreBD from "../components/ExploreBD";
import SearchTop from "../components/SearchTop";
import PopularDestination from "../components/PopularDestination";
import TourPackage from "../components/TourPackage";
import FlightRoutes from "../components/FlightRoutes";
import Footer from "../components/Footer";

export default function Hello() {
    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <Hero/>
            <ExclusiveOffers/>
            <ExploreBD/>
            <SearchTop/>
            <PopularDestination/>
            <TourPackage/>
            <FlightRoutes/>
            <Footer/>
        </>
    );
}
