import React from 'react';
import { contactContent } from '../content/data';
import Icon from './Icon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary-50 border border-primary-100 mb-4">
              <span className="text-sm font-medium text-primary-700">{contactContent.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: contactContent.title.replace('zusammenarbeiten', '<span class="text-primary-500">zusammenarbeiten</span>')}}></h2>
            <p className="text-lg text-gray-600">
              {contactContent.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-500 p-8 text-white shadow-lg shadow-primary-500/20">
              <h3 className="text-2xl font-bold mb-6 text-center">{contactContent.contactBoxTitle}</h3>
              <div className="space-y-6">
                {contactContent.info.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-white/20">
                      <Icon name={info.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/80 mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold hover:text-white/80 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default Contact;
