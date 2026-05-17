import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../assets/images/Logo.fd87055c.svg';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Our Work', href: '/our-work' },
  { name: 'Contact Us', href: '/contact' },
];

const servicesList = [
  'Interior Painting',
  'Exterior Painting',
  'Texture Painting',
  'Waterproofing',
  'Wood Finishes',
  'Metal Finishes',
];

const SocialIcon = ({ type }) => {
  const icons = {
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const socialLinks = [
  { type: 'facebook', href: '#' },
  { type: 'instagram', href: '#' },
  { type: 'twitter', href: '#' },
  { type: 'linkedin', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F7] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-8 relative">
                <img src={Logo} alt="RR Paints Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-3xl font-bold text-[#A9203E]">RR Paints</span>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed">
              RR Paints — your trusted partner for premium, eco-friendly paints that transform every space into a masterpiece.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ type, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#A9203E] shadow-sm hover:bg-[#A9203E] hover:text-white transition-all"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#A9203E] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link className="text-gray-600 hover:text-[#A9203E] transition-colors text-lg" to={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#A9203E] mb-6">Services</h3>
            <ul className="space-y-4">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-600 hover:text-[#A9203E] transition-colors text-lg">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#A9203E] mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-[#A9203E]"><MapPin size={24} /></div>
                <span className="text-gray-600 text-lg">Godrej Garden City ChandKheda Ahmedabad - 382470</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-[#A9203E]"><Phone size={24} /></div>
                <a href="tel:+919876543210" className="text-gray-600 text-lg hover:text-[#A9203E] transition-colors">+91 9737184315</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-[#A9203E]"><Mail size={24} /></div>
                <a href="mailto:info@shubhlabhent.com" className="text-gray-600 text-lg hover:text-[#A9203E] transition-colors">rrpaints0807@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-base">&copy; 2026 RR Paints. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-[#A9203E] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#A9203E] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
