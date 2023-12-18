import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ExclusiveOffers from "../components/ExclusiveOffers";
import ExploreBD from "../components/ExploreBD";
import SearchTop from "../components/SearchTop";
import PopularDestination from "../components/PopularDestination";
import TourPackage from "../components/TourPackage";
import FlightRoutes from "../components/FlightRoutes";
import Footer from "../components/Footer";
import SwiperDemo from "@/components/SwiperDemo";

export default function Hello({ response }) {

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <Hero />
            <ExclusiveOffers />
            <SwiperDemo/>
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <ExploreBD />
            <SearchTop />
            <PopularDestination />
            <TourPackage />
            <FlightRoutes />
            <Footer /> */}
        </>
    );
}
