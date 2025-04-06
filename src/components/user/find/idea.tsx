import { Badge } from "@/components/ui/badge";
import { TECHSTACKS } from "@/data/user/hackpacks";

interface props {
  title: string;
  languages: string[];
  description: string;
  contact: string;
}

const Idea = ({ title, languages, description, contact }: props) => {
  return (
    <div className="h-full w-full rounded border-2 border-citrus-red bg-zinc-900 p-4 text-amber-100 shadow-md transition-all hover:border-amber-500 hover:shadow-amber-900/20">
      <p className="text-lg font-semibold tracking-wide text-amber-200">
        {title}
      </p>
      <div className="my-2 flex gap-3">
        {languages.map((language, index) => (
          <Badge
            key={index}
            className="flex gap-1 border border-citrus-red bg-red-900/80 px-2 py-1 text-amber-100"
          >
            <div className="text-citrus-red-200" data-cy="hackpack-icon">
              {TECHSTACKS[language]}
            </div>
            {language}
          </Badge>
        ))}
      </div>
      <p>{description}</p>

      <p className="my-2">
        <span className="font-semibold">Contact:</span> {contact}
      </p>
    </div>
  );
};

export default Idea;
