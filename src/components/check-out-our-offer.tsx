import { SpaPackageCard } from "@/app/oferta/_components/spa-package-card";

export const CheckOutOurOffer = () => (
  <section
    aria-labelledby="check-out-our-offer-heading"
    className="flex flex-col items-center justify-center gap-8 bg-zbr py-8 md:px-0 px-4"
  >
    <div className="max-w-3xl">
      <h2
        id="check-out-our-offer-heading"
        className="text-2xl font-bold text-white mb-4 text-center"
      >
        Wybierz pakiet dla siebie
      </h2>
      <p className="text-lg text-white text-center mb-8 md:mb-0">
        Twój rower zasługuje na więcej niż tylko podstawowy serwis! Nasze
        Rowerowe SPA to wyjątkowa usługa, która sprawi, że Twój rower nie tylko
        odzyska pełną sprawność, ale także będzie wyglądał jak nowy. Idealne
        rozwiązanie dla tych, którzy chcą zadbać o każdy detal swojego roweru –
        zarówno pod kątem estetyki, jak i funkcjonalności.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-0 lg:px-4">
      <SpaPackageCard
        title="Pakiet Silver"
        features={[
          "Profesjonalne i dokładne mycie roweru",
          "Czyszczenie i smarowanie napędu",
          "Polerowanie i nabłyszczanie ramy",
          "Kontrola podzespołów, regulacja napędu i hamulców",
        ]}
      />
      <SpaPackageCard
        title="Pakiet Gold"
        features={[
          "Profesjonalne i dokładne mycie roweru",
          "Czyszczenie i smarowanie napędu",
          "Polerowanie i nabłyszczanie ramy",
          "Kontrola podzespołów, regulacja napędu i hamulców",
          "Czyszczenie i smarowanie łożysk piast, sterów i suportu",
          "Wymiana płynu hamulcowego",
        ]}
      />
      <SpaPackageCard
        title="Pakiet Gold PREMIUM"
        features={[
          "Profesjonalne i dokładne mycie roweru",
          "Czyszczenie i smarowanie napędu",
          "Polerowanie i nabłyszczanie ramy",
          "Kontrola podzespołów, regulacja napędu i hamulców",
          "Czyszczenie i smarowanie łożysk piast, sterów i suportu",
          "Wymiana płynu hamulcowego",
          "Podstawowy serwis przedniego amortyzatora",
        ]}
      />
    </div>
  </section>
);
