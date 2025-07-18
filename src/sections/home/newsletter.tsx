import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Stay Updated
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Subscribe to our newsletter for exclusive offers and culinary updates
        </p>
        <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Button>
            <PartyPopper />
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
