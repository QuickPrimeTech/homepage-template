import Link from "next/link";
import { ChefHat, Calendar, Truck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-playfair font-bold text-gray-900">
                {siteConfig.restaurantName}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons (hidden on small screens) */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-transparent border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Reserve Table
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Truck className="h-4 w-4 mr-2" />
              Order Online
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-3/4 md:w-1/2 lg:w-1/4 px-6 py-8"
              >
                <SheetHeader>
                  <SheetTitle className="flex gap-2 text-2xl font-serif items-center">
                    <ChefHat className="h-8 w-8 text-primary" />
                    {siteConfig.restaurantName}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-800 hover:text-amber-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Reserve Table
                  </Button>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Truck className="h-4 w-4 mr-2" />
                    Order Online
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
