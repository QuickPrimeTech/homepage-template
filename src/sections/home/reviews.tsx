import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { reviews } from "@/config/siteConfig";

import { Section } from "@/components/section-wrapper";
import { SectionHeader, H2, Description } from "@/components/ui/typography";
import { getInitials } from "@/lib/helpers";

export default function ReviewsSection() {
  return (
    <Section
      className="bg-white"
      id="testimonials"
      aria-labelledby="reviews-header"
      role="region"
    >
      <SectionHeader>
        <Badge>Testimonials</Badge>
        <H2 id="reviews-header">What Our Guests Say</H2>
        <Description>Don&apos;t just take our word for it</Description>
      </SectionHeader>

      <Carousel opts={{ align: "start" }} className="w-full max-w-full">
        <CarouselContent className="-ml-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &quot;{review.review}&quot;
                  </p>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {getInitials(review.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <span className="text-sm block text-gray-600">
                        {review.role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex -left-6 backdrop-blur-md bg-white/10 border-white/20" />
        <CarouselNext className="flex -right-6 backdrop-blur-md bg-white/10 border-white/20" />
      </Carousel>
    </Section>
  );
}
