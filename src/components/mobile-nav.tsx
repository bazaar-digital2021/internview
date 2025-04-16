"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavItem } from "@/lib/navigation"
import { ChevronDown } from "lucide-react"

interface MobileNavProps {
    items: NavItem[]
    setOpen: (open: boolean) => void
}

export function MobileNav({ items, setOpen }: MobileNavProps) {
    return (
        <div className="flex flex-col py-2 h-[calc(100vh-80px)] overflow-y-auto bg-white">
            <nav className="px-6">
                {items.map((item, index) => (
                    <MobileNavItem
                        key={index}
                        item={item}
                        setOpen={setOpen}
                        isLast={index === items.length - 1}
                    />
                ))}
            </nav>
        </div>
    )
}

interface MobileNavItemProps {
    item: NavItem
    setOpen: (open: boolean) => void
    depth?: number
    isLast?: boolean
}

function MobileNavItem({ item, setOpen, depth = 0, isLast = false }: MobileNavItemProps) {
    const [expanded, setExpanded] = useState(false)

    const toggleExpanded = (e: React.MouseEvent) => {
        e.stopPropagation()
        setExpanded(!expanded)
    }

    // Calculate appropriate padding based on depth
    const paddingLeft = depth * 12 + 12

    if (!item.items) {
        return (
            <Link
                href={item.href || "#"}
                className="flex items-center py-3 text-base font-medium text-gray-700 hover:text-primary"
                style={{ paddingLeft: `${paddingLeft}px` }}
                onClick={() => setOpen(false)}
            >
                {item.title}
            </Link>
        )
    }

    return (
        <div>
            <button
                className={`flex w-full items-center justify-between py-3 text-base font-medium ${expanded ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors`}
                style={{ paddingLeft: `${paddingLeft}px` }}
                onClick={toggleExpanded}
            >
                {item.title}
                <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mr-1"
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {expanded && item.items && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden pl-3 border-l-2 ml-6 border-primary/20"
                    >
                        {item.items.map((subItem, i) => (
                            <MobileNavItem
                                key={i}
                                item={subItem}
                                setOpen={setOpen}
                                depth={depth + 1}
                                isLast={i === (item.items?.length || 0) - 1}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
} 