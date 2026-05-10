import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, MapPin, User, Phone, Mail, MessageSquare, CheckCircle2, Scissors } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  location: z.string().min(3, "Location is required"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "Signature Haircut",
    }
  });

  const onSubmit = async (data: BookingValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      toast.success("Booking request sent! Govind will contact you soon.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or call directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-6 flex items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg p-12 bg-charcoal border border-gold/20 rounded-3xl"
        >
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-gold w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-4 tracking-widest uppercase">BOOKING RECEIVED</h1>
          <p className="text-white/60 mb-8 leading-relaxed">
            Thank you for choosing Govind Portfolio. Your booking request has been sent. Govind will review the details and contact you shortly to confirm the appointment.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-gold hover:bg-gold-dark text-black font-bold uppercase tracking-widest rounded-none px-12">
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <span className="text-gold font-light tracking-[0.5em] uppercase text-[0.6rem] mb-6 block">Book Your Slot</span>
            <h1 className="text-3xl md:text-5xl font-display font-normal text-white mb-10 tracking-[0.2em] leading-tight uppercase underline-offset-8 decoration-gold/30">RESERVE <br />YOUR TIME</h1>
            <p className="text-white/30 mb-12 leading-loose font-light tracking-wide text-sm uppercase">
              Ready for a fresh look? Just fill out the form below and I'll get back to you to confirm your haircut.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-all duration-700">
                  <Phone size={14} className="text-gold/50" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-white/60 font-light text-[0.6rem] uppercase tracking-[0.3em] mb-2">Call Me Directly</h4>
                  <p className="text-white text-xs tracking-widest font-normal italic">+91 6287308665</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-10 h-10 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-all duration-700">
                  <MapPin size={14} className="text-gold/50" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-white/60 font-light text-[0.6rem] uppercase tracking-[0.3em] mb-2">Where I Work</h4>
                  <p className="text-white text-xs tracking-widest font-normal italic">Whitefield & East Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="glass p-10 md:p-16 border-white/[0.03]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                       Full Identity
                    </Label>
                    <Input 
                      {...register("name")}
                      placeholder="ARJUN MEHTA" 
                      className="bg-transparent border-white/5 border-b rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-xs tracking-widest uppercase placeholder:text-white/10"
                    />
                    {errors.name && <p className="text-red-900/60 text-[0.55rem] uppercase font-light tracking-[0.2em] mt-2">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                       Digital Address
                    </Label>
                    <Input 
                      {...register("email")}
                      placeholder="VOICE@DOMAIN.COM" 
                      className="bg-transparent border-white/5 border-b rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-xs tracking-widest uppercase placeholder:text-white/10"
                    />
                    {errors.email && <p className="text-red-900/60 text-[0.55rem] uppercase font-light tracking-[0.2em] mt-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                       Contact Link
                    </Label>
                    <Input 
                      {...register("phone")}
                      placeholder="+91 00000 00000" 
                      className="bg-transparent border-white/5 border-b rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-xs tracking-widest uppercase placeholder:text-white/10"
                    />
                    {errors.phone && <p className="text-red-900/60 text-[0.55rem] uppercase font-light tracking-[0.2em] mt-2">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                       Desired Geo
                    </Label>
                    <Input 
                      {...register("location")}
                      placeholder="WHITEFIELD, BLR" 
                      className="bg-transparent border-white/5 border-b rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-xs tracking-widest uppercase placeholder:text-white/10"
                    />
                    {errors.location && <p className="text-red-900/60 text-[0.55rem] uppercase font-light tracking-[0.2em] mt-2">{errors.location.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                     Selected Ritual
                  </Label>
                  <select 
                    {...register("service")}
                    className="w-full bg-transparent border-white/5 border-b rounded-none h-10 text-[0.65rem] tracking-[0.2em] font-light uppercase focus:border-gold/50 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="Signature Haircut" className="bg-charcoal">Signature Silhouette</option>
                    <option value="Beard Styling" className="bg-charcoal">Beard Architecture</option>
                    <option value="Cut & Beard Combo" className="bg-charcoal">The Absolute Combo</option>
                    <option value="Hair Coloring" className="bg-charcoal">Chroma Ritual</option>
                    <option value="Wedding Grooming" className="bg-charcoal">Wedding Curation</option>
                    <option value="Home Concierge Service" className="bg-charcoal">Sanctuary Session</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                       Preferred Cycle
                    </Label>
                    <Input 
                      {...register("date")}
                      type="date"
                      className="bg-transparent border-white/5 border-b rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-[0.65rem] tracking-[0.2em] uppercase cursor-pointer"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                       Preferred Moment
                    </Label>
                    <Input 
                      {...register("time")}
                      type="time"
                      className="bg-transparent border-white/5 border-b rounded-none h-10 px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-[0.65rem] tracking-[0.2em] uppercase cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[0.6rem] uppercase tracking-[0.3em] text-white/20 font-light flex items-center gap-2">
                     Tell Me Your Vision
                  </Label>
                  <Textarea 
                    {...register("message")}
                    placeholder="DESCRIBE THE LOOK YOU WANT..." 
                    className="bg-transparent border-white/5 border-b rounded-none min-h-[80px] px-0 focus-visible:ring-0 focus-visible:border-gold/50 transition-all text-[0.65rem] tracking-[0.2em] uppercase placeholder:text-white/10 resize-none font-light leading-relaxed"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full gold-gradient text-black font-medium uppercase tracking-[0.4em] rounded-none py-8 text-[0.7rem] transition-all duration-1000 shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)] border-0"
                >
                  {isSubmitting ? "SENDING..." : "BOOK APPOINTMENT"}
                </Button>

                <p className="text-center text-[0.5rem] text-white/10 uppercase tracking-[0.4em] font-light leading-relaxed">
                  *I will call or text you soon to confirm the time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
