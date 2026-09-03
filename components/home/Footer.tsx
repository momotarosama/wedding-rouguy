import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral px-6 py-16 w-full text-white md:px-10 lg:px-20">
      <div className="mx-auto w-full">
        {/* Message principal */}
        <div className="text-center">
          <h2 className="text-2xl font-light tracking-wide md:text-3xl">
            Merci pour votre visite
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/60">
            Merci d&apos;avoir pris le temps de découvrir notre histoire et de
            partager un peu de ce moment avec nous.
          </p>
        </div>

        {/* Séparateur */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          {/* Copyright */}
          <p>© 2026 — Tous droits réservés</p>

          {/* Signature développeur */}
          <p>
            Site conçu par{" "}
            <Link
              href="https://linktr.ee/Mohamedcissexx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500/70 italic transition-colors duration-300 hover:text-white"
            >
              mc ↗
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
