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
    <div className="flex min-h-screen w-full flex-col items-center bg-yellow-100 p-10 py-48">
      <div className="relative w-full max-w-3xl">
        <div className="bg-brown-800 relative flex justify-center rounded-t-lg border-b-4 border-yellow-600 p-4">
          <div className="absolute -right-32 -top-36">
            <Image src={Popcorn} alt="Popcorn" className="size-1/2" />
          </div>
        </div>
        <Image src={FAQt} alt="FAQ Title" className="w-fit" />
        <div className="w-full border-4 border-citrus-red-100 bg-[#CE9000] px-6 py-10 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS.map(({ question, answer }, index) => (
              <AccordionItem
                value={question}
                key={index}
                className="border-b-2 border-[#641902]"
              >
                <AccordionTrigger className="flex items-center gap-2 font-lily text-2xl font-semibold text-yellow-100">
                  <div>
                    <Image src={Pop} alt="Popcorn Piece" className="size-3/4" />
                  </div>
                  {question}
                </AccordionTrigger>
                <AccordionContent className="p-2 text-yellow-100">
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
