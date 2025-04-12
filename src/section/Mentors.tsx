'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { LinkedinIcon, GithubIcon, TwitterIcon, BriefcaseIcon, GraduationCapIcon, AwardIcon, StarIcon } from 'lucide-react';

const Mentors = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
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

    // Mentor data
    const mentors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            role: "Senior Data Scientist",
            company: "Tech Innovations Inc.",
            image: "/mentors/mentor1.jpg",
            expertise: ["Machine Learning", "AI Applications", "Python"],
            experience: "12+ years",
            education: "Ph.D. Computer Science, Stanford",
            bio: "Dr. Johnson specializes in advanced machine learning algorithms and their applications in business. She has led AI innovation at several Fortune 500 companies."
        },
        {
            id: 2,
            name: "Alex Rodriguez",
            role: "Lead Full Stack Developer",
            company: "Digital Solutions Group",
            image: "/mentors/mentor2.jpg",
            expertise: ["React", "Node.js", "Cloud Architecture"],
            experience: "8+ years",
            education: "MS in Software Engineering, MIT",
            bio: "Alex has architected enterprise-level applications for global clients. He specializes in scalable cloud solutions and modern JavaScript frameworks."
        },
        {
            id: 3,
            name: "Priya Sharma",
            role: "Digital Marketing Director",
            company: "Global Marketing Partners",
            image: "/mentors/mentor3.jpg",
            expertise: ["Growth Strategy", "SEO/SEM", "Analytics"],
            experience: "10+ years",
            education: "MBA, Harvard Business School",
            bio: "Priya brings extensive experience in digital marketing strategy and analytics. She has successfully led marketing campaigns for several international brands."
        }
    ];

    return (
        <section ref={ref} className="py-24 bg-gradient-to-b from-[#f8faff] to-white">
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
                            LEARN FROM THE BEST
                        </span>
                    </motion.div>

                    <h2 className="text-5xl font-bold bg-gradient-to-r from-[#1b335f] to-[#3660a3] bg-clip-text text-transparent mb-4">
                        Industry Expert Panel
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our mentors bring real-world expertise and industry insights to guide you through your learning journey.
                    </p>
                </motion.div>

                {/* Mentors Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {mentors.map((mentor) => (
                        <motion.div
                            key={mentor.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full border border-gray-100"
                        >
                            {/* Profile Image Section */}
                            <div className="relative h-72 overflow-hidden bg-gradient-to-r from-[#1b335f] to-[#3660a3]">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="w-full h-full flex items-center justify-center">
                                    {/* Placeholder for mentor image - to be replaced manually */}
                                    <div className="w-40 h-40 rounded-full bg-white/30 flex items-center justify-center">
                                        <div className="text-white text-4xl font-bold">
                                            {mentor.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                </div>

                                {/* Name and title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-1">{mentor.name}</h3>
                                    <p className="text-white/90 flex items-center gap-2">
                                        <BriefcaseIcon className="w-4 h-4" />
                                        {mentor.role}
                                    </p>
                                    <p className="text-white/80 text-sm">{mentor.company}</p>
                                </div>

                                {/* Social links */}
                                <div className="absolute top-4 right-4 flex gap-2 z-20">
                                    <motion.a
                                        href="#"
                                        className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <LinkedinIcon className="w-4 h-4 text-white" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <TwitterIcon className="w-4 h-4 text-white" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Mentor Details */}
                            <div className="p-6 flex-grow flex flex-col">
                                {/* Expertise */}
                                <div className="mb-4">
                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Expertise</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.expertise.map((skill, idx) => (
                                            <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <BriefcaseIcon className="w-4 h-4 text-[#3660a3]" />
                                        <span className="text-sm text-gray-700">{mentor.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCapIcon className="w-4 h-4 text-[#3660a3]" />
                                        <span className="text-sm text-gray-700 truncate">{mentor.education.split(',')[0]}</span>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-gray-600 text-sm mb-6 flex-grow">
                                    {mentor.bio}
                                </p>

                                {/* Action Button */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all bg-gradient-to-r from-[#1b335f] to-[#3660a3] text-white"
                                >
                                    Connect with Mentor <StarIcon className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-600 mb-6">
                        Join our program and get personalized mentorship from industry leaders
                    </p>
                    <motion.a
                        href="#"
                        className="inline-block bg-[#1b335f] text-white py-3 px-8 rounded-full font-medium hover:bg-[#3660a3] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View All Mentors
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Mentors; 