import React from "react";

export default function Breadcrumb() {
    return (
        <>
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a
                            href="#"
                            class="inline-flex items-center text-base font-medium text-slate-500 hover:text-green-600"
                        >
                            Flight Section
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg
                                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <a
                                href="#"
                                class="ms-1 text-base font-medium text-green-600 md:ms-2"
                            >
                                Booking
                            </a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center cursor-pointer">
                            <svg
                                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span class="ms-1 text-base font-medium text-slate-500 hover:text-green-500 md:ms-2">
                                Payment
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
        </>
    );
}
