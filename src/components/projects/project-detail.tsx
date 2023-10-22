import { Tooltip } from "@nextui-org/tooltip";

import { STACK_ICON } from "@/constants/stack";
import { STACK_KEY } from "@/types/stack";

import Image from "@/components/elements/image";
import ProjectLink from "@/components/projects/project-link";

interface ProjectDetailProps {
  title: string;
  description: string;
  stacks: STACK_KEY[];
  imageUrl: string;
  repository?: string;
  demo?: string;
}

const ProjectDetail = ({
  title,
  description,
  stacks,
  imageUrl,
  repository,
  demo,
}: ProjectDetailProps) => {
  return (
    <>
      <Image
        src={imageUrl}
        width={1280}
        height={720}
        alt={title}
        className="hover:scale-105"
      />
      <h1 className="mt-4 text-2xl font-medium font-sora">{title}</h1>
      <p className="mt-4 border-neutral-600 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {stacks.map((tech, index) => {
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
        <ProjectLink
          title={title}
          link_repository={repository}
          link_demo={demo}
        />
      </div>
    </>
  );
};

export default ProjectDetail;
