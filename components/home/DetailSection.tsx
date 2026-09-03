import { Car, Map } from "lucide-react";
import Reveal from "../Reveal";

export default function DetailSection() {
  return (
    <section className="bg-white w-full" id="events">
      <Reveal>
        <div
          className="relative flex h-75 w-full items-center justify-center bg-cover bg-center md:h-112.5"
          style={{
            backgroundImage: "url('/images/rouguy/rouguy1.jpeg')",
          }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/35" />

          {/* TITLE */}
          <span className="relative z-10 font-allura text-6xl font-light italic text-white md:text-8xl">
            Les Détails
          </span>
        </div>
      </Reveal>

      {/* DETAILS */}

      <div className="mx-auto flex flex-col items-center w-full max-w-4xl px-6 py-24 text-center md:py-24">
        {/* DATE */}

        <div className="mb-14 flex flex-col items-center">
          <Reveal>
            <p className="mb-4 text-4xl  font-allura text-neutral-400">
              Lieu, Heure, Programme.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-serif text-3xl font-light text-neutral-800 md:text-5xl">
              06 Septembre 2026
            </h2>
          </Reveal>
        </div>

        {/* EVENTS */}

        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* CÉRÉMONIE */}
          <Reveal>
            <div className="flex flex-col items-center">
              <span className="mb-5 text-base uppercase tracking-[0.35em] text-neutral-400 md:text-base">
                Cérémonie religieuse
              </span>

              <span className="mb-4 font-serif text-4xl font-light text-neutral-800 md:text-5xl">
                17H00
              </span>

              <p className=" text-sm leading-7 text-neutral-500 md:text-base">
                Mosquée Maristes 2
                <br />
                Derrière la boulangerie Le Suprême.
              </p>
              <div className="flex gap-2">
                <div
                  onClick={() => {
                    window.open("https://maps.app.goo.gl/BRWyk1jCRvCedDNN8");
                  }}
                  className=" select-none cursor-pointer mt-3 flex gap-2 items-center justify-center p-3 border border-neutral-300 text-sm leading-7 text-neutral-500 md:text-base hover:bg-neutral hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Map />
                  <span className="text-sm leading-7  md:text-base">
                    Voir la carte
                  </span>
                </div>
                <div
                  onClick={() => {
                    window.open(
                      "https://yango.com/adj/yango?end-lon=-17.43159&end-lat=14.73933",
                    );
                  }}
                  className=" select-none cursor-pointer mt-3 flex gap-2 items-center justify-center p-3 border border-neutral-300 text-sm leading-7 text-neutral-500 md:text-base hover:bg-neutral hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Car />
                  <span className="text-sm leading-7  md:text-base">
                    Prendre un Yango
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
          {/* DÎNER */}
          <Reveal>
            <div className="flex flex-col items-center">
              <span className="mb-5 text-base uppercase tracking-[0.35em] text-neutral-400 md:text-base">
                Dîner de mariage
              </span>

              <span className="mb-4 font-serif text-4xl font-light text-neutral-800 md:text-5xl">
                20H00
              </span>

              <p className="text-sm leading-7 text-neutral-500 md:text-base">
                Maison Madera
                <br />
                Restaurant et Espaces Privatifs
              </p>
              <div className="flex gap-2">
                <div
                  onClick={() => {
                    window.open("https://maps.app.goo.gl/iQAjwLB4HiJfujRS9");
                  }}
                  className=" select-none cursor-pointer mt-3 flex gap-2 items-center justify-center p-3 border border-neutral-300 text-sm leading-7 text-neutral-500 md:text-base hover:bg-neutral hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Map />
                  <span className="text-sm leading-7  md:text-base">
                    Voir la carte
                  </span>
                </div>

                {/* <div
                  onClick={() => {
                    window.open(
                      "https://yango.com/adj/yango?end-lon=-17.43159&end-lat=14.73933",
                    );
                  }}
                  className=" select-none cursor-pointer mt-3 flex gap-2 items-center justify-center p-3 border border-neutral-300 text-sm leading-7 text-neutral-500 md:text-base hover:bg-neutral hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Car />
                  <span className="text-sm leading-7  md:text-base">
                    Prendre un Yango
                  </span>
                </div> */}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
