"use client";

import { RootState } from "@/redux/features/root-reducer";
import Link from "next/link"; 
import { useSelector } from "react-redux";

export default function TopBar() {
    const authState = useSelector((state: RootState) => state.auth);
    //should be authState.active
    return (
        <div className="hidden md:block border-b border-gray-200 lg:mx-32">
            <div className="px-6 container flex justify-between items-center py-3 text-gray-600">
                <a
                    href="mailto:official@bitshub.co"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:text-primary transition"
                >
                    official@bitshub.co
                </a>
                <div className="flex items-center justify-center gap-8">
                    <Link
                        href={authState.id ? "/dashboard" : "/login"}
                        rel="noopener noreferrer external"
                        className="text-sm hover:text-primary transition"
                    >
                        Become a vendor
                    </Link>
                    <Link
                        href="/track-order"
                        className="text-sm hover:text-primary transition"
                    >
                        Track my order
                    </Link>
                    <p className="text-sm hover:text-primary transition">
                        <span className="text-sm pr-1">
                            <i className="fas fa-phone"></i>
                        </span>
                        call: 08103431851
                    </p>
                </div>
            </div>
        </div>
    )
}
