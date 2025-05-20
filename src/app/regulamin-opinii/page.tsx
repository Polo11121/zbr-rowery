import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulamin opinii | ZBR Rowery",
  description:
    "Zasady publikowania opinii na stronie ZBR Rowery. Dowiedz się, jak moderujemy recenzje, jakie są nasze standardy i kiedy opinia może zostać usunięta.",
};

const ReviewPolicyPage = () => (
  <main className="container mx-auto py-10" role="main">
    <h1 className="text-3xl font-bold mb-3 text-center">Regulamin opinii</h1>
    <h2 className="text-xl mb-6 text-center ">
      Sprawdź, jakie zasady obowiązują przy zamieszczaniu opinii na stronie{" "}
      <strong className="text-zbr font-semibold">zbr-rowery.pl</strong>
    </h2>
    <section
      className="container mx-auto px-5 md:px-0"
      aria-labelledby="review-policy-heading"
      role="region"
    >
      <article className="flex flex-col gap-6 text-[15px] md:text-[16px] leading-relaxed">
        <h2 className="text-[22px] md:text-[26px] font-bold text-zbr">
          1. Postanowienia ogólne
        </h2>
        <p>
          Regulamin określa zasady zamieszczania opinii na stronie{" "}
          <Link
            href="zbr-rowery.pl"
            className="text-zbr underline font-bold"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Przejdź do strony głównej"
          >
            zbr-rowery.pl
          </Link>{" "}
          dotyczących usług świadczonych przez Jędrzeja Żebrowskiego.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-zbr">
          2. Cel opinii
        </h2>
        <p>
          Opinie publikowane na stronie mają na celu dzielenie się
          doświadczeniami klientów oraz dostarczanie rzetelnych informacji dla
          potencjalnych użytkowników usług.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-zbr">
          3. Zasady publikacji opinii
        </h2>
        <ul className="list-disc pl-5 marker:text-zbr">
          <li>
            Opinie powinny być zgodne z rzeczywistością i odnosić się do usług
            Jędrzeja Żebrowskiego.
          </li>
          <li>
            Niedozwolone jest zamieszczanie treści obraźliwych, wulgarnych lub
            naruszających prawa osób trzecich.
          </li>
          <li>
            Administrator zastrzega sobie prawo do moderowania, skracania lub
            usuwania opinii, które naruszają niniejszy regulamin.
          </li>
          <li>
            Nie są publikowane opinie, które zawierają reklamy innych usług,
            linki zewnętrzne lub dane osobowe osób trzecich.
          </li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-bold text-zbr">
          4. Odpowiedzialność
        </h2>
        <p>
          Administrator nie ponosi odpowiedzialności za treść opinii
          zamieszczanych przez użytkowników, ale dokłada wszelkich starań, aby
          były one zgodne z regulaminem i prawem obowiązującym w Polsce.
        </p>

        <h2 className="text-[22px] md:text-[26px] font-bold text-zbr">
          5. Sposób moderacji
        </h2>
        <ul className="list-disc pl-5 marker:text-zbr">
          <li>Każda opinia jest weryfikowana przed publikacją.</li>
          <li>
            Administrator może poprosić autora opinii o dodatkowe informacje
            dotyczące jego doświadczeń.
          </li>
          <li>
            Użytkownik może zgłosić naruszenie regulaminu poprzez kontakt na
            adres e-mail:{" "}
            <a
              href="mailto:zbr.rowery@gmail.com"
              className="text-zbr underline"
            >
              zbr.rowery@gmail.com
            </a>
            .
          </li>
        </ul>

        <h2 className="text-[22px] md:text-[26px] font-bold text-zbr">
          6. Zmiany w Regulaminie
        </h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w
          regulaminie. Aktualna wersja obowiązuje od{" "}
          <strong>{new Date().toLocaleDateString("pl-PL")}</strong>.
        </p>
      </article>
    </section>
  </main>
);

export default ReviewPolicyPage;
