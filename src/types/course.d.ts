// TypeScript interfaces for Course data structure

// Stats shown in course highlights section
interface CourseStats {
    duration: string;
    access: string;
    credits: string;
    projects: string;
    support: string;
}

// Statistics shown in hero section
interface HeroStats {
    time: string;
    test: string;
    modules: string;
    projects: string;
}

// Hero section content
interface HeroSection {
    desc: string;
    stats: HeroStats;
}

// Course module structure
interface CourseModule {
    title: string;
    modules: string[];
}

// Course details structure
export interface CourseDetails {
    hero: HeroSection;
    course_content: CourseModule[];
    image: string;
}

// Main Course interface
export interface Course {
    id: number;
    title: string;
    description: string;
    slug: string;
    sign: string;
    course_Stats: CourseStats;
    details: CourseDetails;
}