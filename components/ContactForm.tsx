"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

const choices = ["AI 솔루션", "웹·앱 개발", "IoT 자동화", "기술 컨설팅"];

export function ContactForm() {
  const [message, setMessage] = useState<{type:"success"|"error"; text:string}|null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: { services: [], privacy: undefined } });
  const submit = async (values: ContactValues) => { setMessage(null); try { const response = await fetch("/api/contact", { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(values) }); const data = await response.json(); if (!response.ok) throw new Error(data.message ?? "문의 전송에 실패했습니다."); setMessage({type:"success", text:"문의가 정상적으로 접수되었습니다. 확인 후 연락드리겠습니다."}); reset(); } catch (error) { setMessage({type:"error", text:error instanceof Error ? error.message : "문의 전송에 실패했습니다."}); } };
  return <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
    <h2>프로젝트 상담 문의</h2><p className="required-note">* 표시는 필수 입력 항목입니다.</p><input className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("website")} />
    <div className="form-grid"><Field label="담당자 성함 *" error={errors.name?.message}><input autoComplete="name" placeholder="성함을 입력해 주세요." {...register("name")}/></Field><Field label="회사명 / 브랜드명"><input autoComplete="organization" placeholder="회사 또는 브랜드명 (선택)" {...register("company")}/></Field><Field label="이메일 *" error={errors.email?.message}><input type="email" inputMode="email" autoComplete="email" placeholder="example@company.com" {...register("email")}/></Field><Field label="연락처"><input type="tel" inputMode="tel" autoComplete="tel" placeholder="전화번호 (선택)" {...register("phone")}/></Field></div>
    <fieldset><legend>관심 서비스</legend><div className="check-grid">{choices.map(c=><label className="check-chip" key={c}><input type="checkbox" value={c} {...register("services")}/><span>{c}</span></label>)}</div></fieldset>
    <div className="form-grid"><Field label="희망 일정"><input placeholder="예: 3개월 이내 (선택)" {...register("timeline")}/></Field><Field label="예상 예산"><input placeholder="미정도 가능합니다 (선택)" {...register("budget")}/></Field></div>
    <Field label="프로젝트 내용 *" error={errors.description?.message}><textarea rows={6} placeholder={'어떤 문제를 해결하고 싶으신가요?\n필요한 기능과 사용 환경을 자유롭게 설명해 주세요.'} {...register("description")}/></Field>
    <label className="privacy-check"><input type="checkbox" {...register("privacy")}/><span>개인정보 수집·이용 안내를 확인하고 동의합니다. (필수)</span></label>{errors.privacy && <p className="field-error" role="alert">{errors.privacy.message}</p>}
    <p className="privacy-note">※ <a href="/privacy" target="_blank">개인정보처리방침</a>을 확인해 주세요.</p>
    <button className="submit-button" disabled={isSubmitting}>{isSubmitting ? "전송 중…" : "프로젝트 문의 보내기"}<span>↗</span></button>
    {message && <p className={`form-message ${message.type}`} role="status">{message.text}</p>}
  </form>;
}

function Field({ label, error, children }: { label:string; error?:string; children:React.ReactNode }) { return <label className="field"><span>{label}</span>{children}{error && <em className="field-error" role="alert">{error}</em>}</label>; }
