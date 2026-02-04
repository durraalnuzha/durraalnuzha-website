import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { ArrowLeft, Camera, Image as ImageIcon, Code, FileText } from "lucide-react";

const mediaSoftwareServices = [
  {
    title: "أنشطة التصوير التجاري والسياحي",
    description: "خدمات تصوير احترافية للمنشآت التجارية والمعالم السياحية، منفذة وفق تصاريح وزارة الإعلام",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123151/1%EF%B8%8F%E2%83%A33%EF%B8%8F%E2%83%A3_%D8%A3%D9%86%D8%B4%D8%B7%D8%A9_%D8%A7%D9%84%D8%AA%D8%B5%D9%88%D9%8A%D8%B1_%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A_%D9%88%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A_antoup.png",
    icon: Camera,
  },
  {
    title: "أنشطة التصوير الفوتوغرافي",
    description: "خدمات تصوير فوتوغرافي احترافي للمناسبات والأحداث، بدقة عالية واحترافية",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770192504/unnamed_6_z0xyj8.jpg",
    icon: ImageIcon,
  },
  {
    title: "تصميم وبرمجة البرمجيات الخاصة",
    description: "تطوير حلول برمجية مخصصة لتلبية احتياجات العملاء والمؤسسات، وفق معايير الجودة",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123164/1%EF%B8%8F%E2%83%A35%EF%B8%8F%E2%83%A3_%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA_%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9_bvhqlw.png",
    icon: Code,
  },
];

export default function MediaSoftwarePage() {
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
                  خدمات إعلامية وتقنية منفذة وفق الأنظمة والتصاريح
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
                {mediaSoftwareServices.map((service, index) => (
                  <GlassPanel
                    key={index}
                    className="h-full hover:shadow-glass-lg transition-all duration-300"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start space-x-4 space-x-reverse mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                ))}
              </div>

              {/* Regulatory Notice */}
              <div className="mt-12">
                <GlassPanel variant="strong" className="border-r-4 border-r-primary pr-6 pl-6 py-4">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span className="font-semibold text-primary">تنويه:</span> هذه الأنشطة منفذة وفق تصاريح وزارة الإعلام
                    </p>
                  </div>
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
