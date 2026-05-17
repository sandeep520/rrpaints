import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({ title, breadcrumb, image }) {
  return (
    <section className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax-like zoom */}
      <motion.img
        src={image}
        alt={`${title} Banner`}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A9203E]/70 via-[#A9203E]/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-float-slow pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-48 h-48 border border-white/5 rounded-full animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 glass !bg-white/10 !border-white/10 px-5 py-2 rounded-full text-sm"
        >
          <Link to="/" className="text-white/70 hover:text-white transition-colors font-medium">Home</Link>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <span className="text-white font-semibold">{breadcrumb}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-white tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-white/40 rounded-full"
        />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 28C840 36 960 48 1080 50C1200 52 1320 44 1380 40L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
