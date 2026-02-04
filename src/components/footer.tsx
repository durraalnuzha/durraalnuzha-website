"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="mt-auto">
      <div className="glass-panel-strong border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="relative h-16 w-16">
                  <Image
                    src="https://res.cloudinary.com/dwck4hd8b/image/upload/v1770188840/%D9%84%D9%88%D9%82%D9%88_%D8%AF%D8%A7%D9%86_vyqeqv.png"
                    alt="مؤسسة درة النزهة للتجارة"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  مؤسسة درة النزهة للتجارة
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Durra Al Nuzha Trading Establishment
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  مؤسسة سعودية نظامية متعددة المجالات مع تركيز واضح على الأنشطة العقارية
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base text-foreground">روابط سريعة</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("#about")}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  من نحن
                </button>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  خدماتنا
                </button>
                <button
                  onClick={() => scrollToSection("#legal")}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  البيانات النظامية
                </button>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  تواصل معنا
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base text-foreground">بيانات التواصل</h4>
              <div className="space-y-3">
                <a
                  href="mailto:info@durraalnuzha.com"
                  className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@durraalnuzha.com</span>
                </a>
                <a
                  href="tel:+966573972857"
                  className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">+966 57 397 2857</span>
                </a>
                <div className="flex items-start space-x-2 space-x-reverse text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    2554 الغيث، 8281، حي العزيزية، جدة 8281، المملكة العربية السعودية
                  </span>
                </div>
              </div>
            </div>

            {/* Social and WhatsApp */}
            <div className="space-y-4">
              <h4 className="font-semibold text-base text-foreground">تواصل معنا</h4>
              <div className="space-y-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  إرسال رسالة
                </Button>
                <a
                  href="https://wa.me/966573972857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#25D366] hover:bg-[#128C7E] text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  واتساب
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} مؤسسة درة النزهة للتجارة. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Durra Al Nuzha Trading Establishment © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
