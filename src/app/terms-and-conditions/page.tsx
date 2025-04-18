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
                        Welcome to InternView (the &quot;Platform&quot;), operated by Upskill and Earn Solution Pvt Ltd
                        (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Please read these Terms and Conditions (&quot;Terms&quot;) carefully
                        before using the Platform, as they govern your access to and use of the Platform and services
                        offered through it.
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