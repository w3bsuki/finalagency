"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/shared/ModeToggle";

export function Header() {
    const navigationItems = [
        {
            title: "Agents",
            description: "Meet our AI agents",
            href: "/agents",
            items: [
                {
                    title: "AIDR",
                    href: "/agents/aidr",
                    description: "Your intelligent research assistant"
                },
                {
                    title: "AIDO",
                    href: "/agents/aido",
                    description: "The operations optimization expert"
                },
                {
                    title: "AIDY",
                    href: "/agents/aidy",
                    description: "Your development companion"
                }
            ]
        },
        {
            title: "Solutions",
            description: "AI Solutions",
            href: "/solutions",
            items: [
                {
                    title: "Business",
                    href: "/solutions/business",
                    description: "Strategic AI implementation"
                },
                {
                    title: "Industry",
                    href: "/solutions/industry",
                    description: "Tailored AI solutions"
                },
                {
                    title: "Government",
                    href: "/solutions/government",
                    description: "Seamless AI integration"
                }
            ]
        },
        {
            title: "About",
            description: "Learn more",
            items: [
                {
                    title: "AI Agents",
                    href: "/about/ai-agents",
                    description: "Learn about our AI agents"
                },
                {
                    title: "Services",
                    href: "/about/services",
                    description: "Our service offerings"
                },
                {
                    title: "AI and Humans",
                    href: "/about/ai-and-humans",
                    description: "How we combine AI with human expertise"
                }
            ]
        }
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full fixed top-0 left-0 z-[100] bg-background">
            <div className="border-b border-border/40">
                <div className="container mx-auto h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => setOpen(!isOpen)} 
                            className="h-9 w-9 lg:hidden -ml-3 relative z-[101]"
                        >
                            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                        <NavigationMenu className="hidden lg:block">
                            <NavigationMenuList className="flex gap-8">
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuTrigger className="text-sm">
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="!w-[450px] p-4">
                                            <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                <div className="flex flex-col h-full justify-between">
                                                    <div className="flex flex-col">
                                                        <p className="text-base">{item.title}</p>
                                                        <p className="text-muted-foreground text-sm">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <Button size="sm" className="mt-10" asChild>
                                                        <Link href={item.href || "/contact"}>
                                                            {item.href ? `All ${item.title}` : "Book a call today"}
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div className="flex flex-col text-sm h-full justify-end">
                                                    {item.items?.map((subItem) => (
                                                        <Link
                                                            href={subItem.href}
                                                            key={subItem.title}
                                                            className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                        >
                                                            <div className="flex flex-col">
                                                                <span>{subItem.title}</span>
                                                                <span className="text-xs text-muted-foreground">{subItem.description}</span>
                                                            </div>
                                                            <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg">
                        SYNTAI
                    </Link>

                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <div className="h-6 w-px bg-border/40 hidden md:block" />
                        <div className="hidden md:flex items-center gap-3">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/contact">Book a Consultation</Link>
                            </Button>
                            <Button size="sm" asChild>
                                <Link href="/contact">Contact us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 top-16 h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-sm z-[99] lg:hidden overflow-y-auto">
                    <div className="container py-6">
                        <div className="space-y-4">
                            {navigationItems.map((item) => (
                                <div key={item.title} className="py-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-lg font-medium">{item.title}</p>
                                        <p className="text-xs text-muted-foreground tracking-wider">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        {item.items?.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                onClick={() => setOpen(false)}
                                                className="flex justify-between items-center text-muted-foreground hover:text-foreground py-2 px-2 rounded-md hover:bg-muted"
                                            >
                                                <div className="flex flex-col">
                                                    <span>{subItem.title}</span>
                                                    <span className="text-xs opacity-70">{subItem.description}</span>
                                                </div>
                                                <MoveRight className="w-4 h-4 stroke-1" />
                                            </Link>
                                        ))}
                                        {item.href && (
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="flex justify-between items-center text-primary hover:text-primary py-2 px-2 rounded-md hover:bg-muted mt-4"
                                            >
                                                <span>All {item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 mt-4 border-t border-border/40">
                                <div className="flex flex-col gap-2">
                                    <Button variant="outline" size="sm" asChild className="w-full">
                                        <Link href="/contact">Book a Consultation</Link>
                                    </Button>
                                    <Button size="sm" asChild className="w-full">
                                        <Link href="/contact">Contact us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
} 