import Image from "next/image";
import Link from "next/link"; // Optional: if you plan to link these items

export default function Footer() {
    return (
        <footer className="w-full bg-[#10223F] pt-20 pb-10 flex justify-center items-center">
            <div className="w-[90%] max-w-6xl flex flex-col">

                {/* --- Top Links Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Logo Space */}
                    <div className="flex flex-col items-start">
                        {/* Replace this src with your actual logo path */}
                        <Image
                            src="/Logos/MainLogo.png"
                            alt="Company Logo"
                            width={160}
                            height={60}
                            className="object-contain rounded-md"
                        />
                        {/* If you don't have the image ready yet, you can uncomment this text placeholder instead: */}
                        {/* <h2 className="text-white text-3xl font-bold tracking-wider">LogoHere.</h2> */}
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-lg font-bold mb-6">Navigation</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Home</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">About Us</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Services</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Contact Us</li>
                        </ul>
                    </div>

                    {/* Column 3: Social */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-lg font-bold mb-6">Social</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Twitter</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Facebook</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Instagram</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">LinkedIn</li>
                        </ul>
                    </div>

                    {/* Column 4: Work Process */}
                    <div className="flex flex-col">
                        <h4 className="text-white text-lg font-bold mb-6">Work Process</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Choose The Service You Need</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">See list of Professional Assistants</li>
                            <li className="hover:text-white transition-colors cursor-pointer w-fit">Choose Your Package</li>
                        </ul>
                    </div>

                </div>

                {/* --- Divider --- */}
                <hr className="w-full border-[#1E376D] mt-16 mb-8" />

                {/* --- Bottom Copyright --- */}
                <div className="flex justify-start">
                    <p className="text-gray-300 text-sm">
                        Copyright © 2022 Virtuelly
                    </p>
                </div>

            </div>
        </footer>
    );
}