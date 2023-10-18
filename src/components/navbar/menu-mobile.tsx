import { NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from "next/link";
import { NAVIGATION } from "@/constants/menu";

const NavbarMenuMobile = () => {
  return (
    <NavbarMenu>
      {NAVIGATION.map((item, index) => {
        return (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        );
      })}
    </NavbarMenu>
  );
};

export default NavbarMenuMobile;
