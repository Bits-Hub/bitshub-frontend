import Link from "next/link";

export default function TopBar() {
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
                    <a
                        href="/login?redirect=/dashboard"
                        rel="noopener noreferrer external"
                        className="text-sm hover:text-primary transition"
                    >
                        Become a vendor
                    </a>
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
