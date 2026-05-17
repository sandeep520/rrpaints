import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Leaf } from 'lucide-react';
import heroImg from '../assets/images/home-hero-1.jpg';
import livingImg1 from '../assets/images/service-living-1.png';
import livingImg3 from '../assets/images/service-living-3.png';
import livingImg5 from '../assets/images/service-living-5.png';

const thumbnails = [
  { src: heroImg, alt: 'Interior Design' },
  { src: livingImg1, alt: 'Living Room' },
  { src: livingImg3, alt: 'Modern Spaces' },
  { src: livingImg5, alt: 'Exterior' },
];

export default function Hero() {
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThumb((prev) => (prev + 1) % thumbnails.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-white to-[#FFF0F3]">
      {/* Animated background blobs */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 bg-[#A9203E]/5 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#A9203E]/8 rounded-full blur-3xl pointer-events-none animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute left-1/2 top-0 w-64 h-64 bg-pink-100/40 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-20 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 w-fit bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-[#A9203E]/10"
          >
            <span className="h-2 w-2 rounded-full bg-[#A9203E] animate-pulse" />
            <span className="text-sm font-semibold text-[#A9203E] tracking-wide">India's Trusted Paint Brand</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-5xl lg:text-[4rem] leading-[1.08] font-black text-gray-900 tracking-tight">
              Transform Your<br />
              <span className="gradient-text">Space with</span><br />
              <span className="gradient-text">Color.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-md"
          >
            RR Paints delivers premium, eco-friendly paints with stunning finishes that protect and beautify every wall — inside and out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              className="group flex items-center gap-2 px-8 py-4 bg-[#A9203E] text-white font-bold text-lg rounded-2xl hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/25 hover:shadow-xl hover:shadow-[#A9203E]/30 hover:-translate-y-1"
              to="/services"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              className="flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-[#A9203E] font-bold text-lg rounded-2xl border-2 border-[#A9203E]/20 hover:border-[#A9203E] hover:bg-[#FFF5F7] transition-all duration-300 hover:-translate-y-1"
              to="/contact"
            >
              Get Free Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-8 pt-6 border-t border-gray-100 mt-2"
          >
            {[
              { icon: Star, label: 'Premium Quality' },
              { icon: Shield, label: '10 Year Warranty' },
              { icon: Leaf, label: 'Eco-Friendly' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                className="flex items-center gap-2.5 text-gray-500"
              >
                <div className="w-8 h-8 rounded-full bg-[#A9203E]/8 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-[#A9203E]" />
                </div>
                <span className="text-sm font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[52%] flex flex-col gap-5 items-center"
        >
          <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeThumb}
                src={thumbnails[activeThumb].src}
                alt={thumbnails[activeThumb].alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
              <motion.div
                key={activeThumb}
                className="h-full bg-[#A9203E]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'linear' }}
              />
            </div>

            <div className="absolute bottom-4 left-4 glass flex items-center gap-3 px-5 py-3 rounded-full shadow-lg cursor-pointer group hover:bg-white transition-colors">
              <div className="w-9 h-9 bg-[#A9203E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="text-white w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="font-bold text-[#A9203E] text-sm">Watch Video</span>
            </div>
            <div className="absolute top-4 right-4 glass text-gray-800 text-sm font-bold px-4 py-1.5 rounded-full">
              {activeThumb + 1} / {thumbnails.length}
            </div>
          </div>

          <div className="flex gap-3 w-full">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className={`flex-1 rounded-xl overflow-hidden aspect-video transition-all duration-500 ${
                  activeThumb === index
                    ? 'ring-2 ring-[#A9203E] ring-offset-2 shadow-lg scale-[1.02]'
                    : 'opacity-50 hover:opacity-80 grayscale-[30%] hover:grayscale-0'
                }`}
                onClick={() => setActiveThumb(index)}
              >
                <img src={thumb.src} alt={thumb.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
