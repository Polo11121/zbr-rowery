"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
      className="flex flex-col flex-1  font-oswald gap-[22.5px]"
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-heading"
    >
      <fieldset className="border-none">
        <legend id="contact-form-heading" className="sr-only">
          Formularz kontaktowy
        </legend>
        <label htmlFor="name">
          Imię i nazwisko
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full h-[50px] px-[15px] border-2 border-secondaryGray focus:outline-zbr mb-3"
          />
        </label>
        <label htmlFor="email">
          Adres e-mail
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full h-[50px] px-[15px] border-2 border-secondaryGray focus:outline-zbr mb-3"
          />
        </label>
        <label htmlFor="message">
          Twoja wiadomość (opcjonalnie)
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-[15px] border-2 border-secondaryGray focus:outline-zbr resize-none"
          />
        </label>
        <label
          htmlFor="privacy-policy"
          className="text-[13px] flex items-start gap-2 mb-6"
        >
          <input
            id="privacy-policy"
            type="checkbox"
            required
            className="mt-1 hover:cursor-pointer"
          />
          <span>
            Administratorem danych osobowych jest Jędrzej Żebrowski, prowadzący
            działalność gospodarczą pod firmą Jędrzej Żebrowski, z siedzibą przy
            ul. Stefana Czarnieckiego 15A/II, 14-100 Ostróda, NIP: 7412171619,
            REGON: 540478500. Dane osobowe będą przetwarzane w celu obsługi
            zapytania przesłanego przez formularz kontaktowy. Więcej informacji
            o przetwarzaniu danych osobowych, w tym o przysługujących Państwu
            prawach, znajduje się w{" "}
            <Link
              href="/polityka-prywatnosci"
              className="underline text-zbr font-bold"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Przejdź do Polityki Prywatności"
            >
              Polityce Prywatności
            </Link>
            .
          </span>
        </label>
        <div className="flex justify-center md:justify-start">
          <Button
            size="lg"
            type="submit"
            aria-label="Wyślij wiadomość"
            className="bg-zbr	text-white hover:bg-zbr/80 h-10"
          >
            Wyślij wiadomość
          </Button>
        </div>
        {status && <p className="mt-2 text-center">{status}</p>}
      </fieldset>
    </form>
  );
};
