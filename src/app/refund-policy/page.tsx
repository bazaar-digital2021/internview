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
                        All fees paid for training, internships, and related services are non-refundable unless otherwise
                        stated for specific programs.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Refund Eligibility</h3>
                    <p>
                        Refunds are only applicable if:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>The Company fails to deliver the promised course or service.</li>
                    </ul>

                    <p>
                        Eligible refunds will be processed within 14 business days of receiving a valid request. We may
                        allow a transfer to another course at our discretion.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Refund Request Process</h3>
                    <p>
                        To request a refund, please follow these steps:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Submit a written refund request to support@internview.com</li>
                        <li>Include your full name, email address, and enrollment details</li>
                        <li>Clearly state the reason for your refund request</li>
                        <li>Provide any relevant documentation supporting your claim</li>
                    </ol>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Non-Refundable Items</h3>
                    <p>
                        The following items and circumstances are specifically excluded from our refund policy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Registration or application fees</li>
                        <li>Enrollment fees once the program has started</li>
                        <li>Digital materials that have been accessed or downloaded</li>
                        <li>Cancellations after the program start date</li>
                        <li>Requests based on change of mind or personal circumstances</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Course Transfers</h3>
                    <p>
                        In certain circumstances, we may allow you to transfer your enrollment to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>A different course of equal or lesser value</li>
                        <li>A future session of the same course</li>
                        <li>Another eligible student (subject to approval)</li>
                    </ul>

                    <p className="mt-6">
                        All transfer requests are evaluated on a case-by-case basis and are granted at the sole discretion of InternView.
                        Transfer requests must be submitted at least 7 days before the original course start date.
                    </p>

                    <p className="mt-6">
                        We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting
                        on our Platform. For questions regarding our refund policy, please contact support@internview.com.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
