import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section-wrapper";
import { H2, H3, Paragraph, SectionHeader } from "@/components/ui/typography";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import MultiStepReservationForm from "@/components/multi-step-reservation-form";
import { siteConfig } from "@/config/siteConfig";

export default function ContactSection() {
  return (
    <Section
      id="contact"
      className="bg-gray-50"
      aria-labelledby="contact-heading"
      aria-describedby="contact-description"
    >
      <SectionHeader>
        <Badge>Visit Us</Badge>
        <H2 id="contact-heading">Find Us</H2>
        <Paragraph id="contact-description">
          We&apos;re located in the heart of downtown
        </Paragraph>
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info Card */}
        <div>
          <Card
            className="p-10 h-full bg-background border-white/20"
            aria-label="Contact Information Card"
          >
            <CardContent className="p-0 space-y-8">
              <H3 className="text-gray-900 mb-8">Contact Information</H3>

              {/* Address */}
              <div className="flex items-start space-x-6">
                <MapPin
                  className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg mb-2">
                    Address
                  </div>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zipCode}
                  </Paragraph>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-6">
                <Phone
                  className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg mb-2">
                    Phone
                  </div>
                  <Paragraph className="text-gray-600">
                    {siteConfig.phoneNumber}
                  </Paragraph>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-6">
                <Clock
                  className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg mb-2">
                    Hours
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <Paragraph>{siteConfig.hours.weekdays}</Paragraph>
                    <Paragraph>{siteConfig.hours.weekends}</Paragraph>
                    <Paragraph>{siteConfig.hours.sunday}</Paragraph>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-6">
                <Mail
                  className="h-7 w-7 text-amber-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg mb-2">
                    Email
                  </div>
                  <Paragraph className="text-gray-600">
                    {siteConfig.email}
                  </Paragraph>
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
    </Section>
  );
}
