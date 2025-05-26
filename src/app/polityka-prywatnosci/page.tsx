import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka Prywatności | ZBR ROWERY",
  description:
    "Polityka prywatności serwisu ZBR ROWERY. Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa jako użytkownik strony internetowej zbr-rowery.pl.",
};

const PrivacyPolicyPage = () => (
  <main className="container mx-auto py-10" role="main">
    <h1 className="text-3xl font-bold mb-3 text-center">
      FAQ – Najczęściej zadawane pytania
    </h1>
    <h2 className="text-xl mb-6 text-center ">
      Serwisu rowerowego{" "}
      <strong className="text-zbr font-semibold">zbr-rowery.pl</strong>
    </h2>
    <section className="container mx-auto px-5 md:px-0" role="region">
      <article className="flex flex-col gap-6 text-[15px] md:text-[16px] leading-relaxed">
        <h3 className="text-[22px] md:text-[26px] font-bold text-zbr">
          1. Definicje
        </h3>
        <p>
          <strong>Administrator:</strong> Jędrzej Żebrowski prowadzący
          działalność gospodarczą pod nazwą{" "}
          <strong>ZBR ROWERY – Jędrzej Żebrowski</strong>, z siedzibą przy ul.
          Stefana Czarnieckiego 15A/II, 14-100 Ostróda, NIP:{" "}
          <strong>7412171619</strong>, REGON: <strong>540478500</strong>.
        </p>
        <p>
          <strong>Serwis:</strong> strona internetowa dostępna pod adresem{" "}
          <Link
            href="/"
            className="text-zbr underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Przejdź do strony głównej ZBR ROWERY"
          >
            zbr-rowery.pl
          </Link>
        </p>
        <p>
          <strong>Użytkownik:</strong> każda osoba korzystająca z Serwisu.
        </p>
        <h3 className="text-[22px] md:text-[26px] font-bold text-zbr">
          2. Przetwarzanie danych osobowych
        </h3>
        <p>
          Dane osobowe są przetwarzane w celu obsługi zapytań przesłanych przez
          formularz kontaktowy oraz w celach statystycznych i analitycznych.
        </p>
        <p>
          Administrator nie przekazuje danych osobowych osobom trzecim bez
          uzasadnionej podstawy prawnej.
        </p>

        <h3 className="text-[22px] md:text-[26px] font-bold text-zbr">
          3. Prawa Użytkownika
        </h3>
        <p>Każdy Użytkownik ma prawo do:</p>
        <ul className="list-disc pl-5 marker:text-zbr">
          <li>dostępu do swoich danych osobowych,</li>
          <li>
            żądania ich sprostowania, usunięcia lub ograniczenia przetwarzania,
          </li>
          <li>przenoszenia danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>wniesienia skargi do organu nadzorczego.</li>
        </ul>
        <h3 className="text-[22px] md:text-[26px] font-bold text-zbr">
          4. Dane kontaktowe
        </h3>
        <p>
          W sprawach dotyczących przetwarzania danych osobowych możesz
          skontaktować się z Administratorem poprzez:
        </p>
        <ul className="list-disc pl-5 marker:text-zbr">
          <li>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:zbr.rowery@gmail.com"
              className="text-zbr underline"
            >
              zbr.rowery@gmail.com
            </a>
          </li>
          <li>
            <strong>Adres korespondencyjny:</strong> ul. Stefana Czarnieckiego
            15A/II, 14-100 Ostróda
          </li>
        </ul>

        <h3 className="text-[22px] md:text-[26px] font-bold text-zbr">
          5. Zmiany w Polityce Prywatności
        </h3>
        <p>
          Administrator zastrzega sobie prawo do aktualizacji Polityki
          Prywatności. Ostatnia aktualizacja:{" "}
          <strong>{new Date().toLocaleDateString("pl-PL")}</strong>.
        </p>
      </article>
    </section>
  </main>
);

export default PrivacyPolicyPage;
