import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      badge: "Welcome to Tiruvannamalai's Finest",
      title: "Welcome to Amudham Residency",
      subtitle: "Comfort Meets Serenity"
    },
    {
      image: heroSlide2,
      badge: "Premium Accommodations",
      title: "Deluxe Rooms & Spacious Dormitory",
      subtitle: "Your Peaceful Stay Awaits"
    },
    {
      image: heroSlide3,
      badge: "Prime Location",
      title: "Located in Tiruvannamalai",
      subtitle: "Close to Major Temples"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-4 animate-fade-in">
        <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-xl">
          {slides[currentSlide].badge}
        </Badge>
        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
          {slides[currentSlide].title}
        </h2>
        <p className="text-2xl md:text-3xl text-white/90 font-medium mb-8">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-gradient-aqua shadow-elegant hover:shadow-glow transition-all duration-300 text-white rounded-full">
            <Phone className="w-4 h-4 mr-2" />
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/40 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:border-white transition-all duration-300 text-white rounded-full"
            onClick={() => {
              const element = document.getElementById("rooms");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            View Rooms
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 border border-white/30 backdrop-blur-md rounded-full p-3 transition-all hover:bg-white/30 hover:shadow-glow"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 border border-white/30 backdrop-blur-md rounded-full p-3 transition-all hover:bg-white/30 hover:shadow-glow"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-aqua w-8 shadow-glow" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
