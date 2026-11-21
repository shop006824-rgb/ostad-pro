import Link from "next/link";

export default function RiadaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-green-800 mb-2">🏫 مدارس الريادة</h1>
      <p className="text-gray-600 mb-10 text-lg">كل ما تحتاجه لتطبيق مشروع مدارس الريادة في قسمك، منظمًا وجاهزًا.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/riada/portfolio" className="bg-white p-8 rounded-2xl shadow-md border-r-4 border-green-600 hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-3">📁 الملف التراكمي</h3>
          <p className="text-gray-600">بطاقة الأستاذ، تقارير TARL، شبكات التقويم، دراسات الحالة — مع قوالب جاهزة للتعديل.</p>
        </Link>
        <Link href="/riada/mindmaps" className="bg-white p-8 rounded-2xl shadow-md border-r-4 border-yellow-500 hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-3">🧠 البطائق الذهنية</h3>
          <p className="text-gray-600">بطائق منظمة حسب المستوى والمادة والأسبوع. جاهزة للعرض والطباعة.</p>
        </Link>
      </div>
    </div>
  );
}