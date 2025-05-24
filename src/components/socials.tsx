import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export const Socials = () => (
  <nav
    className="absolute bottom-10 flex flex-col items-center text-center gap-4"
    aria-label="Nawigacja zewnętrzna"
  >
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
    <div className="flex items-center gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer "
        className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
        aria-label="Facebook - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
      >
        <FaFacebook aria-hidden="true" className="!size-[32px]" />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
        aria-label="TikTok - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
      >
        <FaTiktok aria-hidden="true" className="!size-[32px]" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
        aria-label="Instagram - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
      >
        <FaInstagram aria-hidden="true" className="!size-[32px]" />
      </a>
    </div>
  </nav>
);
