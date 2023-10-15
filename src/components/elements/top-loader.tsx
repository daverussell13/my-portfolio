"use client";

import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const TopLoader = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const color = theme == "light" ? "#f5c2e7" : "#88CCCC";

  return (
    <NextTopLoader
      color={color}
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow={`0 0 10px ${color},0 0 5px ${color}`}
    />
  );
};

export default TopLoader;
