import Link from "next/link";
import { ReactNode } from "react";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

interface LinkComponentProps {
  id: string;
  url: string;
  text: string;
  icon?: ReactNode;
}

interface ProjectLinkProps {
  title?: string;
  link_repository?: string;
  link_demo?: string;
}

const ProjectLink = ({
  title,
  link_repository,
  link_demo,
}: ProjectLinkProps) => {
  const LinkComponent = ({ id, url, text, icon }: LinkComponentProps) => {
    const eventName = `Click ${text} - Project ${title}`;

    return (
      <Link
        href={url}
        target="_blank"
        passHref
        data-umami-event={eventName}
        id={id}
        className="scroll-mt-32 focus:border focus:border-foreground focus:animate-bounce"
      >
        <div className="flex gap-2 items-center font-medium text-neutral-700 dark:text-neutral-300 ">
          {icon}
          <span className="text-[15px] text-primary hover:text-primary/50 transition-all duration-300">
            {text}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex gap-4">
      {link_repository && (
        <LinkComponent
          id="github"
          url={link_repository}
          text="Source Code"
          icon={<GithubIcon size={22} />}
        />
      )}
      {link_repository && link_demo && (
        <span className="text-neutral-400 dark:text-neutral-600">|</span>
      )}
      {link_demo && (
        <LinkComponent
          id="live"
          url={link_demo}
          text="Live Demo"
          icon={<LinkIcon size={22} />}
        />
      )}
    </div>
  );
};

export default ProjectLink;
