import { FAQList } from "@/app/faq/_components/FAQList";
import { Contact } from "@/components/contact";
import { Heading } from "@/components/heading";
import { Main } from "@/components/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Najczęściej zadawane pytania | ZBR Rowery",
  description:
    "Najczęściej zadawane pytania dotyczące usług ZBR Rowery. Sprawdź odpowiedzi na pytania o serwis, Rowerowe SPA, zabezpieczenie folią PPF, odbiór roweru i więcej.",
};

const FAQPage = () => (
  <Main>
    <Heading>FAQ – Najczęściej zadawane pytania</Heading>
    <FAQList />
    <Contact />
  </Main>
);

export default FAQPage;
