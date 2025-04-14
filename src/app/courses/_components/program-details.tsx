'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { CourseDetails } from '@/types/course'

interface AccordionItemProps {
    title: string
    isOpen: boolean
    onToggle: () => void
    children: React.ReactNode
}

const AccordionItem = ({ title, isOpen, onToggle, children }: AccordionItemProps) => {
    return (
        <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
            <div
                className="flex justify-between items-center p-4 cursor-pointer bg-white"
                onClick={onToggle}
            >
                <h3 className="font-semibold text-lg">{title}</h3>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 bg-white">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function ProgramDetails({ details }: { details: CourseDetails }) {
    const [openAccordion, setOpenAccordion] = useState('intro')

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? '' : id)
    }

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    {/* Left Content */}
                    <div className="w-full lg:w-7/12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Details</h2>

                        <p className="text-gray-600 mb-10">
                            {details.hero.desc}
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{details.hero.stats.test} </h3>
                                <p className="text-gray-600">Assignments & Mock Tests</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{details.hero.stats.projects} </h3>
                                <p className="text-gray-600">Industry Projects</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{details.hero.stats.time} </h3>
                                <p className="text-gray-600">Hours of Learning</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{details.hero.stats.modules} </h3>
                                <p className="text-gray-600">Modules</p>
                            </div>
                        </div>

                        {/* Accordion */}
                        <div className="mt-6">
                            {details.course_content.map((content, index) => (
                                <AccordionItem
                                    key={index}
                                    title={content.title}
                                    isOpen={openAccordion === content.title}
                                    onToggle={() => toggleAccordion(content.title)}
                                >
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        {content.modules.map((module, index) => (
                                            <li key={index}>{module}</li>
                                        ))}
                                    </ul>
                                </AccordionItem>
                            ))}

                            {/* <AccordionItem
                                title="Introduction To Web Development"
                                isOpen={openAccordion === 'intro'}
                                onToggle={() => toggleAccordion('intro')}
                            >
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    <li>What Is web development?</li>
                                    <li>Different Types Of Web Development</li>
                                    <li>The Web Development Stack</li>
                                    <li>Common Web Development Tools And technologies</li>
                                </ul>
                            </AccordionItem>

                            <AccordionItem
                                title="HTML Deep Dive"
                                isOpen={openAccordion === 'html-deep'}
                                onToggle={() => toggleAccordion('html-deep')}
                            >
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    <li>HTML Structure and Syntax</li>
                                    <li>Semantic HTML</li>
                                    <li>HTML5 Features</li>
                                    <li>Forms and Input Elements</li>
                                </ul>
                            </AccordionItem>

                            <AccordionItem
                                title="HTML Tags & Attributes"
                                isOpen={openAccordion === 'html-tags'}
                                onToggle={() => toggleAccordion('html-tags')}
                            >
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    <li>Common HTML Tags</li>
                                    <li>Global and Specific Attributes</li>
                                    <li>Tables and Lists</li>
                                    <li>Multimedia Elements</li>
                                </ul>
                            </AccordionItem> */}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-5/12">
                        <div className="relative rounded-xl overflow-hidden bg-primary">
                            <Image
                                src={details.image || ''}
                                alt="Web Development"
                                width={500}
                                height={400}
                                className="object-cover w-full h-auto"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://placehold.co/500x400/1e5245/FFFFFF?text=Web+Development";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
