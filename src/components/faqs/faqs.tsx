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
    header: "Can I participate if I don’t have prior coding or tech experience?",
    content: "Yes! This is more about creativity and comedy than hardcore coding skills. You can use AI tools, no problem.",
  },
  {
    id: "item-2",
    header: "Can I work on a project with friends from different locations?",
    content: "Yes, for the online round you can collaborate remotely using GitHub or other tools. For the offline round (if shortlisted), all team members must be physically present at the venue.",
  },
  {
    id: "item-3",
    header: "What are the benefits of participating?",
    content: `•	Showcase your creativity in front of judges and peers.
            \n•	Have fun while experimenting with tech.
            \n•	Network with like-minded creators at Oblivion’25.
            \n•	Possible prizes and bragging rights for having the most ridiculous yet brilliant idea.
            `,
  },
  {
    id: "item-4",
    header: "What are the eligibility criteria?",
    content: "There are no strict eligibility criteria other than being a student and following the event’s rules (no plagiarism, no past project resubmissions, and no disruptive conduct).",
  },
  {
    id: "item-5",
    header: "What happens if my team misses the submission deadline?",
    content: "Late submissions will not be considered — manage your time well.",
  },
  {
    id: "item-6",
    header: "How do we register?",
    content: "All teams must register on Unstop before Round 1 starts.",
  },
];

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
