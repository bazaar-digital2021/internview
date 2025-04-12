'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This component allows you to customize colors, course counts, and link paths
const FindCourseForMe = ({

    courseData = [
        {
            type: "College Student",
            target: "Course Credits & Internships",
            courseCount: 14,
            link: "/explore-college-courses",
            imgUrl: "/icons/course/1.png"
        },
        {
            type: "Fresh Graduate",
            target: "my First Job",
            courseCount: 16,
            link: "/explore-graduate-courses",
            imgUrl: "/icons/course/2.png"
        },
        {
            type: "Working Professional",
            target: "a Great Job",
            courseCount: 2,
            link: "/explore-professional-courses",
            imgUrl: "/icons/course/3.png"
        },
        {
            phrase: "I am on a Break",
            target: "Upskill for my Next Role",
            courseCount: 2,
            link: "/explore-upskill-courses",
            imgUrl: "/icons/course/4.png",
            isBreak: true
        }
    ]
}) => {
    // Convert the primary color to inline styles for dynamic coloring


    return (
        <div className="w-full py-16 bg-primary/60 bg-opacity-30">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-5xl font-bold text-center mb-16">Find a Course for Me</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {courseData.map((course, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
                            <div className="max-w-xs">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {course.isBreak ? (
                                        <>
                                            <span className='text-primary'>{course.phrase}</span> and want to {course.target}
                                        </>
                                    ) : (
                                        <>
                                            <span className='text-primary'>I'm a {course.type}</span> looking for {course.target}
                                        </>
                                    )}
                                </h2>
                                <p className="text-gray-600 mb-4">{course.courseCount} Courses available</p>
                                <Link href={course.link}>
                                    <span className="font-medium hover:underline text-primary">Explore Now</span>
                                </Link>
                            </div>

                            <div className="absolute right-0 bottom-0 w-36 h-36 rounded-full -mb-10 -mr-10 flex items-center justify-center text-primary/60" >
                                <div className="relative w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center text-primary/60">
                                    {/* Placeholder for icon */}
                                    {/* You will insert your icon here */}
                                    <Image src={course.imgUrl} alt="Course Icon" width={80} height={80} className="object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindCourseForMe;