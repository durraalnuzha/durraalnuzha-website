"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { ArrowLeft, Camera, Image as ImageIcon, Code, FileText } from "lucide-react";

const mediaServices = [
  {
    title: "أنشطة التصوير التجاري والسياحي",
    description: "خدمات تصوير احترافية للمنشآت التجارية والمعالم السياحية",
    icon: Camera,
  },
  {
    title: "التصوير الفوتوغرافي",
    description: "خدمات تصوير فوتوغرافي احترافي للمناسبات والأحداث",
    icon: ImageIcon,
  },
  {
    title: "تصميم وبرمجة البرمجيات الخاصة",
    description: "تطوير حلول برمجية مخصصة لتلبية احتياجات العملاء",
    icon: Code,
  },
];

export default function MediaServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                العودة للرئيسية
              </Link>

              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  الإعلام والبرمجيات
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  خدمات إعلامية وتقنية وفق تصاريح وزارة الإعلام
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediaServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <GlassPanel
                      key={index}
                      className="h-full hover:shadow-glass-lg transition-all duration-300"
                    >
                      <div className="p-8">
                        <div className="flex flex-col items-center space-y-4 mb-6">
                          <div className="p-4 bg-primary/10 rounded-lg w-fit">
                            <Icon className="h-12 w-12 text-primary" />
                          </div>
                          <div className="text-center flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </GlassPanel>
                  );
                })}
              </div>

              {/* Notice Banner */}
              <div className="mt-12">
                <GlassPanel variant="strong" className="border-r-4 border-r-primary pr-6 pl-6 py-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-primary">تنويه:</span> هذه الأنشطة تعمل وفق تصاريح وزارة الإعلام
                  </p>
                </GlassPanel>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
