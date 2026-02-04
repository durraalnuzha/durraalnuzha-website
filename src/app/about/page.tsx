import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { ArrowLeft, CheckCircle, Award, Target, Users } from "lucide-react";

const values = [
  {
    title: "نظام متكامل",
    description: "نعمل وفق منظومة مؤسسية متكاملة تضمن الشفافية والالتزام بجميع الأنظمة والتعليمات في المملكة",
    icon: Award,
  },
  {
    title: "تراخيص معتمدة",
    description: "حاصلون على جميع التراخيص اللازمة من الجهات المختصة لممارسة أنشطتنا في مختلف المجالات",
    icon: CheckCircle,
  },
  {
    title: "التزام بالمعايير",
    description: "نلتزم بأعلى معايير الجودة والأمانة المهنية في جميع تعاملاتنا مع العملاء والشركاء",
    icon: Target,
  },
  {
    title: "توسع منظم",
    description: "نسعى للتوسع في خدماتنا بشكل مدروس ومنظم يضمن تقديم قيمة مضافة لعملائنا",
    icon: Users,
  },
];

export default function AboutPage() {
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
                  من نحن
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  مؤسسة رائدة تلتزم بأعلى معايير الجودة والنظام
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <GlassPanel
                      key={index}
                      className="p-8 hover:shadow-glass-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
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

        {/* About Content */}
        <section className="pb-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <GlassPanel className="p-8 md:p-12">
                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    مؤسسة درة النزهة للتجارة هي كيان سعودي نظامي يقدم مجموعة متكاملة من الخدمات في مجالات متعددة، مع تركيز خاص على القطاع العقاري.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    نلتزم في عملنا بالأنظمة والتعليمات السارية في المملكة العربية السعودية، ونسعى دائماً لتحقيق التميز والثقة مع جميع عملائنا وشركائنا.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    من خلال تنوع خدماتنا وتخصصنا في مجالات متعددة، نقدم قيمة مضافة لعملائنا مع الحفاظ على أعلى معايير الجودة والاحترافية.
                  </p>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
