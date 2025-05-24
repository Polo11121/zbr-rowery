import { Contact } from "@/components/contact";
import { OfferServices } from "@/app/oferta/_components/offer-services";
import { OfferInfo } from "@/app/oferta/_components/offer-info";
import { Heading } from "@/components/heading";
import { Main } from "@/components/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta - Usługi serwisowe | ZBR Rowery",
  description:
    "Poznaj ofertę serwisową ZBR Rowery na rok 2025. Oferujemy profesjonalne usługi dostosowane do każdego rodzaju roweru i stylu jazdy – od rekreacyjnych po sportowe.",
};

const OfferPage = () => (
  <Main>
    <Heading>OFERTA 2025</Heading>
    <OfferInfo />
    <OfferServices />
    <Contact />
  </Main>
);

export default OfferPage;
