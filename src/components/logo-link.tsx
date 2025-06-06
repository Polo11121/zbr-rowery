import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.webp";

export const LogoLink = () => (
  <Link
    href="/"
    title="Przejdź na stronę główną"
    className="w-[85px] h-[58px] md:w-[125px] md:h-[85px] relative"
  >
    <Image src={logo} fill alt="Logo serwisu rowerowego ZBR-Rowery" priority />
  </Link>
);
