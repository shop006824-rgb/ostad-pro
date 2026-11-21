import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({ weight: ["400", "500", "700", "800"], subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "بوابة الأستاذ المغربي",
  description: "منصة لأساتذة التعليم الابتدائي بالمغرب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} bg-[#F5EFE0] text-gray-800 min-h-screen flex flex-col`}>
        {/* القائمة العلوية */}
        <nav className="bg-green-800 text-white p-4 shadow-md">
          <div className="hidden md:flex gap-6 font-medium">
           <a href="/" className="hover:text-green-200 transition">الرئيسية</a>
           <a href="/riada" className="hover:text-green-200 transition">مدارس الريادة</a>
           <a href="/career" className="hover:text-green-200 transition">المسار المهني</a>
           <a href="/assistant" className="hover:text-green-200 transition">🤖 المساعد الذكي</a>
         </div>
        </nav>

        {/* محتوى الصفحة */}
        <main className="flex-grow">
          {children}
        </main>

        {/* التذييل */}
        <footer className="bg-green-800 text-white text-center p-6 mt-12">
          <p className="font-medium">© 2026 بوابة الأستاذ المغربي - جميع الحقوق محفوظة</p>
        </footer>
      </body>
    </html>
  );
}