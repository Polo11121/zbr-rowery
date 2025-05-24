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
        Twój rower zasługuje na więcej niż tylko podstawowy serwis! Nasze
        Rowerowe SPA to wyjątkowa usługa, która sprawi, że Twój rower nie tylko
        odzyska pełną sprawność, ale także będzie wyglądał jak nowy. Idealne
        rozwiązanie dla tych, którzy chcą zadbać o każdy detal swojego roweru –
        zarówno pod kątem estetyki, jak i funkcjonalności.
      </p>
    </div>
    <ImageGallery
      items={images}
      additionalClass="w-screen md:max-w-3xl px-4 md:px-0"
    />
  </section>
);
