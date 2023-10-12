"use client";

import Tw, { Options } from "typewriter-effect";

interface TypewriterProps {
  options: Options;
}

const Typewriter = ({ options }: TypewriterProps) => {
  return <Tw options={options} />;
};

export default Typewriter;
