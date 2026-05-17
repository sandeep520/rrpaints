import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/images/Logo.fd87055c.svg';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Our Work', href: '/our-work' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-3" to="/">
            <div className="h-12 w-8 relative">
              <img src={Logo} alt="RR Paints Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-3xl font-bold text-[#A9203E]">RR Paints</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className={`relative text-lg font-medium transition-colors hover:text-[#A9203E] ${
                location.pathname === link.href ? 'text-[#A9203E]' : 'text-gray-600'
              }`}
              to={link.href}
            >
              {link.name}
              {location.pathname === link.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#A9203E]" />
              )}
            </Link>
          ))}
          <Link to="/contact">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow bg-[#A9203E] hover:bg-[#8e1b34] text-white px-6 py-2 rounded-md font-semibold text-lg h-auto">
              Contact Us
            </button>
          </Link>
        </nav>

        <button className="lg:hidden text-gray-800" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className={`text-lg font-medium transition-colors hover:text-[#A9203E] ${
                location.pathname === link.href ? 'text-[#A9203E]' : 'text-gray-600'
              }`}
              to={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <button className="w-full bg-[#A9203E] hover:bg-[#8e1b34] text-white px-6 py-2 rounded-md font-semibold text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
