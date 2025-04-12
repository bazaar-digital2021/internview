'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    GraduationCap,
    BookOpen,
    Users
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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

    // Footer links
    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Courses", href: "/courses" },
        { name: "Internships", href: "/internships" },
        { name: "Mentors", href: "/mentors" },
        { name: "Contact", href: "/contact" },
    ];

    const courses = [
        { name: "Data Science", href: "/courses/data-science" },
        { name: "Web Development", href: "/courses/web-development" },
        { name: "Digital Marketing", href: "/courses/digital-marketing" },
    ];

    const resources = [
        { name: "Blog", href: "/blog" },
        { name: "Free Resources", href: "/resources" },
        { name: "Careers", href: "/careers" },
        { name: "FAQ", href: "/faq" },
    ];

    // Social media links
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", name: "Facebook" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", name: "Twitter" },
        { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", name: "Instagram" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", name: "LinkedIn" },
        { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", name: "YouTube" },
    ];

    return (
        <footer className="bg-[#1b335f] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">InternView</h3>
                            <div className="h-1 w-16 bg-[#3660a3] rounded-full mb-4"></div>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Bridging the gap between campus and career with expert-led training and real-world experience.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#3660a3] mt-1 flex-shrink-0" />
                                <p className="text-white/80 text-sm">To be Added Soon</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#3660a3] mt-0.5 flex-shrink-0" />
                                <a href="mailto:info@internview.com" className="text-white/80 text-sm hover:text-white transition-colors">
                                    To be Added Soon
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[#3660a3] mt-0.5 flex-shrink-0" />
                                <a href="tel:+91-9876543210" className="text-white/80 text-sm hover:text-white transition-colors">
                                    +91-0000000000
                                </a>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="bg-[#3660a3]/20 p-2 rounded-full hover:bg-[#3660a3]/50 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <ChevronRight className="w-5 h-5 text-[#3660a3]" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#3660a3] rounded-full group-hover:translate-x-1 transition-transform"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Courses */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-[#3660a3]" />
                            Our Courses
                        </h3>
                        <ul className="space-y-3">
                            {courses.map((course, index) => (
                                <li key={index}>
                                    <Link
                                        href={course.href}
                                        className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#3660a3] rounded-full group-hover:translate-x-1 transition-transform"></span>
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-6 flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#3660a3]" />
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <Link
                                        href={resource.href}
                                        className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 bg-[#3660a3] rounded-full group-hover:translate-x-1 transition-transform"></span>
                                        {resource.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-[#3660a3]" />
                            Subscribe to Newsletter
                        </h3>
                        <p className="text-white/80 text-sm">
                            Stay updated with the latest courses, events, and resources.
                        </p>
                        <form className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 bg-white/10 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3660a3]/50 text-sm"
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-[#3660a3] hover:bg-[#3660a3]/80 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe Now
                            </motion.button>
                        </form>

                        <div className="bg-white/10 p-4 rounded-lg mt-6">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-[#3660a3]" />
                                Opening Hours
                            </h4>
                            <ul className="space-y-2 text-white/80 text-sm">
                                <li className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>9:00 AM - 1:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © {currentYear} InternView. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/https://www.bazaardigital.in/" className='text-white'>Designed By Bazaar Digital</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 