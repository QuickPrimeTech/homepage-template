"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-secondary/10 to-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 leading-tight">
              Passion for
              <span className="text-secondary block mt-2">
                Culinary Excellence
              </span>
            </h2>

            <div className="space-y-6">
              {siteConfig.about.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-12 pt-4">
              {siteConfig.about.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-playfair font-bold text-secondary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src={siteConfig.images.aboutImage || "/placeholder.svg"}
              alt="Chef preparing food"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />

            {/* Award Badge */}
            <div className="absolute bg-secondary -bottom-8 -left-8 glass-effect p-8 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center space-x-4">
                <Award className="h-10 w-10 text-secondary-foreground" />
                <div>
                  <div className="font-playfair font-bold text-secondary-foreground text-lg">
                    {siteConfig.about.award.title}
                  </div>
                  <div className="text-sm text-secondary-foreground">
                    {siteConfig.about.award.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
