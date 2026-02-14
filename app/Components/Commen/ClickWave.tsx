"use client";
import { useEffect } from "react";

export default function ClickWave() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const wave = document.createElement("div");
            wave.classList.add("click-wave");

            // Position the wave center at the click coordinates
            const size = 100; // Initial size
            wave.style.width = `${size}px`;
            wave.style.height = `${size}px`;
            wave.style.left = `${e.clientX - size / 2}px`;
            wave.style.top = `${e.clientY - size / 2}px`;

            document.body.appendChild(wave);

            // Animate and remove
            const animation = wave.animate(
                [
                    { transform: "scale(0)", opacity: 0.8 },
                    { transform: "scale(4)", opacity: 0 }
                ],
                {
                    duration: 600,
                    easing: "ease-out"
                }
            );

            animation.onfinish = () => {
                wave.remove();
            };
        };

        window.addEventListener("click", handleClick);

        // Inject styles explicitly if not using global CSS class
        const style = document.createElement("style");
        style.innerHTML = `
      .click-wave {
        position: fixed;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(30, 55, 109, 0.3) 0%, rgba(30, 55, 109, 0) 70%);
        pointer-events: none;
        z-index: 9999;
      }
    `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener("click", handleClick);
            style.remove();
        };
    }, []);

    return null;
}
