import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Eye, Layers } from 'lucide-react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import heroImg from '../assets/images/home-hero-1.jpg';
import living1 from '../assets/images/service-living-1.png';
import living2 from '../assets/images/service-living-2.png';
import living3 from '../assets/images/service-living-3.png';
import living4 from '../assets/images/service-living-4.png';
import living5 from '../assets/images/service-living-5.png';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';

const categories = ['All', 'Living Room', 'Outdoor Spaces', 'Bedroom', 'Feature Walls'];

const projects = [
  { src: living1, alt: 'Living Room Design 1', category: 'Living Room' },
  { src: living2, alt: 'Outdoor Space 1', category: 'Outdoor Spaces' },
  { src: living3, alt: 'Bedroom Design 1', category: 'Bedroom' },
  { src: living4, alt: 'Feature Wall 1', category: 'Feature Walls' },
  { src: living5, alt: 'Living Room Design 2', category: 'Living Room' },
  { src: service1, alt: 'Interior Project 1', category: 'Living Room' },
  { src: service2, alt: 'Outdoor Project 1', category: 'Outdoor Spaces' },
  { src: service3, alt: 'Bedroom Project 1', category: 'Bedroom' },
];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Our Work — Gallery of Completed Paint Projects"
        path="/our-work"
        description="Browse RR Paints project gallery — beautifully painted living rooms, bedrooms, outdoor spaces & feature walls. See our premium paint finishes and colour transformations in action."
        keywords="paint project gallery, RR Paints portfolio, painted living room, bedroom paint design, feature wall ideas, outdoor painting projects, interior paint gallery, wall colour inspiration, home paint makeover, painted room photos India"
      />
    <div className="w-full flex flex-col">
      <PageBanner title="Our Work" breadcrumb="Our Work" image={heroImg} />

      {/* Gallery Section */}
      <section ref={sectionRef} className="w-full py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#A9203E]/8 flex items-center justify-center mx-auto mb-6">
              <Layers className="w-7 h-7 text-[#A9203E]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12] mb-6">
              Inspiration in <span className="gradient-text">Every Shade!</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Explore our stunning collection of beautifully painted interiors and exteriors. From modern minimalism to vibrant expressions, our gallery showcases the perfect blend of color, texture, and quality.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 lg:gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-7 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-400 border-2 ${
                  activeCategory === cat
                    ? 'border-[#A9203E] bg-[#A9203E] text-white shadow-lg shadow-[#A9203E]/25'
                    : 'border-gray-200 bg-white text-gray-400 hover:border-[#A9203E] hover:text-[#A9203E]'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Results count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Showing <span className="font-bold text-gray-700">{filtered.length}</span> projects
              {activeCategory !== 'All' && <> in <span className="font-bold text-[#A9203E]">{activeCategory}</span></>}
            </p>
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={`${activeCategory}-${i}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-4">
                    <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-white/30">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 text-center">
                      <span className="text-white font-bold tracking-widest text-xs uppercase block">View Project</span>
                      <span className="text-white/50 text-xs mt-1 block">{img.category}</span>
                    </div>
                  </div>
                  {/* Category tag */}
                  <div className="absolute top-4 left-4 glass !bg-white/80 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="text-[#A9203E] font-bold text-xs uppercase tracking-wider">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-20 bg-[#FAFAFA] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 lg:px-20 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Like What You <span className="gradient-text">See?</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Let us bring the same transformation to your space. Get a free consultation today.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#A9203E] text-white font-bold text-lg rounded-2xl hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/20 hover:shadow-xl hover:-translate-y-1"
          >
            Start Your Project
            <span className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">→</span>
          </a>
        </motion.div>
      </section>
    </div>
    </>
  );
}
