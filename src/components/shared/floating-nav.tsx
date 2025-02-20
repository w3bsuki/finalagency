"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Bot, Building2, Command } from "lucide-react";

export function FloatingNav() {
  const [isVisible, setIsVisible] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Show after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Agents",
      href: "/agents",
      icon: Bot,
    },
    {
      name: "Solutions",
      href: "/solutions",
      icon: Building2,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transform"
        >
          <GlassCard variant="primary" className="p-2 bg-black/40 backdrop-blur-sm">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "gap-2 transition-colors hover:bg-accent hover:text-accent-foreground",
                        isActive && "bg-accent/50 text-accent-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline-block">
                        {item.name}
                      </span>
                    </Button>
                  </Link>
                );
              })}
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                onClick={() => {
                  const e = new KeyboardEvent("keydown", {
                    key: "k",
                    metaKey: true,
                  });
                  document.dispatchEvent(e);
                }}
              >
                <Command className="h-4 w-4" />
                <span className="hidden sm:inline-block">Search</span>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </nav>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 