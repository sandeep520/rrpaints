import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import living1 from '../assets/images/service-living-1.png';
import living2 from '../assets/images/service-living-2.png';
import living3 from '../assets/images/service-living-3.png';
import living4 from '../assets/images/service-living-4.png';

const categories = ['Living Room', 'Outdoor Spaces', 'Bedroom', 'Feature Walls'];

const images = [
  { src: living1, alt: 'Living Room Design', category: 'Living Room' },
  { src: living2, alt: 'Outdoor Space', category: 'Outdoor Spaces' },
  { src: living3, alt: 'Bedroom Design', category: 'Bedroom' },
  { src: living4, alt: 'Feature Wall', category: 'Feature Walls' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="h-[2px] w-12 bg-[#A9203E]" />
            <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Our Gallery</h3>
            <div className="h-[2px] w-12 bg-[#A9203E]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15]">
            Inspiration in <span className="gradient-text">Every Shade!</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Explore our stunning collection of beautifully painted interiors and exteriors. From modern minimalism to vibrant expressions, our gallery showcases the perfect blend of color, texture, and quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-4"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-7 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-400 border-2 ${
                activeCategory === i
                  ? 'border-[#A9203E] bg-[#A9203E] text-white shadow-lg shadow-[#A9203E]/25'
                  : 'border-gray-200 bg-white text-gray-400 hover:border-[#A9203E] hover:text-[#A9203E]'
              }`}
              onClick={() => setActiveCategory(i)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="relative w-full mt-6">
          {/* Nav arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 w-[105%] -ml-[2.5%] z-20 pointer-events-none hidden lg:flex">
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-[#A9203E] pointer-events-auto hover:bg-[#A9203E] hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-x-1">
              <ChevronLeft size={24} />
            </button>
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-[#A9203E] pointer-events-auto hover:bg-[#A9203E] hover:text-white transition-all duration-300 transform hover:scale-110 hover:translate-x-1">
              <ChevronRight size={24} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative overflow-hidden px-2 py-4"
            >
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg group cursor-pointer"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-bold tracking-widest text-xs uppercase transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">View Project</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#A9203E] hover:bg-[#A9203E] hover:text-white transition-all">
              <ChevronLeft size={22} />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#A9203E] hover:bg-[#A9203E] hover:text-white transition-all">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
