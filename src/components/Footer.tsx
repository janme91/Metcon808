import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { footerContent } from '../content/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-400">MettCon</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {footerContent.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${footerContent.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{footerContent.email}</span>
              </a>
              <a
                href={`tel:${footerContent.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{footerContent.phone}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a
                href={footerContent.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} MettCon - Jan Mettang. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to={footerContent.impressumUrl} className="text-gray-400 hover:text-white transition-colors">
                  Impressum
              </Link>
              <Link to={footerContent.datenschutzUrl} className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
