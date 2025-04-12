
import Alumni from "@/section/Alumni";
import CourseCards from "@/section/CourseCards";

import HeroGeometric from "@/section/Hero2";
import Internships from "@/section/Internships";
import Mentors from "@/section/Mentors";
import Upskill from "@/section/Upskill";
import WhyChooseUs from "@/section/why-choose-us";

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

      {/* <FindCourseForMe /> */}
      {/* <CodingHub /> */}
    </>
  );
}
