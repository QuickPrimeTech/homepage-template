import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you take reservations?",
    answer:
      "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online through our website or call us directly at (555) 123-FOOD.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We're open Monday through Thursday from 5:00 PM to 10:00 PM, Friday and Saturday from 5:00 PM to 11:00 PM, and Sunday from 4:00 PM to 9:00 PM.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "We offer vegetarian, vegan, and gluten-free options. Please inform your server of any allergies or dietary restrictions, and our chef will be happy to accommodate your needs.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we offer complimentary valet parking for all guests. There's also street parking and a public parking garage within a block of the restaurant.",
  },
  {
    question: "Do you offer private dining?",
    answer:
      "Yes, we have a beautiful private dining room that can accommodate up to 20 guests. It's perfect for special occasions, business dinners, or intimate celebrations.",
  },
  {
    question: "What's your dress code?",
    answer:
      "We maintain a smart casual dress code. While we don't require formal attire, we ask that guests avoid athletic wear, flip-flops, and overly casual clothing.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about dining with us
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
