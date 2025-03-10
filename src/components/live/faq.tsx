import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS } from "@/data/faq";
// import Title from "@/components/ui/title";
import Popcorn from "@/public/assets/popcorn.svg";
import Pop from "@/public/assets/poppiece.svg";
import FAQt from "@/public/assets/filmroll4.svg";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center p-10 py-48">
      <div className="relative w-full max-w-3xl">
        <Image src={FAQt} alt="FAQ Title" className="w-fit" />
        <div className="w-full border-4 border-citrus-red-100 bg-[#FFDA84] px-6 py-10 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS.map(({ question, answer }, index) => (
              <AccordionItem
                value={question}
                key={index}
                className="border-b-2 border-citrus-red-100"
              >
                <AccordionTrigger className="flex items-center gap-2 font-lily text-2xl font-semibold text-citrus-red-100">
                  <div>
                    <Image src={Pop} alt="Popcorn Piece" className="size-3/4" />
                  </div>
                  <div className="absolute pl-16 text-3xl text-white">
                    {question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-2 text-black">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
