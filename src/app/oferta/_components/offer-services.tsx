"use client";

import { ServiceCard } from "@/app/oferta/_components/service-card";
import { SpaPackageCard } from "@/app/oferta/_components/spa-package-card";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "service",
    title: "Serwis",
    shortDescription:
      "Każdy rower zasługuje na regularną opiekę, by działać bez zarzutu i towarzyszyć Ci w każdej trasie. W naszym serwisie rowerowym oferujemy profesjonalną obsługę, która zadba o Twój rower od A do Z.",
    fullDescription: (
      <div className="space-y-6">
        <p>
          Nasza oferta obejmuje pełen zakres usług serwisowych, dzięki którym
          Twój rower będzie zawsze gotowy do jazdy:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Przeglądy techniczne</span> –
            sprawdzimy każdy element Twojego roweru, upewnimy się, że wszystko
            działa perfekcyjnie.
          </li>
          <li>
            <span className="font-medium">Regulacja i naprawa</span> – zajmiemy
            się regulacją przerzutek, hamulców oraz naprawą uszkodzonych
            komponentów.
          </li>
          <li>
            <span className="font-medium">Czyszczenie i konserwacja</span> –
            zadbamy o napęd, amortyzatory i pozostałe elementy, usuwając
            zabrudzenia i nakładając odpowiednie środki ochronne.
          </li>
          <li>
            <span className="font-medium">Wymiana części</span> – oferujemy
            profesjonalny montaż nowych części, takich jak opony, łańcuchy,
            kasety czy klocki hamulcowe.
          </li>
          <li>
            <span className="font-medium">
              Serwis amortyzatorów i zawieszenia
            </span>{" "}
            – zajmujemy się serwisem amortyzatorów i zawieszeń, by działały
            płynnie i niezawodnie.
          </li>
          <li>
            <span className="font-medium">Usługi indywidualne</span> –
            dostosujemy nasz serwis do Twoich potrzeb, niezależnie od tego, czy
            potrzebujesz drobnej naprawy, czy kompleksowego remontu roweru.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">
          Dlaczego warto nam zaufać?
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Doświadczenie i pasja</span> – nasz
            zespół to rowerowi entuzjaści z wieloletnim doświadczeniem w
            serwisowaniu każdego typu rowerów: górskich, szosowych, gravelowych
            i miejskich.
          </li>
          <li>
            <span className="font-medium">Precyzja i profesjonalizm</span> –
            korzystamy z najwyższej klasy narzędzi i dbamy o każdy detal, by
            Twój rower działał idealnie.
          </li>
          <li>
            <span className="font-medium">Szybkość działania</span> – wiemy, jak
            ważny jest czas, dlatego serwis wykonujemy sprawnie, by Twój rower
            jak najszybciej wrócił na trasę.
          </li>
          <li>
            <span className="font-medium">Indywidualne podejście</span> – każdy
            rower i rowerzysta są inni, dlatego dostosowujemy nasze usługi do
            Twoich potrzeb.
          </li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Serwis rowerów z odbiorem i dowozem – wygoda dla Ciebie
          </h3>
          <p>
            Wiemy, że w natłoku codziennych obowiązków znalezienie czasu na
            dostarczenie roweru do serwisu bywa trudne. Dlatego oferujemy usługę
            dojazdu do klienta! Odbierzemy Twój rower spod wskazanego adresu,
            zajmiemy się serwisem, a następnie dostarczymy go z powrotem – w
            idealnym stanie, gotowego do jazdy.
          </p>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Umów się na serwis już dziś
          </h3>
          <p className="mb-7">
            Nie czekaj, aż drobne problemy przerodzą się w poważne usterki!
            Skontaktuj się z nami i zarezerwuj termin serwisu rowerowego.
          </p>
          <Link
            href="/kontakt"
            className="px-6 py-3 bg-zbr text-white rounded-md hover:bg-zbr-dark transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-zbr focus:ring-opacity-50"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "spa",
    title: "Rowerowe SPA",
    shortDescription:
      "Twój rower zasługuje na odrobinę luksusu! W ramach tej usługi oferujemy kompleksowe czyszczenie całego sprzętu, pielęgnację ramy oraz zabezpieczenie kluczowych elementów specjalistycznymi środkami.",
    fullDescription: (
      <div className="space-y-6">
        <p>
          Twój rower zasługuje na więcej niż tylko podstawowy serwis! Nasze
          Rowerowe SPA to wyjątkowa usługa, która sprawi, że Twój rower nie
          tylko odzyska pełną sprawność, ale także będzie wyglądał jak nowy.
          Idealne rozwiązanie dla tych, którzy chcą zadbać o każdy detal swojego
          roweru – zarówno pod kątem estetyki, jak i funkcjonalności.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-6">
          Wybierz pakiet dla siebie
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        <h3 className="text-xl font-semibold mt-8">Opis usług</h3>
        <ul className="space-y-4">
          <li>
            <p className="font-medium">Profesjonalne i dokładne mycie roweru</p>
            <p className="text-gray-700">
              Dokładnie myjemy każdy element roweru, w tym ramę, koła i
              komponenty napędu. Używamy specjalistycznych środków, które są
              bezpieczne dla powierzchni i nie naruszają powłok lakierniczych.
            </p>
          </li>
          <li>
            <p className="font-medium">Czyszczenie i smarowanie napędu</p>
            <p className="text-gray-700">
              Usuwamy brud, smar i błoto z kasety, łańcucha, przerzutek i
              zębatek. Używamy do tego myjki ultradźwiękowej. Po dokładnym
              oczyszczeniu nakładamy świeże środki, zapewniając płynną pracę
              napędu.
            </p>
          </li>
          <li>
            <p className="font-medium">Polerowanie i nabłyszczanie ramy</p>
            <p className="text-gray-700">
              Nadajemy ramie nowy blask! Usuwamy drobne rysy i ślady
              użytkowania, stosując specjalne preparaty, które nie tylko
              polerują, ale także zabezpieczają lakier przed przyszłymi
              uszkodzeniami.
            </p>
          </li>
          <li>
            <p className="font-medium">
              Kontrola podzespołów, regulacja napędu i hamulców
            </p>
            <p className="text-gray-700">
              Dokładna kontrola wszystkich elementów mechanicznych, regulacja
              napędu oraz hamulców.
            </p>
          </li>
          <li>
            <p className="font-medium">
              Czyszczenie i smarowanie łożysk piast, sterów i suportu
            </p>
            <p className="text-gray-700">
              Usuwamy zabrudzenia i stary smar, a następnie nakładamy świeży,
              zapewniając płynne działanie kluczowych mechanizmów roweru.
            </p>
          </li>
          <li>
            <p className="font-medium">Wymiana płynu hamulcowego</p>
            <p className="text-gray-700">
              Sprawdzamy stan układu hydraulicznego i wymieniamy płyn na nowy,
              aby hamulce działały precyzyjnie i niezawodnie.
            </p>
          </li>
          <li>
            <p className="font-medium">
              Podstawowy serwis przedniego amortyzatora
            </p>
            <p className="text-gray-700">
              Czyszczenie, smarowanie i kontrola uszczelek, by amortyzator
              pracował płynnie i efektywnie tłumił wstrząsy.
            </p>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">
          Dlaczego warto wybrać Rowerowe SPA?
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">Dłuższa żywotność roweru</span> –
            Regularna pielęgnacja pozwala zapobiegać zużyciu i korozji
            komponentów.
          </li>
          <li>
            <span className="font-medium">Perfekcyjny wygląd</span> – Twój rower
            będzie wyglądał jak nowy, a jego design znowu zachwyci.
          </li>
          <li>
            <span className="font-medium">Lepsza wydajność</span> – Czysty i
            nasmarowany napęd działa płynniej, dzięki czemu jazda jest bardziej
            efektywna i komfortowa.
          </li>
          <li>
            <span className="font-medium">
              Przygotowanie do sezonu lub sprzedaży
            </span>{" "}
            – Rowerowe SPA to świetny sposób na odświeżenie roweru przed
            rozpoczęciem sezonu lub przed sprzedażą.
          </li>
        </ul>

        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Umów swój rower na SPA już dziś!
          </h3>
          <p className="mb-7">
            Pozwól nam zadbać o Twój jednoślad tak, jak na to zasługuje. Dzięki
            naszej usłudze Rowerowego SPA Twój rower będzie gotowy na każdą
            trasę – lśniący, czysty i w pełni sprawny.
          </p>
          <Link
            href="/kontakt"
            className="px-6 py-3 bg-zbr text-white rounded-md hover:bg-zbr-dark transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-zbr focus:ring-opacity-50"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "ppf",
    title: "Zabezpieczenie folią PPF",
    shortDescription:
      "Twój rower zasługuje na odpowiednią ochronę! W naszym serwisie oferujemy profesjonalne oklejanie rowerów folią PPF. Jest to rozwiązanie, które zabezpieczy Twój rower przed uszkodzeniami i zadba o jego doskonały wygląd na dłużej.",
    fullDescription: (
      <div className="space-y-6">
        <p>
          Twój rower zasługuje na odpowiednią ochronę! W naszym serwisie
          oferujemy profesjonalne oklejanie rowerów folią PPF. Jest to
          rozwiązanie, które zabezpieczy Twój sprzęt przed uszkodzeniami i zadba
          o jego doskonały wygląd na dłużej.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          Dlaczego warto wybrać folię PPF?
        </h3>
        <p>
          Folia PPF to przezroczysty materiał ochronny, który idealnie
          dopasowuje się do kształtów ramy roweru i innych komponentów. Dzięki
          jej właściwościom Twój rower zyska:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>
            <span className="font-medium">
              Ochronę przed zarysowaniami i uszkodzeniami
            </span>{" "}
            – kamienie, piasek czy drobne otarcia przestaną być problemem.
          </li>
          <li>
            <span className="font-medium">
              Odporność na warunki atmosferyczne
            </span>{" "}
            – folia zabezpiecza ramę przed działaniem wilgoci, promieniowania UV
            i innych szkodliwych czynników.
          </li>
          <li>
            <span className="font-medium">Samoregenerację</span> – drobne rysy
            na folii znikają pod wpływem ciepła, co sprawia, że rower zawsze
            wygląda jak nowy.
          </li>
          <li>
            <span className="font-medium">Estetykę i personalizację</span> –
            folia jest przezroczysta i praktycznie niewidoczna, co pozwala
            zachować oryginalny design roweru.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">
          Proces oklejania – precyzja i profesjonalizm
        </h3>
        <p>
          W naszym serwisie przykładamy ogromną wagę do szczegółów. Proces
          oklejania wykonujemy z najwyższą precyzją, aby folia idealnie
          przylegała do każdej części roweru. Wykorzystujemy specjalistyczne
          narzędzia i techniki, które gwarantują perfekcyjne wykończenie.
        </p>
        <p className="mt-4">
          Dostosowujemy zakres oklejania do Twoich potrzeb – możesz wybrać
          ochronę całej ramy lub tylko najbardziej narażonych na uszkodzenia
          części, takich jak dolna rura, widelec czy tylne trójkąty.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          Dla kogo jest oklejanie rowerów folią PPF?
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Dla osób, które często jeżdżą w trudnym terenie – górskie szlaki czy
            leśne ścieżki mogą być wymagające dla Twojego sprzętu.
          </li>
          <li>
            Dla rowerzystów przewożących rower samochodem – folia chroni przed
            otarciami i uderzeniami w czasie transportu.
          </li>
          <li>
            Dla wszystkich, którzy chcą zachować idealny wygląd roweru na długie
            lata, a przy okazji zwiększyć jego wartość przy ewentualnej
            odsprzedaży.
          </li>
        </ul>

        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Zainwestuj w ochronę swojego roweru
          </h3>
          <p className="mb-4">
            Nie czekaj, aż na Twoim rowerze pojawią się pierwsze zarysowania!
            Zaufaj naszemu doświadczeniu i wybierz usługę oklejania folią PPF,
            która połączy funkcjonalność z estetyką.
          </p>
          <button className="px-6 py-3 bg-zbr text-white rounded-md hover:bg-zbr-dark transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-zbr focus:ring-opacity-50">
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    ),
  },
];

export const OfferServices = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (id: string) =>
    setExpandedSection(expandedSection === id ? null : id);

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="mb-8"
          data-testid={`service-section-${service.id}`}
        >
          <ServiceCard
            title={service.title}
            description={service.shortDescription}
            isExpanded={expandedSection === service.id}
            serviceId={service.id}
            onToggle={toggleSection}
          />

          {expandedSection === service.id && (
            <div
              id={`section-content-${service.id}`}
              className="mt-4 bg-white p-6 rounded-lg shadow-md border-t-4 border-zbr"
            >
              {service.fullDescription}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
