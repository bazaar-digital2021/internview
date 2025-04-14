// WhyChooseUs.js
'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    const cardData = [
        {
            icon: '/icons/graduated.png',
            title: 'LIVE Interactive Session',
            alt: 'graduated',
        },
        {
            icon: '/icons/mentoring.png',
            title: 'Industry ratified certifications',
            alt: 'industry',
        },
        {
            icon: '/icons/placement.png',
            title: 'Expert Industry Mentor',
            alt: 'placement',
        },
        {
            icon: '/icons/career_support.png',
            title: 'Portfolio worthy projects',
            alt: 'certification',
        },
    ];

    return (
        <section ref={ref} className="w-full py-20 bg-gradient-to-b bg-background">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1b335f] mb-4">
                        Why choose <span className='gradient-text'>InternView</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#3660a3] mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Seize the future: Secure your career with InternView's cutting-edge resources and transformative learning experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-5 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-[#f0f4ff] rounded-lg flex items-center justify-center">
                                <Image
                                    src={card.icon}
                                    alt={card.alt}
                                    height={40}
                                    width={40}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1b335f] mb-1">
                                    {card.title}
                                </h3>
                                <div className="w-12 h-0.5 bg-[#3660a3]/50 mb-2"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.div
                        className="inline-block bg-[#f0f4ff] px-8 py-6 rounded-lg border-l-4 border-[#3660a3] shadow-lg relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Animated background pulse effect */}
                        <motion.div
                            className="absolute inset-0 bg-primary/10 rounded-lg"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.7, 0.9, 0.7]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.5,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Sparkle elements */}
                        <div className="absolute -top-1 -right-1">
                            <motion.div
                                className="w-6 h-6 bg-yellow-300 rounded-full"
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                        </div>
                        <div className="absolute bottom-2 -left-1">
                            <motion.div
                                className="w-4 h-4 bg-purple-400 rounded-full"
                                animate={{
                                    scale: [0.7, 1.1, 0.7],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                            />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold gradient-text-2 relative z-10 flex items-center justify-center gap-3">
                            <span className="animate-bounce inline-block">🚀</span>
                            Internship with Placement Opportunity
                            <span className="animate-pulse inline-block">✨</span>
                        </h3>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;