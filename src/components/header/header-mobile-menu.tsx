"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "@/constants/header";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeaderMobileMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") toggleMenu();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      <Button
        variant="ghost"
        className="hover:text-zbr block md:hidden"
        onClick={toggleMenu}
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu />
      </Button>
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50 transition-opacity duration-300 ease-in-out"
          role="dialog"
          aria-labelledby="mobile-menu-heading"
          aria-modal="true"
        >
          <Button
            onClick={toggleMenu}
            variant="ghost"
            className="absolute top-6 right-6 text-3xl focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
            aria-label="Zamknij menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
          >
            <IoClose />
          </Button>
          <Link
            href="/"
            className="w-[200px] h-[136px] relative mb-12"
            onClick={toggleMenu}
          >
            <Image
              src="/logo-white.webp"
              fill
              alt="Logo serwisu rowerowego ZBR-Rowery"
              priority
            />
          </Link>
          <nav id="mobile-menu" aria-labelledby="mobile-menu-heading">
            <h2 id="mobile-menu-heading" className="sr-only">
              Nawigacja mobilna
            </h2>
            <ul className="text-center space-y-4 text-xl font-semibold group">
              {HEADER_LINKS.map(({ label, path }) => {
                const isActive = path === pathname;

                return (
                  <li key={path}>
                    <Link
                      href={path}
                      className={cn(
                        "transition-colors duration-300 px-4 py-2 rounded-md",
                        "hover:!text-zbr hover:!font-bold focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr",
                        isActive ? "text-zbr font-bold" : "text-white",
                        isActive &&
                          "group-hover:text-white group-hover:font-medium"
                      )}
                      onClick={toggleMenu}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav
            className="absolute bottom-10 flex flex-col items-center text-center gap-4"
            aria-label="Nawigacja zewnętrzna"
          >
            <Link
              href="tel:+48731181021"
              className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
              title="Zadzwoń: 731 181 021"
            >
              <FaPhone className="size-[20px]" aria-hidden="true" />
              <span>731 181 021</span>
            </Link>
            <Link
              href="mailto:zbr.rowery@gmail.com"
              className="flex items-center gap-2 hover:text-zbr transition-colors duration-300"
              title="Napisz e-mail: zbr.rowery@gmail.com"
            >
              <FaEnvelope className="size-[20px]" aria-hidden="true" />
              <span>zbr.rowery@gmail.com</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
                aria-label="Facebook - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
              >
                <FaFacebook aria-hidden="true" className="!size-[32px]" />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
                aria-label="TikTok - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
              >
                <FaTiktok aria-hidden="true" className="!size-[32px]" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-zbr focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zbr"
                aria-label="Instagram - Profil serwisu rowerowego ZBR-Rowery, otworzy się w nowym oknie"
              >
                <FaInstagram aria-hidden="true" className="!size-[32px]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
