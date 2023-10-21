import { ReactNode } from "react";

interface ProjectCardList {
  children: ReactNode;
}

const ProjectCardList = ({ children }: ProjectCardList) => {
  return <div className="grid sm:grid-cols-2 gap-5 pt-2 px-1">{children}</div>;
};

export default ProjectCardList;
