import {
  Navbar as Nav,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
} from "@nextui-org/navbar";

import NavbarBrand from "@/components/navbar/brand";
import NavbarMenu from "@/components/navbar/menu";
import ThemeSwitcher from "@/components/elements/theme-switcher";
import NavbarMenuMobile from "@/components/navbar/menu-mobile";
import DownloadCvButton from "../elements/download-cv-button";

const Navbar = () => {
  return (
    <Nav
      isBordered
      className="md:border-none"
      classNames={{
        wrapper: "max-w-4xl px-4",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:text-primary",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarBrand className="mr-2" />
        <NavbarMenu className="hidden md:flex space-x-4" />
      </NavbarContent>
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <DownloadCvButton />
        </NavbarItem>
        <NavbarItem className="md:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
        <NavbarMenuMobile />
      </NavbarContent>
    </Nav>
  );
};

export default Navbar;
