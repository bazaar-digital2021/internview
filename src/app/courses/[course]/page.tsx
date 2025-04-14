import ModernComingSoon from "@/components/coming-soon";
import CourseDetails from "../_components/course-details";
import { courseDetails } from "@/lib/course-details";

export default async function CoursePage({ params }: { params: { course: string } }) {
    const { course } = await params;
    const courseInfo = courseDetails.find((item) => item.slug === course);

    return (
        <div>
            {courseInfo ? (
                <CourseDetails course={courseInfo} />
            ) : (
                <ModernComingSoon />
            )}
        </div>
    )
}
