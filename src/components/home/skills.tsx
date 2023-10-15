import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaJava, FaWhiskeyGlass } from "react-icons/fa6";
import { FaStream } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import {
  SiGo,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiAndroid,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGithub,
  SiCplusplus,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";

import SectionHeading from "@/components/elements/section-heading";
import SectionSubHeading from "@/components/elements/section-subheading";
import Tag from "../elements/tag";
import React from "react";

const Skills = () => {
  const iconSize = 24;
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <SectionHeading
          title="Skills"
          icon={<SkillsIcon size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            List of technologies that I&apos;ve used in my several projects
          </p>
        </SectionSubHeading>
      </div>
      <div className="flex w-full gap-2 flex-wrap">
        <Tag>
          <SiPhp size={iconSize} className="text-blue-500" />
          <span>PHP</span>
        </Tag>
        <Tag>
          <SiGo size={iconSize} className="text-blue-300" />
          <span>Go</span>
        </Tag>
        <Tag>
          <FaJava size={iconSize} className="text-amber-800" />
          <span>Java</span>
        </Tag>
        <Tag>
          <SiHtml5 size={iconSize} className="text-orange-600" />
          <span>HTML</span>
        </Tag>
        <Tag>
          <SiCss3 size={iconSize} className="text-blue-300" />
          <span>CSS</span>
        </Tag>
        <Tag>
          <SiJavascript size={iconSize} className="text-yellow-400" />
          <span>Javascript</span>
        </Tag>
        <Tag>
          <SiTypescript size={iconSize} className="text-blue-400" />
          <span>Typescript</span>
        </Tag>
        <Tag>
          <SiCplusplus size={iconSize} className="text-blue-600" />
          <span>C++</span>
        </Tag>
        <Tag>
          <SiLaravel size={iconSize} className="text-red-500" />
          <span>Laravel</span>
        </Tag>
        <Tag>
          <SiAndroid size={iconSize} className="text-green-400" />
          <span>Android SDK</span>
        </Tag>
        <Tag>
          <GiProcessor size={iconSize} />
          <span>IoT</span>
        </Tag>
        <Tag>
          <SiNextdotjs size={iconSize} />
          <span>NextJS</span>
        </Tag>
        <Tag>
          <SiReact size={iconSize} className="text-sky-500" />
          <span>ReactJS</span>
        </Tag>
        <Tag>
          <FaWhiskeyGlass size={iconSize} class="text-sky-400" />
          <span>Gin/Gonic</span>
        </Tag>
        <Tag>
          <FaStream size={iconSize} class="text-sky-400" />
          <span>Fiber</span>
        </Tag>
        <Tag>
          <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
          <span>Bootstrap</span>
        </Tag>
        <Tag>
          <SiTailwindcss size={iconSize} className="text-cyan-300" />
          <span>TailwindCSS</span>
        </Tag>
        <Tag>
          <SiMysql size={iconSize} className="text-sky-600" />
          <span>MySQL</span>
        </Tag>
        <Tag>
          <SiPostgresql size={iconSize} className="text-blue-600" />
          <span>PostgreSQL</span>
        </Tag>
        <Tag>
          <SiSqlite size={iconSize} className="text-cyan-500"></SiSqlite>
          <span>SQLite</span>
        </Tag>
        <Tag>
          <SiFirebase size={iconSize} className="text-yellow-500" />
          <span>Firebase</span>
        </Tag>
        <Tag>
          <SiGithub size={iconSize} />
          <span>Github</span>
        </Tag>
        <Tag>
          <SiPostman size={iconSize} className="text-orange-500" />
          <span>Postman</span>
        </Tag>
      </div>
    </div>
  );
};

export default Skills;
