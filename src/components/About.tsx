import React from 'react';
import { aboutContent } from '../content/data';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-8">
                    <div>
                        <div className="inline-block px-4 py-2 bg-accent-50 border border-accent-100 mb-4">
                            <span className="text-sm font-medium text-accent-700">{aboutContent.tag}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: aboutContent.title.replace('strategischen Erfolg', '<span class="text-primary-500">strategischen Erfolg</span>') }}></h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed text-left max-w-3xl mx-auto">
                            {aboutContent.paragraphs.map((p, i) => (
                                <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary-500 p-8 text-white max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-3">{aboutContent.profile.name}</h3>
                        <p className="text-primary-100 mb-4">
                            {aboutContent.profile.title}
                        </p>
                        <p className="text-white/90">
                            {aboutContent.profile.bio}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
