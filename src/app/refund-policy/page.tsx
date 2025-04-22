'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Mail, RefreshCcw, ChevronUp, HelpCircle } from 'lucide-react';

export default function RefundPolicy() {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const sections = [
        {
            title: "Workshops and Webinars",
            content: "All payments made for workshops and webinars are non-refundable.\n\nWe encourage participants to review all details carefully before registering, including schedules and course content.\n\nIn the event of unforeseen circumstances, you may request to transfer your registration to a future session, subject to availability. A small administrative fee may apply."
        },
        {
            title: "Courses and Training Programs",
            content: "Refunds are not available once enrollment is confirmed.\n\nWe strongly advise you to assess your availability and commitment before enrolling.\n\nHowever, you may request to defer your enrollment to a later batch or cohort. Approval will be subject to program availability and may involve a nominal transfer fee."
        },
        {
            title: "Internships and Projects",
            content: "Payments related to internships, live projects, or career services are non-refundable once the process has started.\n\nIn case of any issues, we encourage you to reach out to our support team for possible alternative solutions or rescheduling options."
        },
        {
            title: "Special Circumstances",
            content: "Refund requests due to serious emergencies (such as medical emergencies) will be considered on a case-by-case basis. Internview reserves the right to request appropriate documentation and to make the final decision regarding any exceptions."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero section */}
            <div className="bg-[#1b335f] text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Refund Policy</h1>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <RefreshCcw className="w-5 h-5 text-blue-300" />
                            <p className="text-lg text-blue-300">Transparent refund guidelines</p>
                            <HelpCircle className="w-5 h-5 text-blue-300" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <Card className="mb-8 shadow-md border-0">
                        <CardContent className="p-8">
                            <p className="text-lg mb-4">
                                At Internview, we are dedicated to providing a high-quality learning and professional experience.
                                We value your trust and strive to ensure your satisfaction. Please carefully review our refund
                                policy below:
                            </p>
                        </CardContent>
                    </Card>

                    {/* Sections */}
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            id={`section-${index + 1}`}
                        >
                            <Card className="mb-6 shadow-md border-0 overflow-hidden">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeSection === index ? 'bg-[#1b335f] text-white' : 'bg-white hover:bg-gray-50'}`}
                                >
                                    <h2 className="text-xl font-semibold flex items-center">
                                        <span className={`w-7 h-7 inline-flex items-center justify-center ${activeSection === index ? 'bg-white/20' : 'bg-[#1b335f]/10'} rounded-full mr-3 text-sm`}>
                                            {index + 1}
                                        </span>
                                        {section.title}
                                    </h2>
                                    <ChevronUp className={`transition-transform ${activeSection === index ? 'transform rotate-0' : 'transform rotate-180'} w-5 h-5`} />
                                </button>

                                {activeSection === index && (
                                    <CardContent className="p-6 border-t">
                                        <div className="prose prose-lg max-w-none">
                                            {section.content.split('\n\n').map((paragraph, i) => (
                                                <p key={i} className="mb-4 text-gray-700">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </CardContent>
                                )}
                            </Card>
                        </motion.div>
                    ))}

                    {/* Important Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <Card className="mb-8 border-l-4 border-amber-500 shadow-md">
                            <CardContent className="p-6">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0">
                                        <HelpCircle className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-amber-700 mb-2">Important Notice</h3>
                                        <p className="text-gray-700">
                                            We recommend reviewing all program details thoroughly before making any payment.
                                            If you have questions about your specific situation, please contact our support
                                            team for assistance before proceeding with registration.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Information */}
                    <Card className="mt-10 shadow-md border-0">
                        <CardHeader className="bg-gray-50 border-b">
                            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="mb-4 text-gray-700">
                                For any questions or concerns regarding our refund policy, please feel free to contact us:
                            </p>
                            <div className="flex items-center gap-3 p-4 bg-[#f0f4ff] rounded-lg">
                                <Mail className="w-5 h-5 text-[#3660a3]" />
                                <a href="mailto:support@internview.in" className="text-[#3660a3] hover:underline font-medium">
                                    support@internview.in
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
