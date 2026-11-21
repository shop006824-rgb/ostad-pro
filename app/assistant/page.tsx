"use client";
import { useState } from "react";

export default function Assistant() {
  const [messages, setMessages] = useState([{ role: "assistant", text: "مرحباً أستاذ! كيف يمكنني مساعدتك اليوم؟" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;
    const newMsgs = [...messages, { role: "user", text: input }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages([...newMsgs, { role: "assistant", text: data.reply }]);
    } catch (error: any) {
      setMessages([...newMsgs, { role: "assistant", text: "⚠️ " + error.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col h-[70vh]">
        <div className="bg-green-800 text-white p-4 font-bold text-lg">🤖 المساعد الذكي</div>
        
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 rounded-2xl max-w-[80%] ${m.role === "user" ? "bg-green-600 text-white rounded-bl-none" : "bg-white border text-gray-800 rounded-br-none shadow-sm"}`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-gray-500 text-sm animate-pulse">جاري التفكير...</div>}
        </div>

        <div className="p-4 bg-white border-t flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="اكتب سؤالك هنا..."
            className="flex-1 border p-3 rounded-xl focus:outline-none focus:border-green-600"
          />
          <button onClick={send} disabled={loading} className="bg-green-700 text-white px-6 py-2 rounded-xl font-bold hover:bg-green-800 disabled:opacity-50">
            إرسال
          </button>
        </div>
      </div>
    </div>
  );
}