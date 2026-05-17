import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../assets/images/about-image.png';
import designingImg from '../assets/images/Designing.jpg';
import ellipse2 from '../assets/images/Ellipse-2.98d9f0d3.svg';
import vector1 from '../assets/images/Vector-1.1d83dec6.svg';
import vector2 from '../assets/images/Vector-2.6b7527aa.svg';

const tabs = [
  {
    name: 'Designing',
    image: designingImg,
    text: 'Expertly crafted colors and textures that match your space and style, making every room elegant, modern, and visually appealing.',
    points: ['Expert color matching', 'Modern & classic textures', 'Design-focused selections'],
  },
  {
    name: 'Approved',
    image: designingImg,
    text: 'All our products are certified and approved by industry standards, ensuring quality and safety in every application.',
    points: ['Industry certified', 'Quality tested', 'Safety approved'],
  },
  {
    name: 'Guaranteed',
    image: designingImg,
    text: 'We stand behind every product with comprehensive warranties and satisfaction guarantees for complete peace of mind.',
    points: ['Long-lasting durability', 'Satisfaction guaranteed', 'Comprehensive warranty'],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-white overflow-hidden">
      <img src={ellipse2} alt="" className="absolute right-0 top-0 h-[600px] w-auto pointer-events-none -z-10 opacity-40 animate-float-slow" />
      <img src={vector1} alt="" className="absolute left-0 bottom-20 h-[90px] w-auto pointer-events-none -z-10 animate-float" />
      <img src={vector2} alt="" className="absolute left-[35%] top-[10%] h-[160px] w-auto pointer-events-none -z-10 opacity-20 hidden lg:block animate-float-slow" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-[45%] relative"
        >
          <div className="relative w-[90%] lg:w-[42rem] aspect-[4/4.5] ml-auto lg:ml-0 group">
            <div className="absolute top-0 right-0 w-full h-full border-[1.5px] border-[#A9203E]/20 rounded-2xl -z-10 group-hover:border-[#A9203E]/40 transition-colors duration-500" />
            <img
              src={aboutImg}
              alt="About RR Paints"
              className="absolute left-0 bottom-0 w-full h-full object-cover rounded-2xl -translate-x-4 translate-y-4 shadow-2xl shadow-black/10 group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-500"
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-4 -bottom-4 lg:-right-8 lg:bottom-8 glass rounded-2xl p-4 shadow-xl animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#A9203E] rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-black">8+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Years of</p>
                  <p className="text-xs text-gray-500">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full lg:w-[55%] flex flex-col gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#A9203E]" />
            <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">About Us</h3>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15]">
            Luxury Finishes and Timeless <br className="hidden lg:block" />
            <span className="gradient-text">Colors for a Sophisticated Look!</span>
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed">
            At <strong className="font-bold text-gray-800">RR Paints</strong> we believe that paint is more than just color—it's a way to express style, create ambiance, and transform spaces. With a commitment to quality and innovation, we offer premium, long-lasting paints in a wide range of shades to suit every mood and aesthetic.
          </p>

          <div className="flex flex-col gap-8 mt-4">
            <div className="flex border-b border-gray-200 w-full lg:w-4/5">
              {tabs.map((t, i) => (
                <button
                  key={t.name}
                  className={`flex-1 pb-4 text-lg font-bold transition-all relative ${
                    activeTab === i ? 'text-[#A9203E]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.name}
                  {activeTab === i && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A9203E] rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-8 items-center bg-gradient-to-br from-gray-50 to-[#FFF5F7]/50 p-6 rounded-2xl border border-gray-100"
              >
                <img
                  src={tab.image}
                  alt={tab.name}
                  className="w-full sm:w-[200px] aspect-square object-cover rounded-xl shadow-lg"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-lg text-gray-600 font-medium leading-relaxed">{tab.text}</p>
                  <ul className="space-y-3">
                    {tab.points.map((point, pi) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pi * 0.1 }}
                        className="flex items-center gap-3 text-gray-600 font-medium"
                      >
                        <div className="h-6 w-6 rounded-full bg-[#A9203E]/10 flex items-center justify-center shrink-0">
                          <div className="h-2 w-2 rounded-full bg-[#A9203E]" />
                        </div>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
