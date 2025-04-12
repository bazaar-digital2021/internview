'use client';
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';



import RightSideNav from '@/components/rightSide-nav';
import { Button } from '@/components/ui/button';
import { useRouter } from '@bprogress/next/app';




export default async function Navbar() {
    const router = useRouter();
    const menus = [

        {
            title: "Courses",

            navMenu: [
                {
                    title: "Web Development",
                    href: "/courses/web-development",
                },
                {
                    title: "Data Science",
                    href: "/courses/data-science",
                },
                {
                    title: "Digital Marketing",
                    href: "/courses/digital-marketing",
                },

            ],
        },
        {
            title: "Placement Hub",
            description: "Get hired by top companies.",
            navMenu: [
                {
                    title: "Job Listings",
                    href: "/placement/job-listings",
                },
                {
                    title: "Resume Builder",
                    href: "/placement/resume-builder",
                },
                {
                    title: "Interview Prep",
                    href: "/placement/interview-prep",
                },
            ],
        },
    ]
    return (
        <div className='sticky top-0 z-40 w-full shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center  py-2 px-4 md:px-8 lg:px-12'>
            <ul className='hidden md:flex gap-4 justify-start items-center'>
                <Link href="/" className='block relative '>
                    <Image src='/logo/name-logo.png' alt='logo' height={70} width={70} className='object-contain' />
                </Link>
                {menus.map((menu, index) => (
                    <NavigationMenu key={index}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-start'>{menu.title}</NavigationMenuTrigger>
                                <NavigationMenuContent className={`min-w-48 grid ${menu.navMenu.length > 5 ? 'grid-cols-2 min-w-80' : 'grid-cols-1'}`}>
                                    {menu.navMenu.map((item) => (
                                        <NavigationMenuLink className='block w-full px-4 py-2 hover:bg-muted' key={item.title} href={item.href}>{item.title}</NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                ))}
            </ul>
            {/* THIS IS MOBILE VIEW NAV SACTION */}
            <ul className='hidden md:flex gap-4 items-center'>
                <Button variant="outline" onClick={() => router.push('/contact-us')}>Join as a Company</Button>
                <Button onClick={() => router.push('/contact-us')}>Join as a Student</Button>
            </ul>

            <ul className='flex w-full gap-4 items-center justify-between px-4   md:hidden'>
                {/* <MobileMenu menus={menus} /> */}
                <Link href="/" className='block relative overflow-hidden'>
                    <Image src='/logo/name-logo.png' alt='logo' height={50} width={50} className='object-contain' />
                </Link>
                <ul className='flex gap-4 items-center'>
                    <Button variant="outline" onClick={() => router.push('/contact-us')}>Join as a Company</Button>
                    <Button onClick={() => router.push('/contact-us')}>Join as a Student</Button>
                </ul>
                <RightSideNav menus={menus} />
            </ul>
        </div>
    )
}
