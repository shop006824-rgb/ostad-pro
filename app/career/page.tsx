export default function CareerPage() {
  const items = [
    { icon: '🚌', title: 'الحركة الانتقالية', desc: 'ملخصات المذكرات الوزارية، المواعيد النهائية، وخطوات الترشيح.' },
    { icon: '⬆️', title: 'الترقية', desc: 'شروط الترقي بالشهادة أو بالامتحان، وكيفية تجهيز ملف الترقية.' },
    { icon: '🏆', title: 'المباريات المهنية', desc: 'مباريات التفتيش، الإدارة، والامتحان المهني — مع موارد التحضير.' },
    { icon: '📜', title: 'الوثائق الإدارية', desc: 'نماذج الشهادات، طلبات العطل، والملفات الإدارية الجاهزة.' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-red-700 mb-2">🚀 المسار المهني</h1>
      <p className="text-gray-600 mb-10 text-lg">كل ما يتعلق بحياتك المهنية كأستاذ.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border-r-4 border-red-600">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}