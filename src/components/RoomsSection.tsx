import { Badge } from "@/components/ui/badge";
import { Bed, Users } from "lucide-react";
import RoomCard from "./RoomCard";
import deluxeBedroom from "@/assets/deluxe-bedroom.jpg";
import deluxeWashroom from "@/assets/deluxe-washroom.jpg";
import deluxeInterior from "@/assets/deluxe-interior.jpg";
import deluxeAmenities from "@/assets/deluxe-amenities.jpg";
import deluxeExterior from "@/assets/deluxe-exterior.jpg";
import dormBeds from "@/assets/dorm-beds.jpg";
import dormWashroom from "@/assets/dorm-washroom.jpg";
import dormStorage from "@/assets/dorm-storage.jpg";
import dormCommon from "@/assets/dorm-common.jpg";
import dormEntrance from "@/assets/dorm-entrance.jpg";

const RoomsSection = () => {
  const rooms = [
    {
      type: "Deluxe Rooms",
      count: "15 Rooms Available",
      icon: Bed,
      features: ["Elegant Design", "Air-Conditioned", "LED TV & WiFi", "Modern Amenities"],
      images: [deluxeBedroom, deluxeWashroom, deluxeInterior, deluxeAmenities, deluxeExterior],
      imageLabels: ["Bedroom View", "Washroom", "Interior Lighting", "Room Amenities", "Building Exterior"]
    },
    {
      type: "Dormitory",
      count: "20 Members Capacity",
      icon: Users,
      features: ["Spacious Layout", "Clean & Hygienic", "Ideal for Groups", "Budget Friendly"],
      images: [dormBeds, dormWashroom, dormStorage, dormCommon, dormEntrance],
      imageLabels: ["Bunk Bed Setup", "Shared Washroom", "Storage Area", "Common Space", "Entrance"]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-aqua/10 text-ocean border-aqua/30">Our Accommodations</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-navy">Room Options</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully designed spaces for your perfect stay
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <RoomCard {...room} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
