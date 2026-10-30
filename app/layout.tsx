import type { Metadata } from "next";
import "./globals.css";
import "./assets.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Intellispace — AI, Software & IoT", template: "%s | Intellispace" },
  description: "AI가 생각하고, 소프트웨어가 연결하고, 기술이 실제 세상을 움직입니다.",
  openGraph: { title: "Intellispace", description: "Ideas become intelligent systems.", url: siteUrl, siteName: "Intellispace", locale: "ko_KR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
