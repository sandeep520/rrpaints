import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Palette } from 'lucide-react';
import ellipse9 from '../assets/images/Ellipse-9.11f38feb.svg';
import vector3 from '../assets/images/Vector-3.e7169b1f.svg';

const palettes = [
  {
    title: 'Soft & Neutral Tones',
    desc: 'Elegant and timeless shades for a calming ambiance.',
    colors: ['rgb(245,245,220)', 'rgb(232,228,201)', 'rgb(220,208,192)', 'rgb(211,197,181)'],
  },
  {
    title: 'Bold & Vibrant Hues',
    desc: 'Express your personality with rich, dynamic colors.',
    colors: ['rgb(214,40,40)', 'rgb(255,159,28)', 'rgb(0,48,73)', 'rgb(247,127,0)'],
  },
  {
    title: 'Earthy & Natural Shades',
    desc: 'Inspired by nature, perfect for warm and cozy spaces.',
    colors: ['rgb(107,112,92)', 'rgb(165,165,141)', 'rgb(183,183,164)', 'rgb(255,232,214)'],
  },
  {
    title: 'Pastel & Light Colors',
    desc: 'Soft and soothing tones for a delicate touch.',
    colors: ['rgb(250,210,225)', 'rgb(226,236,233)', 'rgb(190,225,230)', 'rgb(223,231,253)'],
  },
  {
    title: 'Dark & Luxe Finishes',
    desc: 'Deep, dramatic shades for a sophisticated look.',
    colors: ['rgb(26,26,29)', 'rgb(78,78,80)', 'rgb(111,34,50)', 'rgb(149,7,64)'],
  },
  {
    title: 'Custom Color Matching',
    desc: "Can't find the right shade? We'll create it for you!",
    colors: ['rgb(224,224,224)', 'rgb(204,204,204)', 'rgb(179,179,179)', 'rgb(153,153,153)'],
  },
];

export default function ColorPalette() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-[#FAFAFA] overflow-hidden">
      <img src={ellipse9} alt="" className="absolute left-0 top-0 h-[300px] w-auto pointer-events-none -z-10 opacity-30 animate-float-slow" />
      <img src={vector3} alt="" className="absolute right-0 bottom-0 h-[200px] w-auto pointer-events-none -z-10 opacity-30 animate-float" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-gray-200 pb-12"
        >
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#A9203E]/10 flex items-center justify-center">
                <Palette className="w-5 h-5 text-[#A9203E]" />
              </div>
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Color Palette</h3>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15]">
              Find Your <span className="gradient-text">Perfect Shade!</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Explore a stunning range of colors designed to match every mood, style, and space. Whether you prefer soft pastels, bold hues, or timeless neutrals, our carefully curated palette ensures the perfect shade for your walls.
            </p>
          </div>
          <Link
            className="group flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-[#A9203E] text-white font-bold text-lg hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/20 hover:shadow-xl hover:shadow-[#A9203E]/30 hover:-translate-y-0.5 shrink-0"
            to="/about"
          >
            Explore more
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {palettes.map((palette, i) => (
            <motion.div
              key={palette.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex flex-col gap-5 group cursor-pointer"
            >
              <div className="flex h-36 w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 relative">
                {palette.colors.map((color, ci) => (
                  <div
                    key={ci}
                    className="flex-1 h-full transition-all duration-500 group-hover:flex-[1.6] first:rounded-l-2xl last:rounded-r-2xl relative overflow-hidden"
                    style={{ backgroundColor: color, transitionDelay: `${ci * 50}ms` }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2">
                      <span className="text-[10px] font-mono font-bold text-white/90 drop-shadow-lg bg-black/30 px-1.5 py-0.5 rounded">{color.replace('rgb(', '').replace(')', '')}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 px-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#A9203E] transition-colors duration-300">
                  {palette.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{palette.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
