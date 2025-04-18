import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-2">
                        Privacy Policy
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                    <p>
                        Your use of the Platform is subject to our Privacy Policy, which explains how we collect, use,
                        and share your personal information. By using the Platform, you consent to our collection and
                        use of your information as described in the Privacy Policy.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
                    <p>
                        We may collect various types of information from you when you use our Platform, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Personal information such as name, email address, phone number, and educational background</li>
                        <li>Professional information related to your skills, work experience, and career interests</li>
                        <li>User-generated content that you post or submit on the Platform</li>
                        <li>Information about your device and how you interact with our Platform</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
                    <p>
                        We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Providing and improving our services</li>
                        <li>Personalizing your experience on the Platform</li>
                        <li>Facilitating connections between students and potential internship opportunities</li>
                        <li>Communicating with you about your account and our services</li>
                        <li>Analyzing usage patterns to enhance the Platform</li>
                        <li>Ensuring compliance with applicable laws and regulations</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Information Sharing</h3>
                    <p>
                        We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Employers and organizations offering internships or jobs through our Platform</li>
                        <li>Service providers who help us operate and improve our Platform</li>
                        <li>Business partners for marketing and promotional purposes, with your consent</li>
                        <li>Legal authorities when required by law or to protect our rights</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Your Rights and Choices</h3>
                    <p>
                        You have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Accessing, correcting, or deleting your personal information</li>
                        <li>Opting out of marketing communications</li>
                        <li>Managing cookie preferences</li>
                        <li>Requesting a copy of your data</li>
                    </ul>

                    <p className="mt-6">
                        We take reasonable measures to protect your information from unauthorized access or disclosure.
                        For any privacy-related inquiries, please contact us at privacy@internview.com.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
