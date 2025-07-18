"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Autoplay from "embla-carousel-autoplay";

import { Section } from "@/components/section-wrapper";
import {
  SectionHeader,
  H2,
  H3,
  Paragraph,
  Description,
} from "@/components/ui/typography";

export default function MenuSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  return (
    <Section
      id="menu"
      className="bg-white"
      aria-labelledby="signature-dishes"
      role="region"
    >
      <SectionHeader>
        <H2 id="signature-dishes">Signature Dishes</H2>
        <Description className="max-w-3xl mx-auto">
          Discover our most beloved creations, each dish tells a story of
          passion, tradition, and culinary innovation
        </Description>
      </SectionHeader>

      <div className="relative">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay(autoplayOptions)]}
        >
          <CarouselContent>
            {siteConfig.menuItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="py-0 pb-3 overflow-hidden group h-full">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-secondary">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          ({item.reviews} reviews)
                        </span>
                      </div>
                      <Button size="sm">Order Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex -left-6 backdrop-blur-md bg-white/10 border-white/20" />
          <CarouselNext className="flex -right-6 backdrop-blur-md bg-white/10 border-white/20" />
        </Carousel>
      </div>

      <div className="text-center mt-16">
        <Button size="lg" variant="outline">
          View Full Menu
          <ArrowRight className="h-5 w-5 ml-3" />
        </Button>
      </div>
    </Section>
  );
}
