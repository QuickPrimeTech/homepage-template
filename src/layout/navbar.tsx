"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChefHat, Calendar, Truck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-playfair font-bold text-gray-900">
                {siteConfig.restaurantName}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="#home"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex bg-transparent border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Reserve Table
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Truck className="h-4 w-4 mr-2" />
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
