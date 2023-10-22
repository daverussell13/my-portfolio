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
  PHP: <SiPhp size={iconSize} style={{ fill: "#3b82f6" }} />,
  Go: <SiGo size={iconSize} style={{ fill: "#60a5fa" }} />,
  Java: <FaJava size={iconSize} style={{ fill: "#92400e" }} />,
  HTML: <SiHtml5 size={iconSize} style={{ fill: "#ea580c" }} />,
  CSS: <SiCss3 size={iconSize} style={{ fill: "#93c5fd" }} />,
  Javascript: <SiJavascript size={iconSize} style={{ fill: "#facc15" }} />,
  Typescript: <SiTypescript size={iconSize} style={{ fill: "#60a5fa" }} />,
  "C++": <SiCplusplus size={iconSize} style={{ fill: "#3b82f6" }} />,
  Laravel: <SiLaravel size={iconSize} style={{ fill: "#ef4444" }} />,
  Android: <SiAndroid size={iconSize} style={{ fill: "#4ade80" }} />,
  IoT: <GiProcessor size={iconSize} />,
  NextJS: <SiNextdotjs size={iconSize} />,
  ReactJS: <SiReact size={iconSize} style={{ fill: "#0ea5e9" }} />,
  Gin: <FaWhiskeyGlass size={iconSize} style={{ fill: "#38bdf8" }} />,
  Fiber: <FaStream size={iconSize} style={{ fill: "#38bdf8" }} />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} style={{ fill: "#a855f7" }} />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} style={{ fill: "#67e8f9" }} />,
  MySQL: <SiMysql size={iconSize} style={{ fill: "#0284c7" }} />,
  PostgreSQL: <SiPostgresql size={iconSize} style={{ fill: "#2563eb" }} />,
  SQLite: <SiSqlite size={iconSize} style={{ fill: "#0ea5e9" }}></SiSqlite>,
  Firebase: <SiFirebase size={iconSize} style={{ fill: "#eab308" }} />,
  Github: <SiGithub size={iconSize} />,
  Postman: <SiPostman size={iconSize} style={{ fill: "#f97316" }} />,
};
