import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-aqua/10 text-ocean border-aqua/30">Get in Touch</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-navy">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're here to help make your stay perfect. Reach out to us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border bg-card shadow-card border-t-2 border-t-aqua hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-aqua rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-navy">Address</h3>
                    <p className="text-muted-foreground">
                      Amudham Residency<br />
                      Tiruvannamalai, Tamil Nadu<br />
                      India - 606601
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border bg-card shadow-card border-t-2 border-t-aqua hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-aqua rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-navy">Phone</h3>
                    <div className="space-y-2 mb-3">
                      <a href="tel:+919600900171" className="block text-aqua hover:text-ocean transition-colors font-medium">
                        +91 9600900171
                      </a>
                      <a href="tel:+919600900896" className="block text-aqua hover:text-ocean transition-colors font-medium">
                        +91 9600900896
                      </a>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 border-aqua text-aqua hover:bg-aqua hover:text-white rounded-full">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border bg-card shadow-card border-t-2 border-t-aqua hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-aqua rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-navy">WhatsApp</h3>
                    <div className="space-y-2 mb-3">
                      <a href="https://wa.me/919600900171" target="_blank" rel="noopener noreferrer" className="block text-aqua hover:text-ocean transition-colors font-medium">
                        +91 9600900171
                      </a>
                      <a href="https://wa.me/919600900896" target="_blank" rel="noopener noreferrer" className="block text-aqua hover:text-ocean transition-colors font-medium">
                        +91 9600900896
                      </a>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 border-aqua text-aqua hover:bg-aqua hover:text-white rounded-full">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border bg-card shadow-card border-t-2 border-t-aqua hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-aqua rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-navy">Email</h3>
                    <p className="text-muted-foreground">contact@amudhamresidency.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="h-full min-h-[500px]">
            <Card className="h-full border bg-card shadow-elegant overflow-hidden rounded-2xl">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62536.43213926793!2d79.03658042167968!3d12.230263800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3ddec1c8c621%3A0x5d4e8c4c3c8c1c0a!2sTiruvannamalai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123"
                  className="w-full h-full rounded-2xl"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amudham Residency Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
