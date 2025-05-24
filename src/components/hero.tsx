import { Socials } from "@/components/socials";
import { Button } from "@/components/ui/button";
import { ScrollDownButton } from "@/components/scroll-down-button";
import Link from "next/link";

export const Hero = () => (
  <section className="bg-hero-pattern h-[calc(100svh-106px)] md:h-[calc(100svh-186px)] bg-cover bg-center  flex flex-col items-center md:justify-center justify-end relative">
    <Socials
      onlySocials
      className="top-8 md:top-20 bottom-auto left-8 md:left-[90px] "
    />
    <h1 className="flex flex-col text-white text-[30px] md:text-[40px] font-bold drop-shadow-lg text-center">
      <span className="hidden md:block ">SERWIS ROWEROWY ZBR-ROWERY</span>
      <span className="block md:hidden ">ZBR-ROWERY</span>
      <span>Z PASJI DO ROWERÓW</span>
    </h1>
    <Button className="mb-[48px] md:mb-[266pxx] text-[20px] px-4 py-8" asChild>
      <Link href="/oferta">SPRAWDŹ NASZĄ OFERTĘ</Link>
    </Button>
    <ScrollDownButton targetId="service-info" />
  </section>
);
