import React from "react";
import HeroCarousel from "./HeroCarousel";

function HeroSection() {
  return (
    <div className="flex flex-1 w-full  flex-col items-center justify-between bg-zinc-700 dark:bg-black sm:items-start">
      <HeroCarousel />
    </div>
  );
}

export default HeroSection;
