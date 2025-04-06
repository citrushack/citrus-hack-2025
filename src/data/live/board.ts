import amir from "@/public/assets/team/Amir.webp";
import ananya from "@/public/assets/team/Ananya.webp";
import bsun from "@/public/assets/team/Brandon.webp";
import chandrahass from "@/public/assets/team/Chandrahass.webp";
import charlette from "@/public/assets/team/Charlette.webp";
import chris from "@/public/assets/team/Chris.webp";
import delaney from "@/public/assets/team/Delenany.webp";
import kavin from "@/public/assets/team/Kavin.webp";
import allison from "@/public/assets/team/allison.webp";
import karan from "@/public/assets/team/karan.webp";
import karina from "@/public/assets/team/karina.webp";
import liam from "@/public/assets/team/liam.webp";
import rhea from "@/public/assets/team/rhea.webp";
import soumya from "@/public/assets/team/soumya.webp";
import vishra from "@/public/assets/team/vishra.webp";
import { StaticImageData } from "next/image";

interface boardmembers {
  name: string;
  role: string;
  img: StaticImageData | string;
}

export const boardmembers: boardmembers[] = [
  {
    name: "Jonathan Trujillo",
    role: "DIRECTOR",
    img: allison,
  },
  {
    name: "Minnoli Nori",
    role: "DIRECTOR",
    img: allison,
  },
  {
    name: "Allison Pham",
    role: "Operations & UI/UX",
    img: allison,
  },
  {
    name: "Delaney Ong",
    role: "Operations",
    img: delaney,
  },
  {
    name: "Kavin Phabiani",
    role: "Operations",
    img: kavin,
  },
  {
    name: "Liam Regina",
    role: "Operations",
    img: liam,
  },
  {
    name: "Vishra Thakkar",
    role: "Operations",
    img: vishra,
  },
  {
    name: "Charlette O'Connor",
    role: "Sponsorship",
    img: charlette,
  },
  {
    name: "Cristian Roberts",
    role: "Sponsorship",
    img: chris,
  },
  {
    name: "Karina Flores",
    role: "Sponsorship",
    img: karina,
  },
  {
    name: "Rhea Verma",
    role: "Sponsorship",
    img: rhea,
  },
  {
    name: "Chandrahaas Mariserla",
    role: "Marketing",
    img: chandrahass,
  },

  {
    name: "Ananya Dharanikota",
    role: "UI/UX",
    img: ananya,
  },
  {
    name: "Karan Dhawan",
    role: "UI/UX",
    img: karan,
  },
  {
    name: "Soumya Agarwal",
    role: "UI/UX",
    img: soumya,
  },
  {
    name: "Amir Shanti",
    role: "Software Engineering",
    img: amir,
  },
  {
    name: "Brandon Sun",
    role: "Software Engineering",
    img: bsun,
  },
  {
    name: "Taaha Sayed",
    role: "Software Engineering",
    img: bsun,
  },
  {
    name: "Howard Zhu",
    role: "Software Engineering",
    img: bsun,
  },
];
