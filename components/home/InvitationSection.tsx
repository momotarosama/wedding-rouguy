import React from "react";
import Reveal from "../Reveal";

function InvitationSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
        {/* GAUCHE */}

        <Reveal>
          <div className="flex flex-col justify-center">
            <span className=" text-3xl md:text-4xl font-allura text-neutral-400">
              Notre grand jour
            </span>

            <h2 className="max-w-lg text-5xl font-light leading-[1.2] text-neutral-800 md:text-6xl lg:text-6xl">
              Joignez-vous à nous,
            </h2>
            <span className=" block font-serif italic text-neutral-500 text-5xl md:text-6xl lg:text-7xl">
              pour célébrer!
            </span>

            <a
              href="#rsvp"
              className="mt-10 inline-flex w-fit items-center gap-4 border border-neutral-800 px-7 py-4 text-xs uppercase tracking-[0.25em] text-neutral-800 transition-all duration-300 hover:bg-neutral-800 hover:text-white"
            >
              Je serai là
              <span className="text-base">→</span>
            </a>
          </div>
        </Reveal>

        {/* DROITE */}
        <Reveal animation="fade-right">
          <div className="flex flex-col justify-center">
            <p className="max-w-lg text-lg font-light leading-relaxed text-neutral-600 md:text-xl">
              Nous serions ravis de vous compter parmi nous pour partager cette
              journée exceptionnelle.
            </p>

            <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400">
              Votre présence à nos côtés rendra ce moment encore plus précieux.
              Prenez quelques instants pour confirmer votre présence et
              rejoindre la liste de nos invités.
            </p>

            <div className="mt-10 h-px w-20 bg-neutral-300" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default InvitationSection;
