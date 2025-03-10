/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { Lily_Script_One, Kumar_One, Kameron, Rubik } from "next/font/google";

import "./globals.css";

const kameron = Kameron({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-kameron",
});

const rubiks = Rubik({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-rubiks",
});

const lily = Lily_Script_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-lily",
});

const kumarOne = Kumar_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-kumarOne",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${lily.variable} ${kumarOne.variable} ${kameron.variable} ${rubiks.variable} flex h-full flex-col lg:flex-row`}
      >
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
