import { CircleHelp, House, Info, CircleUser } from "lucide-react";

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
  // {
  //   name: "Tracks",
  //   link: "#tracks",
  //   id: "tracks",
  //   icon: <Waypoints />,
  // },
  // {
  //   name: "Keynote",
  //   link: "#about",
  //   id: "about",
  //   icon: <Info />,
  // },
  // {
  //   name: "Schedule",
  //   link: "#about",
  //   id: "about",
  //   icon: <Info />,
  // },
  {
    name: "Team",
    link: "#team",
    id: "team",
    icon: <CircleUser />,
  },
  // {
  //   name: "Judges",
  //   link: "#about",
  //   id: "about",
  //   icon: <Info />,
  // },
  // {
  //   name: "Sponsors",
  //   link: "#about",
  //   id: "about",
  //   icon: <Info />,
  // },
  {
    name: "FAQ",
    link: "#faq",
    id: "faq",
    icon: <CircleHelp />,
  },
];
