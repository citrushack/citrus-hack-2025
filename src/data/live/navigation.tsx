import { CircleHelp, House, Info, Waypoints } from "lucide-react";

export const ITEMS = [
  {
    name: "Home",
    link: "/",
    id: "home",
    icon: <House size={40} />,
  },
  {
    name: "About",
    link: "#about",
    id: "about",
    icon: <Info size={40} />,
  },
  {
    name: "Tracks",
    link: "#tracks",
    id: "tracks",
    icon: <Waypoints size={40} />,
  },
  {
    name: "FAQ",
    link: "#faq",
    id: "faq",
    icon: <CircleHelp size={40} />,
  },
];
