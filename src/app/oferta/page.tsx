import { OfferServices } from "./_components/offer-services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta serwisowa | ZBR Rowery",
  description:
    "Poznaj ofertę serwisową ZBR Rowery. Oferujemy profesjonalne usługi dostosowane do każdego rodzaju roweru i stylu jazdy – od rekreacyjnych po sportowe.",
};

const OfferPage = () => (
  <main className="container mx-auto py-10 px-4" role="main">
    <h1 className="text-3xl font-bold mb-8 text-center text-zbr">
      OFERTA 2025
    </h1>
    <section aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="text-2xl font-bold text-zbr mb-4 text-center"
      >
        Twój sprzęt w najlepszych rękach
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 text-center mb-12">
        Niezależnie od tego, czy jeździsz rekreacyjnie, czy przygotowujesz się
        do zawodów, zapewniamy usługi dopasowane do Twoich potrzeb.
      </p>
    </section>
    <OfferServices />
  </main>
);

export default OfferPage;
