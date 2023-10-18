import { LuDownload as DownloadIcon } from "react-icons/lu";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

import Typewriter from "@/components/elements/typewriter";

const Introduction = () => {
  const greetings = [
    "Hi",
    "Hai",
    "Hej",
    "Hola",
    "Bonjour",
    "Ciao",
    "안녕",
    "こんにちは",
    "你好",
    "नमस्ते",
    "Привет",
    "สวัสดี",
  ];

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
              <h1 className="flex">
                <Typewriter
                  defaultText="Hi"
                  options={{
                    cursor: "",
                    autoStart: true,
                    loop: true,
                    strings: greetings,
                  }}
                />
                <p>, I&apos;m Dave</p>
              </h1>{" "}
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
      <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 sm:text-justify">
        Passionate computer science student with a good foundation in Web
        Development, Android Application Development, and IoT Application
        Development. I&apos;m a collaborative team player dedicated to
        delivering efficient, scalable, and well-performing applications.
      </p>
      <Button
        color="primary"
        className="font-semibold sm:hidden"
        startContent={<DownloadIcon />}
      >
        Download CV
      </Button>
    </section>
  );
};

export default Introduction;
