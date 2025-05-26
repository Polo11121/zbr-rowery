import { ServicePackagesSection } from "@/app/cennik/_components/service-packages-section";
import { BikeSpaSection } from "@/app/cennik/_components/bike-spa-section";
import { DetailedServicesSection } from "@/app/cennik/_components/detailed-services-section";
import { AdditionalInfoSection } from "@/app/cennik/_components/additional-info-section";
import { Contact } from "@/components/contact";
import { Main } from "@/components/main";
import { Heading } from "@/components/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik  – Usługi serwisowe | ZBR ROWERY",
  description:
    "Sprawdź cennik usług serwisowych ZBR ROWERY na rok 2025. Pakiety serwisowe, myjnia rowerowa, szczegółowe usługi i dodatkowe informacje w jednym miejscu.",
};

const PricingPage = () => (
  <Main>
    <Heading>CENNIK 2025</Heading>
    <ServicePackagesSection />
    <BikeSpaSection />
    <DetailedServicesSection />
    <AdditionalInfoSection />
    <Contact />
  </Main>
);

export default PricingPage;
