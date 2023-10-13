import { Divider } from "@nextui-org/divider";

import Introduction from "@/components/home/introduction";
import Career from "@/components/home/career";

export default function Home() {
  return (
    <>
      <Introduction />
      <Divider className="my-6" />
      <Career />
      <Divider className="my-8" />
    </>
  );
}
