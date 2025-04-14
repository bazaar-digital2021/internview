
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { courseFaqs } from "@/lib/course-faq"

export default function CourseFaq() {
    return (
        <section className=" bg-cyan-200/10 p-16">

            <Accordion type="single" collapsible className="w-full">
                {courseFaqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            {faq.question}
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </section>
    )
}
