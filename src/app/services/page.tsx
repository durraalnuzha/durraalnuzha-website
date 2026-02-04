import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { ArrowLeft, ArrowRight, Building2, Zap, FileText } from "lucide-react";

export default function ServicesPage() {
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
                  خدماتنا
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  خدمات متنوعة واحترافية تلبي احتياجات السوق
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Real Estate */}
                <Link href="/real-estate-services">
                  <GlassPanel className="p-8 h-full hover:shadow-glass-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">الأنشطة العقارية</h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        خدمات شاملة في العقار من المساهمات إلى التحليل العقاري
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        <span>7 خدمات</span>
                        <ArrowRight className="mr-2 h-4 w-4" />
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
                      <h3 className="text-xl font-semibold mb-3">الخدمات التجارية والتقنية</h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        التجارة بالجملة، UI/UX، الذكاء الاصطناعي، التسويق
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        <span>4 خدمات</span>
                        <ArrowRight className="mr-2 h-4 w-4" />
                      </div>
                    </div>
                  </GlassPanel>
                </Link>

                {/* Media & Software */}
                <Link href="/media-services">
                  <GlassPanel className="p-8 h-full hover:shadow-glass-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col h-full">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">الإعلام والبرمجيات</h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        التصوير الفوتوغرافي والتجاري، برمجة البرمجيات الخاصة
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        <span>3 خدمات</span>
                        <ArrowRight className="mr-2 h-4 w-4" />
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
