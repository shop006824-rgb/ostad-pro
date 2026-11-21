import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.5-flash-lite", 
      systemInstruction: "أنت مساعد ذكي للأستاذ المغربي. أجب بالعربية أو الفرنسية باختصار ومهنية."
    });

    // نأخذ تاريخ المحادثة السابق (بدون الرسالة الأخيرة التي سيرسلها المستخدم)
    let historyData = messages.slice(0, -1);
    
    // إذا كانت أول رسالة هي ترحيب المساعد، نحذفها لتجنب الخطأ
    if (historyData.length > 0 && historyData[0].role === "assistant") {
      historyData = historyData.slice(1);
    }

    const chat = model.startChat({
      history: historyData.map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      })),
    });

    const lastMessage = messages[messages.length - 1].text;
    const result = await chat.sendMessage(lastMessage);
    
    return NextResponse.json({ reply: result.response.text() });
  } catch (error: any) {
    return NextResponse.json({ error: "حدث خطأ: " + error.message }, { status: 500 });
  }
}