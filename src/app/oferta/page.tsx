import { Contact } from "@/components/contact";
import { OfferServices } from "@/app/oferta/_components/offer-services";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Oferta serwisowa | ZBR Rowery",
  description:
    "Poznaj ofertę serwisową ZBR Rowery. Oferujemy profesjonalne usługi dostosowane do każdego rodzaju roweru i stylu jazdy – od rekreacyjnych po sportowe.",
};

const OfferPage = () => (
  <main className="container mx-auto py-10 px-4 md:px-0" role="main">
    <h1 className="text-3xl font-bold mb-8 text-center text-zbr">
      OFERTA 2025
    </h1>
    <section
      aria-labelledby="offer-heading"
      className="flex flex-col-reverse xl:flex-row items-center justify-center gap-8 mb-8"
    >
      <div className="flex items-center justify-center flex-col max-w-3xl">
        <h2
          id="offer-heading"
          className="text-2xl font-bold text-zbr mb-4 text-center"
        >
          Twój sprzęt w najlepszych rękach
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8 md:mb-0">
          Niezależnie od tego, czy jeździsz rekreacyjnie, czy przygotowujesz się
          do zawodów, zapewniamy usługi dopasowane do Twoich potrzeb. Nasza
          oferta obejmuje kompleksowy przegląd, dokładne regulacje oraz
          specjalistyczne zabiegi poprawiające osiągi i bezpieczeństwo Twojego
          roweru. Korzystamy z wysokiej klasy narzędzi i sprawdzonych metod,
          które gwarantują trwałość i precyzję wykonania. Oddając nam swój
          sprzęt, masz pewność, że trafił w dobre ręce – zespół{" "}
          <strong>ZBR Rowery</strong> to doświadczeni pasjonaci, którzy zadbają
          o każdy detal.
        </p>
      </div>
      <div className="w-full md:w-[450px]">
        <Image
          src="/offer.webp"
          alt="Zdjęcie siedziby serwisu ZBR Rowery przy ul. Czarnieckiego 15A/II w Ostródzie"
          width={450}
          height={675}
          loading="lazy"
          className="md:rounded-lg w-full h-auto object-cover"
        />
      </div>
    </section>
    <OfferServices />
    <Contact className="mt-12 md:mt-24" />
  </main>
);

export default OfferPage;
