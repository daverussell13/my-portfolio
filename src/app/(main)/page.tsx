import { Divider } from "@nextui-org/divider";

import Introduction from "@/components/home/introduction";
import Career from "@/components/home/career";
import Skills from "@/components/home/skills";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Introduction />
      <Divider className="my-6" />
      <Career />
      <Divider className="my-6" />
      <Skills />
      <Divider className="my-6" />
      <Contact />
    </>
  );
}
