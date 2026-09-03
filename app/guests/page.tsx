"use client";
import { countGuests, getGuests } from "@/services/guests.service";
import { Guest } from "@/types/guest";
import React, { useEffect, useState } from "react";

function GuestPage() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [quota, setQuota] = useState({
    total: 0,
    remaining: 70,
    max: 70,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGuests() {
      setLoading(true);
      try {
        const guestList = await getGuests();
        const theQuota = await countGuests();
        setQuota(theQuota);
        setGuests(guestList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <section className="flex-1 bg-neutral-50">
      {/* HERO */}
      <div
        className="relative w-full px-6 py-24 md:px-16 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/guestsbg.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center justify-center">
          <h1 className="font-serif text-5xl italic text-white md:text-8xl">
            Ils viendront
          </h1>
        </div>
      </div>

      {/* CONTENU */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        {/* TITRE + COMPTEUR */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-neutral-500">
            Confirmation des invités
          </p>

          <h2 className="font-serif text-4xl text-neutral-800 md:text-5xl">
            Nos invités
          </h2>

          <div className="mx-auto mt-8 flex max-w-xl justify-center gap-8 border-y border-neutral-200 py-6">
            <div>
              <p className="font-serif text-3xl md:text-4xl">{quota.total}</p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Confirmés
              </p>
            </div>

            <div className="h-14 w-px bg-neutral-200" />

            <div>
              <p className="font-serif text-3xl md:text-4xl">
                {quota.remaining}
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Places restantes
              </p>
            </div>

            <div className="h-14 w-px bg-neutral-200" />

            <div>
              <p className="font-serif text-3xl md:text-4xl">{quota.max}</p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Capacité
              </p>
            </div>
          </div>
        </div>

        {/* LISTE */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {guests.map((guest, index) => (
            <div
              key={guest.id}
              className="group border-b border-neutral-200 py-5 transition-all duration-300 hover:px-3"
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-serif text-xl text-neutral-800">
                    {guest.firstName} {guest.lastName}
                  </p>

                  {guest.phone && (
                    <p className="mt-1 text-xs text-neutral-400">
                      {guest.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AUCUN INVITÉ */}
        {guests.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-neutral-500">
              Aucun invité confirmé pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default GuestPage;
