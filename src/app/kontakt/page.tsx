import { Contact } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Skontaktuj się z nami | ZBR Rowery",
  description:
    "Skontaktuj się z zespołem ZBR Rowery. Znajdziesz tutaj dane kontaktowe, formularz oraz wszystkie informacje, których potrzebujesz, by się z nami skontaktować.",
};

const ContactPage = () => (
  <main className="container mx-auto py-10 flex-1 md:px-4" role="main">
    <h1 className="text-3xl font-bold mb-8 text-center text-zbr">Kontakt</h1>
    <Contact />
  </main>
);

export default ContactPage;
