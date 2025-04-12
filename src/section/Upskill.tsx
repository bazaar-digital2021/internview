'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Video, Users, BookOpen, Award, Clock, BadgeCheck, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Upskill = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const features = [
        {
            id: 1,
            title: "Recorded Sessions",
            icon: <Video className="w-10 h-10 text-white" />,
            description: "Access high-quality pre-recorded content anytime, anywhere to learn at your own pace.",
            color: "#1b335f",
            benefits: [
                "Learn at your own pace",
                "24/7 access to content",
                "Lifetime access to materials",
                "Comprehensive curriculum"
            ],
            placeholder: "/recorded.jpg"
        },
        {
            id: 2,
            title: "Live Sessions",
            icon: <Users className="w-10 h-10 text-white" />,
            description: "Join interactive, expert-led live sessions with real-time feedback and personalized guidance.",
            color: "#3660a3",
            benefits: [
                "Real-time interaction with mentors",
                "Q&A opportunities",
                "Collaborative learning",
                "Personalized feedback"
            ],
            placeholder: "/live.jpg"
        }
    ];

    return (
        <section ref={ref} className="py-24 bg-gradient-to-b from-[#f8faff] to-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-3"
                    >
                        <span className="inline-block py-1 px-4 bg-[#1b335f]/10 text-[#1b335f] font-medium rounded-full text-sm mb-2">
                            TRAINING PROGRAMS
                        </span>
                    </motion.div>

                    <h2 className="text-5xl font-bold bg-gradient-to-r from-[#1b335f] to-[#3660a3] bg-clip-text text-transparent mb-4">
                        Upskill Training with Certification
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the learning format that works best for you and advance your career with industry-recognized certifications.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full border border-gray-100"
                        >
                            {/* Title Bar */}
                            <div
                                className="p-6 relative"
                                style={{ backgroundColor: feature.color }}
                            >
                                <h3 className="text-3xl font-bold text-white mb-1 flex items-center gap-3">
                                    {feature.icon}
                                    {feature.title}
                                </h3>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 opacity-20">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="white" />
                                    </svg>
                                </div>

                                <div className="absolute -bottom-4 -right-4 opacity-10">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="50" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <Clock className="w-12 h-12 text-gray-400" />
                                    <Image src={feature.placeholder} alt='live' fill className='object-cover' />
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                                    {feature.id === 1 ?
                                        <span className="flex items-center gap-2 font-medium text-[#1b335f]">
                                            <PlayCircle className="w-5 h-5" /> Recorded Session
                                        </span> :
                                        <span className="flex items-center gap-2 font-medium text-[#3660a3]">
                                            <Users className="w-5 h-5" /> Live Session
                                        </span>
                                    }
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <p className="text-gray-600 mb-6">{feature.description}</p>

                                <div className="mb-8 flex-grow">
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                    <ul className="space-y-2">
                                        {feature.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <BadgeCheck className="w-5 h-5 text-green-500 mt-0.5" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-[#3660a3]" />
                                        <span className="text-gray-700 font-medium">Certification Included</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-[#3660a3]" />
                                        <span className="text-gray-700">Comprehensive Materials</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="px-6 pb-6">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        className="w-full py-6 font-medium text-base shadow-md"
                                        style={{
                                            background: `linear-gradient(90deg, ${feature.color} 0%, ${feature.id === 1 ? '#2d4a7a' : '#4b7abf'} 100%)`,
                                            color: 'white'
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Upskill; 