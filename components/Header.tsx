"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["Services", "/#services"], ["Solutions", "/#solutions"], ["Process", "/#process"], ["About", "/#about"],
] as const;

export function Header({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${light ? "site-header--light" : ""}`}>
      <Logo tone={light ? "light" : "dark"} />
      <nav className="desktop-nav" aria-label="주요 메뉴">
        {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </nav>
      <Link className={`header-cta ${light ? "button-dark" : ""}`} href={light ? "/" : "/contact"}>{light ? "메인으로 돌아가기" : "프로젝트 문의"}<span>↗</span></Link>
      <button className="menu-button" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
      {open && <nav className="mobile-nav" aria-label="모바일 메뉴">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact">프로젝트 문의 ↗</Link></nav>}
    </header>
  );
}
