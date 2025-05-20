import { HeaderSocials } from "@/components/header/header-socials";
import { HeaderNavigation } from "@/components/header/header-navigation";

export const Header = () => (
  <header
    className="py-6 flex flex-col bg-white gap-8"
    aria-label="Główna nawigacja"
  >
    <HeaderSocials />
    <HeaderNavigation />
  </header>
);
