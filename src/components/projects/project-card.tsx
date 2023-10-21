import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";

import NextImage from "next/image";
import { STACK_ICON } from "@/constants/stack";

const ProjectCard = () => {
  return (
    <Card isBlurred isPressable className="group lg:hover:scale-[102%]">
      <CardHeader className="relative p-0">
        <Image
          className="z-auto hidden sm:block"
          radius="none"
          as={NextImage}
          width={450}
          height={225}
          alt="Project Image"
          src="/images/projects/thumbnail/newskylights.jpg"
        />
        <Image
          className="z-auto sm:hidden"
          radius="none"
          as={NextImage}
          width={600}
          height={300}
          alt="Project Image"
          src="/images/projects/thumbnail/newskylights.jpg"
        />
        <div className="z-auto absolute inset-0 bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-white group-hover:opacity-80 text-sm font-medium">
          <span className="mr-2">View Project</span>
          <ViewIcon size={20} />
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <div className="flex justify-between">
          <div className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 group-hover:text-primary transition-all duration-300">
            Title
          </div>
        </div>
        <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tempore
          consectetur explicabo dolores eos ea quos, nobis dignissimos ipsam
          autem eveniet perspiciatis maxime repellat pariatur quod, deserunt
          odio vero nemo omnis, dolorum saepe rem quae nulla. Nobis a
          reprehenderit dolor, praesentium provident et pariatur tempore nemo
          repellendus fugiat, porro quas!
        </p>
        <div className="flex items-center gap-3 pt-2">
          <Tooltip showArrow={true} content="I am a tooltip ">
            {STACK_ICON.Laravel}
          </Tooltip>
          <Tooltip showArrow={true} content="I am a tooltip">
            {STACK_ICON.PHP}
          </Tooltip>
          <Tooltip showArrow={true} content="I am a tooltip">
            {STACK_ICON.Bootstrap}
          </Tooltip>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
