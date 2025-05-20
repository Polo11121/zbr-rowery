import { FAQList } from "@/app/faq/_components/FAQList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Najczęściej zadawane pytania | ZBR Rowery",
  description:
    "Najczęściej zadawane pytania dotyczące usług ZBR Rowery. Sprawdź odpowiedzi na pytania o serwis, Rowerowe SPA, zabezpieczenie folią PPF, odbiór roweru i więcej.",
};

const FAQPage = () => (
  <main className="container mx-auto py-10" role="main">
    <h1 className="text-3xl font-bold mb-6 text-center text-zbr">
      FAQ – Najczęściej zadawane pytania
    </h1>
    <FAQList />
  </main>
);

export default FAQPage;
