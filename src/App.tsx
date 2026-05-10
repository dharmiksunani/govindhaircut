import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import BookingPage from "./pages/Booking";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import LoadingScreen from "./components/layout/LoadingScreen";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <ScrollProgressBar />
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}
