"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form-field";
import Link from "next/link";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handlePrivacyChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setPrivacyAccepted(target.checked);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Wysyłanie...");

    const response = await sendEmail(formData);

    if (response.success) {
      setStatus("Wiadomość wysłana pomyślnie!");
    } else {
      setStatus("Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <form
      className="flex flex-col flex-1 font-oswald gap-[22.5px]"
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
    >
      <fieldset className="border-none">
        <legend id="contact-form-heading" className="sr-only">
          Formularz kontaktowy
        </legend>
        <FormField
          id="name"
          label="Imię i nazwisko"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          id="email"
          label="Adres e-mail"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          id="message"
          label="Twoja wiadomość (opcjonalnie)"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
        />
        <FormField
          id="privacy-policy"
          type="checkbox"
          checked={privacyAccepted}
          onChange={handlePrivacyChange}
          required
          label={
            <span>
              Administratorem danych osobowych jest Jędrzej Żebrowski,
              prowadzący działalność gospodarczą pod firmą Jędrzej Żebrowski, z
              siedzibą przy ul. Stefana Czarnieckiego 15A/II, 14-100 Ostróda,
              NIP: 7412171619, REGON: 540478500. Dane osobowe będą przetwarzane
              w celu obsługi zapytania przesłanego przez formularz kontaktowy.
              Więcej informacji o przetwarzaniu danych osobowych, w tym o
              przysługujących Państwu prawach, znajduje się w{" "}
              <Link
                href="/polityka-prywatnosci"
                className="underline text-zbr font-bold"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Przejdź do Polityki Prywatności"
              >
                Polityce Prywatności
              </Link>
              .
            </span>
          }
        />
        <div className="flex justify-center md:justify-start">
          <Button
            size="lg"
            type="submit"
            aria-label="Wyślij wiadomość"
            className="bg-zbr text-white hover:bg-zbr/80 h-10"
          >
            Wyślij wiadomość
          </Button>
        </div>
        {status && <p className="mt-2 text-center">{status}</p>}
      </fieldset>
    </form>
  );
};
