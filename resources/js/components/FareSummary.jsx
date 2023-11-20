import React from "react";

export default function FareSummary() {
    return (
        <section className="border bg-white mt-8 rounded-md shadow-md w-full overflow-hidden">
            <div className="p-4">
                <div id="top" className="flex gap-2 items-center">
                    <img
                        src="/asssets/bimanbd.png"
                        alt="logo"
                        className="w-11"
                    />
                    <p className="text-base font-medium text-slate-700">
                        Bangladesh Biman Airlines
                    </p>
                </div>
                <hr className="my-4" />
                <div id="middle">
                    <p className="text-base font-medium text-slate-700 mb-4">
                        Fare Summary
                    </p>
                    <p className="text-base font-normal text-slate-700 mb-4">
                        Adult (1 Traveller)
                    </p>
                    <div
                        id="baseFareDetails"
                        className="flex justify-between items-center"
                    >
                        <p className="text-sm font-medium text-slate-500 mb-4">
                            Base Fair
                        </p>
                        <p className="text-base font-medium text-slate-500 mb-4 flex flex-col">
                            <span>
                                BDT{" "}
                                <span className="text-xl text-slate-700">
                                    2207
                                </span>
                            </span>
                            <span className="inline-block text-slate-500 text-xs font-medium text-right">
                                (1 x 2207)
                            </span>
                        </p>
                    </div>
                    <div
                        id="taxDetails"
                        className="flex justify-between items-center"
                    >
                        <p className="text-sm font-medium text-slate-500 mb-4">
                            Taxes + Fees
                        </p>
                        <p className="text-base font-medium text-slate-500 mb-4 flex flex-col">
                            <span>
                                BDT{" "}
                                <span className="text-xl text-slate-700">
                                    986
                                </span>
                            </span>
                            <span className="inline-block text-slate-500 text-xs font-medium text-right">
                                (1 x 986)
                            </span>
                        </p>
                    </div>
                    <hr className="my-2" />
                    <div
                        id="subTotal"
                        className="flex justify-between items-center"
                    >
                        <p className="text-sm font-medium text-slate-500 mb-4">
                            Sub-total
                        </p>
                        <p className="text-base font-medium text-slate-500 mb-4 flex flex-col">
                            <span>
                                BDT{" "}
                                <span className="text-xl text-slate-700">
                                    3193
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
                <div id="end" className="bg-green-300 text-slate-700 p-4 flex justify-between items-center">
                <p className="text-base font-medium text-slate-800">
                            You Pay (For 1 traveeler)
                        </p>
                <p className="text-base font-medium text-slate-800">
                            BDT 3193
                        </p>
                </div>
        </section>
    );
}
