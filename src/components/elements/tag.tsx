import cn from "@/libs/utils";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full py-2 px-4 w-max bg-primary/40 dark:bg-primary/10 dark:text-neutral-50 shadow-sm border border-neutral-300 dark:border-neutral-700 hover:animate-jump select-none transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
