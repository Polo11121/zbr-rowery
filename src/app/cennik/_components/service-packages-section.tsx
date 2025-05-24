import { ServiceCard } from "@/app/cennik/_components/service-card";
import {
  basicPackageItems,
  extendedPackageItems,
  warrantyServiceItems,
} from "@/constants/pricing";

export const ServicePackagesSection = () => (
  <section className="mb-12" aria-labelledby="packages-heading">
    <h2 id="packages-heading" className="text-2xl font-semibold mb-4 text-zbr">
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
);
