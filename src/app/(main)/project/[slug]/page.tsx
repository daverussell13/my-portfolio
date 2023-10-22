import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

import Mdx from "@/components/mdx";
import ProjectDetail from "@/components/projects/project-detail";

import { STACK_KEY } from "@/types/stack";
import { Divider } from "@nextui-org/divider";

interface ProjectProps {
  params: {
    slug: string;
  };
}

async function getProjectFromParams(slug: string) {
  const project = allProjects.find((doc) => doc.slug === slug);
  if (!project) notFound();
  return project;
}

export default async function Project({ params }: ProjectProps) {
  const project = await getProjectFromParams(params.slug);
  return (
    <main>
      <ProjectDetail
        title={project.title}
        imageUrl={project.thumbnail}
        description={project.description}
        stacks={project.stack as STACK_KEY[]}
        repository={project.repository}
        demo={project.demo}
      />
      <Divider className="mt-6" />
      <Mdx code={project.body.code} />
    </main>
  );
}
