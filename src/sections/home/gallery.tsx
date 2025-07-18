import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section-wrapper";
import { H2, Paragraph, SectionHeader } from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryImages } from "@/config/siteConfig";

export default function GallerySection() {
  return (
    <Section
      id="gallery"
      className="bg-gray-50"
      aria-labelledby="gallery-heading"
    >
      <SectionHeader className="text-center mb-16">
        <Badge className="mb-4 bg-orange-100 text-orange-600">Gallery</Badge>
        <H2 id="gallery-heading" className="text-gray-900">
          Experience Bella Vista
        </H2>
        <Paragraph className="text-xl text-gray-600">
          Take a visual journey through our restaurant
        </Paragraph>
      </SectionHeader>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        aria-label="Image gallery carousel"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {galleryImages.map((image) => (
            <CarouselItem
              key={image.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              role="group"
              aria-roledescription="slide"
              aria-label={image.title}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
