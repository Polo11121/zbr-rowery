import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const ContactSocials = () => (
  <div className="flex flex-col gap-[20px] text-[18px] font-oswald">
    <div className="flex gap-[20px] items-center hover:text-zbr">
      <BsTelephone size={40} className="text-zbr" aria-hidden="true" />
      <a
        href="tel:+48783618532"
        className="hover:underline focus:underline"
        aria-label="Zadzwoń do nas na numer +48 731 181 021"
      >
        +48 731 181 021
      </a>
    </div>
    <div className="flex gap-[20px] items-center hover:text-zbr">
      <MdOutlineMailOutline size={42} className="text-zbr" aria-hidden="true" />
      <a
        href="mailto:zbr.rowery@gmail.com"
        className="hover:underline focus:underline"
        aria-label="Wyślij e-mail na adres zbr.rowery@gmail.com"
      >
        zbr.rowery@gmail.com
      </a>
    </div>
    <a
      href="https://www.facebook.com/61561204940324"
      className="flex gap-[20px] items-center font-bold cursor-pointer group w-fit"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Przejdź do naszego profilu na Facebooku"
    >
      <FaFacebook size={42} className="text-zbr" aria-hidden="true" />
      <span className="group-hover:text-zbr group-focus:text-zbr">
        FACEBOOK
      </span>
    </a>
    <a
      href="https://www.instagram.com/zbr.rowery?igsh=eDB6NTZpOWJ0OWFw"
      className="flex gap-[20px] items-center font-bold cursor-pointer group w-fit"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Przejdź do naszego profilu na Instagramie"
    >
      <FaInstagram size={42} className="text-zbr" aria-hidden="true" />
      <span className="group-hover:text-zbr group-focus:text-zbr">
        INSTAGRAM
      </span>
    </a>
    <a
      href="https://www.tiktok.com/@zbr.rowery.serwis?_t=ZN-8uBzDYNWukY&_r=1"
      className="flex gap-[20px] items-center font-bold cursor-pointer group w-fit"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Przejdź do naszego profilu na TikTok"
    >
      <FaTiktok size={42} className="text-zbr" aria-hidden="true" />
      <span className="group-hover:text-zbr group-focus:text-zbr">TIK TOK</span>
    </a>
  </div>
);
