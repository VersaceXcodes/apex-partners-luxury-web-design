import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <footer className="bg-apex-black text-apex-white">
      <div className="luxury-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Statement */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-semibold mb-4">Apex Partners</h3>
            <p className="text-apex-grey leading-relaxed">
              Apex Partners builds premium websites for brands that want to look sharp and convert.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-apex-grey hover:text-apex-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <p className="text-apex-grey text-sm">
                Email: <a href="mailto:hello@apexpartners.com" className="hover:text-apex-white transition-colors">hello@apexpartners.com</a>
              </p>
              <p className="text-apex-grey text-sm">
                Location: Dublin, Ireland
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-apex-border hover:border-apex-white transition-colors"
                style={{ borderRadius: '14px' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-apex-border hover:border-apex-white transition-colors"
                style={{ borderRadius: '14px' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-apex-border">
          <p className="text-apex-grey text-sm text-center">
            © {currentYear} Apex Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
