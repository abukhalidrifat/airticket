import React from "react";

export default function TravelerDetails() {
    return (
        <>
            <section className="bg-white border shadow-md rounded-md p-4 w-full">
                <div id="top" className="flex items-baseline gap-x-11">
                    <p className="text-2xl text-slate-700 font-medium">
                        Traveller 1
                    </p>
                    <p className="text-base text-slate-500 font-medium">
                        Adult
                    </p>
                    <p className="text-lg text-slate-700 font-medium">
                        Primary Contact
                    </p>
                </div>
                <hr className="my-4" />
                <div id="bottom">
                    <div className="warnings">
                        <p className="text-2xl text-slate-700 font-medium">
                            Personal Details (Adults)
                        </p>
                        <p className="my-4 text-xs text-slate-400 font-medium inline-flex gap-x-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    fill="currentColor"
                                    d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90Zm-6-82V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0Zm16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"
                                />
                            </svg>
                            <span>
                                As mentioned on your passport or government
                                approved IDs{" "}
                            </span>
                        </p>
                    </div>
                    <div id="form">
                        <form>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label
                                        for="first_name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        First name*
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="last_name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Last name*
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="company"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        type="date"
                                        id="company"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="phone"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Passport Number (optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                        placeholder="123-45-678"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="company"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Passport Expiry Date (optional)
                                    </label>
                                    <input
                                        type="date"
                                        id="company"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="city"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                        placeholder="City"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="countries"
                                        class="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Select an option
                                    </label>
                                    <select
                                        id="countries"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    >
                                        <option selected>
                                            Choose a country
                                        </option>
                                        <option value="US">
                                            United States
                                        </option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div id="contactDetails">
                                <p className="text-2xl text-slate-700 font-medium">
                                    Contact Details
                                </p>
                                <p className="my-4 text-xs text-slate-400 font-medium inline-flex gap-x-2 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90Zm-6-82V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0Zm16 36a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"
                                        />
                                    </svg>
                                    <span>
                                        Receive booking confirmation & updates
                                    </span>
                                </p>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div className="mb-6">
                                        <label
                                            for="email"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                            placeholder="john.doe@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            for="number"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Conntact Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="contactNumber"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
                                            placeholder="0123-3856-166"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="btn-primary w-full">
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
