import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { H2, H3, Paragraph } from "@/components/ui/typography";
import { Section } from "@/components/section-wrapper";
import { offers } from "@/config/siteConfig";

export default function OffersSection() {
  return (
    <Section
      className="bg-gradient-to-r from-secondary to-primary"
      aria-labelledby="offers-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <H2
            id="offers-heading"
            className="text-white mb-2"
            aria-label="Special Offers section heading"
          >
            Special Offers
          </H2>
          <Paragraph className="text-orange-100">
            Limited time deals you don&apos;t want to miss
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              aria-labelledby={`offer-${offer.id}-title`}
              aria-describedby={`offer-${offer.id}-desc`}
            >
              <CardContent className="p-8">
                <offer.icon
                  className="h-12 w-12 text-orange-200 mb-4"
                  aria-hidden="true"
                />
                <H3 id={`offer-${offer.id}-title`} className="mb-4 text-white">
                  {offer.title}
                </H3>
                <Paragraph
                  id={`offer-${offer.id}-desc`}
                  className="text-orange-100 mb-6"
                >
                  {offer.description}
                </Paragraph>
                <Button
                  className="bg-white text-orange-500 hover:bg-orange-50"
                  aria-label={offer.ariaLabel}
                >
                  {offer.buttonLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
