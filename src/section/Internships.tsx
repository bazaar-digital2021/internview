'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Laptop,
    Building2,
    UsersRound,
    Clock,
    ArrowRight,
    Calendar,
    GraduationCap,
    Briefcase,
    GanttChartSquare,
    MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from '@bprogress/next/app';

const Internships = () => {
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

    const internshipTypes = [
        {
            id: 1,
            title: "Virtual Internships",
            icon: <Laptop className="w-8 h-8 text-blue-600" />,
            description: "Flexible remote opportunities that allow you to work from anywhere while gaining real-world experience.",
            color: "#1b335f",
            benefits: [
                "Work from anywhere",
                "Flexible scheduling",
                "Global networking",
                "Digital collaboration skills"
            ],
            features: [
                { icon: <Clock />, text: "15-20 hours per week" },
                { icon: <Calendar />, text: "2-3 month duration" }
            ],
            accent: "bg-blue-50",
            accentBorder: "border-blue-200",
            accentText: "text-blue-700"
        },
        {
            id: 2,
            title: "Hybrid Internships",
            icon: <UsersRound className="w-8 h-8 text-purple-600" />,
            description: "A mix of online learning and in-office exposure providing balanced experience and networking opportunities.",
            color: "#3660a3",
            benefits: [
                "Combined flexibility & structure",
                "In-person mentorship",
                "Team collaboration experience",
                "Balanced work environment"
            ],
            features: [
                { icon: <Clock />, text: "20-30 hours per week" },
                { icon: <Calendar />, text: "2-4 month duration" }
            ],
            accent: "bg-purple-50",
            accentBorder: "border-purple-200",
            accentText: "text-purple-700"
        },
        {
            id: 3,
            title: "On-Site Internships",
            icon: <Building2 className="w-8 h-8 text-emerald-600" />,
            description: "Full-time industry-based internships that immerse you in the company culture and day-to-day operations.",
            color: "#26526f",
            benefits: [
                "Complete immersion in company culture",
                "Direct supervision & mentoring",
                "Office environment exposure",
                "Stronger professional connections"
            ],
            features: [
                { icon: <Clock />, text: "40 hours per week" },
                { icon: <Calendar />, text: "3-6 month duration" }
            ],
            accent: "bg-emerald-50",
            accentBorder: "border-emerald-200",
            accentText: "text-emerald-700"
        }
    ];

    const router = useRouter();

    return (
        <section ref={ref} className="py-24 bg-gradient-to-b from-primary/60 to-secondary/30"
            id='internships'
        >
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
                            INTERNSHIP OPPORTUNITIES
                        </span>
                    </motion.div>

                    <h2 className="text-2xl md:text-4xl font-bold  mb-4 font-mono">
                        Internship Program <span className='bg-gradient-to-r from-primary via-primary/80 to-purple-500 bg-clip-text text-transparent'> Structure</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the internship format that aligns with your goals and circumstances.
                        All programs include mentorship, real projects, and industry exposure.
                    </p>
                </motion.div>



                {/* Internship Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {internshipTypes.map((internship, index) => (
                        <motion.div
                            key={internship.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className="bg-white/70 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full border border-gray-100"
                        >
                            {/* Card Header */}
                            <div className="p-4 border-b border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className={`p-3 rounded-xl ${internship.accent}`}
                                    >
                                        {internship.icon}
                                    </div>

                                </div>
                                <h3
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: internship.color }}
                                >{internship.title}</h3>
                                <p className="text-gray-600">{internship.description}</p>
                            </div>

                            {/* Card Features */}
                            <div className="flex justify-between p-4 bg-gray-50">
                                {internship.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className={`p-1.5 rounded-full ${internship.accent}`}>
                                            {React.cloneElement(feature.icon, {
                                                className: `w-4 h-4 ${internship.accentText}`
                                            })}
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Card Benefits */}
                            <div className="p-6 flex-grow">
                                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-gray-400" />
                                    Key Advantages
                                </h4>
                                <ul className="space-y-3">
                                    {internship.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="mt-1 text-green-500">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.5 4.76562L6.64062 9.57812C6.5875 9.64688 6.51562 9.7 6.42812 9.7C6.34062 9.7 6.26875 9.65625 6.21562 9.58438L3.45312 6.28438C3.4 6.21875 3.4 6.125 3.45312 6.05938L4.08125 5.30625C4.13438 5.24062 4.22812 5.24062 4.28125 5.30625L6.40625 7.80938L9.6625 3.76562C9.71562 3.7 9.80938 3.7 9.8625 3.76562L10.4906 4.51875C10.55 4.59375 10.55 4.69375 10.5 4.76562Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Footer */}

                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 bg-gradient-to-r from-[#1b335f] to-[#3660a3] rounded-2xl p-8 md:p-12 text-white"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to start your internship journey?</h3>
                            <p className="text-white/80 max-w-xl">
                                Apply today to join our internship programs and kickstart your career with hands-on experience.
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button className="bg-white text-[#1b335f] hover:bg-white/90 font-semibold py-3 px-6 text-lg rounded-xl whitespace-nowrap"
                                onClick={() => router.push('/contact-us')}
                            >
                                Apply Now
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Internships; 