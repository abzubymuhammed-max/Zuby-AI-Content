
import React, { useState } from 'react';
import { Bot, Sparkles, Brain, MessageSquare, Send, Loader2, Wand2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ZUBY_BIO_BASE = `Hello! I'm Zuby, an AI enthusiast and content creator dedicated to pushing the boundaries of what's possible with artificial intelligence. My focus lies at the intersection of machine learning, generative art, and practical automation. In a world rapidly being reshaped by large language models, I specialize in identifying tools and methodologies that actually move the needle for businesses and creators. Whether it's prompt engineering for complex workflows or building autonomous agents, I aim for solutions that are both friendly and professional.`;

const About: React.FC = () => {
  const [tone, setTone] = useState<'Standard' | 'Casual' | 'Futuristic'>('Standard');
  const [bio, setBio] = useState(ZUBY_BIO_BASE);
  const [isGenerating, setIsGenerating] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isAnswering, setIsAnswering] = useState(false);

  const generateBio = async (newTone: 'Standard' | 'Casual' | 'Futuristic') => {
    if (newTone === tone || isGenerating) return;
    setTone(newTone);
    
    if (newTone === 'Standard') {
      setBio(ZUBY_BIO_BASE);
      return;
    }

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Rewrite the following professional bio in a ${newTone} tone. 
        Keep it concise (under 75 words) and maintain a first-person "I" perspective.
        
        Bio: ${ZUBY_BIO_BASE}`,
      });
      setBio(response.text || ZUBY_BIO_BASE);
    } catch (error) {
      console.error("Bio generation failed", error);
      setBio("Error: Could not recalibrate persona. Please check your connectivity.");
    } finally {
      setIsGenerating(false);
    }
  };

  const askAiAssistant = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim() || isAnswering) return;

    setIsAnswering(true);
    setAiAnswer('');
    const query = userQuery;
    setUserQuery('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: `You are the AI Assistant for "Zuby AI Content". 
          Your goal is to answer questions about Zuby's expertise, projects, and AI philosophy.
          Zuby specializes in: AI Content Creation, Prompt Engineering, and Automation.
          Current Bio: ${ZUBY_BIO_BASE}
          Keep responses concise, helpful, and technologically optimistic.`,
        }
      });

      for await (const chunk of streamResponse) {
        if (chunk.text) {
          setAiAnswer(prev => prev + chunk.text);
        }
      }
    } catch (error) {
      console.error("AI Assistant error", error);
      setAiAnswer("I'm having trouble connecting to my neural network. Please try again in a moment.");
    } finally {
      setIsAnswering(false);
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0d0d0f] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Persona Visualizer */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0c] p-2 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" 
                  alt="Zuby AI Visual" 
                  className={`w-full h-full object-cover transition-all duration-1000 ${isGenerating ? 'brightness-50 blur-md scale-105' : 'grayscale group-hover:grayscale-0'}`}
                />
                {isGenerating && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
                  </div>
                )}
              </div>
            </div>

            {/* AI Assistant Chat UI */}
            <div className="mt-8 p-6 glass-morphism rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Assistant Active</span>
                </div>
                {isAnswering && <Loader2 className="w-3 h-3 text-blue-400 animate-spin" />}
              </div>
              
              <div className="min-h-[60px] mb-4 text-sm text-gray-300 leading-relaxed max-h-40 overflow-y-auto scrollbar-hide">
                {aiAnswer ? (
                  <div className="animate-in fade-in slide-in-from-bottom-1">
                    <span className="text-blue-500 font-bold mr-1">AI:</span> {aiAnswer}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">"How can I help you explore Zuby's work today?"</p>
                )}
              </div>

              <form onSubmit={askAiAssistant} className="relative">
                <input 
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-blue-500 outline-none transition-all pr-10 text-white"
                />
                <button 
                  disabled={isAnswering || !userQuery.trim()}
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-white disabled:opacity-30"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Bio Text Content */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-2 mb-10">
              {(['Standard', 'Casual', 'Futuristic'] as const).map((t) => (
                <button
                  key={t}
                  disabled={isGenerating}
                  onClick={() => generateBio(t)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold transition-all border ${
                    tone === t 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {t === 'Standard' && <Bot className="w-3 h-3" />}
                    {t === 'Casual' && <MessageSquare className="w-3 h-3" />}
                    {t === 'Futuristic' && <Wand2 className="w-3 h-3" />}
                    {t}
                  </div>
                </button>
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Transforming Ideas into <span className="gradient-text">Intelligent Reality</span>
            </h2>
            
            <div className={`transition-all duration-700 ${isGenerating ? 'opacity-30 blur-sm translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                {bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Brain className="text-blue-400" />, title: 'Analytical', desc: 'Decoding complex AI patterns.' },
                { icon: <Sparkles className="text-purple-400" />, title: 'Creative', desc: 'Crafting unique AI narratives.' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                  <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
