import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  { q: 'What types of paints do you offer?', a: 'We offer a wide range of high-quality paints including interior and exterior paints, eco-friendly low-VOC options, waterproof coatings, and textured finishes.' },
  { q: 'Are your paints eco-friendly and safe?', a: 'Yes, our paints are formulated with low-VOC and toxin-free ingredients, making them safe for your family and the environment while maintaining excellent quality and finish.' },
  { q: 'How long does the paint last?', a: 'Our premium paints are designed to last 8-10 years with proper application and maintenance, providing long-lasting color and protection.' },
  { q: 'Do you offer custom color matching?', a: 'Absolutely! We provide custom color matching services to create the perfect shade that matches your vision and decor requirements.' },
  { q: 'How long does the paint take to dry?', a: 'Most of our paints are touch-dry within 2-4 hours and fully cured within 7-14 days, depending on the type and environmental conditions.' },
  { q: 'Do paints resist stains and moisture?', a: 'Yes, our paints feature advanced stain-resistant and moisture-resistant formulas that protect your walls from everyday wear and tear.' },
  { q: 'Do you provide painting services?', a: 'Yes, we offer professional painting services with experienced painters who ensure a flawless finish for both interior and exterior projects.' },
  { q: 'How do I choose the right paint?', a: 'Our team of experts can help you choose the right paint based on your space, style preferences, and functional requirements. Contact us for a free consultation.' },
  { q: 'Where can I purchase paints?', a: 'Our paints are available through authorized dealers across India. You can also contact us directly for orders and deliveries.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#A9203E 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-4 mb-4"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#A9203E]/10 flex items-center justify-center mb-2">
            <MessageCircle className="w-7 h-7 text-[#A9203E]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Everything you need to know about our paints and services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto w-full flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className={`rounded-2xl transition-all duration-400 overflow-hidden ${
                openIndex === i
                  ? 'bg-white shadow-[0_8px_40px_rgb(169,32,62,0.08)] border border-[#A9203E]/10'
                  : 'bg-[#FAFAFA] border border-transparent hover:border-gray-200 hover:bg-white'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 lg:p-7 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-black font-mono transition-colors duration-300 ${openIndex === i ? 'text-[#A9203E]' : 'text-gray-300'}`}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <h3 className={`text-lg font-bold transition-colors duration-300 ${openIndex === i ? 'text-gray-900' : 'text-gray-600'}`}>
                    {faq.q}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    openIndex === i ? 'bg-[#A9203E] text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-7 pb-7 text-gray-500 leading-relaxed ml-12 border-t border-gray-100 pt-5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 mb-5">Still have questions?</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#A9203E] text-white font-bold hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/20 hover:shadow-xl hover:shadow-[#A9203E]/30 hover:-translate-y-0.5"
          >
            Contact Support
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
