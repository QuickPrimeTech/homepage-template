"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";

interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  // Step 2: Reservation Details
  date: string;
  time: string;
  guests: string;
  // Step 3: Special Requests
  occasion: string;
  specialRequests: string;
  dietaryRestrictions: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  occasion: "",
  specialRequests: "",
  dietaryRestrictions: "",
};

export default function MultiStepReservationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const totalSteps = 3;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", formData);
    alert("Reservation submitted successfully!");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 text-orange-500 mr-2" />
              <h3 className="text-lg font-semibold">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => updateFormData("firstName", e.target.value)}
                required
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => updateFormData("lastName", e.target.value)}
                required
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              required
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-orange-500 mr-2" />
              <h3 className="text-lg font-semibold">Reservation Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => updateFormData("date", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => updateFormData("time", e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Guests
              </label>
              <Input
                type="number"
                placeholder="Number of Guests"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => updateFormData("guests", e.target.value)}
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-orange-500 mr-2" />
              <h3 className="text-lg font-semibold">Special Requests</h3>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occasion (Optional)
              </label>
              <Input
                placeholder="Birthday, Anniversary, Business Dinner, etc."
                value={formData.occasion}
                onChange={(e) => updateFormData("occasion", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dietary Restrictions (Optional)
              </label>
              <Input
                placeholder="Vegetarian, Vegan, Gluten-free, Allergies, etc."
                value={formData.dietaryRestrictions}
                onChange={(e) =>
                  updateFormData("dietaryRestrictions", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests (Optional)
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                rows={3}
                placeholder="Any special requests or notes for your reservation..."
                value={formData.specialRequests}
                onChange={(e) =>
                  updateFormData("specialRequests", e.target.value)
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-8 h-full">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Make a Reservation
        </CardTitle>
        <div className="flex items-center space-x-2 mt-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-12 h-1 mx-2 ${
                    step < currentStep ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Badge
            variant="outline"
            className="text-orange-600 border-orange-600"
          >
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <form onSubmit={handleSubmit}>
          {renderStep()}

          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center bg-transparent"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-orange-500 hover:bg-orange-600 flex items-center"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 flex items-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Confirm Reservation
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
