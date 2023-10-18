"use client";

import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun as SunIcon } from "react-icons/bi";
import { MdDarkMode as MoonIcon } from "react-icons/md";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme == "light" ? (
        <Button
          onClick={() => setTheme("dark")}
          isIconOnly
          className="text-white bg-secondary-300"
          aria-label="Dark Mode"
          size="md"
        >
          <MoonIcon />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("light")}
          isIconOnly
          className="text-black bg-warning-500"
          aria-label="Light Mode"
          size="md"
        >
          <SunIcon size={18} />
        </Button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
