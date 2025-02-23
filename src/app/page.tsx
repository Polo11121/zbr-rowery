import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-screen">
      <main className="w-full flex items-center justify-center flex-1 flex-col gap-2 text-center md:w-1/2 ">
        <div className="relative w-[350px] h-[238px] md:w-[450px] md:h-[306px] mb-8">
          <Image
            className="mx-auto object-contain"
            src="/logo.webp"
            alt="ZBR Rowery logo"
            fill
          />
        </div>
        <h1 className="md:text-5xl text-3xl font-bold">Strona w budowie</h1>
        <p className="text-lg font-semibold">
          Pracujemy nad nową stroną internetową, aby zapewnić Ci jeszcze lepszą
          obsługę!
        </p>
      </main>
      <footer className="w-full items-center flex flex-col md:flex-row justify-around text-center md:w-1/2  border-t-2  border-[#1D78BF] md:pt-4 md:pb-8 py-2">
        <section className="font-semibold">
          <p className="hidden md:block">adres</p>
          <p>Czarnieckiego 15A/II, Ostróda</p>
        </section>
        <section className="font-semibold">
          <p className="hidden md:block">e-mail</p>
          <p>zbr.rowery@gmail.com</p>
        </section>
        <section className="font-semibold">
          <p className="hidden md:block">telefon</p>
          <p>731 181 021</p>
        </section>
        <section className="font-semibold">
          <p className="flex items-center justify-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61561204940324"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <FaFacebookF className="hover:text-[#1D78BF] md:size-8 size-6" />
            </a>
            <a
              href="https://www.instagram.com/zbr.rowery?igsh=YnU5dHc3YWYxdnVv"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <FaInstagram className="hover:text-[#1D78BF] md:size-8 size-6" />
            </a>
          </p>
        </section>
      </footer>
    </div>
  );
}
