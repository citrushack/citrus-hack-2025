/* eslint-disable new-cap */
/* eslint-disable camelcase */
import "./globals.css";
import { Lily_Script_One } from "next/font/google";
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { options } from "@/utils/auth";

const lily = Lily_Script_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-lily",
});

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(options);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${lily.variable} flex h-full flex-col font-lily lg:flex-row`}
      >
        <div className="flex h-full w-full">
          <Providers session={session}>
            <Toaster />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
