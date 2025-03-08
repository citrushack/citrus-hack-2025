/* eslint-disable new-cap */
/* eslint-disable camelcase */
import { Lily_Script_One } from "next/font/google";
import { Kumar_One } from "next/font/google";
import "./globals.css";

const lily = Lily_Script_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-lily",
});

const kumarOne = Kumar_One({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en" className="h-full">
      <body className={`${lily.className} flex h-full flex-col lg:flex-row`}>
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
