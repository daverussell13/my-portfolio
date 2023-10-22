import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";

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
  return <Mdx code={project.body.code} />;
}
