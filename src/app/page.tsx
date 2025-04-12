import { Button } from "@/components/ui/button";
import Alumni from "@/section/Alumni";
import CodingHub from "@/section/coding-hub";
import CourseCards from "@/section/CourseCards";
import FindCourseForMe from "@/section/find-courses";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import HeroGeometric from "@/section/Hero2";
import Internships from "@/section/Internships";
import Mentors from "@/section/Mentors";
import Upskill from "@/section/Upskill";
import WhyChooseUs from "@/section/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroGeometric />
      <WhyChooseUs />
      <CourseCards />
      <Upskill />
      <Internships />
      <Mentors />
      <Alumni />
      <Footer />
      {/* <FindCourseForMe /> */}
      {/* <CodingHub /> */}
    </>
  );
}
