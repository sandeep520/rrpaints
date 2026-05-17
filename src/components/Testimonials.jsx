import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import ellipse20 from '../assets/images/Ellipse-20.79798878.svg';
import user1 from '../assets/images/user-1.jpg';
import user2 from '../assets/images/user-2.jpg';
import user3 from '../assets/images/user-3.jpg';

const testimonials = [
  {
    text: 'As an interior designer, quality and finish matter the most to me. RR Paints gave the perfect texture and richness I wanted. The colors matched the palette exactly and added elegance to my project.',
    name: 'Akash Verma',
    role: 'Architect',
    image: user1,
    rating: 5,
  },
  {
    text: "I've used RR Paints for several residential projects, and the results are always outstanding. The finish is smooth and consistent, and clients are always impressed by the vibrant and lasting shades.",
    name: 'Priya Mehta',
    role: 'Interior Designer',
    image: user3,
    rating: 5,
  },
  {
    text: 'I wanted my new home to feel bright and welcoming, and RR Paints did just that. The colors brought warmth to every room, and the quality has remained the same months after application.',
    name: 'Ramesh Patel',
    role: 'Civil Contractor',
    image: user2,
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-gradient-to-b from-white to-[#FFF5F7]/30 overflow-hidden">
      <img src={ellipse20} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-auto pointer-events-none -z-10 opacity-40" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="h-[2px] w-12 bg-[#A9203E]" />
            <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Testimonials</h3>
            <div className="h-[2px] w-12 bg-[#A9203E]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15]">
            What Our Customers <span className="gradient-text">Say!</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Real experiences, real satisfaction! Hear from our happy customers who transformed their spaces with our premium paints and expert services.
          </p>
        </motion.div>

        {/* Desktop: All cards visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 w-[110%] -ml-[5%] z-20 pointer-events-none">
              <button onClick={prev} className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-[#A9203E] pointer-events-auto hover:bg-[#A9203E] hover:text-white transition-all duration-300 hover:-translate-x-1">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-[#A9203E] pointer-events-auto hover:bg-[#A9203E] hover:text-white transition-all duration-300 hover:translate-x-1">
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 px-4 py-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className={`relative bg-white rounded-3xl p-8 flex flex-col gap-6 border transition-all duration-500 ${
                    i === active
                      ? 'shadow-[0_20px_60px_rgb(169,32,62,0.12)] border-[#A9203E]/20 -translate-y-2'
                      : 'shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-gray-100 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)]'
                  }`}
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-[#A9203E]/8 fill-[#A9203E]/8" />
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-500 leading-relaxed flex-grow relative z-10">{t.text}</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#A9203E]/10 shadow-md">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <span className="text-[#A9203E] text-sm font-medium">— {t.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100"
              >
                <Quote className="w-10 h-10 text-[#A9203E]/10 fill-[#A9203E]/10" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[active].rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-500 leading-relaxed">{testimonials[active].text}</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#A9203E]/10 shadow-md">
                    <img src={testimonials[active].image} alt={testimonials[active].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-gray-900">{testimonials[active].name}</h4>
                    <span className="text-[#A9203E] text-sm font-medium">— {testimonials[active].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    i === active ? 'w-8 bg-[#A9203E]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#A9203E] hover:bg-[#A9203E] hover:text-white transition-all">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 text-[#A9203E] hover:bg-[#A9203E] hover:text-white transition-all">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
