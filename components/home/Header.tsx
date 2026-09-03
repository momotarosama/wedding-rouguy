"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Empêche le scroll derrière le menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-6 md:px-10 lg:px-20">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-medium tracking-[0.15em]"
          >
            <Image
              src="/images/whiteLogo.png"
              alt="Logo"
              width={70}
              height={70}
              className={`h-auto w-14 md:w-17.5 lg:w-25 ${
                scrolled ? "invert" : ""
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm transition-opacity hover:opacity-60"
            >
              Accueil
            </Link>

            <Link
              href="/#story"
              className="text-sm transition-opacity hover:opacity-60"
            >
              Nous deux
            </Link>

            <Link
              href="/#events"
              className="text-sm transition-opacity hover:opacity-60"
            >
              Date et lieu
            </Link>

            <Link
              href="/#rsvp"
              className="text-sm transition-opacity hover:opacity-60"
            >
              RSVP
            </Link>

            <Link
              href="/gallery"
              className="text-sm transition-opacity hover:opacity-60"
            >
              Galerie
            </Link>
          </nav>

          {/* MOBILE BURGER */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Ouvrir le menu"
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-60 md:hidden">
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />

          {/* MENU */}
          <Reveal animation="fade-right">
            <aside className="relative h-screen w-[70%] max-w-sm bg-white px-8 py-8 text-black">
              {/* MENU HEADER */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-xl font-medium tracking-[0.15em]"
                >
                  <Image
                    src="/images/darkLogo.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className={`h-auto w-auto `}
                  />
                </Link>

                {/* CLOSE */}
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center text-2xl font-light"
                  aria-label="Fermer le menu"
                >
                  ×
                </button>
              </div>

              {/* LINKS */}
              <nav className="mt-10 flex flex-col gap-8">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-lg font-light"
                >
                  Accueil
                </Link>

                <Link
                  href="/#story"
                  onClick={closeMenu}
                  className="text-lg font-light"
                >
                  Nous deux
                </Link>

                <Link
                  href="/#events"
                  onClick={closeMenu}
                  className="text-lg font-light"
                >
                  Date et lieu
                </Link>

                <Link
                  href="/#rsvp"
                  onClick={closeMenu}
                  className="text-lg font-light"
                >
                  RSVP
                </Link>

                <Link
                  href="/gallery"
                  onClick={closeMenu}
                  className="text-lg font-light"
                >
                  Galerie
                </Link>
              </nav>
            </aside>
          </Reveal>
        </div>
      )}
    </>
  );
}
