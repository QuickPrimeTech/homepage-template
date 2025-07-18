"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Utensils, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function HeroSection() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.establishedYear;

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={siteConfig.images.heroImage || "/placeholder.svg"}
          alt={`${siteConfig.restaurantName} interior`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-white font-playfair">
            <span className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight block mb-4">
              Exceptional
            </span>
            <span className="text-secondary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight block">
              Dining Experience
            </span>
          </h1>

          <p className="text-white/90 text-xl lg:text-2xl leading-relaxed max-w-2xl">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button size="lg">
              <Utensils className="h-5 w-5 mr-3" />
              View Menu
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="h-5 w-5 mr-3" />
              Book a Table
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-8">
        <div className="glass-card rounded-xl p-6 text-center text-white min-w-[120px]">
          <div className="text-3xl font-playfair font-bold mb-1">
            {yearsInBusiness}+
          </div>
          <div className="text-sm text-white/80">Years Experience</div>
        </div>
        <div className="glass-card rounded-xl p-6 text-center text-white min-w-[120px]">
          <div className="text-3xl font-playfair font-bold mb-1">50K+</div>
          <div className="text-sm text-white/80">Happy Customers</div>
        </div>
        <div className="glass-card rounded-xl p-6 text-center text-white min-w-[120px]">
          <div className="text-3xl font-playfair font-bold mb-1">4.9</div>
          <div className="text-sm text-white/80">Rating</div>
        </div>
      </div>
    </section>
  );
}
