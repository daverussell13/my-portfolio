import { Project } from "contentlayer/generated";
import Link from "next/link";

export default function ProjectCard(project: Project) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={project.path}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {project.title}
        </Link>
      </h2>
      <time
        dateTime={project.date}
        className="mb-2 block text-xs text-gray-600"
      >
        {new Intl.DateTimeFormat("en-US").format(new Date(project.date))}
      </time>
    </div>
  );
}
