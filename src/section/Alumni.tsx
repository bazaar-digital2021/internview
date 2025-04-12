'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

const Alumni = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const scrollControl1 = useAnimationControls();
    const scrollControl2 = useAnimationControls();

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

    // Duplicate the logos for seamless scrolling
    const firstRow = [...companyLogos.slice(0, 5)];
    const secondRow = [...companyLogos.slice(5)];

    useEffect(() => {
        if (isInView) {
            // First row animation - scroll right to left
            scrollControl1.start({
                x: [0, -1500],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear"
                    }
                }
            });

            // Second row animation - scroll left to right
            scrollControl2.start({
                x: [-1500, 0],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear"
                    }
                }
            });
        } else {
            scrollControl1.stop();
            scrollControl2.stop();
        }
    }, [isInView, scrollControl1, scrollControl2]);

    // Function to render a logo with fallback
    const renderLogo = (logo: any, index: number, rowId: string) => {
        return (
            <div
                key={`${rowId}-${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 h-16 w-48 relative"
            >
                <div className="w-full h-full flex items-center justify-center rounded bg-white border border-gray-100">
                    {/* Using a div with company name as fallback instead of Image */}
                    <div className="flex items-center justify-center w-full h-full text-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className={`text-${getLogoColor(logo.id)} font-medium text-lg`}>
                                <Image src={logo.placeholder} alt={logo.alt} fill className="object-contain" />

                            </div>
                            {/* <div className="text-xs text-gray-400">Company Logo</div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Function to get a color based on company ID
    const getLogoColor = (id: number) => {
        const colors = ['blue-600', 'indigo-600', 'purple-600', 'red-500', 'orange-500', 'emerald-600', 'cyan-600', 'rose-500', 'amber-600'];
        return colors[(id - 1) % colors.length];
    };

    return (
        <section
            ref={ref}
            className="py-16 bg-gradient-to-r from-primary/60 to-secondary/30 relative overflow-hidden"
        >
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-[#1b335f] mb-3"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Our Alumni work at
                    </motion.h2>
                    <motion.div
                        className="h-1 w-24 md:w-40 bg-gradient-to-r from-[#1b335f] to-[#3660a3] mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 160 } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.div>
            </div>

            {/* Marquee container */}
            <div className="w-full relative">
                {/* First row of logos - scrolling right to left */}
                <div className="relative overflow-hidden w-full mb-12 h-16">
                    <motion.div
                        className="flex items-center absolute"
                        animate={scrollControl1}
                    >
                        {/* Render each logo multiple times for seamless looping */}
                        {[...firstRow, ...firstRow, ...firstRow].map((logo, index) =>
                            renderLogo(logo, index, 'row1')
                        )}
                    </motion.div>
                </div>

                {/* Second row of logos - scrolling left to right */}
                <div className="relative overflow-hidden w-full h-16">
                    <motion.div
                        className="flex items-center absolute"
                        animate={scrollControl2}
                    >
                        {/* Render each logo multiple times for seamless looping */}
                        {[...secondRow, ...secondRow, ...secondRow].map((logo, index) =>
                            renderLogo(logo, index, 'row2')
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Gradient overlays for smooth fading effect on edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </section>
    );
};

export default Alumni; 