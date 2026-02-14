"use client";
import { useEffect, useRef } from "react";

export default function MouseTracker() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (blobRef.current) {
                blobRef.current.animate(
                    {
                        transform: `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`,
                    },
                    { duration: 800, fill: "forwards", easing: "ease-out" }
                );
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={blobRef}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full bg-[#1E376D]/20 blur-xl"
            style={{
                width: "60px",
                height: "60px",
                boxShadow: "0 0 30px 10px rgba(30, 55, 109, 0.2)",
            }}
        />
    );
}
