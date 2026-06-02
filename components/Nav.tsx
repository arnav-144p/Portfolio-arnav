"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
      style={{
        background: "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <Link href="/" className="mono text-sm lowercase">
        arnav://
      </Link>
      <div className="mono flex gap-5 text-sm lowercase">
        <a href="#about" className="nav-link">
          {"// about"}
        </a>
        <a href="#projects" className="nav-link">
          {"// projects"}
        </a>
        <a href="#writing" className="nav-link">
          {"// writing"}
        </a>
        <a href="#contact" className="nav-link">
          {"// contact"}
        </a>
      </div>
    </nav>
  );
}
