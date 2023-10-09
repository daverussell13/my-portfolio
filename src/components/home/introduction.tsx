import { Avatar } from "@nextui-org/avatar";

const Introduction = () => {
  return (
    <section className="bg-cover bg-no-repeat space-y-4">
      <div className="flex flex-col gap-5 sm:flex-row">
        <Avatar
          isBordered
          showFallback
          name="Dave"
          src="https://github.com/daverussell13.png"
          className="hidden w-[80px] h-[80px] text-medium sm:block"
        />
        <div className="flex flex-col justify-center gap-3 sm:gap-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
              <h1>Hi, I&apos;m Dave</h1>{" "}
              <div className="ml-1 animate-waving-hand">👋</div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col sm:flex-row gap-1 sm:gap-8 ml-5 md:ml-4 list-disc text-neutral-700 dark:text-neutral-400">
              <li>Computer Science Student</li>
              <li>
                Based in Bandung <span className="ml-1">🇮🇩</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 text-justify">
        Passionate and seasoned Software Engineer with a strong focus on
        frontend development. Proficient in TypeScript and well-versed in all
        aspects of web technologies. Collaborative team player dedicated to
        delivering efficient, scalable, and visually appealing web applications.
      </p>
    </section>
  );
};

export default Introduction;
