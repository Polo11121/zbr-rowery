import { Contact } from "@/components/contact";
import { ServiceInfo } from "@/components/service-info";
import { Heading } from "@/components/heading";
import { Main } from "@/components/main";
import { Metadata } from "next";
import Map from "@/components/map-client";
import lokum from "@/../public/lokum-from-afar.webp";

export const metadata: Metadata = {
  title: "Lokalizacja – Gdzie nas znajdziesz | ZBR ROWERY",
  description:
    "Poznaj lokalizację ZBR ROWERY. Nasz serwis mieści się w Ostródzie przy ul. Stefana Czarnieckiego 15A/II. Sprawdź, jak do nas trafić i odwiedź nas już dziś.",
};

const LocationPage = () => (
  <Main>
    <Heading>Lokalizacja</Heading>
    <ServiceInfo
      title="Gdzie nas znajdziesz?"
      description="Nasz serwis mieści się w samym sercu Ostródy i stanowi idealne miejsce
      dla każdego, kto ceni sobie profesjonalizm, dokładność i indywidualne
      podejście. Niezależnie od tego, czy przyjeżdżasz do nas po raz pierwszy,
      czy jesteś naszym stałym klientem – zawsze możesz liczyć na najwyższy
      standard obsługi. Łatwy dojazd oraz dogodna lokalizacja sprawiają, że
      jesteśmy dostępni zarówno dla mieszkańców Ostródy, jak i okolicznych
      miejscowości."
      image={lokum}
    />
    <Map />
    <Contact />
  </Main>
);

export default LocationPage;
