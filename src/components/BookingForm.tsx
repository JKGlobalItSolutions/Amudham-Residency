import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Booking Enquiry*
Name: ${formData.name}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room Type: ${formData.roomType}
${formData.message ? `Message: ${formData.message}` : ''}
    `.trim();

    const whatsappUrl = `https://wa.me/919600900171?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to complete your booking enquiry.",
    });
    
    setOpen(false);
    setFormData({
      name: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      roomType: "",
      message: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="shadow-elegant bg-gradient-aqua hover:shadow-glow transition-all duration-300 text-white rounded-full">
          <Calendar className="w-5 h-5 mr-2" />
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-navy">Book Your Stay</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll help you with your booking via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-navy">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-border focus:border-aqua"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-navy">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="border-border focus:border-aqua"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkIn" className="text-navy">Check-in Date *</Label>
              <Input
                id="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                required
                className="border-border focus:border-aqua"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkOut" className="text-navy">Check-out Date *</Label>
              <Input
                id="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                required
                className="border-border focus:border-aqua"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="roomType" className="text-navy">Room Type *</Label>
            <Select
              value={formData.roomType}
              onValueChange={(value) => setFormData({ ...formData, roomType: value })}
              required
            >
              <SelectTrigger className="border-border focus:border-aqua">
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deluxe">Deluxe Room</SelectItem>
                <SelectItem value="dormitory">Dormitory (20 Members)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-navy">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any special requests or questions?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="border-border focus:border-aqua"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-aqua shadow-soft hover:shadow-glow transition-all duration-300 text-white rounded-full" size="lg">
            <Phone className="w-4 h-4 mr-2" />
            Continue to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
