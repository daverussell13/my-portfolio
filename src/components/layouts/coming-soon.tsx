interface ComingSoonProps {
  title: string;
}

const ComingSoon = ({ title }: ComingSoonProps) => {
  return (
    <div className="text-center py-16">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          COMING
        </span>{" "}
        SOON
      </h1>
      <p className="text-medium font-normal text-gray-500 lg:text-xl dark:text-gray-400 md:max-w-lg max-w-sm mt-2 mx-auto">
<<<<<<< HEAD:src/app/articles/page.tsx
        My portfolio website is still under construction 👷‍♂️🛠️, stay tuned for
        new updates!
=======
        {title} are still under construction 👷‍♂️🛠️, stay tuned for new updates!
>>>>>>> dev:src/components/layouts/coming-soon.tsx
      </p>
    </div>
  );
};

export default ComingSoon;
