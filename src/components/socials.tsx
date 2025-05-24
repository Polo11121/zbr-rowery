import { cn } from "@/lib/utils";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

type SocialsProps = {
  onlySocials?: boolean;
  className?: string;
};

export const Socials = ({ onlySocials, className }: SocialsProps) => (
  <nav
    className={cn(
      "absolute bottom-10 flex flex-col items-center text-center gap-4",
      className
    )}
    aria-label="Nawigacja zewnętrzna"
  >
    {!onlySocials && (
      <>
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
      </>
    )}
    <div
      className={cn(
        "flex items-center gap-4",
        onlySocials ? "flex-col gap-6" : "flex-row"
      )}
    >
      <a
        href="https://www.facebook.com/61561204940324"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
        aria-label="Facebook - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
      >
        <FaFacebook
          aria-hidden="true"
          className={cn("!size-[32px]", onlySocials && "!size-[48px]")}
        />
      </a>
      <a
        href="https://www.tiktok.com/@zbr.rowery.serwis?_t=ZN-8uBzDYNWukY&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
        aria-label="TikTok - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
      >
        <FaTiktok
          aria-hidden="true"
          className={cn("!size-[32px]", onlySocials && "!size-[48px]")}
        />
      </a>
      <a
        href="https://www.instagram.com/zbr.rowery?igsh=eDB6NTZpOWJ0OWFw"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
        aria-label="Instagram - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
      >
        <FaInstagram
          aria-hidden="true"
          className={cn("!size-[32px]", onlySocials && "!size-[48px]")}
        />
      </a>
    </div>
  </nav>
);
