import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import { Section } from "@/components/section-wrapper";
import { H2, Paragraph } from "@/components/ui/typography";

export default function NewsletterSection() {
  return (
    <Section
      className="bg-gray-900 text-center"
      aria-labelledby="newsletter-heading"
      aria-describedby="newsletter-description"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <H2 id="newsletter-heading" className="text-white mb-2">
          Stay Updated
        </H2>
        <Paragraph
          id="newsletter-description"
          className="text-xl text-gray-300 mb-8"
        >
          Subscribe to our newsletter for exclusive offers and culinary updates
        </Paragraph>

        <form
          className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
          aria-label="Newsletter Subscription Form"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            required
          />
          <Button type="submit" aria-label="Subscribe to newsletter">
            <PartyPopper className="mr-2" />
            Subscribe
          </Button>
        </form>
      </div>
    </Section>
  );
}
