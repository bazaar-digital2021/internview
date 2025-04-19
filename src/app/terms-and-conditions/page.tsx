import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditions() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-2">
                        Terms and Conditions
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                    <p>
                        Welcome to InternView (the "Platform"), operated by Upskill and Earn Solution Pvt Ltd ("Company", "we", "us", or "our"). Please read these Terms and Conditions ("Terms") carefully before using the Platform, as they govern your access to and use of the Platform and services offered through it.
                        By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to all of the Terms, you may not access or use the Platform.
                        We reserve the right to amend these Terms at any time without prior notice. Your continued use of the Platform after any changes signifies your acceptance of the updated Terms.
                    </p>
                    <p>
                        By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree
                        to all of the Terms, you may not access or use the Platform.
                    </p>
                    <p>
                        We reserve the right to amend these Terms at any time without prior notice. Your continued use
                        of the Platform after any changes signifies your acceptance of the updated Terms.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
} 