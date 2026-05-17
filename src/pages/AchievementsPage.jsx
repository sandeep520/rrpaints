import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, TrendingUp, Target } from 'lucide-react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import heroImg from '../assets/images/home-hero-1.jpg';
import designingImg from '../assets/images/Designing.jpg';
import living1 from '../assets/images/service-living-1.png';
import living2 from '../assets/images/service-living-2.png';

const achievements = [
  {
    title: 'Quality Excellence Award',
    desc: 'Recognized for maintaining the highest standards in paint quality and eco-friendly manufacturing practices.',
    image: designingImg,
    icon: Award,
  },
  {
    title: 'Customer Satisfaction Certificate',
    desc: 'Awarded for outstanding customer service and achieving 98% client satisfaction rate across all projects.',
    image: living1,
    icon: Trophy,
  },
  {
    title: 'Industry Innovation Recognition',
    desc: 'Honored for pioneering eco-friendly paint formulations that set new benchmarks in the industry.',
    image: living2,
    icon: TrendingUp,
  },
];

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'Started with a vision to transform spaces with premium, eco-friendly paints.' },
  { year: '2019', title: 'First 100 Projects', desc: 'Completed 100 residential and commercial painting projects across the city.' },
  { year: '2020', title: 'Eco-Friendly Line Launch', desc: 'Launched our signature low-VOC, toxin-free paint range for healthier homes.' },
  { year: '2021', title: 'Industry Certification', desc: 'Received ISO certification for quality management and environmental standards.' },
  { year: '2022', title: 'Regional Expansion', desc: 'Expanded operations across Gujarat with authorized dealer network.' },
  { year: '2023', title: 'Award-Winning Brand', desc: 'Recognized as a top paint brand for quality, innovation, and customer satisfaction.' },
];

const highlights = [
  { icon: Award, value: '12+', label: 'Awards Won' },
  { icon: Trophy, value: '98%', label: 'Client Satisfaction' },
  { icon: TrendingUp, value: '55+', label: 'Projects Completed' },
  { icon: Target, value: '100%', label: 'Quality Commitment' },
];

function useScrollReveal(margin = '-80px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return [ref, isInView];
}

export default function AchievementsPage() {
  const [highlightsRef, highlightsInView] = useScrollReveal();
  const [certsRef, certsInView] = useScrollReveal();
  const [timelineRef, timelineInView] = useScrollReveal();

  return (
    <>
      <SEO
        title="Achievements — Awards, Certifications & Milestones"
        path="/achievements"
        description="Discover RR Paints achievements — quality excellence awards, ISO certifications, 98% customer satisfaction, and key milestones in our journey as India's trusted paint brand."
        keywords="RR Paints achievements, paint company awards, ISO certified paint brand, quality excellence award, customer satisfaction paint company, paint industry recognition, eco-friendly paint award, best paint brand awards India"
      />
    <div className="w-full flex flex-col">
      <PageBanner title="Achievements" breadcrumb="Achievements" image={heroImg} />

      {/* Highlights */}
      <section ref={highlightsRef} className="w-full py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#A9203E]/15 text-center transition-all duration-500 hover:shadow-[0_20px_60px_rgb(169,32,62,0.08)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A9203E]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#A9203E]/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A9203E] transition-colors duration-500">
                    <h.icon className="w-7 h-7 text-[#A9203E] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-black gradient-text mb-1">{h.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{h.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section ref={certsRef} className="w-full py-28 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={certsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Recognition</h3>
              <div className="h-[2px] w-12 bg-[#A9203E]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12] mb-6">
              Our Certifications & <span className="gradient-text">Awards</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Industry recognition that reflects our commitment to quality, safety, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={certsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#A9203E]/15 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#A9203E] transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-[#A9203E] group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#A9203E] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  <div className="mt-2">
                    <div className="w-8 h-[2px] bg-gray-200 group-hover:w-14 group-hover:bg-[#A9203E] transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section ref={timelineRef} className="w-full py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-[2px] w-12 bg-[#A9203E]" />
              <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Timeline</h3>
              <div className="h-[2px] w-12 bg-[#A9203E]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12] mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Key milestones that shaped who we are today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto w-full">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#A9203E] via-[#A9203E]/40 to-[#A9203E]/10" />

              <div className="flex flex-col gap-12">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    className={`flex gap-8 items-start ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Desktop text side */}
                    <div className={`hidden lg:block lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`group bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#A9203E]/15 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(169,32,62,0.08)] transition-all duration-500 hover:-translate-y-1`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#A9203E] transition-colors">{milestone.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="flex flex-col items-center shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A9203E] to-[#d94b69] text-white flex items-center justify-center font-black text-sm shadow-lg shadow-[#A9203E]/25 relative z-10 hover:scale-110 transition-transform duration-300">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Mobile text */}
                    <div className="lg:hidden flex-1">
                      <div className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#A9203E]/15 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(169,32,62,0.08)] transition-all duration-500">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#A9203E] transition-colors">{milestone.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>

                    {/* Spacer for desktop alternate layout */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
