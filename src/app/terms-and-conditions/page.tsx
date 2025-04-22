'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Mail, MapPin, ChevronUp } from 'lucide-react';

export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const sections = [
        {
            title: "Privacy Policy",
            content: "Your use of the Platform is subject to our Privacy Policy, which explains how we collect, use, and share your personal information. By using the Platform, you consent to our collection and use of your information as described in the Privacy Policy."
        },
        {
            title: "Communication",
            content: "By using the Platform, you consent to receive communications from us electronically, including emails, messages, SMS, calls, and notifications. You agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communications be in writing.\n\nYou also authorize InternView to contact you via SMS, phone calls, emails, or other means regarding services, training, internship opportunities, placement assistance, and promotions, regardless of your DND (Do Not Disturb) status."
        },
        {
            title: "Services",
            content: "InternView provides industrial training programs, internships, and placement assistance services. While we make reasonable efforts to facilitate opportunities, we do not guarantee employment or internship offers.\n\nWe reserve the right to modify, discontinue, or restrict the availability of any service without prior notice."
        },
        {
            title: "Intellectual Property",
            content: "All content, materials, designs, logos, trademarks, graphics, texts, videos, and software on the Platform are the proprietary property of Upskill and Earn Solution Pvt Ltd or its licensors. No content may be copied, reproduced, republished, transmitted, distributed, or exploited without our prior written consent.\n\nYou are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal and non-commercial purposes only."
        },
        {
            title: "User Account",
            content: "To access certain services, you may need to create an account. You are responsible for maintaining the confidentiality of your account and password and for all activities under your account.\n\nIf you are under 18 years of age, you may use the Platform only with the involvement of a parent or guardian. We reserve the right to terminate accounts or refuse services at our sole discretion."
        },
        {
            title: "User-Generated Content",
            content: "You may post, upload, or otherwise make available content such as comments, reviews, or other materials (\"User Content\"). You represent and warrant that:\n\n• You own or have the necessary rights to post such User Content.\n\n• Your User Content does not infringe upon the rights of any third party.\n\n• Your User Content is not unlawful, defamatory, abusive, obscene, or otherwise objectionable.\n\nBy posting User Content, you grant InternView a perpetual, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and display such content for any purpose.\n\nWe are not responsible for User Content but reserve the right to remove or edit any content at our sole discretion."
        },
        {
            title: "Accuracy of Information",
            content: "We strive to ensure the accuracy and completeness of information on the Platform. However, we do not guarantee that the information provided is complete, accurate, or error-free.\n\nThe Platform may contain links to third-party websites, which are not under our control. We are not responsible for the content, accuracy, or availability of any external sites."
        },
        {
            title: "Payments, Cancellation, and Refund Policy",
            content: "All payments for workshops, webinars, courses, internships, and related services are non-refundable.\n\nParticipants are advised to review all details carefully before registering.\n\nIn case of unforeseen circumstances, a transfer to a future session may be requested, subject to availability and a nominal administrative fee.\n\nRefunds due to serious emergencies may be considered on a case-by-case basis, with appropriate documentation.\n\nInternview reserves full discretion over approval of transfers, deferments, and any exceptional refunds."
        },
        {
            title: "Disclaimers",
            content: "The Platform and services are provided on an \"as is\" and \"as available\" basis. We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.\n\nWe are not liable for any damages, including but not limited to direct, indirect, incidental, punitive, or consequential damages arising from your use of the Platform or services."
        },
        {
            title: "Third-Party Services",
            content: "We may offer access to third-party tools and links to third-party websites. We do not control and are not responsible for these services or their content. Your use of third-party services is at your own risk and governed by the terms and policies of such third parties."
        },
        {
            title: "Limitation of Liability",
            content: "To the fullest extent permitted by law, Upskill and Earn Solution Pvt Ltd shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of your access to or use of the Platform."
        },
        {
            title: "Governing Law and Dispute Resolution",
            content: "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka, India."
        },
        {
            title: "Amendments",
            content: "We reserve the right to modify or update these Terms at any time without prior notice. It is your responsibility to review these Terms periodically. Continued use of the Platform after any such changes shall constitute your consent to such changes."
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
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                                Welcome to InternView (the "Platform"), operated by Upskill and Earn Solution Pvt Ltd
                                ("Company", "we", "us", or "our"). Please read these Terms and Conditions ("Terms") carefully
                                before using the Platform, as they govern your access to and use of the Platform and services
                                offered through it.
                            </p>
                            <p className="text-lg mb-4">
                                By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree
                                to all of the Terms, you may not access or use the Platform.
                            </p>
                            <p className="text-lg">
                                We reserve the right to amend these Terms at any time without prior notice. Your continued use
                                of the Platform after any changes signifies your acceptance of the updated Terms.
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
                            <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="mb-4 text-gray-700">
                                If you have any questions regarding these Terms and Conditions, please contact us at:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-[#3660a3] mt-0.5" />
                                    <a href="mailto:support@internview.in" className="text-[#3660a3] hover:underline">
                                        support@internview.in
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#3660a3] mt-0.5" />
                                    <span className="text-gray-700">
                                        Upskill and Earn Solution Pvt Ltd, Bangalore, India
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
} 