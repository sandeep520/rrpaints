import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import heroImg from '../assets/images/home-hero-1.jpg';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import living1 from '../assets/images/service-living-1.png';
import living2 from '../assets/images/service-living-2.png';
import living3 from '../assets/images/service-living-3.png';

const services = [
  {
    num: '01',
    title: 'Interior Wall Painting',
    desc: 'Transform your living spaces with rich, smooth, and vibrant colors that bring warmth and personality to every room. Our high-quality paints offer excellent coverage, long-lasting durability, and a flawless finish.',
    image: service1,
    features: ['Wall preparation & priming', 'Smooth, satin & matte finishes', 'Wide color variety', 'Eco-friendly options', 'Post-painting cleanup'],
  },
  {
    num: '02',
    title: 'Eco-Friendly Paints',
    desc: 'Our sustainable, low-VOC, and toxin-free paints ensure a healthier home without compromising on quality. Designed to be safe for your family and the environment.',
    image: service2,
    features: ['Non-toxic formulations', 'Biodegradable ingredients', 'Improved indoor air quality', 'Child & pet safe', 'Vibrant long-lasting colors'],
  },
  {
    num: '03',
    title: 'Exterior Painting',
    desc: "Protect and enhance your home's exterior with high-quality, weather-resistant paints. Designed to withstand harsh sun, rain, and dust with superior protection.",
    image: service3,
    features: ['Surface cleaning & prep', 'Weatherproof coatings', 'Fade-resistant colors', 'Anti-fungal formulas', 'UV protection'],
  },
  {
    num: '04',
    title: 'Texture Finishes',
    desc: 'Add a touch of elegance and character to your walls with our decorative textured surfaces. From subtle patterns to bold statements, we create stunning visual effects.',
    image: living1,
    features: ['Sand texture finishes', 'Rustic stone effects', 'Metallic textures', 'Custom patterns', 'Durable coatings'],
  },
  {
    num: '05',
    title: 'Decorative Designs',
    desc: 'Transform your walls through stencils and modern patterns to artistic murals. Our creative design solutions add a unique personality to every space.',
    image: living2,
    features: ['Stencil patterns', 'Artistic murals', 'Geometric designs', 'Custom wall art', 'Accent walls'],
  },
  {
    num: '06',
    title: 'Waterproof Coating',
    desc: 'Protect your walls against dampness, leaks, and long-term damage with our moisture-resistant barrier solutions. Essential for long-lasting wall protection.',
    image: living3,
    features: ['Dampness prevention', 'Leak-proof barriers', 'Moisture resistance', 'Basement waterproofing', 'Terrace coating'],
  },
];

function useScrollReveal(margin = '-80px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return [ref, isInView];
}

export default function ServicesPage() {
  const [gridRef, gridInView] = useScrollReveal();
  const [ctaRef, ctaInView] = useScrollReveal();

  return (
    <>
      <SEO
        title="Our Services — Interior, Exterior, Texture & Waterproof Painting"
        path="/services"
        description="Explore RR Paints professional painting services — interior wall painting, eco-friendly paints, exterior coating, texture finishes, decorative designs & waterproof solutions. Free quotes available."
        keywords="painting services India, interior wall painting, exterior house painting, texture paint finish, waterproof coating, eco-friendly painting service, decorative wall design, paint application service, house painting contractor, wall texture design, waterproofing solutions India, professional painting services"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Painting Services',
          provider: { '@type': 'Organization', name: 'RR Paints' },
          description: 'Professional interior, exterior, texture, and waterproof painting services with premium eco-friendly paints.',
          areaServed: { '@type': 'Country', name: 'India' },
        }}
      />
    <div className="w-full flex flex-col">
      <PageBanner title="Our Services" breadcrumb="Services" image={heroImg} />

      {/* Services Grid */}
      <section ref={gridRef} className="w-full py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">What We Offer</h3>
              <div className="h-[2px] w-12 bg-[#A9203E]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12] mb-6">
              Expert Paint Solutions for <span className="gradient-text">Every Space!</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              From vibrant interiors to weatherproof exteriors, we provide high-quality paints and professional services that transform your spaces effortlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 50 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#A9203E]/15 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 glass !bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <span className="text-[#A9203E] font-black text-sm">{service.num}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-[#A9203E] -rotate-45" />
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-4 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#A9203E] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.desc}</p>
                  <div className="mt-auto pt-3">
                    <div className="w-8 h-[2px] bg-gray-200 group-hover:w-14 group-hover:bg-[#A9203E] transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.slice(0, 3).map((service, index) => {
        const DetailSection = () => {
          const [ref, inView] = useScrollReveal();
          return (
            <section ref={ref} key={service.num} className={`w-full py-28 ${index % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'} overflow-hidden`}>
              <div className={`container mx-auto px-6 lg:px-20 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl shadow-black/10 group-hover:shadow-black/15 transition-shadow duration-500" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#A9203E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Floating number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#A9203E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#A9203E]/30 rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-white text-xl font-black">{service.num}</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#A9203E]" />
                    <span className="text-sm font-bold tracking-widest text-[#A9203E] uppercase">Service {service.num}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-500 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3 mt-2">
                    {service.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -15 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + fi * 0.08 }}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#A9203E]/8 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-4 h-4 text-[#A9203E]" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="group/btn w-fit flex items-center gap-2 px-8 py-4 bg-[#A9203E] text-white font-bold text-lg rounded-2xl hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/20 hover:shadow-xl hover:-translate-y-0.5 mt-4"
                  >
                    Get Free Quote <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </section>
          );
        };
        return <DetailSection key={service.num} />;
      })}

      {/* CTA Banner */}
      <section ref={ctaRef} className="w-full py-20 bg-gradient-to-r from-[#A9203E] via-[#c42a4e] to-[#A9203E] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-full animate-float pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 lg:px-20 text-center relative z-10"
        >
          <Sparkles className="w-10 h-10 text-white/40 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Get a free consultation and quote for your next painting project. Our experts are ready to help.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#A9203E] font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
    </>
  );
}
