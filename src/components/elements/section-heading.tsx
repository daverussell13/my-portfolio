import { ReactNode } from "react";

import cn from "@/libs/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: ReactNode;
}

const SectionHeading = ({ title, className, icon }: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300",
        className
      )}
    >
      <>{icon ? icon : null}</>
      <h2 className="capitalize">{title}</h2>
    </div>
  );
};

export default SectionHeading;
