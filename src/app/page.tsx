"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { HeroVideo } from "@/components/hero-video";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, FileText, Zap, Users, Info, Phone } from "lucide-react";

const heroVideoUrl = "https://res.cloudinary.com/dwck4hd8b/video/upload/v1770187266/AZwnXF5jRSbsF8aCfhgwsg-AZwnXF5jtJ7auCnZ6Or6QA_ycxt7g.mp4";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Cinematic Video */}
        <HeroVideo videoUrl={heroVideoUrl}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                مؤسسة درة النزهة للتجارة
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light">
                Durra Al Nuzha Trading Establishment
              </p>

              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                مؤسسة سعودية نظامية متعددة المجالات مع تركيز واضح على الأنشطة العقارية
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/media-software">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 text-base"
                  >
                    استكشف خدماتنا
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-primary/10 px-8 text-base"
                  >
                    تواصل معنا
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </HeroVideo>

        {/* Overview Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  مجالاتنا
                </h2>
                <p className="text-muted-foreground text-lg">
                  خدمات متنوعة واحترافية تلبي احتياجات السوق
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Real Estate */}
                <Link href="/real-estate-services">
                  <GlassPanel className="p-8 h-full hover:shadow-glass-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">الأنشطة العقارية</h3>
                        <p className="text-muted-foreground mb-4">
                          خدمات شاملة في القطاع العقاري
                        </p>
                        <div className="flex items-center text-primary font-medium">
                          <span>استكشف الخدمات</span>
                          <ArrowRight className="mr-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                {/* Commercial & Tech */}
                <Link href="/commercial-services">
                  <GlassPanel className="p-8 h-full hover:shadow-glass-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">الخدمات التجارية والتقنية</h3>
                        <p className="text-muted-foreground mb-4">
                          التجارة بالجملة، UI/UX، الذكاء الاصطناعي، التسويق
                        </p>
                        <div className="flex items-center text-primary font-medium">
                          <span>استكشف الخدمات</span>
                          <ArrowRight className="mr-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                {/* Media & Software */}
                <Link href="/media-software">
                  <GlassPanel className="p-8 h-full hover:shadow-glass-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-center flex-1">
                        <h3 className="text-xl font-semibold mb-3">الإعلام والبرمجيات</h3>
                        <p className="text-muted-foreground mb-4">
                          التصوير الفوتوغرافي والتجاري، برمجة البرمجيات الخاصة
                        </p>
                        <div className="flex items-center text-primary font-medium">
                          <span>استكشف الخدمات</span>
                          <ArrowRight className="mr-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  روابط سريعة
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/real-estate-services">
                  <GlassPanel className="p-8 hover:shadow-glass-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">أنشطة العقارية</h3>
                        <p className="text-muted-foreground text-sm">
                          المساهمات، الوساطة العقارية، إدارة الأملاك، المزادات، إدارة المرافق، التسويق والإعلان، التحليل
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/commercial-services">
                  <GlassPanel className="p-8 hover:shadow-glass-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Zap className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">الخدمات التجارية والتقنية</h3>
                        <p className="text-muted-foreground text-sm">
                          التجارة بالجملة للحوم، UI/UX، الذكاء الاصطناعي، التسويق
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/media-software">
                  <GlassPanel className="p-8 hover:shadow-glass-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">الإعلام والبرمجيات</h3>
                        <p className="text-muted-foreground text-sm">
                          التصوير الفوتوغرافي والتجاري، برمجة البرمجيات الخاصة
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/about">
                  <GlassPanel className="p-8 hover:shadow-glass-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Users className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">من نحن</h3>
                        <p className="text-muted-foreground text-sm">
                          تعرف علينا وعلى التزامنا بالتميز
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/regulatory">
                  <GlassPanel className="p-8 hover:shadow-glass-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Info className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">البيانات النظامية</h3>
                        <p className="text-muted-foreground text-sm">
                          السجل التجاري، الرقم الضريبي، التراخيص
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/contact">
                  <GlassPanel className="p-8 hover:shadow-glass-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-1">تواصل معنا</h3>
                        <p className="text-muted-foreground text-sm">
                          هاتف جديد، واتساب، البريد، العنوان
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
