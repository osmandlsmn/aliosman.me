import {
  BookOpenText,
  GithubIcon,
  HomeIcon,
  Library,
  LinkedinIcon,
  XIcon,
} from "lucide-react";

export interface INavbarItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const navbarItems: INavbarItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon size={18} />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Library size={18} />,
  },
  {
    title: "Writing",
    path: "/writing",
    icon: <BookOpenText size={18} />,
  },
  {
    title: "Work",
    path: "/work",
    icon: <Library size={18} />,
  },
];

export const socialItems = [
  {
    id: "github",
    icon: <GithubIcon size={18} />,
  },
  {
    id: "linkedin",
    icon: <LinkedinIcon size={18} />,
  },
  {
    id: "x",
    icon: <XIcon size={18} />,
  },
];
