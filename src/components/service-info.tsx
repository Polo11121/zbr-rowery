import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ServiceInfoProps = {
  title?: string;
  description?: string;
  imageSrc: string;
  className?: string;
};

export const ServiceInfo = ({
  title,
  description,
  imageSrc,
  className,
}: ServiceInfoProps) => (
  <section
    id="service-info"
    aria-labelledby="service-heading"
    className={cn(
      "flex flex-col-reverse xl:flex-row items-center justify-center gap-8 mb-8",
      className
    )}
  >
    <div className="flex items-center justify-center flex-col max-w-3xl">
      <h2
        id="service-heading"
        className="text-2xl font-bold text-zbr mb-4 text-center"
      >
        {title}
      </h2>
      <p className="text-lg text-gray-700 text-center">
        {description}
        <br />
        <strong>ul. Stefana Czarnieckiego 15A/II, 14-100 Ostróda</strong>
        <br />
        <br />
        <strong className="block mt-4 mb-2">Godziny otwarcia:</strong>
        <span className="block">Poniedziałek: 09:00–12:00</span>
        <span className="block">Wtorek: 09:00–12:00</span>
        <span className="block">Środa: 13:00–16:00</span>
        <span className="block">Czwartek: 09:00–12:00</span>
        <span className="block">Piątek: 09:00–12:00</span>
        <span className="block">Sobota: Zamknięte</span>
        <span className="block">Niedziela: Zamknięte</span>
      </p>
      <Link
        href="/oferta"
        className="px-6 py-3 bg-zbr text-white rounded-md hover:bg-zbr-dark transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-zbr focus:ring-opacity-50 mt-4"
      >
        Sprwadź naszą ofertę
      </Link>
    </div>
    <div className="w-full md:w-[450px]">
      <Image
        src={imageSrc}
        alt="Zdjęcie siedziby serwisu ZBR Rowery przy ul. Czarnieckiego 15A/II w Ostródzie"
        width={450}
        height={675}
        loading="lazy"
        className="md:rounded-lg w-full h-auto object-cover"
      />
    </div>
  </section>
);
