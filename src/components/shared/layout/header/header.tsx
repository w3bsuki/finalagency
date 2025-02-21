"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Agents", href: "/agents" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
  ];

  const whatsappLink = "https://wa.me/your_number_here"; // Replace with your WhatsApp number

  return (
    <nav className="w-full border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-light tracking-wider hover:text-white/90 transition-colors"
          >
            SYNTAI
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-lg font-light tracking-wide transition-colors border-b",
                  pathname === item.href
                    ? "text-white bg-white/10 border-transparent"
                    : "text-white/80 hover:text-white border-transparent hover:border-white/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* WhatsApp Button - Hidden on mobile */}
            <div className="relative hidden md:block">
              <div className="relative">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="relative h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4" />
                  </Link>
                </Button>
                <div className="absolute inset-0 rounded-md overflow-hidden">
                  <BorderBeam 
                    colorFrom="rgba(255, 255, 255, 0.2)"
                    colorTo="rgba(255, 255, 255, 0.1)"
                    duration={4}
                    size={20}
                  />
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2 text-base font-light tracking-wide rounded-md transition-colors",
                  pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}
            {/* WhatsApp Link in Mobile Menu */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-base font-light tracking-wide rounded-md text-white/60 hover:text-white hover:bg-white/5"
            >
              <Phone className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 