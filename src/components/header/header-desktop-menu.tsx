"use client";

import { Button } from "@/components/ui/button";
import { HEADER_LINKS } from "@/constants/header";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const HeaderDesktopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-2 group">
        {HEADER_LINKS.map(({ path, label }) => {
          const isActive = path === pathname;

          return (
            <li key={path}>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "transition-colors duration-300 font-bold px-4 py-2 rounded-md",
                  "hover:text-zbr",
                  isActive ? "text-zbr" : "text-[#0A0A0A]",
                  isActive && "group-hover:text-[#0A0A0A]",
                  isActive && "hover:!text-zbr"
                )}
              >
                <Link
                  href={path}
                  title={`Przejdź do ${label.toLowerCase()}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
