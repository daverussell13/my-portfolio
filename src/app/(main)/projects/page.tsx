import { allProjects } from "contentlayer/generated";

import PageHeading from "@/components/elements/page-heading";
import ProjectCard from "@/components/projects/project-card";
import ProjectCardList from "@/components/projects/project-card-list";

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION = "Showcase of my ongoing and completed projects";

export default function Projects() {
  const projects = allProjects.sort(
    (projectA, projectB) =>
      new Date(projectB.date).getTime() - new Date(projectA.date).getTime()
  );

  return (
    <>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectCardList>
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </ProjectCardList>
    </>
  );
}
