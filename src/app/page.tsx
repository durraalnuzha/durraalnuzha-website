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
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                مؤسسة درة النزهة للتجارة
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-foreground/70 font-light">
                Durra Al Nuzha Trading Establishment
              </p>

              <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">
                مؤسسة سعودية نظامية متعددة المجالات مع تركيز واضح على الأنشطة العقارية
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/media-software">
                  <Button
                   size="lg"
                  className="px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl"
                  >
                    استكشف خدماتنا
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base border-border hover:bg-primary/10 rounded-xl"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Real Estate */}
                <Link href="/real-estate-services">
                  <GlassPanel className="p-4 sm:p-6 lg:p-8 h-full hover:shadow-glass-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">الأنشطة العقارية</h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed line-clamp-2">
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
                  <GlassPanel className="p-8 h-full transition-all duration-300 md:hover:shadow-glass-lg md:hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
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
                        <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6>
                <Link href="/real-estate-services">
                  <GlassPanel className="p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 md:hover:shadow-glass-lg md:hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg w-fit mb-4">
                        <Building2 className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                          الأنشطة العقارية
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                          خدمات شاملة في القطاع العقاري
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm sm:text-base">
                          <span>استكشف الخدمات</span>
                          <ArrowRight className="mr-2 h-4 w-4" />
                        </div>
                       </div>
                      </div>
                     </GlassPanel>
                   </Link>
                
                <Link href="/commercial-services">
                  <GlassPanel className="p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 md:hover:shadow-glass-lg md:hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg w-fit mb-4">
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                          الخدمات التجارية والتقنية 
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                          التجارة بالجملة، UI/UX، الذكاء الاصطناعي، التسويق
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm sm:text-base">
                          <span>استكشف الخدمات</span>
                          <ArrowRight className="mr-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/media-software">
                  <GlassPanel className="p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 md:hover:shadow-glass-lg md:hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg w-fit mb-4">
                        <FileText className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                          الإعلام والبرمجيات
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                           التصوير الفوتوغرافي والتجاري، برمجة البرمجيات الخاصة
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm sm:text-base">
                          <span>استكشف الخدمات</span>
                          <ArrowRight className="mr-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/about">
                  <GlassPanel className="p-4 sm:p-6 transition-all duration-300 md:hover:shadow-glass-lg cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1">من نحن</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          تعرف علينا وعلى التزامنا بالتميز
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/regulatory">
                  <GlassPanel className="p-4 sm:p-6 transition-all duration-300 md:hover:shadow-glass-lg cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Info className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1">البيانات النظامية</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          السجل التجاري، الرقم الضريبي، التراخيص
                        </p>
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                <Link href="/contact">
                  <GlassPanel className="p-4 sm:p-6 transition-all duration-300 md:hover:shadow-glass-lg cursor-pointer">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-1">تواصل معنا</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
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
