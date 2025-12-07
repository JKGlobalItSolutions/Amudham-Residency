import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "rooms", label: "Rooms" },
    { id: "amenities", label: "Amenities" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-elegant" : "bg-background/80 backdrop-blur-xl"
      } border-b border-border`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 bg-gradient-aqua rounded-lg flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-navy">Amudham Residency</h1>
              <p className="text-xs text-muted-foreground">Tiruvannamalai</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-navy hover:text-aqua transition-colors font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-aqua after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.label}
              </button>
            ))}
            <Button size="lg" className="bg-gradient-aqua shadow-soft hover:shadow-glow transition-all duration-300 text-white rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-navy hover:text-aqua transition-colors font-medium text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <Button className="bg-gradient-aqua shadow-soft hover:shadow-glow transition-all duration-300 text-white w-full rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
