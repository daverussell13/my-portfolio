"use client";

import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

import cn from "@/libs/utils";

interface ContactButtonProps {
  type: ContactButtonType;
  link: string;
  children: ReactNode;
  icon: ReactNode;
}

export type ContactButtonType =
  | "Email"
  | "Linkedin"
  | "Twitter"
  | "Instagram"
  | "Github";

const contactButtonType = {
  Email: "bg-green-600",
  Linkedin: "bg-blue-500",
  Twitter: "bg-sky-500",
  Instagram: "bg-orange-700",
  Github: "bg-black",
};

const ContactButton = ({ type, link, icon, children }: ContactButtonProps) => {
  const contactButtonTypeMap = new Map(Object.entries(contactButtonType));
  const handleAction = (link: string) => window.open(link, "_blank");

  return (
    <Button
      className={cn(
        "w-full md:w-1/5 flex justify-center items-center text-white hover:scale-105 transition-all duration-300",
        contactButtonTypeMap.get(type)
      )}
      startContent={icon}
      onClick={() => handleAction(link)}
    >
      {children}
    </Button>
  );
};

export default ContactButton;
