import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className={`logo logo--${tone}`} aria-label="Intellispace 홈">
      <Image src={tone === "dark" ? "/assets/logo-white.svg" : "/assets/logo-black.svg"} alt="" width={55} height={32} priority />
      <span>intellispace</span>
    </Link>
  );
}
