"use client";

import { NavbarItem, NavbarContent } from "@nextui-org/navbar";
import Link from "next/link";
import { NAVIGATION } from "@/constants/menu";
import { usePathname } from "next/navigation";

interface NavbarMenuProps {
  className?: string;
}

const NavbarMenu = ({ className }: NavbarMenuProps) => {
  const path = usePathname();
  return (
    <NavbarItem className={className}>
      <NavbarContent className="cursor-pointer">
        {NAVIGATION.map((item, index) => {
          const active = path == item.href;
          return active ? (
            <NavbarItem key={index} isActive aria-current="page">
              <Link href={item.href}>{item.title}</Link>
            </NavbarItem>
          ) : (
            <NavbarItem key={index}>
              <Link href={item.href}>{item.title}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </NavbarItem>
  );
};

export default NavbarMenu;
