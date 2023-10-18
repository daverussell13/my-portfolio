"use client";

import { usePathname } from "next/navigation";

import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { NAVIGATION } from "@/constants/menu";
import { BiRightArrowAlt as RightArrowIcon } from "react-icons/bi";

const NavbarMenuMobile = () => {
  const path = usePathname();
  return (
    <>
      <NavbarMenu className="p-4">
        {NAVIGATION.map((item, index) => {
          const active = path == item.href;
          return (
            <NavbarMenuItem
              key={index}
              className={
                active ? "bg-foreground/10 rounded-xl font-medium" : ""
              }
            >
              <Link
                isBlock
                className="py-2 px-3 w-full"
                href={item.href}
                color="foreground"
                size="lg"
              >
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </div>
                  {active ? (
                    <RightArrowIcon className="justify-self-end" />
                  ) : null}
                </div>
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </>
  );
};

export default NavbarMenuMobile;
