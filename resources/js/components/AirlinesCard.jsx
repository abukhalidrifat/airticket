import { Link } from "@inertiajs/react";
import React from "react";
export default function AirlinesCard() {
    return (
        <Link href={route('airline','biman-bangladesh-airlines')}>
            <div className="flex items-center p-2 w-72 rounded-md cursor-pointer hover:shadow-md hover:bg-white transition-all duration-300">
                <img
                    src="/asssets/bimanbd.png"
                    alt="image"
                    className="w-10 h-10 rounded-full"
                />
                <p className="mx-3 text-base font-semibold text-slate-600">
                    Bangladesh Biman Airlines
                </p>
                <p>
                    <svg
                        className="text-slate-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                    >
                        <path fill="currentColor" d="M10 17V7l5 5l-5 5Z" />
                    </svg>
                </p>
            </div>
        </Link>
    );
}
