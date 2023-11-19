import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Header() {
    return (
        <div className="bg-white shadow-md fixed z-50 w-full">
            <div className="flex justify-between py-2 mycontainer">
                <p className="mt-3">Logo</p>
                <ul className="mt-3 flex gap-x-7 font-medium text-gray-500">
                    <li>
                        <Link href="/">Flight</Link>
                    </li>
                    <li>About</li>
                    <li>FAQ</li>
                </ul>
                <button className="mt-2 btn-primary">Login</button>
            </div>
        </div>
    );
}

export default Header;
