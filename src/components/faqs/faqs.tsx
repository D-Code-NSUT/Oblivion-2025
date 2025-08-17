import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import items from "@/data/faqsData/faqsData";

const FAQs = () => {
  return (
    <>
      <div className="min-h-[100vh]  lg:w-[80vw] w-[90vw]">
        <h1
          className={`font-pirata lg:text-[120px] xs:text-[100px] text-[60px] text-[#36B9C5] text-center mt-5`}
        >
          FAQs
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full mt-10"
          defaultValue="item-1"
        >
          {items.map((item, ind) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-xl">
                {item.header}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-start px-5 text-lg text-balance whitespace-pre-line">
                {item.id == "contact"? 
                <div>
                  {item.content}
                  <a className="underline" onClick={() => {navigator.clipboard.writeText(item.contact||"dcodensut@gmail.com")}} href={`mailto:${item.contact}`}>
                    {item.contact}
                  </a>
                </div>
                :item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FAQs;
