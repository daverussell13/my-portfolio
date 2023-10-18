import { NavbarBrand as NavBrand, NavbarItem } from "@nextui-org/navbar";
import { Avatar } from "@nextui-org/avatar";

interface NavbarBrandProps {
  className?: string;
}

const NavbarBrand = ({ className }: NavbarBrandProps) => {
  return (
    <NavbarItem className={className}>
      <NavBrand>
        <Avatar
          color="primary"
          name="DR"
          radius="sm"
          className="hidden sm:flex"
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
      </NavBrand>
    </NavbarItem>
  );
};

export default NavbarBrand;
