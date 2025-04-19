import aditya from "@/public/assets/judges/Aditya_Bhardwaj.webp";
import advithi from "@/public/assets/judges/Advithi_Kethidi.webp";
import allan from "@/public/assets/judges/Allan_Knight.webp";
import amber from "@/public/assets/judges/Amber_Zheng.webp";
import andre from "@/public/assets/judges/Andre_Amante.webp";
import anna from "@/public/assets/judges/Anna_Lee.webp";
import archit from "@/public/assets/judges/Archit_Varade.webp";
import divyank from "@/public/assets/judges/Divyank_Shah.webp";
import falak from "@/public/assets/judges/Falak_Tulsi.webp";
import isabelle from "@/public/assets/judges/Isabelle_Celo.webp";
import jordan from "@/public/assets/judges/Jordan_Ayvazian.webp";
import lisa from "@/public/assets/judges/Lisa_Chen.webp";
import mohammad from "@/public/assets/judges/webp Islam.webp";
import nasser from "@/public/assets/judges/Nasser_Ben.webp";
import nilanjan from "@/public/assets/judges/Nilanjan_Chatterjee.webp";
import rachit from "@/public/assets/judges/Rachit_Prajapati.webp";
import raidah from "@/public/assets/judges/Raidah_Fairooz.webp";
import ryan from "@/public/assets/judges/Ryan_Lew.webp";
import sarah from "@/public/assets/judges/Sarah_Armstrong.webp";
import uma from "@/public/assets/judges/Uma_Akundi.webp";
import vishal from "@/public/assets/judges/Vishal_Chaurasia.webp";
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
