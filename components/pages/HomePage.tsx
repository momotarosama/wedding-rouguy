"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../home/HeroSection";
import InvitationSection from "../home/InvitationSection";
import Countdown from "../home/Countdown";
import StorySection from "../home/StorySection";
import DetailSection from "../home/DetailSection";
import RsvpSection from "../home/RsvpSection";
import GallerySection from "../home/GallerySection";

function HomePage() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSite(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main
      className={`flex flex-1 w-full  flex-col items-center justify-between bg-background font-poppins text-neutral ${showSite ? "animate-fade-in-up" : "hidden"}`}
    >
      <HeroSection />
      <InvitationSection />
      <Countdown />
      <StorySection />
      <DetailSection />
      <RsvpSection />
      <GallerySection />
    </main>
  );
}

export default HomePage;
