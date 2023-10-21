export type STACK_KEY =
  | "PHP"
  | "Go"
  | "Java"
  | "HTML"
  | "CSS"
  | "Javascript"
  | "Typescript"
  | "C++"
  | "Laravel"
  | "Android"
  | "IoT"
  | "NextJS"
  | "ReactJS"
  | "Gin"
  | "Fiber"
  | "Bootstrap"
  | "TailwindCSS"
  | "MySQL"
  | "PostgreSQL"
  | "SQLite"
  | "Firebase"
  | "Github"
  | "Postman";

export type StackIcon = Record<STACK_KEY, JSX.Element>;
