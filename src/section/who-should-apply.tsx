'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCheckIcon, CheckCircle, CheckCircleIcon } from 'lucide-react'

export default function WhoShouldApply() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="py-16 px-4 bg-cyan-200/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold">Who should apply for this course?</h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Content Section */}
                    <motion.div
                        className="w-full lg:w-3/5 lg:pr-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="flex items-start mb-8">
                            <div className="flex-shrink-0 mr-4">
                                <CheckCircle className='w-6 h-6 text-green-500' />
                            </div>
                            <div className=''>
                                <h3 className=" font-semibold text-gray-700">Students and Recent Graduates</h3>
                                <p className="text-gray-600">intending to bridge the gap between academic knowledge and practical skills.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start mb-8">
                            <div className="flex-shrink-0 mr-4">
                                <CheckCircleIcon className='w-6 h-6 text-green-500' />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Working Professionals</h3>
                                <p className="text-gray-600">looking to enhance career prospects and stay updated with industry trends.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start mb-8">
                            <div className="flex-shrink-0 mr-4">
                                <CheckCircleIcon className='w-6 h-6 text-green-500' />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Career Changers and Professionals on break</h3>
                                <p className="text-gray-600">intending to pivot to new industries by acquiring relevant skills.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <CheckCircleIcon className='w-6 h-6 text-green-500' />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Freelancers and Entrepreneurs</h3>
                                <p className="text-gray-600">interested in expanding expertise for business growth and innovation.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="hidden lg:block w-full lg:w-2/5 mt-10 lg:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <Image
                                src="/growth.png"
                                alt="Career Growth Illustration"
                                width={400}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 