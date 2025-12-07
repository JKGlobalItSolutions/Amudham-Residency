import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Zap, UtensilsCrossed, Coffee } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Stethoscope, label: "Doctor On Call", description: "24/7 medical assistance" },
    { icon: Zap, label: "Power Backup", description: "Uninterrupted electricity" },
    { icon: UtensilsCrossed, label: "In-House Restaurant", description: "Authentic local cuisine" },
    { icon: Coffee, label: "Complimentary Breakfast", description: "Fresh & healthy" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Section */}
          <div className="animate-fade-in">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant border-t-4 border-aqua bg-card">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Amudham Residency Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in">
            <Badge variant="secondary" className="mb-4 bg-aqua/10 text-ocean border-aqua/30">About Us</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-navy">
              Welcome to Amudham Residency
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nestled in the spiritual heart of Tiruvannamalai, Amudham Residency offers a perfect blend 
              of comfort, convenience, and tranquility. Whether you're here for pilgrimage, leisure, or business, 
              we provide a homely atmosphere with modern amenities to make your stay memorable.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our well-appointed deluxe rooms and spacious dormitories are designed to cater to individual 
              travelers and groups alike. With our commitment to cleanliness, friendly service, and prime location, 
              we ensure every guest experiences the warmth of true hospitality.
            </p>

            {/* Special Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border bg-card shadow-card border-t-2 border-t-aqua hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-aqua rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-navy">{feature.label}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
