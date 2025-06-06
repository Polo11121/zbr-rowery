import { Contact } from "@/components/contact";
import { Heading } from "@/components/heading";
import { Main } from "@/components/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Skontaktuj się z nami | ZBR ROWERY",
  description:
    "Skontaktuj się z zespołem ZBR ROWERY. Znajdziesz tutaj dane kontaktowe, formularz oraz wszystkie informacje, których potrzebujesz, by się z nami skontaktować.",
};

const ContactPage = () => (
  <Main>
    <Heading>Kontakt</Heading>
    <Contact />
  </Main>
);

export default ContactPage;
