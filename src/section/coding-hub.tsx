'use client';


import React, { useState, useRef } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay'

const codingChallenges = [
    {
        id: 1,
        title: "Tower of Hanoi",
        image: "/tower-of-hanoi.png", // Replace with your actual image path
        description: "This problem assesses skills in recursion, algorithm design, and understanding of basic data structures.",
        backgroundColor: "#FFDAB9", // Peach background
        companies: ["amazon", "facebook", "infosys", "email", "accenture"],
    },
    {
        id: 2,
        title: "4 Sum Problem",
        image: "/4-sum-problem.png", // Replace with your actual image path
        description: "Code on this problem to assess skills in hash tables, algorithms, arrays, and understanding of basic data structures.",
        backgroundColor: "#FFFFFF", // White background
        companies: ["facebook", "apple", "infosys", "email", "accenture"],
    },
    {
        id: 3,
        title: "Reverse A Linked List",
        image: "/reverse-linked-list.png", // Replace with your actual image path
        description: "It is a classic problem to test the knowledge on linked lists, pointers, and basic algorithmic skills.",
        backgroundColor: "#FFFF99", // Light yellow background
        companies: ["amazon", "dell", "infosys", "target", "cisco"],
    },
    {
        id: 4,
        title: "Binary Search Tree",
        image: "/binary-search-tree.png", // Replace with your actual image path
        description: "Challenge yourself with implementing and traversing binary search trees, an essential data structure for efficient search operations.",
        backgroundColor: "#E6F7FF", // Light blue background
        companies: ["google", "microsoft", "oracle", "adobe", "salesforce"],
    },
    {
        id: 5,
        title: "Dynamic Programming - Knapsack",
        image: "/knapsack-problem.png", // Replace with your actual image path
        description: "Solve the classic knapsack problem using dynamic programming to optimize selection with weight constraints.",
        backgroundColor: "#F0E6FF", // Light purple background
        companies: ["netflix", "uber", "linkedin", "twitter", "goldman"],
    },
    {
        id: 6,
        title: "Graph Algorithms: Dijkstra's",
        image: "/graph-algorithms.png", // Replace with your actual image path
        description: "Implement Dijkstra's algorithm to find the shortest path in a weighted graph, an essential skill for network-related problems.",
        backgroundColor: "#E6FFE6", // Light green background
        companies: ["amazon", "google", "meta", "apple", "microsoft"],
    },
];




export default function CodingHub() {
    const plugins = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugins.current]}
            className="w-full px-4 py-16 bg-primary/60 bg-opacity-30 overflow-hidden"
        >
            <CarouselContent className='flex gap-5'>
                {codingChallenges.map((challenge) => (
                    <CarouselItem key={challenge.id} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className=" aspect-square items-center justify-center p-6">
                                    <Image src={challenge.image} alt={challenge.title} width={200} height={200} />
                                    <h2 className="text-lg font-semibold">{challenge.title}</h2>
                                    <p className="text-sm text-gray-600">{challenge.description}</p>
                                    <CardFooter>
                                        <div className="flex gap-2 mt-4">
                                            {challenge.companies.map((company) => (
                                                <Image
                                                    key={company}
                                                    src={`/icons/company/${company}.png`}
                                                    alt={company}
                                                    width={30}
                                                    height={30}
                                                    className="object-cover"
                                                />
                                            ))}
                                        </div>
                                    </CardFooter>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


