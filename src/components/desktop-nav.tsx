"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { NavItem } from "@/lib/navigation"
import { ChevronDown } from "lucide-react"

interface DesktopNavProps {
    items: NavItem[]
}

export function DesktopNav({ items }: DesktopNavProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Close all dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setActiveIndex(null);
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-end w-full space-x-4">
            {items.map((item, index) => (
                <NavItemComponent
                    key={index}
                    item={item}
                    index={index}
                    isActive={activeIndex === index}
                    setActiveIndex={setActiveIndex}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    )
}

interface NavItemComponentProps {
    item: NavItem;
    index: number;
    isActive: boolean;
    setActiveIndex: (index: number | null) => void;
    isLast: boolean;
}

function NavItemComponent({ item, index, isActive, setActiveIndex, isLast }: NavItemComponentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownPosition, setDropdownPosition] = useState<'left' | 'center' | 'right'>('center');

    // Determine dropdown position based on viewport
    useEffect(() => {
        if (isActive && ref.current && dropdownRef.current) {
            const rect = ref.current.getBoundingClientRect();
            const dropdownWidth = 224; // w-56 = 14rem = 224px
            const viewportWidth = window.innerWidth;
            const centerPosition = rect.left + (rect.width / 2) - (dropdownWidth / 2);

            if (centerPosition < 10) {
                // Too close to left edge
                setDropdownPosition('left');
            } else if (centerPosition + dropdownWidth > viewportWidth - 10) {
                // Too close to right edge
                setDropdownPosition('right');
            } else {
                setDropdownPosition('center');
            }
        }
    }, [isActive]);

    // Handle mouse enter/leave with delay for better UX
    const handleMouseEnter = () => {
        if (item.items) {
            setActiveIndex(index);
        }
    };

    const handleMouseLeave = () => {
        // We don't immediately close on mouse leave to allow moving to the dropdown
    };

    // Stop propagation to prevent document click from closing the dropdown
    const handleClick = (e: React.MouseEvent) => {
        if (item.items) {
            e.stopPropagation();
            setActiveIndex(isActive ? null : index);
        }
    };

    if (!item.items) {
        return (
            <Link
                href={item.href || "#"}
                className="px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 text-gray-700 hover:text-primary"
            >
                {item.title}
            </Link>
        )
    }

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`flex items-center text-start gap-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${isActive
                    ? "bg-primary text-white"
                    : "text-white bg-primary hover:bg-primary hover:text-white/80"
                    }`}
                onClick={handleClick}
            >
                {item.title}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full z-50 mt-1 w-56 rounded-md bg-white p-1 shadow-lg ring-1 ring-black/5 border border-gray-100 ${dropdownPosition === 'left'
                            ? 'left-0'
                            : dropdownPosition === 'right'
                                ? 'right-0'
                                : 'left-1/2 -translate-x-1/2'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {item.items && item.items.map((subItem, i) => (
                            <DropdownItem
                                key={i}
                                item={subItem}
                                depth={0}
                                setParentIndex={setActiveIndex}
                                isLast={i === (item.items?.length || 0) - 1}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface DropdownItemProps {
    item: NavItem;
    depth?: number;
    setParentIndex: (index: number | null) => void;
    isLast: boolean;
}

function DropdownItem({ item, depth = 0, setParentIndex, isLast }: DropdownItemProps) {
    const [open, setOpen] = useState(false)
    const itemRef = useRef<HTMLDivElement>(null)

    const handleMouseEnter = () => {
        if (item.items) {
            setOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (item.items) {
            setOpen(false);
        }
    };

    const handleClick = () => {
        if (!item.items) {
            // Close the main dropdown when clicking a leaf item
            setParentIndex(null);
        }
    };

    if (!item.items) {
        return (
            <Link
                href={item.href || "#"}
                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                onClick={handleClick}
            >
                {item.title}
            </Link>
        )
    }

    return (
        <div
            ref={itemRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 ${open ? "bg-primary/5 text-primary" : "hover:bg-primary/5 hover:text-primary"}`}
            >
                {item.title}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && item.items && (
                    <motion.div
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full top-0 z-50 mt-0 w-56 rounded-md bg-white p-1 shadow-lg ring-1 ring-black/5 border border-gray-100"
                        style={{
                            marginLeft: "2px",
                            // Handle right edge overflow
                            ...(itemRef.current && itemRef.current.getBoundingClientRect().left + 500 > window.innerWidth
                                ? { right: '100%', left: 'auto', marginRight: '2px', marginLeft: 0 }
                                : {})
                        }}
                    >
                        {item.items && item.items.map((subItem, i) => (
                            <DropdownItem
                                key={i}
                                item={subItem}
                                depth={depth + 1}
                                setParentIndex={setParentIndex}
                                isLast={i === (item.items?.length || 0) - 1}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
} 