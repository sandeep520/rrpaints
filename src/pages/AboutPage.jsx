import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Palette, ShieldCheck, Headphones, Award, Users, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import aboutImg from '../assets/images/about-image.png';
import designingImg from '../assets/images/Designing.jpg';
import heroImg from '../assets/images/home-hero-1.jpg';
import living1 from '../assets/images/service-living-1.png';

const pillars = [
  {
    icon: Palette,
    title: 'Inspired Designing',
    desc: 'Personalized shade and style matching to bring your vision to life. Our experts help you find the perfect colors and textures for every space.',
    color: 'from-pink-500/10 to-rose-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Tested & Trusted',
    desc: 'Every product undergoes rigorous quality testing and meets industry safety standards. Certified, approved, and environmentally responsible.',
    color: 'from-amber-500/10 to-orange-500/10',
  },
  {
    icon: Headphones,
    title: 'Service That Stands Out',
    desc: 'From consultation to completion, we provide end-to-end customer support. Your satisfaction is our top priority at every step.',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
];

const values = [
  { icon: Award, label: 'Quality First', desc: 'Premium materials and formulations' },
  { icon: Users, label: 'Customer Focused', desc: 'Your vision drives everything we do' },
  { icon: Heart, label: 'Eco Conscious', desc: 'Sustainable and safe for families' },
];

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' });
  const whoRef = useRef(null);
  const whoInView = useInView(whoRef, { once: true, margin: '-80px' });
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-80px' });

  return (
    <>
      <SEO
        title="About Us — Our Story, Vision & Values"
        path="/about"
        description="Learn about RR Paints — India's trusted paint brand with 8+ years of experience in premium eco-friendly interior & exterior paints. Quality-tested, ISO certified, and customer-first approach."
        keywords="about RR Paints, paint company India, eco-friendly paint manufacturer, premium paint brand, RR Paints story, trusted paint company, ISO certified paints, paint quality assurance, colour consultation India, professional painters India"
      />
    <div className="w-full flex flex-col">
      <PageBanner title="About Us" breadcrumb="About Us" image={heroImg} />

      {/* Main About Content */}
      <section ref={contentRef} className="w-full py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative w-[90%] lg:w-full aspect-[4/4.5] ml-auto lg:ml-0 group">
              <div className="absolute top-0 right-0 w-full h-full border-[1.5px] border-[#A9203E]/15 rounded-2xl -z-10 group-hover:border-[#A9203E]/30 transition-colors duration-500" />
              <img
                src={aboutImg}
                alt="About RR Paints"
                className="absolute left-0 bottom-0 w-full h-full object-cover rounded-2xl -translate-x-4 translate-y-4 shadow-2xl shadow-black/10 group-hover:-translate-x-3 group-hover:translate-y-3 transition-transform duration-500"
              />
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -right-4 -bottom-4 lg:-right-6 lg:bottom-10 glass rounded-2xl p-5 shadow-xl animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#A9203E] to-[#d94b69] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-black">8+</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">Years of</p>
                    <p className="text-sm text-gray-500">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] flex flex-col gap-7"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Who We Are</h3>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12]">
              Your Walls Deserve More Than <span className="gradient-text">Just Paint</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              At <strong className="font-bold text-gray-800">RR Paints</strong>, we're in the business of transformation. From plain walls to personality-packed spaces, we bring your vision to life with premium paints, expert craftsmanship, and a passion for color.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our eco-conscious practices and innovative formulas ensure that every stroke of paint is not just beautiful, but responsible. We offer personalized color consultation services to help you find the perfect shade for every room.
            </p>

            {/* Value pills */}
            <div className="flex flex-wrap gap-4 mt-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-3 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#A9203E]/8 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-[#A9203E]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{v.label}</p>
                    <p className="text-xs text-gray-400">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group w-fit flex items-center gap-2 px-8 py-4 bg-[#A9203E] text-white font-bold text-lg rounded-2xl hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/20 hover:shadow-xl hover:-translate-y-0.5 mt-2"
            >
              Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Visual */}
      <section ref={whoRef} className="w-full py-28 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={whoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex flex-col gap-7"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Our Story</h3>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12]">
              A Team That Knows <span className="gradient-text">Color, Design & Surfaces</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              With years of experience in the paint industry, our team of experts brings unmatched knowledge and passion to every project. We understand that every wall tells a story, and we help you write it beautifully.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { num: '60+', label: 'Paint Orders' },
                { num: '45+', label: 'Happy Clients' },
                { num: '55+', label: 'Projects Done' },
                { num: '30+', label: 'Custom Designs' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={whoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <p className="text-3xl font-black gradient-text">{s.num}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={whoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative group">
              <img src={designingImg} alt="Our Team" className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl shadow-black/10 group-hover:shadow-black/15 transition-shadow duration-500" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#A9203E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl animate-float hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <img src={living1} alt="" className="w-14 h-14 rounded-xl object-cover" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Premium Quality</p>
                  <p className="text-xs text-gray-500">ISO Certified Paints</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section ref={pillarsRef} className="w-full py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-16">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Why Choose Us</h3>
              <div className="h-[2px] w-12 bg-[#A9203E]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12] mb-6">
              Our Core <span className="gradient-text">Pillars</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Built on a foundation of quality, creativity, and customer satisfaction.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group relative flex flex-col items-center text-center gap-6 p-10 bg-white rounded-3xl border border-gray-100 hover:border-[#A9203E]/15 transition-all duration-500 hover:shadow-[0_20px_60px_rgb(169,32,62,0.08)] hover:-translate-y-2"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative w-18 h-18 rounded-2xl bg-[#A9203E]/8 flex items-center justify-center group-hover:bg-[#A9203E] transition-colors duration-500">
                  <pillar.icon className="w-8 h-8 text-[#A9203E] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="relative text-2xl font-bold text-gray-900">{pillar.title}</h3>
                <p className="relative text-gray-500 leading-relaxed">{pillar.desc}</p>
                <div className="relative mt-auto pt-4">
                  <div className="w-10 h-[2px] bg-[#A9203E]/20 group-hover:w-16 group-hover:bg-[#A9203E] transition-all duration-500 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
