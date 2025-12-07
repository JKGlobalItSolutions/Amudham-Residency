import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import deluxeBedroom from "@/assets/deluxe-bedroom.jpg";
import deluxeWashroom from "@/assets/deluxe-washroom.jpg";
import deluxeInterior from "@/assets/deluxe-interior.jpg";
import dormBeds from "@/assets/dorm-beds.jpg";
import dormCommon from "@/assets/dorm-common.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryParking from "@/assets/gallery-parking.jpg";
import galleryDining from "@/assets/gallery-dining.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: heroSlide1, label: "Building Exterior" },
    { src: galleryReception, label: "Reception & Lobby" },
    { src: deluxeBedroom, label: "Deluxe Room" },
    { src: deluxeWashroom, label: "Modern Bathroom" },
    { src: deluxeInterior, label: "Room Interior" },
    { src: dormBeds, label: "Dormitory" },
    { src: dormCommon, label: "Common Area" },
    { src: galleryParking, label: "Parking Area" },
    { src: galleryDining, label: "Dining Area" }
  ];

  const openImage = (index: number) => setSelectedImage(index);
  const closeImage = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : 0);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0);

  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-aqua/10 text-ocean border-aqua/30">Visual Tour</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-navy">Photo Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our property and amenities through our curated gallery
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square animate-fade-in border border-border hover:border-aqua hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => closeImage()}>
          <DialogContent className="max-w-5xl p-0">
            {selectedImage !== null && (
              <div className="relative">
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].label}
                  className="w-full h-auto"
                />
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-soft"
                >
                  <X className="w-5 h-5 text-navy" />
                </button>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-soft"
                >
                  <ChevronLeft className="w-6 h-6 text-navy" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors shadow-soft"
                >
                  <ChevronRight className="w-6 h-6 text-navy" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-soft">
                  <p className="text-sm font-medium text-navy">{galleryImages[selectedImage].label}</p>
                  <p className="text-xs text-muted-foreground">{selectedImage + 1} / {galleryImages.length}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
