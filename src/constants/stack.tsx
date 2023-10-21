import { StackIcon } from "@/types/stack";
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

import { BsFillBootstrapFill } from "react-icons/bs";
import { FaJava, FaWhiskeyGlass } from "react-icons/fa6";
import { FaStream } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";

const iconSize = 24;

export const STACK_ICON: StackIcon = {
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  Go: <SiGo size={iconSize} className="text-blue-400" />,
  Java: <FaJava size={iconSize} className="text-amber-800" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-600" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-300" />,
  Javascript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  Typescript: <SiTypescript size={iconSize} className="text-blue-400" />,
  Cpp: <SiCplusplus size={iconSize} className="text-blue-600" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-500" />,
  Android: <SiAndroid size={iconSize} className="text-green-400" />,
  IoT: <GiProcessor size={iconSize} />,
  NextJS: <SiNextdotjs size={iconSize} />,
  ReactJS: <SiReact size={iconSize} className="text-sky-500" />,
  Gin: <FaWhiskeyGlass size={iconSize} className="text-sky-400" />,
  Fiber: <FaStream size={iconSize} className="text-sky-400" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  MySQL: <SiMysql size={iconSize} className="text-sky-600" />,
  PostgreSQL: <SiPostgresql size={iconSize} className="text-blue-600" />,
  SQLite: <SiSqlite size={iconSize} className="text-cyan-500"></SiSqlite>,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Github: <SiGithub size={iconSize} />,
  Postman: <SiPostman size={iconSize} className="text-orange-500" />,
};
