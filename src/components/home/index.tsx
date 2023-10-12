import { Divider } from "@nextui-org/divider";

import Introduction from "@/components/home/introduction";
import Career from "@/components/home/career";

const Home = () => {
  return (
    <>
      <Introduction />
      <Divider className="my-6" />
      <Career />
      <Divider className="my-6" />
    </>
  );
};

export default Home;
