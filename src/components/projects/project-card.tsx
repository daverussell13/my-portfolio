import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";
import { Project } from "contentlayer/generated";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";

import Image from "@/components/elements/image";

import { STACK_ICON } from "@/constants/stack";
import { STACK_KEY } from "@/types/stack";

import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={project.path}>
      <Card
        isBlurred
        isPressable
        className="group lg:hover:scale-[102%] bg-background/50 dark:bg-primary/10"
      >
        <CardHeader className="relative p-0">
          <Image
            className="z-auto hidden sm:block object-contain"
            width={450}
            height={225}
            alt={`${project.title} image`}
            src={project.thumbnail}
          />
          <Image
            className="z-auto sm:hidden object-contain"
            width={600}
            height={300}
            alt={`${project.title} image`}
            src={project.thumbnail}
          />
          <div className="z-auto absolute inset-0 bg-black opacity-0 transition-opacity duration-300 flex justify-center items-center text-white group-hover:opacity-80 text-sm font-medium">
            <span className="mr-2">View Project</span>
            <ViewIcon size={20} />
          </div>
        </CardHeader>
        <CardBody className="space-y-2">
          <div className="flex justify-between">
            <div className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 group-hover:text-primary transition-all duration-300">
              {project.title}
            </div>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            {project.stack.map((tech, index) => {
              const icon = STACK_ICON[tech as STACK_KEY];
              return (
                <Tooltip
                  color="primary"
                  key={index}
                  showArrow={true}
                  content={tech}
                >
                  <div>{icon}</div>
                </Tooltip>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
