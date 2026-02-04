import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";

const realEstateServices = [
  {
    title: "المساهمات العقارية",
    description: "استثمارات عقارية استراتيجية متنوعة ومخططة بعناية",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770122957/1%EF%B8%8F%E2%83%A3_%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A7%D8%AA_%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9_eyce5x.png",
  },
  {
    title: "الوساطة العقارية",
    description: "ربط أصحاب العقارات بالمشترين المحتملين بشكل احترافي",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123094/2%EF%B8%8F%E2%83%A3_%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%B7%D8%A9_%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9_hmzxyp.png",
  },
  {
    title: "إدارة الأملاك",
    description: "إدارة احترافية للعقارات السكنية والتجارية",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123102/3%EF%B8%8F%E2%83%A3_%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%A3%D9%85%D9%84%D8%A7%D9%83_wontz4.png",
  },
  {
    title: "المزادات العقارية",
    description: "تنظيم وإدارة مزادات عقارية شفافة وفعالة",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123107/4%EF%B8%8F%E2%83%A3_%D8%A7%D9%84%D9%85%D8%B2%D8%A7%D8%AF%D8%A7%D8%AA_%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9_mvcyku.png",
  },
  {
    title: "إدارة المرافق العقارية",
    description: "صيانة وإدارة مرافق العقارات بكفاءة عالية",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123109/5%EF%B8%8F%E2%83%A3_%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%81%D9%82_%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%D8%A9_iboiye.png",
  },
  {
    title: "التسويق والإعلان العقاري",
    description: "حملات تسويقية متخصصة للعقارات السكنية والتجارية",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123115/6%EF%B8%8F%E2%83%A3_%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82_%D9%88%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86_%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A_cm4rk2.png",
  },
  {
    title: "التحليل العقاري",
    description: "تحليلات سوق عقارية متخصصة ودراسات شاملة",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123120/7%EF%B8%8F%E2%83%A3_%D8%A7%D9%84%D8%AA%D8%AD%D9%84%D9%8A%D9%84_%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A_gkkhen.png",
  },
];

export default function RealEstateServicesPage() {
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
                  الأنشطة العقارية
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  خدمات شاملة في القطاع العقاري، مخولون من الهيئة العامة للعقار
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {realEstateServices.map((service, index) => (
                  <GlassPanel
                    key={index}
                    className="h-full overflow-hidden hover:shadow-glass-lg transition-all duration-300"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </GlassPanel>
                ))}
              </div>

              {/* Notice Banner */}
              <div className="mt-12">
                <GlassPanel variant="strong" className="border-r-4 border-r-primary pr-6 pl-6 py-4">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-primary">تنويه:</span> هذه الأنشطة تخضع لتصاريح الهيئة العامة للعقار
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
