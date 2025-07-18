"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import MultiStepReservationForm from "@/components/multi-step-reservation-form";
import NewsletterPopup from "@/components/newsletter-popup";
import { siteConfig } from "@/config/siteConfig";

export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownPopup = localStorage.getItem("newsletter-popup-shown");

    if (!hasShownPopup) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setShowPopup(true);
              }, 2000);
            }
          });
        },
        { threshold: 0.5 }
      );

      const section = document.getElementById("contact");
      if (section) {
        observer.observe(section);
      }

      return () => {
        if (section) {
          observer.unobserve(section);
        }
      };
    }
  }, []);

  return (
    <>
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-6">
            <Badge className="bg-amber-100 text-amber-700 px-4 py-2 text-sm font-medium">
              Visit Us
            </Badge>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 leading-tight">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              We're located in the heart of downtown
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <Card className="p-10 h-full glass-effect border-white/20">
                <CardContent className="p-0 space-y-8">
                  <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-8">
                    Contact Information
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <MapPin className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-lg mb-2">
                          Address
                        </div>
                        <div className="text-gray-600 leading-relaxed">
                          {siteConfig.address.street}
                          <br />
                          {siteConfig.address.city}, {siteConfig.address.state}{" "}
                          {siteConfig.address.zipCode}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <Phone className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-lg mb-2">
                          Phone
                        </div>
                        <div className="text-gray-600">
                          {siteConfig.phoneNumber}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <Clock className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-lg mb-2">
                          Hours
                        </div>
                        <div className="text-gray-600 space-y-1">
                          <div>{siteConfig.hours.weekdays}</div>
                          <div>{siteConfig.hours.weekends}</div>
                          <div>{siteConfig.hours.sunday}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <Mail className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-lg mb-2">
                          Email
                        </div>
                        <div className="text-gray-600">{siteConfig.email}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Form */}
            <div>
              <MultiStepReservationForm />
            </div>
          </div>
        </div>
      </section>

      <NewsletterPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
