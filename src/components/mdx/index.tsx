import { useMDXComponent } from "next-contentlayer/hooks";

import H1 from "@/components/mdx/h1";
import P from "@/components/mdx/p";

const components = {
  h1: H1,
  p: P,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
