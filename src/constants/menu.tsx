import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";

import {
  AiOutlineHome as HomeIcon,
  AiOutlineProject as ProjectIcon,
} from "react-icons/ai";

import { BiNews as ArticleIcon } from "react-icons/bi";

import { MenuItemData } from "@/types/menu";

const socialMediaIconSize = 20;
const navMenuIconSize = 20;

export const NAVIGATION: MenuItemData[] = [
  {
    title: "Home",
    href: "/",
    isExternal: false,
    icon: <HomeIcon size={navMenuIconSize} />,
    eventName: "Pages: Home",
    type: "Pages",
  },
  {
    title: "Projects",
    href: "/projects",
    isExternal: false,
    icon: <ProjectIcon size={navMenuIconSize} />,
    eventName: "Pages: Projects",
    type: "Pages",
  },
  {
    title: "Articles",
    href: "/articles",
    isExternal: false,
    icon: <ArticleIcon size={navMenuIconSize} />,
    eventName: "Pages: Articles",
    type: "Pages",
  },
];

export const SOCIAL_MEDIA: MenuItemData[] = [
  {
    title: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=daverussell1309@gmail.com",
    icon: <EmailIcon size={socialMediaIconSize} />,
    isExternal: true,
    eventName: "Contact: Email",
    className: "bg-green-600",
    type: "Link",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/dave-russell-kristanto",
    icon: <LinkedinIcon size={socialMediaIconSize} />,
    isExternal: true,
    eventName: "Social: Linkedin",
    className: "bg-blue-500",
    type: "Link",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/daperussell",
    icon: <TwitterIcon size={socialMediaIconSize} />,
    isExternal: true,
    eventName: "Social: Twitter",
    className: "bg-sky-500",
    type: "Link",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/daperussell",
    icon: <InstagramIcon size={socialMediaIconSize} />,
    isExternal: true,
    eventName: "Social: Instagram",
    className:
      "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
    type: "Link",
  },
  {
    title: "Github",
    href: "https://github.com/daverussell13",
    icon: <GithubIcon size={socialMediaIconSize} />,
    isExternal: true,
    eventName: "Social: Github",
    className: "bg-black",
    type: "Link",
  },
];
