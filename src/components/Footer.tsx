import { Home, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-pearl border-t border-border py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-aqua rounded-lg flex items-center justify-center shadow-soft">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-navy">Amudham Residency</h3>
              </div>
            </div>
            <p className="text-muted-foreground">
              Your home away from home in Tiruvannamalai. Experience comfort, convenience, and class.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-navy">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-aqua transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("rooms")}
                  className="hover:text-aqua transition-colors"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("amenities")}
                  className="hover:text-aqua transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-aqua transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-aqua transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-navy">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-aqua" />
                <span>Tiruvannamalai, Tamil Nadu</span>
              </div>
              <div className="flex flex-col gap-1 items-center md:items-start">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-aqua" />
                  <a href="tel:+919600900171" className="hover:text-aqua transition-colors">+91 9600900171</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-aqua" />
                  <a href="tel:+919600900896" className="hover:text-aqua transition-colors">+91 9600900896</a>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-aqua" />
                <span>contact@amudhamresidency.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <div className="aqua-divider mb-8" />
          <p>&copy; 2025 Amudham Residency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
