"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { useState } from "react";
import { Avatar } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export default function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Projects", "Articles", "Web Statistics"];

  return (
    <Navbar>
      <NavbarBrand>
        <Avatar
          name="DR"
          radius="sm"
          className="hidden sm:block"
          classNames={{
            name: "font-semibold text-medium",
          }}
        />
        <Avatar
          isBordered
          showFallback
          name="DR"
          size="sm"
          src="https://github.com/daverussell13.png"
          className="sm:hidden"
        />
        <p className="font-bold text-large ml-3">Dave Russell</p>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Web Statistics
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Articles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="#" size="lg">
            Web Statistics
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
