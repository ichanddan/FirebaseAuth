import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import data from '../Data.json'

export default function Faq() {
  return (
    <div>
      <h1 className="text-center text-4xl my-10">FAQ</h1>
      <Accordion type="single" collapsible className="w-full mt-10 px-10">
        {
          data.map((item, index) =>{
            return (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            )
          })
        }
        {/* <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </div>
  );
}
