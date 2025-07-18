import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section-wrapper";
import { H2, Paragraph, SectionHeader } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/siteConfig";

export default function FAQSection() {
  return (
    <Section
      id="faq"
      className="bg-white"
      aria-labelledby="faq-heading"
      aria-describedby="faq-description"
    >
      <SectionHeader>
        <Badge>FAQ</Badge>
        <H2 id="faq-heading">Frequently Asked Questions</H2>
        <Paragraph id="faq-description">
          Everything you need to know about dining with us
        </Paragraph>
      </SectionHeader>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-4xl mx-auto space-y-3"
        aria-label="Frequently Asked Questions"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-background shadow-sm px-4 rounded-lg"
          >
            <AccordionTrigger
              className="text-left text-lg font-semibold"
              aria-expanded="false"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
