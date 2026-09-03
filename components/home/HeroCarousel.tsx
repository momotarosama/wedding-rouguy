"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  "/images/rouguy/rouguy4.jpeg",
  "/images/rouguy/rouguy2.jpeg",
  "/images/rouguy/rouguy3.jpeg",
  "/images/rouguy/rouguy7.jpeg",
  "/images/rouguy/rouguy6.jpeg",
];

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let position = 0;
    let animationFrame: number;

    const speed = 0.5;

    const animate = () => {
      position -= speed;

      /*
       * Les 5 premières images représentent exactement
       * la moitié du track.
       *
       * Une fois cette moitié parcourue,
       * on revient à 0.
       *
       * Comme la deuxième moitié est une copie exacte
       * de la première, le spectateur ne voit aucun saut.
       */
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* CAROUSEL */}

      <div className="absolute inset-0 overflow-hidden">
        <div ref={trackRef} className="flex h-full w-max will-change-transform">
          {/* Première série */}
          {images.map((image, index) => (
            <div
              key={`first-${index}`}
              className="relative h-full w-screen shrink-0"
            >
              <Image
                src={image}
                alt=""
                fill
                priority={index === 0}
                sizes="85vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          ))}

          {/* Deuxième série identique */}
          {images.map((image, index) => (
            <div
              key={`second-${index}`}
              className="relative h-full w-screen shrink-0"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="85vw"
                loading="eager"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENU HERO */}

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div>
          <p className="text-sm md:text-base uppercase tracking-[0.4em]">
            Nous nous marions
          </p>

          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-6 text-6xl font-allura font-light md:text-8xl">
              Moustapha
            </h1>
            <span className="mx-4 text-3xl italic">&</span>
            <h1 className=" text-6xl font-allura font-light md:text-8xl">
              Rouguyatou
            </h1>
          </div>

          <p className="mt-8 text-base md:text-base tracking-[0.25em]">
            06 SEPTEMBRE 2026
          </p>
        </div>
      </div>
    </section>
  );
}
