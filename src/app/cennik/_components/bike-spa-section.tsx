import { ServiceCard } from "@/app/cennik/_components/service-card";
import {
  silverPackageItems,
  goldPackageItems,
  goldPremiumPackageItems,
} from "@/constants/pricing";

export const BikeSpaSection = () => (
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
);
