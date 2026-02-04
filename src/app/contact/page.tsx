"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GlassPanel } from "@/components/glass-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "تم الإرسال بنجاح",
          description: "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "عذراً، لم نتمكن من إرسال رسالتك. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  تواصل معنا
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  نسعد بتواصلكم معنا
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <GlassPanel className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">الموضوع</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-2 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      {isSubmitting ? (
                        "جاري الإرسال..."
                      ) : (
                        <>
                          <Send className="ml-2 h-4 w-4" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                </GlassPanel>

                {/* Contact Information */}
                <div className="space-y-6">
                  <GlassPanel className="p-8">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 space-x-reverse mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <MessageCircle className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">واتساب</h3>
                        </div>
                        <a
                          href="https://wa.me/966573972857"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 space-x-reverse text-primary hover:text-primary-hover transition-colors"
                        >
                          <span dir="ltr" className="text-lg">+966 57 397 2857</span>
                        </a>
                      </div>

                      <div className="border-t border-border/50 pt-6">
                        <div className="flex items-center space-x-3 space-x-reverse mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">البريد الإلكتروني</h3>
                        </div>
                        <p className="text-muted-foreground">info@durraalnuzha.com</p>
                      </div>

                      <div className="border-t border-border/50 pt-6">
                        <div className="flex items-center space-x-3 space-x-reverse mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-lg">العنوان</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          2554 الغيث، 8281، حي العزيزية،<br />
                          جدة 8281، المملكة العربية السعودية
                        </p>
                      </div>
                    </div>
                  </GlassPanel>

                  <GlassPanel className="p-8 text-center">
                    <a
                      href="https://wa.me/966573972857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 space-x-reverse bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-6 rounded-lg transition-colors duration-200 text-sm md:text-base font-medium w-full"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>تواصل معنا عبر واتساب</span>
                    </a>
                  </GlassPanel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
