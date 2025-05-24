import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Opinions = () => (
  <section
    aria-labelledby="opinions-heading"
    className="flex flex-col items-center justify-center gap-8 py-8 md:px-0 px-4"
  >
    <div className="max-w-3xl">
      <h2
        id="opinions-heading"
        className="text-2xl font-bold text-zbr mb-4 text-center"
      >
        Opinie
      </h2>
      <p className="text-lg text-center mb-8 text-gray-700">
        Przekonaj się, co nasi klienci mówią o naszych usługach! Z dumą
        prezentujemy opinie zadowolonych rowerzystów, którzy skorzystali z
        naszego serwisu. Ich zadowolenie to dla nas największa nagroda i
        motywacja do dalszego działania.
      </p>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 10 }, (_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative w-full h-[300px]">
                <Image
                  src={`/review-${index + 1}.webp`}
                  alt={`Opinia ${index + 1}`}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-4 absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 md:static md:bottom-auto md:left-auto md:transform-none md:translate-x-0">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  </section>
);
