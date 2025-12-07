import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Star, X } from "lucide-react";

interface RoomCardProps {
  type: string;
  count: string;
  icon: React.ElementType;
  features: string[];
  images: string[];
  imageLabels: string[];
}

const RoomCard = ({ type, count, icon: Icon, features, images, imageLabels }: RoomCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 border bg-card shadow-card border-t-4 border-t-aqua">
      <CardContent className="p-0">
        {/* Image Gallery Preview */}
        <div className="relative h-64 group">
          <img 
            src={images[currentImage]} 
            alt={`${type} - ${imageLabels[currentImage]}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-soft"
          >
            <ChevronLeft className="w-4 h-4 text-navy" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-soft"
          >
            <ChevronRight className="w-4 h-4 text-navy" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 z-10">
            <Badge variant="secondary" className="backdrop-blur-xl bg-white/80 border-white text-navy">
              {currentImage + 1} / {images.length}
            </Badge>
          </div>

          {/* View Gallery Button */}
          <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
            <DialogTrigger asChild>
              <button className="absolute bottom-4 right-4 z-10 bg-gradient-aqua text-white px-4 py-2 rounded-full text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-300">
                View Gallery
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0">
              <div className="relative">
                <img 
                  src={images[currentImage]} 
                  alt={`${type} - ${imageLabels[currentImage]}`}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => setIsGalleryOpen(false)}
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
                  <p className="text-sm font-medium text-navy">{imageLabels[currentImage]}</p>
                  <p className="text-xs text-muted-foreground">{currentImage + 1} / {images.length}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Room Details */}
        <div className="p-8">
          <div className="w-16 h-16 bg-gradient-aqua rounded-2xl flex items-center justify-center mb-6 shadow-soft">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-serif text-3xl font-bold mb-2 text-navy">{type}</h3>
          <p className="text-muted-foreground mb-6">{count}</p>
          <div className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gold" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          <Button className="w-full bg-gradient-aqua shadow-soft hover:shadow-glow transition-all duration-300 text-white rounded-full">
            Book This Room
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
