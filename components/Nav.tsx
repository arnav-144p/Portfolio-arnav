"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "// about" },
  { href: "#projects", label: "// projects" },
  { href: "#now", label: "// now" },
  { href: "#contact", label: "// contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
        style={{
          background: "var(--bg)",
          borderBottom: scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <Link href="/" className="mono shrink-0 text-sm lowercase" onClick={closeMenu}>
          arnav://
        </Link>

        <div className="mono hidden gap-5 text-sm lowercase md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="mono text-sm lowercase md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {"//"}
        </button>
      </nav>

      <button
        type="button"
        className={`nav-mobile-backdrop md:hidden ${open ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
      />

      <div
        id="mobile-nav"
        className={`nav-mobile-panel mono md:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link" onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
