import { ContactSocials } from "@/components/contact-socials";
import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";

export const Contact = () => (
  <section
    className="flex container mx-auto md:flex-row flex-col gap-12 items-center my-12 md:my-24 max-[1599px]:px-4"
    aria-labelledby="contact-heading"
  >
    <article className={cn("flex flex-col gap-[50px] flex-1")}>
      <header className="flex flex-col gap-[40px]">
        <h2 id="contact-heading" className="text-[24px] font-bold text-zbr">
          Skontaktuj się z nami!
        </h2>
        <p>
          Masz jakieś pytania? Napisz do nas lub zadzwoń! Chętnie odpowiemy na
          Twoje wszystkie pytania. Znajdziesz nas też na Instagramie i Facebooku
          pod nickiem: <strong>ZBR ROWERY - Serwis rowerowy</strong>.
        </p>
      </header>
      <ContactSocials />
    </article>
    <ContactForm />
  </section>
);
