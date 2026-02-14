import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";

export default function Menu() {
    return (
        <div className="flex justify-between items-center h-16">

            {/* --- ANIMATED LOGO CONTAINER --- */}
            <Link href="/" className="group relative bg-[#1E376D] p-3 rounded-br-xl rounded-tr-xl cursor-pointer transition-all duration-500 ease-out hover:bg-[#152c5b] hover:shadow-lg hover:-translate-y-1 block">
                {/* Subtle inner glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <Image
                    src="/Logos/MainLogo.png"
                    alt="Menu Logo"
                    width={50}
                    height={50}
                    className="rounded-md relative z-10 transition-transform duration-500 ease-out group-hover:scale-110"
                />
            </Link>

            {/* --- NAVIGATION --- */}
            <nav className="flex gap-5 h-full items-center">
                {/* Added hover text colors for the nav links to match the professional feel */}
                <Link href="/" className="hover:text-[#1E376D] transition-colors font-medium">Home</Link>
                <Link href="/about" className="hover:text-[#1E376D] transition-colors font-medium">About Us</Link>
                <Link href="/services" className="hover:text-[#1E376D] transition-colors font-medium">Services</Link>
                <Link href="/contact" className="hover:text-[#1E376D] transition-colors font-medium">Contact Us</Link>
                <Link href="/blog" className="hover:text-[#1E376D] transition-colors font-medium">Blog</Link>

                {/* Call Button */}
                <div className="bg-[#1E376D] h-full flex items-center px-5 text-white transition-colors duration-300 hover:bg-[#152c5b] cursor-pointer">
                    <a href="tel:+919876543210" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <FiPhone size={20} className="animate-pulse" /> {/* Added a subtle pulse to the phone icon to draw attention to the CTA */}
                        Call Us +91 9876543210
                    </a>
                </div>
            </nav>

        </div>
    );
}