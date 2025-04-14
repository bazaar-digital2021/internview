import ModernComingSoon from "@/components/coming-soon";

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {

    return (
        <div>
            <ModernComingSoon />
        </div>
    )
}
