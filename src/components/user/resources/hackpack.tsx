import { TECHSTACKS } from "@/data/user/hackpacks";
import Link from "next/link";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { Badge } from "@/components/ui/badge";

type props = {
  text: string;
  languages: string[];
  link: string;
  description: string;
};

const Hackpack = ({ text, languages, link, description }: props) => {
  return (
    <Link
      data-cy="hackpack-link"
      className="block rounded-sm border-2 border-citrus-red bg-zinc-900 p-4 text-amber-100 shadow-md transition-all hover:border-amber-500 hover:shadow-amber-900/20"
      href={link}
      target="_blank"
    >
      <div
        className="flex items-center justify-between border-b border-amber-900/30 pb-3 text-lg font-semibold"
        data-cy="hackpack-text"
      >
        <span className="tracking-wide text-amber-200">{text}</span>
        <div className="rounded-full bg-amber-800/40 p-2">
          <Github size={20} className="text-amber-200" />
        </div>
      </div>

      <div className="my-3 flex flex-wrap gap-2 pt-2" data-cy="hackpack-techs">
        {languages.map((language, index) => (
          <Badge
            key={index}
            className="flex items-center gap-1 border border-citrus-red bg-red-900/80 px-2 py-1 text-amber-100"
            data-cy="hackpack-tech"
          >
            <div className="mr-1 text-citrus-red-200" data-cy="hackpack-icon">
              {TECHSTACKS[language]}
            </div>
            {language}
          </Badge>
        ))}
      </div>

      <p className="mt-3 italic text-amber-100/80">{description}</p>
    </Link>
  );
};

export default Hackpack;
