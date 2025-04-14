'use client'

import { Course } from "@/types/course"
import Image from "next/image"
import CourseRegistrationForm from "./registration-form"
import WhyChooseUs from "@/section/why-choose-us"
import WhoShouldApply from "@/section/who-should-apply"
import ProgramDetails from "./program-details"
import Certification from "@/section/certification"
import CourseFaq from "./course-faq"


export default function CourseDetails({ course }: { course: Course }) {

    return (
        <main>
            <div className=" px-4 py-16">
                {/* HERO SECTION */}

                <div className="flex flex-col lg:flex-row justify-start items-start">
                    {/* Left Content Section */}
                    <div className="w-full lg:w-3/4 px-8 lg:px-16 flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                                {course.title}
                            </h1>

                            <p className="text-gray-600 text-lg mb-8">
                                {course.description}
                            </p>

                            <div className="mb-8">
                                <p className="text-gray-700 mb-2">Certified By:</p>
                                <div className="flex items-center">
                                    <Image
                                        src="/ibm.png"
                                        alt="Apple Certification"
                                        width={40}
                                        height={40}
                                        className="mr-2"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-gray-700 mb-2">Training Partner:</p>
                                <div className="flex items-center">
                                    <Image
                                        src="/nsdc-logo.png"
                                        alt="NSDC Logo"
                                        width={150}
                                        height={60}
                                    />
                                </div>
                            </div>

                            <button className="bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-md transition duration-300">
                                Download Brochure
                            </button>
                        </div>
                    </div>


                    {/* Right Form Section with Gradient Background */}
                    <div className="w-full lg:w-1/2 bg-gradient-to-br from-primary to-secondary p-8 lg:p-16 flex items-center justify-center">
                        <CourseRegistrationForm title={course.sign} />
                    </div>
                </div>

            </div>

            <section className="bg-cyan-200/30">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center">
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="text-2xl font-bold">{course.course_Stats.duration}</h1>
                            <p className="text-gray-600 ">Program Duration</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="text-2xl font-bold">{course.course_Stats.support}</h1>
                            <p className="text-gray-600 ">Career Guidance</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="text-2xl font-bold">{course.course_Stats.credits}</h1>
                            <p className="text-gray-600 ">Course Credits</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="text-2xl font-bold">{course.course_Stats.projects}</h1>
                            <p className="text-gray-600 ">Industry Projects</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="text-2xl font-bold">{course.course_Stats.access}</h1>
                            <p className="text-gray-600 ">Coding Hub Access</p>
                        </div>
                    </div>

                </div>
            </section>

            <WhyChooseUs />
            <WhoShouldApply />

            <ProgramDetails details={course.details} />
            <Certification />
            <CourseFaq />

        </main>
    )
}
