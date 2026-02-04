"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الأنشطة العقارية", href: "/real-estate-services" },
  { name: "الخدمات التجارية والتقنية", href: "/commercial-services" },
  { name: "الإعلام والبرمجيات", href: "/media-software" },
  { name: "من نحن", href: "/about" },
  { name: "البيانات النظامية", href: "/regulatory" },
  { name: "تواصل معنا", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "glass-panel-strong py-3"
            : "glass-panel-subtle py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 space-x-reverse">
              <div className="relative h-12 w-12">
                <Image
                  src="https://res.cloudinary.com/dwck4hd8b/image/upload/v1770188840/%D9%84%D9%88%D9%82%D9%88_%D8%AF%D8%A7%D9%86_vyqeqv.png"
                  alt="مؤسسة درة النزهة للتجارة"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-base text-foreground">
                  مؤسسة درة النزهة للتجارة
                </p>
                <p className="text-xs text-muted-foreground">
                  Durra Al Nuzha Trading Establishment
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Full-Screen Glass Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center",
          "transition-all duration-500 ease-out",
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      >
        {/* Backdrop with glass effect */}
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-2xl",
            "transition-opacity duration-500 ease-out",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "relative z-10 w-full max-w-3xl mx-auto px-6",
            "transition-all duration-500 ease-out",
            mobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute -top-16 left-0 md:left-auto md:-right-16 p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            <X className="h-8 w-8 text-foreground" />
          </button>

          {/* Logo in Menu */}
          <div className="text-center mb-16">
            <Link href="/" className="inline-block">
              <div className="relative h-20 w-20 mx-auto mb-4">
                <Image
                  src="https://res.cloudinary.com/dwck4hd8b/image/upload/v1770188840/%D9%84%D9%88%D9%82%D9%88_%D8%AF%D8%A7%D9%86_vyqeqv.png"
                  alt="مؤسسة درة النزهة للتجارة"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-2xl font-bold text-foreground mb-2">
                مؤسسة درة النزهة للتجارة
              </p>
              <p className="text-sm text-muted-foreground">
                Durra Al Nuzha Trading Establishment
              </p>
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block text-center py-4 px-6 rounded-xl",
                  "text-xl md:text-2xl font-medium",
                  "transition-all duration-300 ease-out",
                  "hover:scale-105 hover:shadow-glass-lg",
                  "bg-white/40 backdrop-blur-xl border border-white/20",
                  pathname === link.href
                    ? "text-primary bg-primary/10 border-primary/30 scale-105"
                    : "text-foreground hover:text-primary hover:bg-white/60"
                )}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-32 h-1 bg-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
