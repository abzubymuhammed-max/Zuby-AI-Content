
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants.js';
import { ExternalLink, ArrowUpRight, X, Github, Globe, CheckCircle2 } from 'lucide-react';
import { Project } from '../types.js';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 bg-[#0d0d0f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/[0.02] blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">Portfolio</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 italic tracking-tighter">AI Experiments <span className="text-blue-500">&</span> Projects</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A curated selection of my recent explorations in autonomous agents, RAG systems, and generative pipelines.
            </p>
          </div>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 rounded-full border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-white font-bold flex items-center gap-3 transition-all duration-300"
          >
            See all on GitHub 
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-[#16161a] transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tools.slice(0, 2).map(tool => (
                    <span key={tool} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 line-clamp-2 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tools.map(tool => (
                       <span key={tool} className="w-2 h-2 rounded-full bg-blue-500/40"></span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-blue-400 transition-colors group/btn"
                  >
                    Case Study 
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-10">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl bg-[#0d0d0f] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.15)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 max-h-full overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col">
                <div className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-4">Detailed Analysis</div>
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.title}</h3>
                
                <div className="space-y-6 mb-10">
                  <p className="text-gray-400 leading-relaxed">
                    This project was initiated to solve critical bottlenecks in AI-driven workflows. By leveraging {selectedProject.tools[0]} and {selectedProject.tools[1]}, we achieved a 40% reduction in response latency and improved contextual accuracy across distributed agents.
                  </p>
                  
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {['Real-time dynamic scaling', 'Hybrid vector storage', 'Autonomous retry logic'].map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-4">Technical Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/20 active:scale-95"
                  >
                    <Globe className="w-4 h-4" /> Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-2xl transition-all active:scale-95"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
