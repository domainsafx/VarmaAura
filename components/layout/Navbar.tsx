"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Every page opens with a hero (home hero or PageHero), so the navbar
  // starts transparent over the hero image and turns solid on scroll the
  // same way on every route — no more home-vs-inner-page distinction.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Next.js resets scroll to top on route change, so re-sync immediately
  // when navigating between pages (the listener above only fires on scroll).
  useEffect(() => {
    setScrolled(window.scrollY > 60);
    setMenuOpen(false);
  }, [pathname]);

  const isSolid = scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[6vw] transition-all duration-500 ease-aura ${
          isSolid
            ? "bg-cream/92 py-4 shadow-[0_1px_0_var(--tw-shadow-color)] shadow-line backdrop-blur-md"
            : "py-7"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Varma Aura logo" width={40} height={40} className="h-10 w-auto" />
          <span
            className={`font-serif text-[21px] tracking-[0.18em] transition-colors duration-500 ${
              isSolid ? "text-forest" : "text-white"
            }`}
          >
            VARMA AURA
          </span>
        </Link>

        <nav className="hidden gap-10 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active}
                className={`nav-link text-sm transition-colors duration-500 ${
                  isSolid ? "text-forest" : "text-white"
                } ${active ? "opacity-100" : "opacity-100"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/visit"
          className={`hidden rounded-sm border px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-500 ease-aura md:inline-flex ${
            isSolid
              ? "border-forest text-forest hover:bg-forest hover:text-white"
              : "border-white/55 text-white hover:bg-white hover:text-ink"
          } ${pathname === "/visit" ? "opacity-100" : ""}`}
        >
          Visit Aura
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex w-[26px] flex-col gap-[5px] md:hidden"
          aria-label="Open menu"
        >
          <span
            className={`h-[1.5px] transition-colors ${isSolid ? "bg-forest" : "bg-white"}`}
          />
          <span
            className={`h-[1.5px] transition-colors ${isSolid ? "bg-forest" : "bg-white"}`}
          />
          <span
            className={`h-[1.5px] transition-colors ${isSolid ? "bg-forest" : "bg-white"}`}
          />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex flex-col justify-center bg-forest-deep p-[8vw]"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 0.84, 0.28, 1] }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-[6vw] top-7 text-[13px] tracking-wide text-cream"
            >
              CLOSE ✕
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-3.5 font-serif text-4xl text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/visit"
              className="mt-7 inline-block w-fit bg-gold-soft px-7 py-3.5 font-sans text-sm font-medium text-forest-deep"
            >
              Visit Aura
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
