"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Gift, Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({
  isOpen,
  onClose,
}: NewsletterPopupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setIsSubmitted(true);

    // Mark popup as shown in localStorage
    localStorage.setItem("newsletter-popup-shown", "true");

    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail("");
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md relative animate-in fade-in-0 zoom-in-95 duration-300 glass-effect border-white/20">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-3 top-3 h-8 w-8 p-0 hover:bg-white/10 text-gray-600"
        >
          <X className="h-4 w-4" />
        </Button>

        <CardHeader className="text-center pb-6 pt-8">
          <div className="mx-auto mb-6 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
            <Gift className="h-10 w-10 text-amber-600" />
          </div>
          <CardTitle className="text-3xl font-playfair font-bold text-gray-900 mb-3">
            {siteConfig.newsletterPopup.title}
          </CardTitle>
          <p className="text-gray-600 text-lg">
            {siteConfig.newsletterPopup.subtitle}
          </p>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          {!isSubmitted ? (
            <>
              <div className="space-y-4 mb-8">
                {siteConfig.newsletterPopup.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl"
                  >
                    <Star className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 text-base"
                />
                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white h-12 text-base font-medium"
                >
                  {siteConfig.newsletterPopup.buttonText}
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
                By subscribing, you agree to receive marketing emails.
                Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                {siteConfig.newsletterPopup.successTitle}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {siteConfig.newsletterPopup.successMessage}
              </p>
              <Badge className="bg-green-100 text-green-700 px-4 py-2">
                Subscription Confirmed
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
