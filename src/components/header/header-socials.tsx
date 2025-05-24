import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";

export const HeaderSocials = () => (
  <section
    className="hidden md:flex items-center justify-between px-1.5 lg:px-6 text-[14px]"
    aria-label="Dane kontaktowe i linki społecznościowe"
  >
    <div className="flex items-center gap-4">
      <a
        href="https://maps.app.goo.gl/YebyG6gvRT5onTd28"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
        title="Zobacz lokalizację firmy na mapie"
      >
        <FaMapMarkerAlt className="size-[20px]" aria-hidden="true" />
        <span>ul. Czarnieckiego 15A/II, Ostróda</span>
      </a>
      <a
        href="https://www.facebook.com/61561204940324"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
        title="Facebook ZBR Rowery"
      >
        <FaFacebookF className="size-[20px]" aria-hidden="true" />
        <span className="sr-only">Facebook</span>
      </a>
      <a
        href="https://www.instagram.com/zbr.rowery?igsh=eDB6NTZpOWJ0OWFw"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
        title="Instagram ZBR Rowery"
      >
        <FaInstagram className="size-[20px]" aria-hidden="true" />
        <span className="sr-only">Instagram</span>
      </a>
      <a
        href="https://www.tiktok.com/@zbr.rowery.serwis?_t=ZN-8uBzDYNWukY&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
        title="TikTok ZBR Rowery"
      >
        <FaTiktok className="size-[20px]" aria-hidden="true" />
        <span className="sr-only">TikTok</span>
      </a>
    </div>
    <div className="flex items-center gap-4">
      <a
        href="tel:+48731181021"
        className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
        title="Zadzwoń: 731 181 021"
      >
        <FaPhone className="size-[20px]" aria-hidden="true" />
        <span>731 181 021</span>
      </a>
      <a
        href="mailto:zbr.rowery@gmail.com"
        className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
        title="Napisz e-mail: zbr.rowery@gmail.com"
      >
        <FaEnvelope className="size-[20px]" aria-hidden="true" />
        <span>zbr.rowery@gmail.com</span>
      </a>
    </div>
  </section>
);
