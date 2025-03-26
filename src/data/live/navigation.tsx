import {
  Calendar,
  CircleHelp,
  HandHeartIcon,
  House,
  Info,
  Mic,
  Users,
} from "lucide-react";

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
  {
    name: "Keynote",
    link: "#keynote",
    id: "keynote",
    icon: <Mic />,
  },
  {
    name: "Schedule",
    link: "#schedule",
    id: "schedule",
    icon: <Calendar />,
  },
  {
    name: "Team",
    link: "#team",
    id: "team",
    icon: <Users />,
  },
  // {
  //   name: "Judges",
  //   link: "#about",
  //   id: "about",
  //   icon: <Info />,
  // },
  {
    name: "Sponsors",
    link: "#sponsors",
    id: "",
    icon: <HandHeartIcon />,
  },
  {
    name: "FAQ",
    link: "#faq",
    id: "faq",
    icon: <CircleHelp />,
  },
];
