import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroContent } from '../content/data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 border border-primary-100">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">
                {heroContent.tag}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" dangerouslySetInnerHTML={{ __html: heroContent.title.replace('Einkaufsprozess', '<span class="text-primary-500">Einkaufsprozess</span>') }}></h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {heroContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white hover:bg-primary-600 transition-all duration-200 font-semibold"
              >
                {heroContent.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 hover:bg-primary-50 transition-all duration-200 font-semibold border-2 border-primary-500"
              >
                {heroContent.ctaSecondary}
              </a>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              {heroContent.stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                  {index < heroContent.stats.length - 1 && <div className="w-px h-12 bg-gray-200"></div>}
                </React.Fragment>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
