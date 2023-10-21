import PageHeading from "@/components/elements/page-heading";
import ProjectCard from "@/components/projects/project-card";
import ProjectCardList from "@/components/projects/project-card-list";

const PAGE_TITLE = "Projects";
const PAGE_DESCRIPTION = "Showcase of my ongoing and completed projects";

export default function Projects() {
  return (
    <>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectCardList>
        <ProjectCard />
        <ProjectCard />
      </ProjectCardList>
    </>
  );
}
