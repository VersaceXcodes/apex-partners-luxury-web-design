import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? 'bg-apex-black/90 backdrop-blur-md shadow-sm border-b border-apex-border' : 'bg-apex-black border-b border-apex-border'
        }`}
      >
        <div className="luxury-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-serif font-semibold tracking-tight text-apex-white hover:opacity-70 transition-opacity">
              Apex Partners
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-apex-white ${
                    location.pathname === link.path ? 'text-apex-white' : 'text-apex-grey'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions - Theme Toggle + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="px-4 py-2 text-sm font-medium text-apex-grey hover:text-apex-white transition-colors border border-apex-border hover:border-apex-border-hover"
                style={{ borderRadius: '14px' }}
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-3 bg-apex-white text-apex-black text-sm font-medium transition-all hover:bg-transparent hover:text-apex-white border border-apex-white"
                style={{ borderRadius: '14px' }}
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-apex-white hover:text-apex-grey transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-apex-black/50 z-40 lg:hidden transition-opacity duration-200 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[80vw] bg-apex-surface z-50 lg:hidden transform transition-transform duration-200 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-apex-border">
            <span className="text-xl font-serif font-semibold text-apex-white">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-apex-white hover:text-apex-grey transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-6 py-4 text-lg font-medium transition-colors hover:bg-apex-surface-2 ${
                  location.pathname === link.path ? 'text-apex-white' : 'text-apex-grey'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Actions - Theme Toggle + CTA */}
          <div className="p-6 border-t border-apex-border space-y-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="block w-full px-6 py-4 text-sm font-medium text-apex-grey hover:text-apex-white transition-all border border-apex-border hover:border-apex-border-hover text-center"
              style={{ borderRadius: '14px' }}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="block w-full px-6 py-4 bg-apex-white text-apex-black text-center text-sm font-medium transition-all hover:bg-apex-surface-2 hover:text-apex-white hover:border-apex-white border border-apex-white"
              style={{ borderRadius: '14px' }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Header;
