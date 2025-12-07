import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: MapPin, label: "Prime Location", value: "Tiruvannamalai" },
    { icon: Users, label: "Rooms Available", value: "35 Beds" },
    { icon: Award, label: "Years of Service", value: "10+" },
    { icon: Heart, label: "Guest Satisfaction", value: "98%" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">Our Story</Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Amudham Residency</h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            A sanctuary of comfort in the spiritual heart of Tiruvannamalai
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Mission</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Hospitality with Heart
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Amudham Residency, we believe in providing more than just accommodation. We strive to 
              create a home away from home where every guest feels valued, comfortable, and cared for. 
              Our mission is to deliver exceptional hospitality that combines modern amenities with 
              traditional warmth, ensuring your stay in Tiruvannamalai is truly memorable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Located conveniently close to major temples and attractions, we serve as the perfect base 
              for your spiritual journey or leisure trip. Our dedicated team is always ready to assist you 
              with local insights, travel arrangements, and anything else you might need during your stay.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
