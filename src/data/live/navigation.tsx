import { CircleHelp, House, Info, Waypoints } from "lucide-react";

export const ITEMS = [
  {
    name: "Home",
    link: "/",
    id: "home",
    icon: <House />,
  },
  {
    name: "About",
    link: "#about",
    id: "about",
    icon: <Info />,
  },
  {
    name: "Tracks",
    link: "#tracks",
    id: "tracks",
    icon: <Waypoints />,
  },
  {
    name: "FAQ",
    link: "#faq",
    id: "faq",
    icon: <CircleHelp />,
  },
];
