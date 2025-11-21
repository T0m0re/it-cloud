import { useEffect, useRef } from "react";

const logos = [
    { src: "/Automation=Default.svg", alt: "Automation" },
    { src: "/Blossom=Default.svg", alt: "Blossom" },
    { src: "/Ebooks=Light.svg", alt: "Ebooks" },
    { src: "/Leafe=Default.svg", alt: "Leafe" },
    { src: "/Minty=Default.svg", alt: "Minty" },
];

export default function LogoTicker() {
    return (
        <section className="py-20 border-y border-border/50 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border/50 border border-border/50 rounded-lg overflow-hidden">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-8 bg-white hover:bg-slate-50 transition-colors group">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
