export const services = [
  { no: "01", title: "AI Solutions", ko: "AI 솔루션 · 업무 자동화", description: "AI 챗봇, 문서 분석, 맞춤형 업무 도구와 반복 업무 자동화", tags: "CUSTOM AI · WORKFLOW" },
  { no: "02", title: "Web & App", ko: "웹·앱 개발", description: "기업 홈페이지, 예약·주문 플랫폼, 반응형 웹앱과 모바일 앱", tags: "WEB · MOBILE · UX" },
  { no: "03", title: "IoT & Automation", ko: "IoT · 기계 자동화", description: "기기 연동, 실시간 센서 모니터링, 원격 제어 및 조건 기반 자동화", tags: "DEVICES · CONTROL" },
  { no: "04", title: "Tech Consulting", ko: "기술 검토 · 시스템 통합", description: "비즈니스 상황에 맞는 기술, 데이터, API 및 시스템의 연결 방향 제안", tags: "STRATEGY · INTEGRATION" },
] as const;

export const scenarios = [
  { no: "01", title: "실시간 운영 대시보드", description: "주문·업무 데이터를 모아 한눈에 확인하고 운영 상태를 효율적으로 관리합니다.", kind: "dashboard" },
  { no: "02", title: "AI 고객 응대 시스템", description: "반복 문의에 대응하고 상담 업무를 보조하는 지능형 인터페이스를 구축합니다.", kind: "assistant" },
  { no: "03", title: "연결형 기기 관리", description: "센서·설비 상태를 시각화하고 원격으로 장비를 확인·제어합니다.", kind: "devices" },
] as const;

export const processSteps = [
  { no: "01", en: "Discover", ko: "문제 정의", description: "고객의 목표와 운영 환경, 우선순위를 파악합니다." },
  { no: "02", en: "Design", ko: "솔루션 설계", description: "사용자 경험과 기술 구조, 구현 범위를 정합니다." },
  { no: "03", en: "Build & Test", ko: "개발 및 검증", description: "기능을 구현하고 테스트와 시연을 거쳐 개선합니다." },
  { no: "04", en: "Launch & Evolve", ko: "출시 및 확장", description: "배포와 운영, 유지보수 및 확장을 협의합니다." },
] as const;
