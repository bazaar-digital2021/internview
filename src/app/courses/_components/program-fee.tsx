'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ProgramFeeProps = {
    courseTitle?: string;
}

export default function ProgramFee({ courseTitle }: ProgramFeeProps) {
    const router = useRouter();

    const pricingOptions = [
        {
            title: "Recorded Sessions",
            price: "₹4999",
            color: "from-violet-500 to-indigo-600",
            colorLight: "bg-violet-50",
            colorText: "text-violet-700",
            features: [
                "Full access to recorded lectures",
                "Self-paced learning",
                "Basic certification",
                "Access to study materials",
                "Email support"
            ]
        },
        {
            title: "Virtual Learning",
            price: "₹8999",
            color: "from-primary to-blue-600",
            colorLight: "bg-blue-50",
            colorText: "text-blue-700",
            features: [
                "Live online classes",
                "Interactive Q&A sessions",
                "Professional certification",
                "Access to all learning materials",
                "Priority email support",
                "2 industry project"
            ],
            popular: true
        },
        {
            title: "Hybrid Training",
            price: "₹29,999",
            color: "from-emerald-500 to-teal-600",
            colorLight: "bg-emerald-50",
            colorText: "text-emerald-700",
            features: [
                "Combination of in-class and online sessions",
                "Direct mentorship from industry experts",
                "Advanced certification with industry validation",
                "Access to exclusive workshops",
                "Dedicated mentor support",
                "2 real-world projects for portfolio",
                "Placement assistance"
            ]
        }
    ];

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1b335f] mb-4">
                        Program Fee
                    </h2>
                    <div className="w-20 h-1 bg-[#3660a3] mx-auto mb-6 rounded-full"></div>
                    {courseTitle && (
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose the perfect learning path for {courseTitle} that suits your schedule and learning style
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={variants}
                            className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border ${option.popular ? 'border-blue-400 md:scale-105 z-10' : 'border-gray-100'}`}
                        >
                            {option.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            <div className={`p-6 bg-gradient-to-r ${option.color} text-white`}>
                                <h3 className="text-xl font-bold mb-1">{option.title}</h3>
                                <p className="text-white/80 text-sm mb-4">Best for {index === 0 ? 'self-paced learners' : index === 1 ? 'interactive online learning' : 'serious career advancement'}</p>
                                <div className="flex items-end gap-1">
                                    <span className="text-3xl font-bold">{option.price}</span>
                                    <span className="text-white/80 mb-1">(Incl. Taxes)</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <ul className="space-y-3 mb-6">
                                    {option.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className={`w-5 h-5 ${option.colorText} flex-shrink-0 mt-0.5`} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-3 pt-2">
                                    <Button
                                        className={`w-full py-6 bg-gradient-to-r ${option.color} hover:opacity-90 transition-opacity`}
                                        onClick={() => router.push('/contact-us')}
                                    >
                                        Enroll Now
                                    </Button>


                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 