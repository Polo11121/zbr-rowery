import { Button } from "./ui/button";

export const Hero = () => (
  <section className="bg-hero-pattern h-[calc(100svh-106px)] md:h-[calc(100svh-186px)] bg-cover bg-center  flex flex-col items-center justify-center  ">
    <h1 className="flex flex-col text-white text-[40px] font-bold drop-shadow-lg text-center">
      <span>SERWIS ROWEROWY ZBR-ROWERY</span>
      <span>Z PASJI DO ROWERÓW</span>
    </h1>
    <Button className="mb-[186px] text-[20px] px-4 py-8">
      SPRAWDŹ NASZĄ OFERTĘ
    </Button>
  </section>
);
