import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { ArrowLeft, FileText, Building2, CheckCircle } from "lucide-react";

const regulatoryData = [
  {
    title: "السجل التجاري",
    value: "7036151434",
    icon: FileText,
  },
  {
    title: "الرقم الضريبي",
    value: "311912656900003",
    icon: FileText,
  },
];

const licenses = [
  {
    title: "الهيئة العامة للعقار",
    description: "ترخيص لممارسة الأنشطة العقارية",
    icon: Building2,
  },
  {
    title: "وزارة الإعلام",
    description: "ترخيص للأنشطة الإعلامية",
    icon: FileText,
  },
  {
    title: "وزارة السياحة",
    description: "ترخيص للأنشطة السياحية",
    icon: CheckCircle,
  },
];

export default function RegulatoryPage() {
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
                  البيانات النظامية
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  معلومات رسمية معتمدة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Data */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <GlassPanel variant="strong" className="p-8 md:p-12">
                <div className="space-y-8">
                  {regulatoryData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={index < regulatoryData.length - 1 ? "border-b border-border/50 pb-8" : ""}
                      >
                        <div className="flex items-center space-x-4 space-x-reverse mb-3">
                          <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                          <h3 className="text-2xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-3xl font-bold text-primary pr-10" dir="ltr">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* Licenses */}
        <section className="pb-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  التراخيص
                </h2>
                <p className="text-muted-foreground text-lg">
                  التراخيص المعتمدة من الجهات الحكومية المختصة
                </p>
              </div>

              <div className="space-y-6">
                {licenses.map((license, index) => {
                  const Icon = license.icon;
                  return (
                    <GlassPanel
                      key={index}
                      className="p-6 hover:shadow-glass-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {license.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {license.description}
                          </p>
                        </div>
                      </div>
                    </GlassPanel>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
