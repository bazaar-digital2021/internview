// WhyChooseUs.js
'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    // Parallax effect on scroll
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const titleVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

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
        <section ref={ref} className="relative w-full overflow-hidden py-24">
            {/* Background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white via-[#f8faff] to-white -z-10"
                style={{ opacity }}
            />

            <motion.div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3660a3]/5 blur-[60px] -z-10"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />

            <motion.div
                className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#1b335f]/5 blur-[60px] -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />

            <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ y: y1 }}
                >
                    <motion.h1
                        className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-[#1b335f] to-[#3660a3] bg-clip-text text-transparent"
                        variants={titleVariants}
                    >
                        Why choose InternView?
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto"
                        variants={titleVariants}
                    >
                        Seize the future: Secure your career with InternView's cutting-edge resources and transformative learning experiences.
                    </motion.p>

                    <div className=''>
                        <div className="flex flex-col md:grid w-full md:grid-cols-2 gap-10 md:max-w-5xl mx-auto">
                            {cardData.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-6 group"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <motion.div
                                        className="relative w-20 h-20 bg-gradient-to-br from-[#1b335f] to-[#3660a3] rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
                                        whileHover={{ rotate: [-2, 4, 0], scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-white opacity-90 group-hover:opacity-80 transition-opacity"
                                        />
                                        <motion.div
                                            initial={{ y: 0 }}
                                            whileHover={{ y: [-2, 1, 0] }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image src={card.icon} alt={card.alt} height={50} width={50} className='object-cover relative z-10' />
                                        </motion.div>

                                        <motion.div
                                            className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-300/20 rounded-full blur-xl"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.2, 0.3, 0.2]
                                            }}
                                            transition={{
                                                duration: 3,
                                                delay: index * 0.5,
                                                repeat: Infinity
                                            }}
                                        />
                                    </motion.div>

                                    <div>
                                        <motion.div
                                            className="text-2xl md:text-3xl font-bold text-[#1b335f] group-hover:text-[#3660a3] transition-colors"
                                            initial={{ opacity: 0.9 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            {card.title}
                                            <motion.div
                                                className="h-1 w-0 bg-gradient-to-r from-[#3660a3] to-[#1b335f] mt-1 rounded-full"
                                                animate={{ width: isInView ? "100%" : "0%" }}
                                                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                className="items-center gap-6 w-full col-span-2 mt-10"
                                variants={itemVariants}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <motion.h1
                                    className='text-4xl text-[#1b335f] font-bold text-center relative'
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <span className="relative">
                                        Internship with Placement Opportunity
                                        <motion.span
                                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#1b335f] to-[#3660a3] rounded-full"
                                            initial={{ width: "0%", left: "50%" }}
                                            animate={{ width: "100%", left: "0%" }}
                                            transition={{ delay: 1.5, duration: 0.8 }}
                                        />
                                    </span>

                                    {/* Decorative elements */}
                                    <motion.div
                                        className="absolute -top-10 -left-10 w-20 h-20 opacity-10"
                                        animate={{ opacity: [0.1, 0.2, 0.1], rotate: [0, 15, 0] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    >
                                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 100C20 55.8172 55.8172 20 100 20C144.183 20 180 55.8172 180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100Z" stroke="#3660a3" strokeWidth="12" />
                                        </svg>
                                    </motion.div>

                                    <motion.div
                                        className="absolute -right-14 bottom-0 w-12 h-12 opacity-10"
                                        animate={{ opacity: [0.1, 0.2, 0.1], rotate: [0, -10, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                                    >
                                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40 100L100 40L160 100L100 160L40 100Z" stroke="#1b335f" strokeWidth="12" />
                                        </svg>
                                    </motion.div>
                                </motion.h1>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Animated accent lines */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3660a3]/20 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
        </section>
    );
};

export default WhyChooseUs;