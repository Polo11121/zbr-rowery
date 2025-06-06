import { Socials } from "@/components/socials";
import { Button } from "@/components/ui/button";
import { ScrollDownButton } from "@/components/scroll-down-button";
import Link from "next/link";
import Image from "next/image";
import heroBanner from "@/../public/hero-banner.webp";

export const Hero = () => (
  <section className="relative h-[calc(100svh-106px)] md:h-[calc(100svh-186px)] flex flex-col items-center md:justify-center justify-end overflow-hidden">
    <Image
      src={heroBanner}
      alt="Tło z narzędziami w serwisie ZBR ROWERY"
      fill
      className="object-cover z-[-1]"
      placeholder="blur"
      priority
    />
    <Socials
      onlySocials
      className="top-8 md:top-20 bottom-auto left-8 md:left-[90px]"
    />
    <h1 className="flex flex-col text-white text-[30px] md:text-[40px] font-bold drop-shadow-lg text-center z-10">
      <span className="hidden md:block">SERWIS ROWEROWY ZBR ROWERY</span>
      <span className="block md:hidden">ZBR-ROWERY</span>
      <span>Z PASJI DO ROWERÓW</span>
    </h1>
    <Button className="mb-[96px] text-[20px] px-4 py-8 z-10" asChild>
      <Link href="/oferta">SPRAWDŹ NASZĄ OFERTĘ</Link>
    </Button>
    <ScrollDownButton targetId="service-info" />
  </section>
);
