"use client";

import { images } from "@/constants/gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const Gallery = () => (
  <section
    aria-labelledby="gallery-heading"
    className="flex flex-col items-center justify-center gap-8 bg-zbr py-8 md:px-0 px-4"
  >
    <div className="max-w-3xl">
      <h2
        id="gallery-heading"
        className="text-2xl font-bold text-white mb-4 text-center"
      >
        Galeria
      </h2>
      <p className="text-lg text-white text-center mb-8 md:mb-0">
        Zajrzyj do naszej galerii i zobacz efekty naszej pracy! Każde zdjęcie to
        dowód na to, jak bardzo dbamy o każdy detal. Od dokładnego czyszczenia
        po pełną regenerację – Twojemu rowerowi też możemy przywrócić dawny
        blask!
      </p>
    </div>
    <ImageGallery
      items={images}
      additionalClass="w-screen md:max-w-3xl px-4 md:px-0"
    />
  </section>
);
