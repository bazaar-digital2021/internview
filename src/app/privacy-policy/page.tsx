'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Mail, MapPin, ChevronUp, Lock, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const effectiveDate = "January 15, 2024"; // You can change this to the actual effective date

    const sections = [
        {
            title: "Definitions",
            content: "\"You\", \"Your\", \"User\" refers to the individuals who use or interact with our Platform and services.\n\n\"Services\" refers to the industrial training, internship programs, placement assistance, and related offerings provided by the Company.\n\n\"Personal Information\" means information that identifies or can be used to identify, contact, or locate the person, including but not limited to name, email address, phone number, educational background, and employment details.\n\n\"Third Parties\" refers to service providers, recruiters, and other entities apart from the Company and the User."
        },
        {
            title: "Information We Collect",
            content: "We may collect and process the following types of information:\n\n2.1 Personal Information\n• Name\n• Email address\n• Phone number\n• Educational qualifications\n• Work experience\n• Resume/CV\n• Address\n• Identity proof (where necessary)\n\n2.2 Technical Information\n• IP address\n• Browser type and version\n• Device identifiers\n• Time zone setting\n• Operating system and platform\n• Information on your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our site, page response times, download errors, length of visits, and page interaction information.\n\n2.3 Cookies and Tracking\nWe use cookies and similar technologies to collect technical information about your use of our Platform. You can control the use of cookies through your browser settings."
        },
        {
            title: "How We Use Your Information",
            content: "We may use the information collected for the following purposes:\n\n• To provide, manage, and improve our services.\n\n• To personalize your experience on our Platform.\n\n• To communicate with you regarding training programs, internships, placement opportunities, updates, and promotional content.\n\n• To connect you with potential employers or partners, based on your consent.\n\n• To monitor and analyze usage patterns and improve user experience.\n\n• To comply with legal obligations and protect our legal rights."
        },
        {
            title: "Disclosure of Your Information",
            content: "We may share your information:\n\n• With recruiters, industry partners, and placement companies for internship and job opportunities, only with your consent.\n\n• With service providers who assist us in running our operations (subject to confidentiality agreements).\n\n• To comply with legal obligations, enforce our terms, and protect our rights.\n\n• In connection with any merger, sale of company assets, or acquisition, provided that the receiving entity agrees to honor this Privacy Policy.\n\nWe do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent."
        },
        {
            title: "External Links",
            content: "Our Platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third-party sites. We encourage you to read their privacy policies before providing any personal information."
        },
        {
            title: "Security of Your Information",
            content: "We use appropriate technical and organizational security measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction. However, no internet-based site can be 100% secure, so we cannot guarantee absolute security."
        },
        {
            title: "Your Rights",
            content: "You have the right to:\n\n• Access the personal data we hold about you.\n\n• Request correction of any inaccurate information.\n\n• Withdraw consent at any time.\n\n• Request deletion of your personal data, subject to legal obligations.\n\n• Lodge a complaint with the appropriate data protection authority if you believe your data has been mishandled.\n\nTo exercise any of these rights, please email us at support@internview.in."
        },
        {
            title: "Cookies Policy",
            content: "We use cookies to enhance your browsing experience. Cookies help us understand your preferences and tailor content accordingly. You can choose to accept or decline cookies by adjusting your browser settings. Disabling cookies may affect certain functionalities of the Platform."
        },
        {
            title: "Data Retention",
            content: "We will retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law."
        },
        {
            title: "Changes to This Privacy Policy",
            content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our Platform after any changes constitutes acceptance of the revised Privacy Policy."
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
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Lock className="w-5 h-5 text-blue-300" />
                            <p className="text-lg text-blue-300">Your data is important to us</p>
                            <Shield className="w-5 h-5 text-blue-300" />
                        </div>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Effective Date: {effectiveDate}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <Card className="mb-8 shadow-md border-0">
                        <CardContent className="p-8">
                            <p className="text-lg mb-4">
                                Welcome to Internview, operated by Upskill and Earn Solution Pvt Ltd, a company registered
                                under the Companies Act, 2013, having its registered office at 79/24, 13th Cross, Teachers Colony,
                                Koramangala, Bengaluru, Karnataka, India (hereinafter referred to as the "Company", "we", "our" or "us").
                            </p>
                            <p className="text-lg mb-4">
                                We value your trust and are committed to protecting and respecting your privacy. This Privacy Policy
                                explains how we collect, use, disclose, and safeguard your information when you visit our website
                                https://www.internview.in ("Platform") and use our services related to industrial training, internships,
                                and placement opportunities.
                            </p>
                            <p className="text-lg">
                                By accessing or using our Platform, you consent to the collection, use, storage, and disclosure of your
                                information in accordance with this Privacy Policy. If you do not agree with the practices described
                                herein, please do not use our Platform.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Table of Contents */}
                    <Card className="mb-8 shadow-md border-0">
                        <CardHeader className="bg-gray-50 border-b">
                            <CardTitle className="text-2xl font-bold">Table of Contents</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {sections.map((section, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => setActiveSection(index)}
                                            className="text-[#3660a3] hover:text-[#1b335f] transition-colors text-left flex items-center group"
                                        >
                                            <span className="w-6 h-6 inline-flex items-center justify-center bg-[#3660a3]/10 rounded-full mr-2 text-xs">
                                                {index + 1}
                                            </span>
                                            <span className="group-hover:underline">{section.title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Sections */}
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
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

                    {/* Contact Information */}
                    <Card className="mt-10 shadow-md border-0">
                        <CardHeader className="bg-gray-50 border-b">
                            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="mb-4 text-gray-700">
                                If you have any questions, concerns, or complaints regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#3660a3] mt-0.5" />
                                    <span className="text-gray-700">
                                        Upskill and Earn Solution Pvt Ltd, 79/24, 13th Cross, Teachers Colony, Koramangala, Bengaluru, Karnataka, India
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-[#3660a3] mt-0.5" />
                                    <a href="mailto:support@internview.in" className="text-[#3660a3] hover:underline">
                                        support@internview.in
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
