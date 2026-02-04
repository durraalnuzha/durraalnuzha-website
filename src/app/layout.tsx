import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "مؤسسة درة النزهة للتجارة | Durra Al Nuzha Trading Establishment",
  description: "مؤسسة سعودية نظامية متعددة المجالات مع تركيز واضح على الأنشطة العقارية. نلتزم بأعلى معايير الجودة والنظام في جميع خدماتنا.",
  keywords: [
    "مؤسسة درة النزهة للتجارة",
    "Durra Al Nuzha Trading Establishment",
    "العقار",
    "السعودية",
    "الوساطة العقارية",
    "إدارة الأملاك",
    "المزادات العقارية",
    "الذكاء الاصطناعي",
    "خدمات تسويقية",
    "تصوير تجاري"
  ],
  authors: [{ name: "Durra Al Nuzha Trading Establishment" }],
  openGraph: {
    title: "مؤسسة درة النزهة للتجارة | Durra Al Nuzha Trading Establishment",
    description: "مؤسسة سعودية نظامية متعددة المجالات مع تركيز واضح على الأنشطة العقارية",
    url: "https://durraalnuzha.com",
    siteName: "Durra Al Nuzha Trading Establishment",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "مؤسسة درة النزهة للتجارة",
    description: "مؤسسة سعودية نظامية متعددة المجالات مع تركيز واضح على الأنشطة العقارية",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${tajawal.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
