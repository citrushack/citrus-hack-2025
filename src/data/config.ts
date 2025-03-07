type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "Citrus Hack",
  short_name: "Citrus Hack Site",
  email: "citrushack@gmail.com",
  description: "A 36 hour hackathon in UC Riverside",
  length: 36,
  date: new Date("2025-04-19T08:00:00"),
  end: new Date("2025-04-20T20:00:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.citrushack.com/",
  instagram: "https://www.instagram.com/citrushack_ucr/",
  linkedin: "https://www.linkedin.com/company/cutie-hack/",
  discord: "https://www.discord.com",
  heart: "🧡",
};

export default data;
