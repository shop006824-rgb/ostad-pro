"use client";
import { useState } from "react";

export default function MindMapsPage() {
  const levels = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس"];
  const subjects = ["العربية", "الرياضيات", "الفرنسية", "النشاط العلمي"];
  
  const [level, setLevel] = useState(levels[0]);
  const [subject, setSubject] = useState(subjects[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black text-green-800 mb-2">🧠 البطائق الذهنية</h1>
      <p className="text-gray-600 mb-8 text-lg">اختر المستوى والمادة لعرض البطائق المتوفرة.</p>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <div className="mb-4">
          <label className="font-bold block mb-2">المستوى:</label>
          <div className="flex flex-wrap gap-2">
            {levels.map((l) => (
              <button key={l} onClick={() => setLevel(l)} className={`px-4 py-2 rounded-lg font-medium transition ${level === l ? "bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="font-bold block mb-2">المادة:</label>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <button key={s} onClick={() => setSubject(s)} className={`px-4 py-2 rounded-lg font-medium transition ${subject === s ? "bg-yellow-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 text-center shadow-sm">
        <p className="text-gray-600 mb-4 font-bold text-lg">عرض نتائج: {level} ابتدائي — {subject}</p>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10">
          <p className="text-4xl mb-3">📭</p>
          <p className="text-gray-600">لم يتم رفع البطائق بعد لهذا القسم.</p>
        </div>
      </div>
    </div>
  );
}