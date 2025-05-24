import { LocationInfo } from "@/app/lokalizacja/_components/location-info";
import { Contact } from "@/components/contact";
import { Heading } from "@/components/heading";
import { Main } from "@/components/main";
import { Metadata } from "next";
import Map from "@/components/map-client";

export const metadata: Metadata = {
  title: "Lokalizacja – Gdzie nas znajdziesz | ZBR Rowery",
  description:
    "Poznaj lokalizację ZBR Rowery. Nasz serwis mieści się w Ostródzie przy ul. Stefana Czarnieckiego 15A/II. Sprawdź, jak do nas trafić i odwiedź nas już dziś.",
};

const LocationPage = () => (
  <Main>
    <Heading>Lokalizacja</Heading>
    <LocationInfo />
    <Map />
    <Contact />
  </Main>
);

export default LocationPage;
