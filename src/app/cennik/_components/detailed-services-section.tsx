import { ServiceTable } from "@/app/cennik/_components/service-table";
import { PPFServiceCard } from "@/app/cennik/_components/ppf-service-card";
import {
  drivetrainServices,
  wheelServices,
  traditionalBrakeServices,
  hydraulicBrakeServices,
  steeringServices,
  gearServices,
  frameServices,
} from "@/constants/pricing";

export const DetailedServicesSection = () => (
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
);
