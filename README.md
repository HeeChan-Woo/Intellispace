# Intellispace Website

Figma의 데스크톱·모바일 디자인을 기준으로 구현한 Intellispace 공식 웹사이트입니다.

## 실행

```bash
npm install
cp .env.example .env.local
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 문의 전송 설정

문의 API는 Resend REST API를 사용합니다. `.env.local`에 다음 값을 설정해야 실제로 메일이 전송됩니다.

- `RESEND_API_KEY`: Resend API 키
- `CONTACT_TO_EMAIL`: 문의를 받을 이메일
- `CONTACT_FROM_EMAIL`: Resend에서 인증한 발신자
- `NEXT_PUBLIC_SITE_URL`: 배포 도메인

설정이 없거나 전송이 실패하면 성공 메시지를 표시하지 않습니다.

## 검증

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## 배포

GitHub 저장소를 Vercel에 연결하고 위 환경변수를 등록한 뒤 배포합니다. Node.js 기반 Next.js 프로젝트로 자동 인식됩니다.

## 운영 전 TODO

- 실제 사업자 정보와 연락처 확정
- 개인정보처리방침 법률 검토 및 보유 기간 확정
- Resend 발신 도메인 인증과 환경변수 등록
- 운영 환경에서 지속 가능한 rate-limit 저장소(예: Vercel KV/Upstash) 연결
