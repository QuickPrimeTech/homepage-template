"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "/placeholder.svg?height=50&width=50",
    rating: 5,
    review:
      "Absolutely incredible experience! The truffle risotto was divine, and the service was impeccable. This is now our go-to spot for special occasions.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    image: "/placeholder.svg?height=50&width=50",
    rating: 5,
    review:
      "The atmosphere is perfect for a romantic dinner. The Wagyu steak was cooked to perfection, and the wine selection is outstanding.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Resident",
    image: "/placeholder.svg?height=50&width=50",
    rating: 5,
    review:
      "Every visit exceeds expectations. The attention to detail in both food and service makes this restaurant truly special. Highly recommended!",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-600">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.review}"</p>
                <div className="flex items-center">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
