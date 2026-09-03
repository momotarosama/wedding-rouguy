"use client";

import Reveal from "@/components/Reveal";
import { ArrowLeft, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const photos = [
  "/images/rouguy/rouguy1.jpeg",
  "/images/rouguy/rouguy2.jpeg",
  "/images/rouguy/rouguy3.jpeg",
  "/images/rouguy/rouguy4.jpeg",
  "/images/rouguy/rouguy5.jpeg",
  "/images/rouguy/rouguy6.jpeg",
  "/images/rouguy/rouguy7.jpeg",
  "/images/rouguy/rouguy8.jpeg",
  "/images/rouguy/rouguy9.jpeg",
  "/images/rouguy/rouguy10.jpeg",
  "/images/rouguy/rouguy11.jpeg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white px-5 py-16 md:px-10 lg:px-20 animate-fade-in-up">
      <div className="mx-auto mb-10 max-w-7xl">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] text-gray-600 uppercase transition-colors duration-300 hover:text-gray-900"
        >
          <ArrowLeft />
          Retourner à l&apos;accueil
        </Link>
      </div>
      {/* Header */}
      <header className="mx-auto mb-14 max-w-3xl text-center">
        <p className="mb-3 text-xs tracking-[0.35em] text-gray-500 uppercase">
          Souvenirs
        </p>

        <h1 className="text-4xl font-medium tracking-wide text-gray-900 md:text-5xl">
          Notre Galerie
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
          Retrouvez ici les plus beaux moments de cette journée, immortalisés en
          images.
        </p>
      </header>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(photo)}
            className="group mb-4 block w-full overflow-hidden text-left cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <Image
                src={photo}
                alt={`Souvenir du mariage ${index + 1}`}
                width={1200}
                height={1600}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-sm">
                  <EyeIcon />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 text-3xl font-light text-white"
            aria-label="Fermer"
          >
            ×
          </button>

          {/* Image */}
          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Photo du mariage"
              fill
              loading="eager"
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
