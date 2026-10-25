
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const subject = String(data.subject ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (
      name.length < 2 || name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      subject.length < 3 || subject.length > 150 ||
      message.length < 10 || message.length > 5000
    ) {
      return NextResponse.json(
        { error: "تحقق من بيانات الرسالة." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient =
      process.env.CONTACT_EMAIL ||
      "mohammadalhnani2004@gmail.com";

    if (!apiKey) {
      return NextResponse.json(
        { error: "خدمة البريد غير مهيأة." },
        { status: 503 }
      );
    }

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipient],
          reply_to: email,
          subject: `رسالة من الموقع: ${subject.replace(/[\r\n]/g, " ")}`,
          text:
            `الاسم: ${name}\n` +
            `البريد: ${email}\n` +
            `الموضوع: ${subject}\n\n${message}`,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Resend error:",
        response.status,
        await response.text()
      );

      return NextResponse.json(
        { error: "فشل إرسال البريد. تحقق من إعدادات الخدمة." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء إرسال الرسالة." },
      { status: 500 }
    );
  }
}
