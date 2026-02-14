"use client"; // <--- Add this at the very top of the file
import React from "react";


export default function Section7() {
    return (
        <section className="w-full bg-[#10223F] py-24 flex justify-center items-center">
            {/* Main Container */}
            <div className="w-[90%] max-w-6xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">

                {/* --- LEFT COLUMN: CONTENT --- */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    {/* Badge */}
                    <div className="bg-[#304B7B] text-white text-xs md:text-sm font-semibold tracking-wider px-6 py-2.5 rounded-full uppercase mb-8 shadow-sm">
                        Custom Project & Consultation
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight md:leading-tight mb-8">
                        Grow Your Business Without Sacrificing Your Time
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Senectus nulla faucibus feugiat mi et mattis risus tortor. Elementum elementum scelerisque ac ac placerat eget ultrices. Sit ac varius commodo egestas.
                    </p>
                </div>

                {/* --- RIGHT COLUMN: FORM --- */}
                <div className="w-full lg:w-1/2">
                    <form
                        className="flex flex-col gap-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {/* 2-Column Grid for Top Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Yours First name"
                                className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"
                            />
                            <input
                                type="text"
                                placeholder="Yours Last name"
                                className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 shadow-sm"
                            />
                        </div>

                        {/* Textarea for Message */}
                        <textarea
                            placeholder="Your Message"
                            rows={6}
                            className="w-full p-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 resize-none shadow-sm"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-2 bg-white text-[#9CA3AF] font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md w-fit hover:bg-gray-100 transition-colors shadow-sm"
                        >
                            Order Now
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
