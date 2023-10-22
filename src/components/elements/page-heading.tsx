import { ReactNode } from "react";

interface PageHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageHeading = ({
  title,
  description,
  children,
  className,
}: PageHeadingProps) => {
  return (
    <div className={className}>
      <h1 className="text-2xl font-medium font-sora">{title}</h1>
      <p className="mb-6 border-b border-dashed border-neutral-600 pt-2 pb-6 text-neutral-600 dark:text-neutral-400">
        {description}
        {children}
      </p>
    </div>
  );
};

export default PageHeading;
