'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
    Users, Award, BookOpen, Rocket,
    Target, Heart, Lightbulb, GraduationCap,
    Globe, TrendingUp, CheckCircle2, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Mentors from '@/section/Mentors';

export default function AboutUs() {
    // References for scroll animations
    const missionRef = useRef(null);
    const visionRef = useRef(null);
    const valuesRef = useRef(null);
    const teamRef = useRef(null);
    const journeyRef = useRef(null);

    // Check if sections are in view
    const missionInView = useInView(missionRef, { once: false, amount: 0.3 });
    const visionInView = useInView(visionRef, { once: false, amount: 0.3 });
    const valuesInView = useInView(valuesRef, { once: false, amount: 0.3 });
    const teamInView = useInView(teamRef, { once: false, amount: 0.3 });
    const journeyInView = useInView(journeyRef, { once: false, amount: 0.3 });

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.23, 0.86, 0.39, 0.96]
            }
        })
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const teamMembers = [
        {
            name: "Rahul Sharma",
            role: "Founder & CEO",
            image: "/placeholder-person.jpg",
            bio: "10+ years experience in education technology and career mentorship."
        },
        {
            name: "Priya Patel",
            role: "Head of Curriculum",
            image: "/student-collab.jpg",
            bio: "EdTech specialist with a passion for creating engaging learning experiences."
        },
        {
            name: "Amit Kumar",
            role: "Career Placement Director",
            image: "/placeholder-person.jpg",
            bio: "Helped 200+ students secure internships at leading companies."
        },
        {
            name: "Sneha Reddy",
            role: "Industry Relations Manager",
            image: "/placeholder-person.jpg",
            bio: "Building partnerships with India's top tech companies and startups."
        }
    ];

    const values = [
        {
            icon: <Heart className="w-6 h-6 text-pink-500" />,
            title: "Student-Centric",
            description: "We put students' needs and success at the heart of everything we do."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
            title: "Innovation",
            description: "We constantly evolve our programs to reflect the latest industry needs."
        },
        {
            icon: <Users className="w-6 h-6 text-blue-500" />,
            title: "Inclusivity",
            description: "Creating equal opportunities for students from all backgrounds."
        },
        {
            icon: <Target className="w-6 h-6 text-red-500" />,
            title: "Excellence",
            description: "We hold ourselves to the highest standards in education and mentorship."
        }
    ];

    const milestones = [
        {
            year: "2020",
            title: "Founded in Bangalore",
            description: "Started with our first batch of 25 students for web development internship."
        },
        {
            year: "2021",
            title: "Expanded Course Offerings",
            description: "Added data science and digital marketing to our curriculum."
        },
        {
            year: "2022",
            title: "100+ Industry Partnerships",
            description: "Established connections with leading companies for placements."
        },
        {
            year: "2023",
            title: "1000+ Student Success Stories",
            description: "Celebrated our milestone of helping 1000+ students launch their careers."
        }
    ];

    return (
        <div className="bg-background overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-[#1b335f] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/bg-pattern.jpg"
                        alt="Pattern background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Animated shapes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-20 -left-10 w-40 h-40 bg-[#3660a3] rounded-full blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    className="absolute bottom-20 -right-10 w-60 h-60 bg-indigo-500 rounded-full blur-3xl"
                />

                <div className="container mx-auto px-4 py-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-white">InternView</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-8">
                            We're bridging the gap between education and employment, empowering students
                            to build successful careers through hands-on experience and expert mentorship.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Link href="/contact-us">
                                <Button className="bg-white text-[#1b335f] hover:bg-white/90 font-medium px-6 py-6 text-lg">
                                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Mission Section */}
            <section ref={missionRef} className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        animate={missionInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="order-2 md:order-1"
                    >
                        <motion.h2
                            custom={0}
                            variants={fadeIn}
                            className="text-3xl md:text-4xl font-bold mb-6 text-[#1b335f]"
                        >
                            Our Mission
                        </motion.h2>

                        <motion.div custom={1} variants={fadeIn} className="w-20 h-1 bg-[#3660a3] mb-6 rounded-full"></motion.div>

                        <motion.p custom={2} variants={fadeIn} className="text-lg text-gray-700 mb-6">
                            At InternView, we're on a mission to transform how students transition from education to employment
                            by providing industry-relevant training, real-world internship experiences, and expert mentorship.
                        </motion.p>

                        <motion.div custom={3} variants={fadeIn} className="space-y-4">
                            {[
                                "Equipping students with in-demand skills",
                                "Connecting talent with industry opportunities",
                                "Building confidence through hands-on experience",
                                "Supporting career development with expert guidance"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-600">{item}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={missionInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative order-1 md:order-2"
                    >
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/student-collab.jpg"
                                alt="Students collaborating"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <motion.div
                            initial={{ x: -30, y: 30, opacity: 0 }}
                            animate={missionInView ? { x: 0, y: 0, opacity: 1 } : { x: -30, y: 30, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="absolute -bottom-10 -left-10 bg-white rounded-lg p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-[#f0f4ff] p-3 rounded-full">
                                    <GraduationCap className="w-6 h-6 text-[#1b335f]" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#1b335f]">1000+</p>
                                    <p className="text-sm text-gray-600">Students Trained</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 30, y: -30, opacity: 0 }}
                            animate={missionInView ? { x: 0, y: 0, opacity: 1 } : { x: 30, y: -30, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="absolute -top-10 -right-10 bg-white rounded-lg p-4 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-[#f0f4ff] p-3 rounded-full">
                                    <Rocket className="w-6 h-6 text-[#1b335f]" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#1b335f]">85%</p>
                                    <p className="text-sm text-gray-600">Placement Rate</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section ref={visionRef} className="py-20 bg-[#f0f4ff]">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate={visionInView ? "visible" : "hidden"}
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <motion.h2 custom={0} variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6 text-[#1b335f]">
                            Our Vision
                        </motion.h2>

                        <motion.div custom={1} variants={fadeIn} className="w-20 h-1 bg-[#3660a3] mx-auto mb-6 rounded-full"></motion.div>

                        <motion.p custom={2} variants={fadeIn} className="text-lg text-gray-700">
                            We envision a future where every student has access to quality industry-relevant training and
                            internship opportunities, regardless of their background or college tier. Our aim is to bridge
                            the industry-academia gap by creating pathways to meaningful careers.
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Globe className="w-8 h-8 text-blue-600" />,
                                title: "Expanding Access",
                                description: "Making quality training and placement accessible to students nationwide"
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                                title: "Industry Integration",
                                description: "Creating seamless pathways between education and employment"
                            },
                            {
                                icon: <Award className="w-8 h-8 text-amber-600" />,
                                title: "Recognition of Potential",
                                description: "Helping students showcase their abilities to prospective employers"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-[#f0f4ff] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1b335f] mb-3 text-center">{item.title}</h3>
                                <p className="text-gray-600 text-center">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section ref={valuesRef} className="py-20 container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate={valuesInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.h2 custom={0} variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6 text-[#1b335f]">
                        Our Core Values
                    </motion.h2>

                    <motion.div custom={1} variants={fadeIn} className="w-20 h-1 bg-[#3660a3] mx-auto mb-6 rounded-full"></motion.div>

                    <motion.p custom={2} variants={fadeIn} className="text-lg text-gray-700">
                        The principles that guide our mission and shape everything we do at InternView.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4"
                            style={{ borderColor: index === 0 ? "#ec4899" : index === 1 ? "#eab308" : index === 2 ? "#3b82f6" : "#ef4444" }}
                        >
                            <div className="bg-[#f0f4ff] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1b335f] mb-3 text-center">{value.title}</h3>
                            <p className="text-gray-600 text-center">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <Mentors />

            {/* Journey Timeline Section */}


            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#1b335f] to-[#3660a3] text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-lg text-white/80 mb-8">
                            Join InternView today and take the first step toward a successful career with expert-led
                            training and real-world internship opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <Link href="/contact-us">
                                <Button variant="outline" className="text-white bg-primary border-white hover:bg-primary/80 font-medium px-6 py-6">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
} 