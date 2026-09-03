"use client";

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/rouguy/rouguy1.jpeg",
    alt: "Photo des mariés",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/rouguy/rouguy8.jpeg",
    alt: "Souvenir du mariage",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/rouguy/rouguy3.jpeg",
    alt: "Souvenir du mariage",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/rouguy/rouguy4.jpeg",
    alt: "Souvenir du mariage",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/rouguy/rouguy9.jpeg",
    alt: "Souvenir du mariage",
    className: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section
      className="w-full bg-white px-6 py-24 md:px-10 lg:px-20"
      id="gallery"
    >
      <div className="mx-auto max-w-6xl">
        {/* Titre */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-gray-500 uppercase">
            Souvenirs
          </p>

          <h2 className="text-4xl font-medium tracking-wide text-gray-900 md:text-5xl">
            Notre Galerie
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Quelques instants de notre histoire, capturés pour être partagés
            avec ceux qui nous sont chers.
          </p>
        </div>

        {/* Galerie */}
        <div className="grid grid-cols-2 auto-rows-45 gap-3 md:auto-rows-55 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 66vw, 50vw"
                    : "(max-width: 768px) 33vw, 25vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </div>
          ))}
        </div>

        {/* Bouton */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 border border-gray-900 px-7 py-3 text-xs tracking-[0.2em] text-gray-900 uppercase transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            Voir toute la galerie
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
