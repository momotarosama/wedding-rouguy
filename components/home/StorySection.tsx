import Image from "next/image";
import Reveal from "../Reveal";

export default function StorySection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32" id="story">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* IMAGE */}

        <Reveal animation="fade-right">
          <div className="relative h-100 w-full overflow-hidden md:h-125">
            <Image
              src="/images/rouguy/rouguy6.jpeg"
              alt="Les mariés"
              fill
              loading="eager"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* TEXTE */}

        <Reveal>
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-neutral-400">
              Notre histoire
            </p>

            <h2 className="mb-8 font-serif text-4xl font-light leading-tight text-neutral-800 md:text-5xl lg:text-6xl">
              À deux, tout semble
              <br />
              avoir plus de sens.
            </h2>

            <div className="max-w-xl space-y-6 text-sm leading-7 text-neutral-500 md:text-base md:leading-8">
              <p>
                À tes côtés, nous avons découvert la douceur d’avancer à deux,
                de partager les petits bonheurs comme les grands moments, et de
                trouver dans l’autre une présence qui apaise et rassure.
              </p>

              <p>
                Au fil du temps, nous avons appris à nous choisir, à nous
                soutenir et à grandir ensemble. Ce que nous partageons
                aujourd’hui est fait de complicité, de confiance et de cette
                sensation précieuse d’être exactement là où nous devons être.
              </p>

              <p>
                Nous sommes profondément reconnaissants que nos chemins se
                soient croisés. Reconnaissants pour tout ce que nous avons déjà
                vécu, pour tout ce que nous sommes devenus ensemble, et surtout
                pour cette belle histoire que nous continuons d’écrire, jour
                après jour.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
