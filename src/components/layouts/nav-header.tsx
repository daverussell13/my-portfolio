"use client";

import ThemeSwitcher from "@/components/elements/theme-switcher";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { LuDownload as DownloadIcon } from "react-icons/lu";
import { Avatar, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

export default function NavHeader() {
  return (
    <Navbar classNames={{ wrapper: "max-w-4xl px-4 lg:px-0" }}>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-2">
          <Avatar
            color="primary"
            name="DR"
            radius="sm"
            className="hidden sm:block"
            classNames={{ name: "font-bold" }}
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
        <NavbarContent className="hidden md:flex gap-4">
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
            <Link color="foreground" href="#" aria-current="page">
              Articles
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Stats
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-2" justify="end">
        <ThemeSwitcher />
        <Button
          color="primary"
          startContent={<DownloadIcon className="animate-rain-arrow" />}
        >
          Download Resume
        </Button>
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
