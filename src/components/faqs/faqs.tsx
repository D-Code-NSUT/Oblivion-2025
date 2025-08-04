import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const items = [
  {
    id: "item-1",
    header: "What is Lorem Ipsum?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
  {
    id: "item-2",
    header: "Where does it come from?",
    content: "Quisque eget luctus mi, vehicula mollis lorem...",
  },
  {
    id: "item-3",
    header: "Why do we use it?",
    content: "Suspendisse massa risus, pretium id interdum in...",
  },
];

const FAQs = () => {
  return (
    <>
      <div className="min-h-[70vh]  lg:w-[950px] w-[90vw]">
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
              <AccordionContent className="flex flex-col gap-4 text-start px-5 text-lg text-balance">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FAQs;
