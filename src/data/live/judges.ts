import aditya from "@/public/assets/judges/Aditya_Bhardwaj.png";
import advithi from "@/public/assets/judges/Advithi_Kethidi.png";
import allan from "@/public/assets/judges/Allan_Knight.png";
import amber from "@/public/assets/judges/Amber_Zheng.png";
import andre from "@/public/assets/judges/Andre_Amante.png";
import anna from "@/public/assets/judges/Anna_Lee.png";
import archit from "@/public/assets/judges/Archit_Varade.png";
import divyank from "@/public/assets/judges/Divyank_Shah.png";
import falak from "@/public/assets/judges/Falak_Tulsi.png";
import isabelle from "@/public/assets/judges/Isabelle_Celo.png";
import jordan from "@/public/assets/judges/Jordan_Ayvazian.png";
import lisa from "@/public/assets/judges/Lisa_Chen.png";
import mohammad from "@/public/assets/judges/Mohammad_Jaminur Islam.png";
import nasser from "@/public/assets/judges/Nasser_Ben.png";
import nilanjan from "@/public/assets/judges/Nilanjan_Chatterjee.png";
import rachit from "@/public/assets/judges/Rachit_Prajapati.png";
import raidah from "@/public/assets/judges/Raidah_Fairooz.png";
import ryan from "@/public/assets/judges/Ryan_Lew.png";
import sarah from "@/public/assets/judges/Sarah_Armstrong.png";
import uma from "@/public/assets/judges/Uma_Akundi.png";
import vishal from "@/public/assets/judges/Vishal_Chaurasia.png";
import { StaticImageData } from "next/image";

interface Judge {
  name: string;
  role?: string;
  img: StaticImageData;
}

export const JUDGES: Judge[] = [
  {
    name: "Divyank Shah",
    img: divyank,
    role: "Alumni",
  },
  {
    name: "Anna Lee",
    img: anna,
  },
  {
    name: "Aditya Bhardwaj",
    img: aditya,
  },
  {
    name: "Andre Amante",
    img: andre,
    role: "SWE @ Pacific Northwest",
  },
  {
    name: "Ryan Lew",
    img: ryan,
    role: "Residential Technical Advisor",
  },
  {
    name: "Sarah Armstrong",
    img: sarah,
  },
  {
    name: "Lisa Chen",
    img: lisa,
    role: "PhD Candidate",
  },
  {
    name: "Mohammad Jaminur Islam",
    img: mohammad,
    role: "Graduate Student Researcher",
  },
  {
    name: "Allan Knight",
    img: allan,
    role: "Assistant Professor of Teaching",
  },
  {
    name: "Falak Tulsi",
    img: falak,
  },
  {
    name: "Raidah Fairooz",
    img: raidah,
    role: "Software Engineer",
  },
  {
    name: "Nilanjan Chatterjee",
    img: nilanjan,
  },
  {
    name: "Amber Zheng",
    img: amber,
    role: "Product Manager @ TikTok",
  },
  {
    name: "Uma Akundi",
    img: uma,
    role: "BCOE Senator",
  },
  {
    name: "Isabelle Celo",
    img: isabelle,
    role: "RoseHack 2025 Director",
  },
  {
    name: "Nasser Ben",
    img: nasser,
    role: "Frontend Developer",
  },
  {
    name: "Jordan Ayvazian",
    img: jordan,
    role: "Software Engineer",
  },
  {
    name: "Vishal Chaurasia",
    img: vishal,
    role: "Software Engineer",
  },
  {
    name: "Rachit Prajapati",
    img: rachit,
  },
  {
    name: "Advithi Kethidi",
    img: advithi,
    role: "RoseHack 2025 Director",
  },
  {
    name: "Archit Varade",
    img: archit,
  },
];
