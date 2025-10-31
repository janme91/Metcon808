import React from 'react';
import { services } from '../content/data';
import { Service } from '../content/types';
import Icon from './Icon';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="group bg-white p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className={`inline-flex p-4 mb-6 ${
      service.color === 'primary' 
        ? 'bg-primary-50 text-primary-500' 
        : 'bg-accent-50 text-accent-600'
    }`}>
      <Icon name={service.icon} className="w-8 h-8" />
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {service.title}
    </h3>
    
    <p className="text-gray-600 leading-relaxed">
      {service.description}
    </p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary-50 border border-primary-100 mb-4">
            <span className="text-sm font-medium text-primary-700">Unser Leistungsspektrum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Maßgeschneiderte{' '}
            <span className="text-primary-500">Beratungsleistungen</span>
          </h2>
          <p className="text-lg text-gray-600">
            Von der ersten Analyse bis zur finalen Umsetzung – wir begleiten Sie 
            durch den gesamten Beschaffungsprozess.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.order} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
