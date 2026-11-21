export default function PortfolioPage() {
  const sections = [
    { icon: '🪪', title: 'بطاقة الأستاذ', desc: 'معلومات شخصية ومهنية، الشهادات، والتخصص. نموذج جاهز بتنسيق Word.' },
    { icon: '📊', title: 'تقارير TARL', desc: 'تقارير التقويم التشخيصي والتتبع. قوالب معبأة تلقائيًا من نتائج التلاميذ.' },
    { icon: '🎯', title: 'شبكات التقويم', desc: 'شبكات جاهزة للتقويم التشخيصي والتكويني والختامي لجميع المستويات.' },
    { icon: '📖', title: 'دراسات الحالة', desc: 'قوالب لتحليل حالات التلاميذ المتعثرين والمتفوقين مع اقتراحات الدعم.' },
    { icon: '📸', title: 'توثيق الأنشطة', desc: 'بطاقات توثيق الأنشطة الصفية واللاصفية مع إمكانية إضافة الصور.' },
    { icon: '📝', title: 'التقارير الدورية', desc: 'تقارير نهاية الأسدس الأول والثاني بصيغة جاهزة للطباعة.' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-green-800 mb-2">📁 الملف التراكمي</h1>
      <p className="text-gray-600 mb-10 text-lg">جميع مكونات الملف التراكمي مشروحة ومصحوبة بقوالب جاهزة للتعديل.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-green-600 hover:shadow-md transition">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
            <button className="text-green-700 font-bold text-sm hover:underline">تحميل القالب ←</button>
          </div>
        ))}
      </div>
    </div>
  );
}