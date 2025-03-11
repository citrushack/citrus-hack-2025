import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextStroke from "./text-stroke";
import { QUESTIONS } from "@/data/faq";
// import Title from "@/components/ui/title";
import Pop from "@/public/assets/poppiece.svg";
import FAQt from "@/public/assets/filmroll4.svg";
import film from "@/public/assets/filmm.svg";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="mb-[10%] flex min-h-screen w-full flex-col items-center">
      <Image src={film} alt="nice" className="w-full" />
      <div className="relative mt-[7%] w-full max-w-3xl p-4 md:p-0">
        <Image src={FAQt} alt="FAQ Title" className="w-fit" />
        <div className="w-full border-4 border-citrus-red-100 bg-[#FFDA84] px-6 py-10 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS.map(({ question, answer }, index) => (
              <AccordionItem
                value={question}
                key={index}
                className="border-b-2 border-citrus-red-100"
              >
                <AccordionTrigger className="flex w-fit items-center gap-2 font-lily text-2xl font-semibold text-citrus-red-100 hover:no-underline">
                  <div className="flex w-full items-center justify-start gap-5">
                    <Image src={Pop} alt="Popcorn Piece" className="w-[5%]" />
                    <TextStroke
                      title={question}
                      color={
                        "text-outline-red text-center text-white text-xl md:text-3xl"
                      }
                      subColor="text-center text-gray-100 text-xl md:text-3xl"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-2 font-kameron text-xl text-black">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Image src={film} alt="nice" className="my-16 w-full" />
    </div>
  );
};

export default FAQ;
