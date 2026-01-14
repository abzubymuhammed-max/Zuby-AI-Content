
import React from 'react';
import { SKILL_CATEGORIES } from '../constants.js';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Tech <span className="text-purple-400">&</span> Talent</h2>
          <p className="text-gray-500 max-w-xl mx-auto">The tools and skillsets I use daily to build the future.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">{cat.category}</h3>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
