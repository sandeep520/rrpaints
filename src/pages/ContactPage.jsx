import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import heroImg from '../assets/images/home-hero-1.jpg';

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 97371 84315',
    sub: 'Call us for inquiry',
    href: 'tel:+919737184315',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'rrpaints0807@gmail.com',
    sub: 'Email anytime',
    href: 'mailto:rrpaints0807@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Godrej Garden City ChandKheda Ahmedabad - 382470',
    sub: 'Visit our office',
    href: null,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Sat: 9AM - 6PM',
    sub: 'Sunday closed',
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-50px' });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-80px' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Contact Us — Get a Free Paint Consultation & Quote"
        path="/contact"
        description="Contact RR Paints for free paint consultation, colour advice & project quotes. Call +91 97371 84315 or email us. Visit our office. Mon-Sat 9AM-6PM."
        keywords="contact RR Paints, paint consultation, free paint quote, painting estimate, colour advice, RR Paints phone number, paint company contact, book painting service, paint inquiry India"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact RR Paints',
          description: 'Get in touch with RR Paints for free consultations, quotes, and painting services.',
          url: 'https://www.rrpaints.com/contact',
        }}
      />
    <div className="w-full flex flex-col">
      <PageBanner title="Contact Us" breadcrumb="Contact Us" image={heroImg} />

      {/* Contact Info Cards - overlapping banner */}
      <section ref={cardsRef} className="w-full pb-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
            {contactCards.map((card, i) => {
              const Wrapper = card.href ? 'a' : 'div';
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Wrapper
                    {...(card.href ? { href: card.href } : {})}
                    className="group bg-white rounded-3xl p-7 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 hover:border-[#A9203E]/15 flex flex-col items-center text-center gap-4 transition-all duration-500 hover:shadow-[0_20px_60px_rgb(169,32,62,0.1)] hover:-translate-y-2 block"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#A9203E]/8 flex items-center justify-center group-hover:bg-[#A9203E] transition-colors duration-500">
                      <card.icon className="w-6 h-6 text-[#A9203E] group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-[#A9203E] transition-colors">{card.value}</p>
                    <p className="text-gray-400 text-xs">{card.sub}</p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Description */}
      <section ref={formRef} className="w-full py-28 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-[40%] flex flex-col gap-7 lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#A9203E]" />
                <h3 className="text-lg font-semibold tracking-widest text-[#A9203E] uppercase">Get In Touch</h3>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.12]">
                Let's Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                We are here to help you with any questions or concerns. Fill out the form and we will get back to you as soon as possible.
              </p>

              {/* Quick contact */}
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#A9203E]/8 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#A9203E]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+919876543210" className="text-base font-bold text-gray-900 hover:text-[#A9203E] transition-colors">+91 97371 84315
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#A9203E]/8 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#A9203E]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:rrpaints0807@gmail.com" className="text-base font-bold text-gray-900 hover:text-[#A9203E] transition-colors">rrpaints0807@gmail.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-[60%]"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="px-5 py-4 rounded-2xl border border-gray-200 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-[#A9203E]/20 focus:border-[#A9203E] transition-all bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="px-5 py-4 rounded-2xl border border-gray-200 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-[#A9203E]/20 focus:border-[#A9203E] transition-all bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="px-5 py-4 rounded-2xl border border-gray-200 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-[#A9203E]/20 focus:border-[#A9203E] transition-all bg-gray-50/50 hover:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                    className="px-5 py-4 rounded-2xl border border-gray-200 text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-[#A9203E]/20 focus:border-[#A9203E] transition-all resize-none bg-gray-50/50 hover:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full md:w-auto md:self-start flex items-center justify-center gap-3 px-10 py-4 bg-[#A9203E] text-white font-bold text-lg rounded-2xl hover:bg-[#8e1b34] transition-all duration-300 shadow-lg shadow-[#A9203E]/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] bg-gray-100 relative overflow-hidden rounded-t-3xl">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7!2d72.5!3d23.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzAuMCJOIDcywrAzMCcwLjAiRQ!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
    </>
  );
}
