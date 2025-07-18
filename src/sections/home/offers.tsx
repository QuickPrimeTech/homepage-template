import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Heart } from "lucide-react";

export default function OffersSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Special Offers
          </h2>
          <p className="text-xl text-orange-100">
            Limited time deals you don't want to miss
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <Gift className="h-12 w-12 text-orange-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Happy Hour Special</h3>
              <p className="text-orange-100 mb-6">
                50% off appetizers and premium cocktails every weekday from 4-6
                PM
              </p>
              <Button className="bg-white text-orange-500 hover:bg-orange-50">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-orange-200 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Date Night Package</h3>
              <p className="text-orange-100 mb-6">
                3-course dinner for two with complimentary wine pairing - $89
              </p>
              <Button className="bg-white text-orange-500 hover:bg-orange-50">
                Reserve Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
