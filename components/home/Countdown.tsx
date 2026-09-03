"use client";

import { useEffect, useState } from "react";
import Reveal from "../Reveal";

export default function Countdown() {
  const weddingDate = new Date("2026-09-06T17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal>
      <section
        className="relative flex min-h-100 items-center justify-center bg-cover bg-center md:px-6 py-24 md:min-h-125 w-full animate-fade-in-up"
        style={{
          backgroundImage: "url('images/rouguy/rouguy10.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full max-w-5xl text-center">
          {/* TITRE */}

          <p className="mb-6 md:mb-12 text-5xl md:text-2xl lg:text-7xl font-allura  text-white">
            Le grand jour arrive
          </p>

          {/* COUNTDOWN */}

          <div className="grid grid-cols-4">
            {/* JOURS */}

            <div className="flex flex-col items-center justify-center border-r border-white/50 px-3">
              <span className="font-serif text-5xl font-light text-white md:text-7xl">
                {String(timeLeft.days).padStart(2, "0")}
              </span>

              <span className="mt-4 text-2xl font-allura text-white md:text-5xl">
                Jours
              </span>
            </div>

            {/* HEURES */}

            <div className="flex flex-col items-center border-r border-white/50 px-3">
              <span className="font-serif text-5xl font-light text-white md:text-7xl">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>

              <span className="mt-4 text-2xl font-allura text-white md:text-5xl">
                Heures
              </span>
            </div>

            {/* MINUTES */}

            <div className="flex flex-col items-center border-r border-white/50 px-3">
              <span className="font-serif text-5xl font-light text-white md:text-7xl">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>

              <span className="mt-4 text-2xl font-allura text-white md:text-5xl">
                Minutes
              </span>
            </div>

            {/* SECONDES */}

            <div className="flex flex-col min-w-0 items-center px-3">
              <span className="font-serif text-5xl font-light text-white md:text-7xl">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>

              <span className="mt-4 text-2xl font-allura text-white md:text-5xl">
                Secondes
              </span>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
