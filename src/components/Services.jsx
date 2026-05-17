import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ellipse4 from '../assets/images/Ellipse-4.95b9ab62.svg';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';

const services = [
  {
    num: '01',
    title: 'Interior Wall Painting',
    desc: 'Transform your living spaces with rich, smooth, and vibrant colors that bring warmth and personality to every room. Our high-quality paints offer excellent coverage, long-lasting durability, and a flawless finish, making your interiors look fresh.',
    image: service1,
  },
  {
    num: '02',
    title: 'Eco-Friendly Paints',
    desc: 'Our sustainable, low-VOC, and toxin-free paints ensure a healthier home without compromising on quality. Designed to be safe for your family and the environment, they provide beautiful, long-lasting colors while reducing harmful emissions.',
    image: service2,
  },
  {
    num: '03',
    title: 'Exterior Painting',
    desc: "Protect and enhance your home's exterior with high-quality, weather-resistant paints. Designed to withstand harsh sun, rain, and dust, our durable coatings ensure long-lasting beauty, fade resistance, and superior protection against the elements.",
    image: service3,
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-[#FAFAFA] overflow-hidden">
      <img src={ellipse4} alt="" className="absolute left-0 -top-12 h-[400px] w-auto pointer-events-none -z-10 opacity-50 animate-float-slow" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Services we do</h3>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15]">
              Expert Paint Solutions for <br className="hidden lg:block" />
              <span className="gradient-text">Every Space!</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-end gap-6 max-w-lg text-right"
          >
            <p className="text-lg text-gray-500 leading-relaxed">
              From vibrant interiors to weatherproof exteriors, we provide high-quality paints that transform your spaces effortlessly.
            </p>
            <Link className="text-[#A9203E] font-bold text-lg hover:underline underline-offset-4 flex items-center gap-2 group" to="/services">
              View All <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <Link
                to="/services"
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-[#A9203E] -rotate-45" />
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-5 flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A9203E] transition-colors duration-300 line-clamp-1">
                      {service.title}
                    </h3>
                    <span className="text-5xl font-black text-gray-100 group-hover:text-[#A9203E]/10 transition-colors duration-500 select-none">
                      {service.num}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed line-clamp-4">{service.desc}</p>
                  <div className="mt-auto pt-4">
                    <div className="w-11 h-11 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-[#A9203E] group-hover:border-[#A9203E] transition-all duration-400">
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
