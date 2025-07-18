"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Restaurant interior",
    title: "Elegant Dining Room",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Chef preparing food",
    title: "Master Chef at Work",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Signature dish",
    title: "Signature Truffle Risotto",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Wine cellar",
    title: "Premium Wine Selection",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Private dining",
    title: "Private Dining Room",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bar area",
    title: "Cocktail Bar",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600">Gallery</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Bella Vista
          </h2>
          <p className="text-xl text-gray-600">
            Take a visual journey through our restaurant
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
