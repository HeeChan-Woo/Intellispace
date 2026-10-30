import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrbitalVisual } from "@/components/OrbitalVisual";
import { Reveal } from "@/components/Reveal";
import { processSteps, scenarios, services } from "@/lib/content";

function Preview({ kind }: { kind: string }) {
  if (kind === "dashboard") return <div className="preview dashboard"><div className="preview-top"><span>Overview</span><span>LIVE</span></div><div className="metrics"><b>128</b><b>24</b><b>98%</b></div><div className="bars">{[8,17,26,14,23,11,20,8,17,26,14,23].map((h,i)=><i key={i} style={{height:h}} />)}</div></div>;
  if (kind === "assistant") return <div className="preview assistant"><div className="window-bar"><span className="window-dots"><Image src="/assets/window-dot.svg" alt="" width={5} height={5}/><Image src="/assets/window-dot.svg" alt="" width={5} height={5}/><Image src="/assets/window-dot.svg" alt="" width={5} height={5}/></span>AI support</div><p>고객 문의를 자동으로 분류합니다.</p><p>관련 정보를 확인했습니다.<br/>담당자 연결을 도와드릴게요.</p></div>;
  return <div className="preview devices"><div className="window-bar"><span className="window-dots"><Image src="/assets/window-dot.svg" alt="" width={5} height={5}/><Image src="/assets/window-dot.svg" alt="" width={5} height={5}/><Image src="/assets/window-dot.svg" alt="" width={5} height={5}/></span>Device control</div><h4>Connected devices</h4>{["Temperature sensor","Gate controller","Power monitor"].map(x=><p key={x}><Image src="/assets/status-indicator.svg" alt="" width={8} height={8}/>{x}<small>● LIVE</small></p>)}</div>;
}

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "Intellispace", url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com", description: "AI 기반 소프트웨어 개발 및 IoT 자동화 솔루션" };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    <section className="hero"><div className="shell"><Header /><div className="hero-grid"><div className="hero-copy"><p className="eyebrow eyebrow-light">INTELLIGENCE, BUILT FOR REALITY</p><h1>Ideas become<br/>intelligent<br/>systems.</h1><p className="hero-ko">AI가 생각하고, 소프트웨어가 연결하고,<br/>기술이 실제 세상을 움직입니다.</p><div className="hero-actions"><Link className="button button-white" href="/contact">프로젝트 시작하기 <span>↗</span></Link><Link className="button button-muted" href="#services">서비스 알아보기 <span>↗</span></Link></div><p className="micro">AI SOLUTIONS&nbsp; / &nbsp;WEB & APP&nbsp; / &nbsp;IoT AUTOMATION</p></div><OrbitalVisual /></div><div className="hero-note"><span>BUILD WHAT IS NEXT. &nbsp; / &nbsp; INTELLISPACE STUDIO</span><span>SCROLL TO EXPLORE&nbsp; ↓</span></div></div></section>
    <section className="position"><div className="shell position-inner"><h2>One partner. Every layer.</h2><p>AI&nbsp; × &nbsp;SOFTWARE&nbsp; × &nbsp;HARDWARE</p></div></section>
    <section id="services" className="section services"><Reveal className="shell"><p className="eyebrow">01 / WHAT WE DO</p><div className="section-heading"><h2>디지털을 넘어,<br/>현실까지 연결합니다.</h2><p>비즈니스의 문제를 이해하고, 필요한 기술을<br/>연결하여 실제 작동하는 솔루션을 설계합니다.</p></div><div className="services-grid">{services.map(s=><article className="service-card" key={s.no}><div className="card-top"><span>{s.no}</span><span>↗</span></div><Image className="service-icon" src="/assets/service-icon.svg" alt="" width={38} height={38}/><h3>{s.title}</h3><h4>{s.ko}</h4><p>{s.description}</p><hr/><small>{s.tags}</small></article>)}</div></Reveal></section>
    <section id="solutions" className="section scenarios"><Reveal className="shell"><p className="eyebrow">02 / WHERE IT WORKS</p><div className="section-heading"><h2>가능성을 실제 경험으로.</h2><p>아래 화면은 기술 활용을 설명하기 위한 콘셉트 예시입니다.</p></div><div className="scenario-grid">{scenarios.map(s=><article className="scenario-card" key={s.no}><Preview kind={s.kind}/><small>{s.no} / CONCEPT SCENARIO</small><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></Reveal></section>
    <section id="process" className="section process"><Reveal className="shell"><p className="eyebrow eyebrow-light">03 / HOW WE WORK</p><h2>복잡한 기술은 단순하게.<br/>진행 과정은 명확하게.</h2><p className="process-intro">목표와 범위를 정의하고 검증 가능한 단계로 나누어 개발합니다.</p><div className="process-grid">{processSteps.map(s=><article key={s.no}><span>{s.no}</span><hr/><h3>{s.en}</h3><h4>{s.ko}</h4><p>{s.description}</p></article>)}</div></Reveal></section>
    <section id="about" className="section cta"><Reveal className="shell"><p className="eyebrow">LET’S BUILD THE NEXT THING</p><h2>다음 아이디어를,<br/>현실로 만들 시간입니다.</h2><p>프로젝트의 규모보다 중요한 건 해결할 문제입니다. AI·웹·앱·IoT 개발에 관한 아이디어를 들려주세요.</p><Link href="/contact" className="button button-dark">프로젝트 상담하기 <span>↗</span></Link></Reveal></section>
    <Footer />
  </main>;
}
