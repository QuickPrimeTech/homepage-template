import Link from "next/link";
import { ChefHat, Facebook, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <ChefHat className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-playfair font-bold">
                {siteConfig.restaurantName}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-6">
              <Link
                href={siteConfig.socialLinks.facebook}
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href={siteConfig.socialLinks.instagram}
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href={siteConfig.socialLinks.twitter}
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {siteConfig.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {siteConfig.footer.services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>{siteConfig.address.street}</li>
              <li>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zipCode}
              </li>
              <li>{siteConfig.phoneNumber}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 space-y-4 md:space-y-0">
          <p>&copy; 2024 {siteConfig.restaurantName}. All rights reserved.</p>
          <p>
            {siteConfig.footer.creditText}{" "}
            <Link
              href={siteConfig.footer.creditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              {siteConfig.footer.creditName}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
