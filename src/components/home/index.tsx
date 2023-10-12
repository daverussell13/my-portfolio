import Introduction from "@/components/home/introduction";
import { Divider } from "@nextui-org/divider";
import Career from "./career";

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
