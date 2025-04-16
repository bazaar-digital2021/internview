export type NavItem = {
    title: string;
    href?: string;
    items?: NavItem[];
};

export type Navigation = NavItem[];

export const navigation: Navigation = [

    {
        title: "Courses",
        items: [
            {
                title: "Computer Science",
                items: [
                    {
                        title: "Android Development",
                        href: "/courses/android-development",
                    },
                    {
                        title: "Artificial Intelligence",
                        href: "/courses/artificial-intelligence",
                    },
                    {
                        title: "Machine Learning",
                        href: "/courses/machine-learning",
                    },
                    {
                        title: "Cloud Computing- AWS",
                        href: "/courses/cloud-computing-aws",
                    },
                    {
                        title: "Cyber Security",
                        href: "/courses/cyber-security",
                    },
                    {
                        title: "Data Science",
                        href: "/courses/data-science",
                    },
                    {
                        title: "Java",
                        href: "/courses/java",
                    },
                    {
                        title: "Python",
                        href: "/courses/python",
                    },
                    {
                        title: "Web Development",
                        href: "/courses/web-development",
                    },

                ]
            },
            {
                title: "Management",
                items: [
                    {
                        title: "Human Resources",
                        href: "/courses/human-resources",
                    },
                    {
                        title: "Finance",
                        href: "/courses/finance",
                    },
                    {
                        title: "Sales & Marketing",
                        href: "/courses/sales-and-marketing",
                    },
                    {
                        title: "Digital Marketing",
                        href: "/courses/digital-marketing",
                    },
                    {
                        title: "Stock Market",
                        href: "/courses/stock-market",
                    },
                    {
                        title: "Industrial Biotechnology",
                        href: "/courses/industrial-biotechnology",
                    },

                ]
            }

        ]
    },
    {
        title: 'Placement Hub',
        items: [
            {
                title: "Overview",
                href: "/placement/overview",
            },
            {
                title: 'Job Opportunities',
                href: "/placement/job-opportunities",
            },
            {
                title: 'Placement Statistics',
                href: "/placement/statistics",
            },
            {
                title: 'Company Testimonials',
                href: "/placement/testimonials",
            }
        ],
    }

]; 