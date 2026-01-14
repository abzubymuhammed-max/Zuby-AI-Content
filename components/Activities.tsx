
import React from 'react';
import { ACTIVITIES } from '../constants.js';

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
          <p className="text-gray-400 text-lg">
            Leveraging the latest in artificial intelligence to create value, automate the mundane, and explore the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity) => (
            <div 
              key={activity.id} 
              className="p-8 rounded-3xl glass-morphism border border-white/5 hover:border-blue-500/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {activity.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{activity.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
