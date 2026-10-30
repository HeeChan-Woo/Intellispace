import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
export const metadata: Metadata = { title:"개인정보처리방침" };
export default function PrivacyPage(){return <main className="legal-page"><div className="contact-nav"><div className="shell"><Header light/></div></div><article className="shell legal-content"><p className="eyebrow">PRIVACY POLICY</p><h1>개인정보처리방침</h1><div className="legal-todo"><b>운영 전 확인 필요</b><p>이 문서는 임시 안내입니다. 실제 사업자 정보, 개인정보 보호책임자, 보유 기간 및 위탁 처리 내용을 확정한 뒤 법률 검토를 거쳐 교체해야 합니다.</p></div><h2>수집 항목</h2><p>담당자 성함, 이메일, 선택적으로 회사명·연락처·관심 서비스·희망 일정·예산, 프로젝트 설명을 수집합니다.</p><h2>이용 목적</h2><p>프로젝트 문의 확인, 기술 범위 검토 및 상담 연락에만 이용합니다.</p><h2>보유 기간</h2><p>TODO: 운영 정책과 관련 법령에 따라 확정해야 합니다.</p><h2>문의</h2><p>TODO: 개인정보 보호책임자와 연락처를 확정해야 합니다.</p></article><Footer/></main>}
