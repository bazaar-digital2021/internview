'use client';

import React, { useState, useRef, ReactElement } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { courses } from '@/lib/course';
import {
    GraduationCap,
    BookOpen,
    Award,
    Briefcase,
    Clock,
    Star,
    Trophy,
    BadgeCheck,
    FileCheck,
    Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from '@bprogress/next/app';

type CourseTitle = 'Data Science' | 'Web Development' | 'Digital Marketing' | 'Full Stack Development';

const CourseCards = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const router = useRouter();
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
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

    // Map course titles to their appropriate icons
    const courseIcons: Record<CourseTitle, ReactElement> = {
        'Data Science': <Sparkles className="w-8 h-8 text-blue-600" />,
        'Web Development': <BookOpen className="w-8 h-8 text-blue-600" />,
        'Digital Marketing': <Trophy className="w-8 h-8 text-blue-600" />,
        'Full Stack Development': <Sparkles className="w-8 h-8 text-blue-600" />,
    };

    return (
        <section ref={ref} className="py-10 md:py-14 bg-gradient-to-b from-primary/60 to-secondary/30 "
            id='courses'
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <h2 className="text-2xl md:text-5xl font-bold mb-4 font-mono gradient-text">
                        Our Industry Oriented <span className=''>Programs</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Elevate your skills with our industry-recognized courses taught by expert mentors.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="bg-white/70 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Section with Overlay */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={course.imgUrl}
                                    alt={course.title}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1b335f]/80 to-transparent opacity-70"></div> */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                                    {courseIcons[course.title as CourseTitle] || <GraduationCap className="w-6 h-6 text-[#3660a3]" />}
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    <span className="font-bold text-[#1b335f]">{course.rating}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-[#1b335f] mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>

                                {/* Course Details */}
                                <div className="grid grid-cols-2 gap-y-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-[#3660a3]" />
                                        <span className="text-gray-700">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-[#3660a3]" />
                                        <span className="text-gray-700">{course.modules} modules</span>
                                    </div>
                                    <div className="flex items-center gap-2 col-span-2">
                                        <GraduationCap className="w-5 h-5 text-[#3660a3]" />
                                        <span className="text-gray-700">
                                            Mentored by: {course.mentor.join(", ")}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        <motion.span
                                            className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <BadgeCheck className="w-4 h-4" /> Certification
                                        </motion.span>
                                        <motion.span
                                            className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <FileCheck className="w-4 h-4" /> Capstone Projects
                                        </motion.span>
                                        <motion.span
                                            className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Briefcase className="w-4 h-4" /> Placement Assistance
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Apply Button */}
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button className="w-full bg-gradient-to-r from-[#1b335f] to-[#3660a3] hover:from-[#3660a3] hover:to-[#1b335f] text-white font-semibold py-3 rounded-lg transition-all duration-300"
                                        onClick={() => router.push(`${course.href}`)}
                                    >
                                        Apply Now
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

export default CourseCards; 