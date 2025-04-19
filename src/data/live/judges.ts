import aditya from "@/public/assets/judges/Aditya_Bhardwaj.webp";
import advithi from "@/public/assets/judges/Advithi_Kethidi.webp";
import allan from "@/public/assets/judges/Allan_Knight.webp";
import amber from "@/public/assets/judges/Amber_Zheng.webp";
import andre from "@/public/assets/judges/Andre_Amante.webp";
import alexis from "@/public/assets/judges/Alexis_Manalastas.webp";
import anna from "@/public/assets/judges/Anna_Lee.webp";
import archit from "@/public/assets/judges/Archit_Varade.webp";
import divyank from "@/public/assets/judges/Divyank_Shah.webp";
import falak from "@/public/assets/judges/Falak_Tulsi.webp";
import isabelle from "@/public/assets/judges/Isabelle_Celo.webp";
import jordan from "@/public/assets/judges/Jordan_Ayvazian.webp";
import lisa from "@/public/assets/judges/Lisa_Chen.webp";
import mohammad from "@/public/assets/judges/Mohammad_Jaminur_Islam.webp";
import nasser from "@/public/assets/judges/Nasser_Ben.webp";
import nilanjan from "@/public/assets/judges/Nilanjan_Chatterjee.webp";
import rachit from "@/public/assets/judges/Rachit_Prajapati.webp";
import raidah from "@/public/assets/judges/Raidah_Fairooz.webp";
import ryan from "@/public/assets/judges/ryan_lew.webp";
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
    name: "Allan Knight",
    img: allan,
    role: "Assistant Professor of Teaching",
  },
  {
    name: "Amber Zheng",
    img: amber,
    role: "Product Manager @ TikTok",
  },
  {
    name: "Lisa Chen",
    img: lisa,
    role: "PhD Candidate",
  },
  {
    name: "Alexis Manalastas",
    img: alexis,
    role: "Gamespawn Vice President",
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
    name: "Advithi Kethidi",
    img: advithi,
    role: "RoseHack 2025 Director",
  },
  {
    name: "Isabelle Celo",
    img: isabelle,
    role: "RoseHack 2025 Director",
  },
  {
    name: "Uma Akundi",
    img: uma,
    role: "BCOE Senator",
  },
  {
    name: "Ryan Lew",
    img: ryan,
    role: "CSA VP External",
  },
  {
    name: "Mohammad Jaminur Islam",
    img: mohammad,
    role: "Graduate Student Researcher",
  },
  {
    name: "Andre Amante",
    img: andre,
    role: "Alumni",
  },
  {
    name: "Rachit Prajapati",
    role: "alumni",
    img: rachit,
  },
  {
    name: "Divyank Shah",
    img: divyank,
    role: "Alumni",
  },
  {
    name: "Raidah Fairooz",
    img: raidah,
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
    name: "Falak Tulsi",
    img: falak,
  },
  {
    name: "Sarah Armstrong",
    img: sarah,
  },
  {
    name: "Nilanjan Chatterjee",
    img: nilanjan,
  },
  {
    name: "Archit Varade",
    img: archit,
  },
];
