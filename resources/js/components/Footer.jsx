import { Link } from "@inertiajs/react";
import React from "react";

function Footer() {
    const explore = [
        { href: "/aboutus", title: "About us" },
        { href: "/aboutus", title: "About us" },
        { href: "/aboutus", title: "About us" },
        { href: "/aboutus", title: "About us" },
        { href: "/aboutus", title: "About us" },
    ];
    return (
        <section className="bg-slate-200 py-20">
            <div className="mycontainer flex flex-wrap gap-24">
                <div id="explore">
                    <p className="text-lg font-semibold mb-3">Explore</p>
                    <div className="flex flex-col gap-2 w-fit">
                        {explore.map((link) => (
                            <Link
                                href={link.href}
                                className="text-base font-normal text-slate-700 hover:underline"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div id="services">
                    <p className="text-lg font-semibold mb-3">Services</p>
                    <div className="flex flex-col gap-2 w-fit">
                        {explore.map((link) => (
                            <Link
                                href={link.href}
                                className="text-base font-normal text-slate-700 hover:underline"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div id="services">
                    <p className="text-lg font-semibold mb-3">Useful Links</p>
                    <div className="flex flex-col gap-2 w-fit">
                        {explore.map((link) => (
                            <Link
                                href={link.href}
                                className="text-base font-normal text-slate-700 hover:underline"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div id="weaccept">
                    <p className="text-lg font-semibold mb-3">We accpet</p>
                    <div className="flex flex-wrap gap-2 w-fit">
                        {explore.map((link) => (
                            <img
                                src="/asssets/visa.png"
                                alt=""
                                className="w-10 h-10"
                            />
                        ))}
                    </div>
                </div>
                <div id="contactus">
                    <p className="text-lg font-semibold mb-3">Contact Us</p>
                    <div className="flex flex-col gap-2 w-fit">
                        <div id="address" className="flex gap-2">
                            <p className="text-base font-medium text-slate-600">
                                Email:
                            </p>
                            <a
                                href="mailto:hi@gmail.com"
                                className="text-blue-600"
                            >
                                hi@gmail.com
                            </a>
                        </div>
                        <div id="address" className="flex gap-2">
                            <p className="text-base font-medium text-slate-600">
                                Phone:
                            </p>
                            <a
                                href="mailto:hi@gmail.com"
                                className="text-blue-600"
                            >
                                +880126487358
                            </a>
                        </div>
                    </div>
                    <div id="icons" className="mt-4 flex flex-wrap gap-2">
                        <a href="#">
                            <svg
                                className="text-slate-600 hover:text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                className="text-slate-600 hover:text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"
                                />
                            </svg>
                        </a>

                        <a href="#">
                            <svg
                                className="text-slate-600 hover:text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17c.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.06.36-.09.53-.06c.9.27 1.9.4 2.9.4c5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2m6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.33-.97-.17-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.33.97.17.68.63Z"
                                />
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                className="text-slate-600 hover:text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                    <div id="office">
                        <p className="text-lg font-semibold mb-3">
                            Dhaka Office
                        </p>
                        <p className="text-sm font-normal w-[200px]">
                            Rangs Pearl Tower, 4th Floor, House no. 76, Road 12,
                            Block E, Banani, Dhaka 1213, Bangladesh
                        </p>
                        <button className="flex gap-1 mt-6 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm pl-2 pr-3 py-2 mb-2 tracking-wide">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                                />
                            </svg>
                            View Map
                        </button>
                    </div>
                    <div id="office">
                        <p className="text-lg font-semibold mb-3">
                            Dhaka Office
                        </p>
                        <p className="text-sm font-normal w-[200px]">
                            Rangs Pearl Tower, 4th Floor, House no. 76, Road 12,
                            Block E, Banani, Dhaka 1213, Bangladesh
                        </p>
                        <button className="flex gap-1 mt-6 focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm pl-2 pr-3 py-2 mb-2 tracking-wide">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                                />
                            </svg>
                            View Map
                        </button>
                    </div>
            </div>
        </section>
    );
}

export default Footer;
