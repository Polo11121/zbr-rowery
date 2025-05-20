import { HeaderDesktopMenu } from "@/components/header/header-desktop-menu";
import { HeaderMobileMenu } from "@/components/header/header-mobile-menu";
import { LogoLink } from "@/components/logo-link";

export const HeaderNavigation = () => (
  <section className="flex items-center justify-between px-4 lg:px-12">
    <LogoLink />
    <HeaderMobileMenu />
    <HeaderDesktopMenu />
  </section>
);
