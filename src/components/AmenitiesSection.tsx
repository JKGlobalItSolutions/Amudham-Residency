import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Wifi, Tv, Wind, Armchair, UtensilsCrossed } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { icon: Car, label: "Secure Parking", description: "Safe & spacious" },
    { icon: Wind, label: "Air Conditioning", description: "All rooms" },
    { icon: Wifi, label: "High-Speed WiFi", description: "Free internet" },
    { icon: Tv, label: "LED TV", description: "Entertainment" },
    { icon: Armchair, label: "Chair & Teapoy", description: "Comfort seating" },
    { icon: UtensilsCrossed, label: "In-House Restaurant", description: "Delicious meals" }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-aqua/10 text-ocean border-aqua/30">World-Class Facilities</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-navy">Amenities That Make You Smile</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border bg-card shadow-card border-t-2 border-t-aqua animate-slide-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-aqua rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1 text-navy">{amenity.label}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
