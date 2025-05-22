import { AdditionalInfoSection } from "@/app/cennik/_components/additional-info-section";
import { ServiceCard } from "@/app/cennik/_components/service-card";
import { ServiceTable } from "@/app/cennik/_components/service-table";
import { PPFServiceCard } from "@/app/cennik/_components/ppf-service-card";
import {
  basicPackageItems,
  extendedPackageItems,
  warrantyServiceItems,
  silverPackageItems,
  goldPackageItems,
  goldPremiumPackageItems,
  drivetrainServices,
  wheelServices,
  traditionalBrakeServices,
  hydraulicBrakeServices,
  steeringServices,
  gearServices,
  frameServices,
} from "@/constants/pricing";
import { Metadata } from "next";
import { Contact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Cennik usług rowerowych | ZBR Rowery",
  description:
    "Sprawdź aktualny cennik usług rowerowych w ZBR Rowery. Oferujemy pakiety serwisowe, rowerowe SPA, przeglądy gwarancyjne i szczegółowe naprawy – wszystko w konkurencyjnych cenach.",
};

const PricingPage = () => (
  <main className="container mx-auto py-10 px-4 md:px-0" role="main">
    <h1 className="text-3xl font-bold mb-8 text-center text-zbr">
      CENNIK 2025
    </h1>
    <section className="mb-12" aria-labelledby="packages-heading">
      <h2
        id="packages-heading"
        className="text-2xl font-semibold mb-4 text-zbr"
      >
        PAKIETY SERWISOWE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="PAKIET PODSTAWOWY"
          price="120 PLN"
          items={basicPackageItems}
        />
        <ServiceCard
          title="PAKIET ROZSZERZONY"
          price="270 PLN"
          description="PAKIET PODSTAWOWY +"
          items={extendedPackageItems}
        />
        <ServiceCard
          title="PRZEGLĄD GWARANCYJNY"
          price="100 PLN"
          description="Dodatkowe usługi:"
          items={warrantyServiceItems}
        />
      </div>
    </section>
    <section className="mb-12" aria-labelledby="spa-heading">
      <h2 id="spa-heading" className="text-2xl font-semibold mb-4 text-zbr">
        ROWEROWE SPA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Pakiet Silver"
          price="300 PLN"
          items={silverPackageItems}
        />
        <ServiceCard
          title="Pakiet Gold"
          price="450 PLN"
          items={goldPackageItems}
        />
        <ServiceCard
          title="Pakiet Gold PREMIUM"
          price="550 PLN"
          items={goldPremiumPackageItems}
        />
      </div>
    </section>
    <section className="mb-12" aria-labelledby="detailed-services-heading">
      <h2
        id="detailed-services-heading"
        className="text-2xl font-semibold mb-4 text-zbr"
      >
        USŁUGI SZCZEGÓŁOWE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceTable title="Napęd" items={drivetrainServices} />
        <ServiceTable title="Koło" items={wheelServices} />
        <ServiceTable
          title="Hamulce tradycyjne"
          items={traditionalBrakeServices}
        />
        <ServiceTable
          title="Hamulce tarczowe hydrauliczne"
          items={hydraulicBrakeServices}
        />
        <ServiceTable title="Układ kierowniczy" items={steeringServices} />
        <ServiceTable title="Przerzutki" items={gearServices} />
        <ServiceTable title="Rama" items={frameServices} />
        <PPFServiceCard />
      </div>
    </section>
    <AdditionalInfoSection />
    <Contact className="mt-12 md:mt-24" />
  </main>
);

export default PricingPage;
