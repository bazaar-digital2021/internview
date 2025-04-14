'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Certification() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    const openModal = () => {
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = 'unset'
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isModalOpen])

    const benefits = [
        {
            id: 1,
            text: 'Enhances the substantial weight of your resume and LinkedIn profile',
        },
        {
            id: 2,
            text: 'Drives career growth and the potential to double your salary',
        },
        {
            id: 3,
            text: 'Facilitates promising placements for freshers',
        },
        {
            id: 4,
            text: 'Adds credibility to your skill set, tools knowledge, and project expertise',
        },
    ]

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">Certification</h2>

                        <div className="space-y-5">
                            {benefits.map((benefit) => (
                                <div key={benefit.id} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-lg">{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Certificate Image */}
                    <div className="w-full lg:w-1/2">
                        <div
                            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-[1.02] duration-300"
                            onClick={openModal}
                        >
                            <Image
                                src="/images/certificate.png"
                                alt="Course Certification"
                                width={600}
                                height={400}
                                className="object-contain w-full"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://placehold.co/600x400/008080/FFFFFF?text=Certificate+Sample";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="relative bg-white rounded-lg p-2 max-w-4xl w-full"
                        >
                            <div className="relative">
                                <button
                                    className="absolute -top-12 right-0 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
                                    onClick={closeModal}
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <Image
                                    src="/images/certificate.png"
                                    alt="Course Certification"
                                    width={900}
                                    height={650}
                                    className="object-contain w-full rounded-lg"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://placehold.co/900x650/008080/FFFFFF?text=Certificate+Sample";
                                    }}
                                />

                                <div className="flex justify-center mt-4">
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                                    >
                                        Sample Certificate
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
} 