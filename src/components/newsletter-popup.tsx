"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Gift, Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Show popup only once after 20 seconds if not shown before
  useEffect(() => {
    const shown = localStorage.getItem("newsletter-popup-shown");
    if (!shown) {
      const timer = setTimeout(() => setOpen(true), 20000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setIsSubmitted(true);
    localStorage.setItem("newsletter-popup-shown", "true");

    setTimeout(() => {
      setOpen(false);
      setIsSubmitted(false);
      setEmail("");
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-full p-0 rounded-2xl overflow-hidden py-3">
        {/* <div className="relative flex justify-end p-3">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-200 text-gray-600"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </div> */}

        <ScrollArea className="px-8 pb-8 flex-1 max-h-[85vh]">
          <DialogHeader className="text-center pb-6 pt-0">
            <div className="mx-auto mb-6 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
              <Gift className="h-10 w-10 text-amber-600" />
            </div>
            <DialogTitle className="text-3xl text-center font-serif font-bold text-gray-900 mb-3">
              {siteConfig.newsletterPopup.title}
            </DialogTitle>
            <p className="text-gray-600 text-lg text-center">
              {siteConfig.newsletterPopup.subtitle}
            </p>
          </DialogHeader>

          {!isSubmitted ? (
            <>
              <div className="space-y-4 mb-8">
                {siteConfig.newsletterPopup.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 p-3 bg-amber-50 rounded-xl"
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
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
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
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
