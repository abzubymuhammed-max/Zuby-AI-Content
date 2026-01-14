
import React, { useState } from 'react';
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    
    setStatus('submitting');
    
    // Simulate real transmission logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Auto-reset status after 6 seconds
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0c] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">Connection</div>
            <h2 className="text-6xl md:text-7xl font-bold mb-10 italic tracking-tighter leading-none">
              Let's <br /><span className="text-blue-500">Collaborate</span>.
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-md">
              Whether you have a specific AI project in mind or just want to brainstorm the future, I'm ready to listen.
            </p>

            <div className="space-y-10">
              <a href="mailto:hello@zubyai.content" className="flex items-center gap-6 group cursor-pointer">
                <div className="p-5 rounded-2xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-2xl font-medium group-hover:text-blue-400 transition-colors tracking-tight">hello@zubyai.content</p>
                </div>
              </a>
              
              <div className="flex items-center gap-6 group">
                <div className="p-5 rounded-2xl bg-purple-600/10 text-purple-400">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-2xl font-medium tracking-tight">Available for Projects</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'X' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 rounded-2xl glass-morphism border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-10"></div>
            <div className="relative glass-morphism rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-2xl">
              {status === 'success' ? (
                <div className="py-20 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Transmission Successful</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                    Your message has been processed and routed. I'll get back to you within 24 standard earth hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-blue-400 text-sm font-bold uppercase tracking-widest hover:underline"
                  >
                    Send another?
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-400 transition-colors">Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Zuby Fan"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-800 text-white"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-400 transition-colors">Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="hello@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-800 text-white"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-400 transition-colors">Message</label>
                    <textarea 
                      rows={5} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe your vision..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-gray-800 text-white resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] active:scale-95"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Launch Connection
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
