import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RefundPolicy() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-2">
                        Refund Policy
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                    <p>
                        At Internview, we are dedicated to providing a high-quality learning and professional experience. We value your trust and strive to ensure your satisfaction. Please carefully review our refund policy below:
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Refund Eligibility</h3>
                    <p>
                        All payments made for workshops and webinars are non-refundable.
                    </p>


                    <p>
                        We encourage participants to review all details carefully before registering, including schedules and course content.
                    </p>


                    <ol className="list-decimal pl-6 space-y-2">
                        <li>In the event of unforeseen circumstances, you may request to transfer your registration to a future session, subject to availability. A small administrative fee may apply.</li>
                        <li>Courses and Training Programs:
                            Refunds are not available once enrollment is confirmed.</li>
                        <li>We strongly advise you to assess your availability and commitment before enrolling.</li>
                        <li>However, you may request to defer your enrollment to a later batch or cohort. Approval will be subject to program availability and may involve a nominal transfer fee.</li>
                        <li></li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Internships and Projects:</h3>
                    <p>
                        Payments related to internships, live projects, or career services are non-refundable once the process has started
                    </p>
                    <p>
                        In case of any issues, we encourage you to reach out to our support team for possible alternative solutions or rescheduling options.
                    </p>


                    <h3 className="text-xl font-semibold mt-6 mb-2">Special Circumstances:</h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <p>
                            Refund requests due to serious emergencies (such as medical emergencies) will be considered on a case-by-case basis. Internview reserves the right to request appropriate documentation and to make the final decision regarding any exceptions.
                        </p>
                    </ul>

                    <h1>
                        Contact Us:

                    </h1>
                    <p className="mt-6">
                        For any questions or concerns regarding our refund policy, please feel free to contact us at:
                        📧 support@internview.in
                    </p>

                </CardContent>
            </Card>
        </div>
    );
}
