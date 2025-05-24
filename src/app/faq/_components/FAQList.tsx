import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_GROUPS } from "@/constants/faq";

export const FAQList = () => (
  <div className="flex flex-col gap-10">
    {FAQ_GROUPS.map((group, groupIndex) => (
      <section
        key={groupIndex}
        role="region"
        aria-labelledby={`group-heading-${groupIndex}`}
        aria-label={`Sekcja FAQ: ${group.title}`}
      >
        <h2
          id={`group-heading-${groupIndex}`}
          className="text-xl font-semibold mb-4 flex items-center gap-2 text-zbr"
        >
          <span aria-hidden="true" className="text-2xl ">
            {group.icon}
          </span>
          {group.title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {group.items.map((item, itemIndex) => (
            <AccordionItem
              value={`group-${groupIndex}-item-${itemIndex}`}
              key={`group-${groupIndex}-item-${itemIndex}`}
            >
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer.split("\n").map((line, i) => (
                  <p key={i} className="mb-2 whitespace-pre-wrap">
                    {line}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    ))}
  </div>
);
