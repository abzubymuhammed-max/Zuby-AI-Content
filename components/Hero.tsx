
import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold tracking-wider uppercase animate-float">
              <Sparkles className="w-3 h-3" />
              Exploring the AI Frontier
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-bold tracking-wider uppercase">
              <Activity className="w-3 h-3 animate-pulse" />
              Systems Optimal
            </div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold leading-[0.9] mb-8 tracking-tighter">
            Zuby <br /><span className="gradient-text">AI Content</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl font-light">
            Crafting intelligent solutions through AI, automation, and advanced prompt engineering. Designing the future of digital interaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#projects"
              className="px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-50 transition-all group shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 glass-morphism border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 text-gray-500 text-sm">
            <div className="flex -space-x-3">
              {[11, 12, 13].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Trusted By" />
                </div>
              ))}
            </div>
            <p className="tracking-tight"><span className="text-white font-bold">50+</span> Successful Deployments</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Navigate</span>
        <a href="#about" className="animate-bounce p-2 hover:text-blue-400 transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
