import {
  Calendar,
  CircleHelp,
  Gavel,
  HandHeartIcon,
  House,
  Info,
  Mic,
  Users,
  Waypoints,
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
  {
    name: "Tracks",
    link: "#tracks",
    id: "tracks",
    icon: <Waypoints />,
  },
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
    name: "Sponsors",
    link: "#sponsors",
    id: "sponsors",
    icon: <HandHeartIcon />,
  },
  {
    name: "Team",
    link: "#team",
    id: "team",
    icon: <Users />,
  },
  {
    name: "Judges",
    link: "#judges",
    id: "judges",
    icon: <Gavel />,
  },
  {
    name: "FAQ",
    link: "#faq",
    id: "faq",
    icon: <CircleHelp />,
  },
];
