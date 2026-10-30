import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = { title: "프로젝트 상담", description: "Intellispace와 AI, 웹·앱, IoT 자동화 프로젝트를 상담하세요." };

export default function ContactPage() { return <main className="contact-page"><div className="contact-nav"><div className="shell"><Header light /></div></div><section className="contact-intro"><div className="shell"><p className="eyebrow">START A CONVERSATION / INTELLISPACE</p><h1>Your next idea<br/>starts here.</h1><p>구상 중인 프로젝트가 있으신가요?<br/>해결하고 싶은 문제와 목표를 알려주시면, 적절한 기술 방향을 함께 검토할 수 있습니다.</p></div></section><section className="contact-body"><div className="shell contact-layout"><aside className="inquiry-guide"><p className="eyebrow eyebrow-light">HOW WE CONNECT</p><h2>좋은 프로젝트는<br/>좋은 질문에서<br/>시작됩니다.</h2><p>완벽한 기획서가 없어도 괜찮습니다.<br/>현재의 문제와 원하는 결과를 중심으로 알려주세요.</p><hr/>{[["01","프로젝트 내용 접수","관심 기술과 요구사항을 확인합니다."],["02","기술 범위 검토","구현 가능성과 필요한 범위를 검토합니다."],["03","개발 방향 협의","협의를 통해 일정과 개발 방식을 정합니다."]].map(x=><div className="guide-step" key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></div>)}</aside><ContactForm /></div><div className="mobile-next shell"><p className="eyebrow">WHAT HAPPENS NEXT</p><h2>접수부터 협의까지</h2>{["문의 내용 확인","기술 범위 검토","개발 방향 협의"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></section><Footer /></main>; }
