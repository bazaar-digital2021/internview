import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import ModernComingSoon from "@/components/coming-soon";

export default function ContactUs() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            {/* Header */}
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have questions about our courses, internships, or any other inquiries? Reach out to us, and our team will get back to you as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="shadow-lg">
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                                    <Input id="name" placeholder="Your name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                                <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="What is this regarding?" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                                <Textarea
                                    id="message"
                                    placeholder="Please describe your query in detail..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full bg-[#1b335f] hover:bg-[#3660a3]">
                                <Send className="mr-2 h-4 w-4" /> Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#1b335f]/10 p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-[#1b335f]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Our Location</h3>
                                    <p className="text-muted-foreground">
                                        79/24, 2nd Floor, 13th Cross, Teacher's Colony, Jakkasandra, Koramangala Bangalore 560034.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#1b335f]/10 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-[#1b335f]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email Address</h3>
                                    <a href="mailto:support@internview.in" className="text-muted-foreground hover:text-[#3660a3] transition-colors">
                                        support@internview.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#1b335f]/10 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-[#1b335f]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone Number</h3>
                                    <a href="tel:+919643212235" className="text-muted-foreground hover:text-[#3660a3] transition-colors">
                                        +91 96432 12235
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Hours */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Monday - Saturday:</span>
                                <span>10:00 AM - 7:00 PM</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="font-medium">Sunday:</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" className="bg-[#1b335f]/10 p-3 rounded-full hover:bg-[#1b335f]/20 transition-colors">
                                <Facebook className="w-5 h-5 text-[#1b335f]" />
                            </a>
                            <a href="https://twitter.com" className="bg-[#1b335f]/10 p-3 rounded-full hover:bg-[#1b335f]/20 transition-colors">
                                <Twitter className="w-5 h-5 text-[#1b335f]" />
                            </a>
                            <a href="https://instagram.com" className="bg-[#1b335f]/10 p-3 rounded-full hover:bg-[#1b335f]/20 transition-colors">
                                <Instagram className="w-5 h-5 text-[#1b335f]" />
                            </a>
                            <a href="https://linkedin.com" className="bg-[#1b335f]/10 p-3 rounded-full hover:bg-[#1b335f]/20 transition-colors">
                                <Linkedin className="w-5 h-5 text-[#1b335f]" />
                            </a>
                            <a href="https://youtube.com" className="bg-[#1b335f]/10 p-3 rounded-full hover:bg-[#1b335f]/20 transition-colors">
                                <Youtube className="w-5 h-5 text-[#1b335f]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.599270143437!2d77.6245323!3d12.9344653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14494a1f5ba5%3A0x6bdd875b7ca9e24b!2sKoramangala%2C%20Bengaluru%2C%20Karnataka%20560034!5e0!3m2!1sen!2sin!4v1663057437622!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
        // <ModernComingSoon />
    );
}
