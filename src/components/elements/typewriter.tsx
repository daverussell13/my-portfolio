"use client";

import Tw, { Options } from "typewriter-effect";
import { useState, useEffect } from "react";

interface TypewriterProps {
  options: Options;
  defaultText?: string;
}

const Typewriter = ({ options, defaultText }: TypewriterProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) return <Tw options={options} />;
  return <>{defaultText}</>;
};

export default Typewriter;
