import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import FlightCards from "@/components/FlightCards";
import FlightRoutes from "@/components/FlightRoutes";
import SearchTop from "@/components/SearchTop";
import Footer from "@/components/Footer";

export default function Airline({ airline }) {
    const accordianData = [
        {
            item: 1,
            qs: "Is it accesible?",
            ans: "Yes,It is.",
        },
        {
            item: 2,
            qs: "Is it accesible?",
            ans: "Yes,It is.",
        },
    ];

    function capitalizeFirstLetter(sentense) {
        const words = sentense.split("-");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }
    return (
        <>
            <Header />
            <Hero airlineName={capitalizeFirstLetter(airline)} bgColor={'bg-gray-100'}/>
            <section className="pb-8">
                <div className="mycontainer">
                    <p className="pb-12 text-4xl font-bold text-center text-slate-800">
                        About Biman Bangladesh Airlines
                    </p>
                    <p className="py-4 subtitle">
                        Biman Bangladesh Airlines, popularly known as the Biman,
                        is Bangladesh’s national carrier. Bearing the IATA code
                        BG and callsign Bangladesh, Biman successfully operates
                        across national and international routes with the
                        largest Aircraft Fleet in Bangladesh
                    </p>
                    <p className="pt-8 title">
                        Biman Bangladesh Airline Online Booking is Available on
                        ShareTrip
                    </p>
                    <p className="subtitle">
                        ShareTrip ensures a hassle-free, easy and reliable Biman
                        Bangladesh Airlines booking. Get flight tickets to and
                        from domestic or international destinations on Biman
                        Bangladesh on ShareTrip, where you can ensure your
                        tickets online in a few steps. Check the ShareTrip
                        website or App, choose your desired Biman Bangladesh
                        flight, and even get a special discount. Learn more
                        about Bangladesh Biman flight schedule and prices on
                        ShareTrip.
                    </p>
                    <p className="py-8 subtitle">
                        Get the cheapest Bangladesh Biman ticket on ShareTrip.
                        Latest Biman Bangladesh Airlines flight schedule is
                        available at affordable rates only on ShareTrip, which
                        provides a convenient platform to book your trip easily.
                        At ShareTrip, we constantly update the comprehensive
                        flight schedule to ensure the most up-to-date timings of
                        flights operating on domestic and international routes
                        by Biman. Easily compare flight times, price, arrivals,
                        and destinations of your choice. Get Biman Bangladesh
                        Airlines tickets through ShareTrip and find amazing
                        deals and special discounts. Book flight tickets online,
                        get the best rates and enjoy cheaper Fly Biman airfare
                        whenever you travel.
                    </p>
                    <p className="pt-4 title">
                        Biman Bangladesh Airlines Top Domestic Routes
                    </p>
                    <p className="pb-6 subtitle">
                        Popular domestic destinations for Biman Bangladesh
                        Airlines are: <br /> Dhaka to Chittagong, Chittagong to
                        Dhaka, Dhaka to Sylhet, Sylhet to Dhaka, Dhaka to Cox’s
                        Bazar, Cox’s Bazar to Dhaka, Dhaka to Saidpur, Saidpur
                        to Dhaka, Dhaka to Jashore, Jashore to Dhaka, Dhaka to
                        Barisal, Barisal to Dhaka, Dhaka to Rajshahi, Rajshahi
                        to Dhaka and so on.
                    </p>
                    <p className="pt-4 title">
                        Biman Bangladesh Airlines Top International Routes
                    </p>
                    <p className="subtitle">
                        Popular international destinations for Biman Bangladesh
                        Airlines are:
                        <br /> Dhaka to Riyadh & Riyadh to Dhaka, Dhaka to
                        Madinah & Madinah to Dhaka, Dhaka to Dammam & Dammam to
                        Dhaka, Dhaka To Jeddah & Jeddah to Dhaka, Dhaka to Dubai
                        & Dubai to Dhaka, Dhaka to Abu Dhabi & Abu Dhabi to
                        Dhaka, Dhaka to London & London to Dhaka, Dhaka to Delhi
                        & Delhi to Dhaka, Dhaka to Kolkata & Kolkata to Dhaka,
                        Dhaka to Kualalumpur & Kualalumpur to Dhaka and so on.
                    </p>
                </div>
            </section>
            <section className="mt-20 bg-white w-full py-16">
                <p className="title text-4xl text-center">
                    Frequently Asked Questions
                </p>
                <p className="subtitle w-1/2 text-center m-auto py-2">
                    ShareTrip Flights offers a variety of options at the
                    cheapest prices on domestic & international routes. Choose
                    the best from the top airlines on sharetrip.net
                </p>

                <div className="my-8 w-2/3 m-auto border-t border-x rounded-t-lg overflow-hidden">
                    <Accordion type="multiple" collapsible>
                        {accordianData.map((data) => (
                            <AccordionItem
                                value={`item-${data.item}`}
                                className="hover:bg-slate-50 p-2"
                            >
                                <AccordionTrigger>{data.qs}</AccordionTrigger>
                                <AccordionContent>{data.ans}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            <section>
                <FlightRoutes />
            </section>
            <section>
                <SearchTop bgColor={'bg-white'}/>
            </section>
            <Footer/>
        </>
    );
}
