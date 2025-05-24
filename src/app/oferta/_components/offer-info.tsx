import Image from "next/image";

export const OfferInfo = () => (
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
        do zawodów, zapewniamy usługi dopasowane do Twoich potrzeb. Nasza oferta
        obejmuje kompleksowy przegląd, dokładne regulacje oraz specjalistyczne
        zabiegi poprawiające osiągi i bezpieczeństwo Twojego roweru. Korzystamy
        z wysokiej klasy narzędzi i sprawdzonych metod, które gwarantują
        trwałość i precyzję wykonania. Oddając nam swój sprzęt, masz pewność, że
        trafił w dobre ręce – zespół <strong>ZBR Rowery</strong> to doświadczeni
        pasjonaci, którzy zadbają o każdy detal.
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
);
