"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import { addGuest } from "@/services/guests.service";
import { toast } from "sonner";
import { Spinner } from "../Spinner";
import axios from "axios";

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const telephone = formData.get("telephone");
    setIsSubmitting(true);
    try {
      await addGuest({
        firstName: prenom as string,
        lastName: nom as string,
        phone: telephone as string,
      });

      // On vide les champs uniquement si l'ajout a réussi
      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
      });

      toast.success(
        "Merci pour votre confirmation ! Rendez-vous le 06 Septembre.",
      );
    } catch (error) {
      console.error("Erreur :", error);
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        toast.error("Désolé, toutes les places ont déjà été réservées.");

        return;
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative w-full bg-neutral-50 px-6 py-24 md:py-24 overflow-hidden"
      id="rsvp"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center blur-xs"
        style={{
          backgroundImage: "url('/images/rouguy/rouguy9.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="mx-auto w-full max-w-2xl relative z-10">
        {/* TITRE */}
        <Reveal>
          <div className="mb-7 text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.4em] text-white/70">
              RSVP
            </p>

            <h2 className="font-serif text-4xl font-light italic text-white md:text-6xl">
              Serez-vous des nôtres ?
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white md:text-base">
              Nous serions heureux de partager ce précieux moment avec vous.
              Merci de nous confirmer votre présence.
            </p>
          </div>
        </Reveal>
        {/* FORMULAIRE */}

        <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
          {/* NOM */}
          <Reveal animation="zoom">
            <div className="mb-10">
              <label
                htmlFor="nom"
                className="mb-3 block text-sm uppercase tracking-[0.3em] text-white/80"
              >
                Nom
              </label>

              <input
                id="nom"
                name="nom"
                type="text"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full border-0 border-b border-white/75 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                placeholder="Votre nom"
              />
            </div>

            {/* PRÉNOM */}

            <div className="mb-10">
              <label
                htmlFor="prenom"
                className="mb-3 block text-sm uppercase tracking-[0.3em] text-white/80"
              >
                Prénom
              </label>

              <input
                id="prenom"
                name="prenom"
                type="text"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="w-full border-0 border-b border-white/75 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                placeholder="Votre prénom"
              />
            </div>

            {/* TÉLÉPHONE */}

            <div className="mb-12">
              <label
                htmlFor="telephone"
                className="mb-3 block text-sm uppercase tracking-[0.3em] text-white/80"
              >
                Numéro de téléphone
                <span className="ml-2 normal-case tracking-normal">
                  (facultatif)
                </span>
              </label>

              <input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full border-0 border-b border-white/75 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-white/80 focus:border-white"
                placeholder="+221 77 000 00 00"
              />
            </div>
          </Reveal>
          {/* BOUTON */}
          <Reveal>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" cursor-pointer border text-xs border-white/85 px-10 py-4 md:text-sm uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-neutral-800 hover:scale-105"
              >
                {isSubmitting ? <Spinner /> : "Confirmer ma présence"}
              </button>
            </div>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
