import { ReactNode } from "react";

export type MenuItemData = {
  title: string;
  href: string;
  isExternal: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  eventName?: string;
  type?: string;
};
