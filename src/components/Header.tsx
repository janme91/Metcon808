import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Start', href: '/#home' },
    { label: 'Leistungen', href: '/#services' },
    { label: 'Über mich', href: '/#about' },
    { label: 'Kontakt', href: '/#contact' },
  ];
  
  const isHomePage = location.pathname === '/';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={(e) => handleLinkClick(e, '/#home')} className="flex items-center space-x-2">
            <div className="text-2xl sm:text-3xl font-bold text-primary-500">
              MettCon
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleLinkClick(e, '/#contact')}
              className="px-6 py-2.5 bg-primary-500 text-white hover:bg-primary-600 transition-all duration-200 font-medium"
            >
              Beratung anfragen
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block px-4 py-2 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleLinkClick(e, '/#contact')}
              className="block mt-2 px-4 py-2.5 bg-primary-500 text-white text-center hover:bg-primary-600 transition-all duration-200 font-medium"
            >
              Beratung anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
