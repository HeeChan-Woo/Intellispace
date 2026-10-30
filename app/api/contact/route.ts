import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const attempts = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now(); const recent = (attempts.get(ip) ?? []).filter(t => now - t < WINDOW);
  if (recent.length >= MAX) return NextResponse.json({ message: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." }, { status: 429 });
  attempts.set(ip, [...recent, now]);
  let json: unknown; try { json = await request.json(); } catch { return NextResponse.json({message:"잘못된 요청입니다."},{status:400}); }
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ message:"입력 내용을 다시 확인해 주세요.", issues:parsed.error.flatten().fieldErrors }, {status:400});
  if (parsed.data.website) return NextResponse.json({message:"요청을 처리할 수 없습니다."},{status:400});
  const apiKey = process.env.RESEND_API_KEY; const to = process.env.CONTACT_TO_EMAIL; const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ message:"현재 문의 전송 서비스가 설정되지 않았습니다. 관리자에게 연락해 주세요." }, {status:503});
  const d = parsed.data; const response = await fetch("https://api.resend.com/emails", {method:"POST",headers:{authorization:`Bearer ${apiKey}`,"content-type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:d.email,subject:`[Intellispace 문의] ${d.name}${d.company ? ` · ${d.company}` : ""}`,text:[`담당자: ${d.name}`,`회사/브랜드: ${d.company||"-"}`,`이메일: ${d.email}`,`연락처: ${d.phone||"-"}`,`관심 서비스: ${d.services.join(", ")||"-"}`,`희망 일정: ${d.timeline||"-"}`,`예상 예산: ${d.budget||"-"}`,"",d.description].join("\n")})});
  if (!response.ok) return NextResponse.json({message:"문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요."},{status:502});
  return NextResponse.json({ok:true});
}
