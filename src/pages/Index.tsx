import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Heart, Star } from "lucide-react";

const Index = () => {
  const whyChoose = [
    { icon: MapPin, title: "Prime Location", text: "Conveniently located in Tiruvannamalai" },
    { icon: Home, title: "Homely Atmosphere", text: "Calm & peaceful environment" },
    { icon: Heart, title: "Well-Maintained", text: "Neat and clean rooms" },
    { icon: Star, title: "Friendly Service", text: "Helpful and caring staff" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-aqua/10 text-ocean border-aqua/30">Excellence in Hospitality</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-navy">Why Choose Amudham?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover what makes us the preferred choice in Tiruvannamalai
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChoose.map((reason, index) => (
              <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-16 h-16 bg-gradient-aqua rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-navy">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />
      <ContactSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Book Your Stay Today!</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience comfort like home, with the warmth of hospitality
          </p>
          <BookingForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
