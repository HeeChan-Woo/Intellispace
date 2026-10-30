import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="footer"><div className="footer-main"><Logo /><p>Intelligence meets the real world.</p></div><div className="footer-rule" /><div className="footer-legal"><p>© 2026 Intellispace. All rights reserved.</p><p>회사 정보 · <Link href="/privacy">개인정보처리방침</Link> · <Link href="/contact">문의</Link></p></div></footer>;
}
