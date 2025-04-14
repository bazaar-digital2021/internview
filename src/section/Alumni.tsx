'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Alumni = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    // Logo placeholders
    const companyLogos = [
        { id: 1, alt: 'TCS', placeholder: '/companies/1.png' },
        { id: 2, alt: 'Tech Mahindra', placeholder: '/companies/2.png' },
        { id: 3, alt: 'Accenture', placeholder: '/companies/3.png' },
        { id: 4, alt: 'Swiggy', placeholder: '/companies/4.png' },
        { id: 5, alt: 'L&T', placeholder: '/companies/5.png' },
        { id: 6, alt: 'Capgemini', placeholder: '/companies/6.png' },
        { id: 7, alt: 'Google', placeholder: '/companies/7.png' },
        { id: 8, alt: 'Microsoft', placeholder: '/companies/8.png' },
        { id: 9, alt: 'Amazon', placeholder: '/companies/9.png' },
    ];

    // Divide logos into two rows
    const firstRow = [...companyLogos.slice(0, 5)];
    const secondRow = [...companyLogos.slice(5)];

    return (
        <section
            ref={ref}
            className="py-16 bg-gradient-to-r from-white to-white/90 relative overflow-hidden"
        >
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1b335f] mb-3">
                        Our Alumni work at
                    </h2>
                    <div className="h-1 w-24 md:w-40 bg-gradient-to-r from-[#1b335f] to-[#3660a3] mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Simple marquee using CSS instead of JS animations */}
            <div className="w-full relative">
                {/* First row of logos - automatically scrolling right to left */}
                <div className="relative overflow-hidden w-full mb-12">
                    <div className="flex items-center marquee">
                        {/* First set */}
                        <div className="flex items-center gap-8 marquee-content">
                            {firstRow.map((logo) => (
                                <div
                                    key={`row1-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-16 w-48 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center gap-8 marquee-content">
                            {firstRow.map((logo) => (
                                <div
                                    key={`row1-dup-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-16 w-48 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second row of logos - automatically scrolling left to right */}
                <div className="relative overflow-hidden w-full">
                    <div className="flex items-center marquee-reverse">
                        {/* First set */}
                        <div className="flex items-center gap-8 marquee-content">
                            {secondRow.map((logo) => (
                                <div
                                    key={`row2-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-16 w-48 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center m">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center gap-8 marquee-content">
                            {secondRow.map((logo) => (
                                <div
                                    key={`row2-dup-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-16 w-48 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center  ">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple gradient overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

            {/* CSS for the marquee animations */}
            <style jsx global>{`
                .marquee {
                    display: flex;
                    width: 100%;
                    overflow: hidden;
                }
                
                .marquee-content {
                    display: flex;
                    animation: marquee 40s linear infinite;
                }
                
                .marquee-reverse .marquee-content {
                    animation: marquee-reverse 40s linear infinite;
                }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                
                @keyframes marquee-reverse {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
                
                /* Pause on hover for a more subtle interactive effect */
                .marquee:hover .marquee-content,
                .marquee-reverse:hover .marquee-content {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Alumni; 