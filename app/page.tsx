import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">كل ما يحتاجه الأستاذ المغربي في مكان واحد</h2>
        <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto">
          وثائق مدارس الريادة، الملف التراكمي، البطائق الذهنية، والمسار المهني — منظمة وجاهزة للاستخدام.
        </p>
      </section>

      <section className="max-w-4xl mx-auto -mt-10 px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-3 gap-4 text-center border-t-4 border-yellow-500">
          <div>
            <p className="text-3xl font-extrabold text-green-700">+100</p>
            <p className="text-gray-600 font-medium">وثيقة جاهزة</p>
          </div>
          <div className="border-x border-gray-100">
            <p className="text-3xl font-extrabold text-green-700">6</p>
            <p className="text-gray-600 font-medium">مستويات</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-green-700">24/7</p>
            <p className="text-gray-600 font-medium">مساعد ذكي</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        <Link href="/riada/portfolio" className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-green-600 hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-3">📁 الملف التراكمي</h3>
          <p className="text-gray-600 leading-relaxed">قوالب جاهزة للتعديل والطباعة: بطاقة الأستاذ، تقارير TARL، ودراسات الحالة.</p>
        </Link>
        
        <Link href="/riada/mindmaps" className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-yellow-500 hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-3">🧠 البطائق الذهنية</h3>
          <p className="text-gray-600 leading-relaxed">بطائق لجميع المستويات (من الأول إلى السادس) والمواد، جاهزة للعرض والطباعة.</p>
        </Link>

        <Link href="/career" className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-red-600 hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-3">🚀 المسار المهني</h3>
          <p className="text-gray-600 leading-relaxed">الحركة الانتقالية، الترقيات، والمباريات — مذكرات مبسطة خطوة بخطوة.</p>
        </Link>
      </section>
    </div>
  );
}