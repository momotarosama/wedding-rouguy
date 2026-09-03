"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import seal from "@/public/images/envelope/seal.png";

export default function WeddingEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsMounted(false);
      }, 1100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-hidden bg-transparent z-50 flex items-center justify-center ${!isMounted ? "hidden" : ""} transition-opacity duration-500`}
    >
      {/* BODY */}
      <div
        className={`envelope-body absolute inset-0 bg-[#6b4a1b] ${
          isOpen ? "envelope-body-open" : ""
        }`}
        style={{
          backgroundImage: "url('/images/envelope/enveloppeTexture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: "url('/images/envelope/enveloppeTexture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* LID */}
      <div className={`envelope-lid ${isOpen ? "envelope-lid-open" : ""}`}>
        <div className="envelope-lid-shadow-left" />
        <div className="envelope-lid-shadow-right" />

        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('/images/envelope/enveloppeTexture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* SEAL */}
      <Image
        src={seal}
        alt="Sceau"
        className={`envelope-seal ${isOpen ? "envelope-seal-open" : ""}`}
        priority
      />
    </div>
  );
}
