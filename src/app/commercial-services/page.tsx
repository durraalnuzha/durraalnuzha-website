import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const commercialServices = [
  {
    title: "البيع بالجملة للحوم",
    description: "توريد وتوزيع منتجات اللحوم بالجملة للمؤسسات والشركات",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123126/8%EF%B8%8F%E2%83%A3_%D8%A7%D9%84%D8%A8%D9%8A%D8%B9_%D8%A8%D8%A7%D9%84%D8%AC%D9%85%D9%84%D8%A9_%D9%84%D9%84%D8%AD%D9%88%D9%85_rwptca.png",
  },
  {
    title: "تصميم واجهة وتجربة المستخدم (UI/UX)",
    description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام للتطبيقات والمواقع",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123134/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D9%88%D8%A7%D8%AC%D9%87%D8%A9_%D9%88%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85_UI_UX_xudm7u.png",
  },
  {
    title: "تقنيات الذكاء الاصطناعي",
    description: "حلول متقدمة بالذكاء الاصطناعي لتحسين الكفاءة والإنتاجية",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123140/1%EF%B8%8F%E2%83%A31%EF%B8%8F%E2%83%A3_%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA_%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1_%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A_mj1vhb.png",
  },
  {
    title: "تقديم خدمات تسويقية نيابةً عن الغير",
    description: "خدمات تسويقية شاملة نيابة عن الشركات والأفراد",
    image: "https://res.cloudinary.com/dwck4hd8b/image/upload/v1770123145/1%EF%B8%8F%E2%83%A32%EF%B8%8F%E2%83%A3_%D8%AA%D9%82%D8%AF%D9%8A%D9%85_%D8%AE%D8%AF%D9%85%D8%A7%D8%AA_%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9_%D9%86%D9%8A%D8%A7%D8%A8%D8%A9%D9%8B_%D8%B9%D9%86_%D8%A7%D9%84%D8%BA%D9%8A%D8%B1_btjuzr.png",
  },
];

export default function CommercialServicesPage() {
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
                  الخدمات التجارية والتقنية
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  أنشطة تجارية وتقنية متنوعة لا تتطلب ترخيص خاص
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {commercialServices.map((service, index) => (
                  <GlassPanel
                    key={index}
                    className="h-full overflow-hidden hover:shadow-glass-lg transition-all duration-300"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
