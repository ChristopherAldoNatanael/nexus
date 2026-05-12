import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, MapPin, Terminal, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-800/50 border-b border-zinc-800/50 overflow-hidden">
      {/* LEFT COLUMN: Profile & Philosophy */}
      <div className="lg:col-span-4 bg-zinc-950 p-8 md:p-12 pt-20 lg:pt-16 flex flex-col justify-between border-r border-zinc-800/50">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05] text-zinc-100">
              Full Stack <br/>
              <span className="text-zinc-500 italic block mt-2">Architect.</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-sm">
              I build scalable web and mobile applications with a strong focus on architecture, maintainability, and thoughtful user experience.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-900">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Engineering Philosophy</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-px h-12 bg-zinc-800"></div>
                <p className="text-xs md:text-sm text-zinc-500 italic leading-relaxed">
                  "Code is for humans to read and only incidentally for machines to execute."
                </p>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prioritizing <strong className="text-zinc-200">clean architecture</strong> and <strong className="text-zinc-200">type safety</strong> over rapid, fragile deployment. Focus on long-term product evolution.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 space-y-6">
          <Button 
            onClick={scrollToProjects}
            className="w-full py-6 bg-zinc-100 text-zinc-900 text-xs font-bold rounded-md hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
          >
            Explore Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 tracking-wider">
             <div className="flex gap-4">
                <a href="https://github.com/ChristopherAldoNatanael" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">GITHUB</a>
                <a href="https://www.linkedin.com/in/christopher-aldo-2497b735a" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">LINKEDIN</a>
             </div>
             <span className="flex items-center gap-1.5 uppercase">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                Available
             </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Grid Detail */}
      <div className="lg:col-span-8 bg-zinc-900/50 flex flex-col relative overflow-hidden">
        {/* Top View: Featured Visual & Portrait */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto relative z-10">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Context & Identity</h3>
              <div className="flex gap-2">
                 <Badge variant="outline" className="text-[10px] font-mono border-zinc-800 text-zinc-500 bg-zinc-900/50 uppercase tracking-tighter">Verified_Engineer</Badge>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Portrait Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] max-w-[340px] mx-auto md:ml-0 group"
              >
                {/* Decorative background planes */}
                <div className="absolute inset-0 bg-zinc-100/[0.02] rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-zinc-100/[0.04] rounded-3xl rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out" />
                
                {/* Main image container */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-zinc-100/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-zinc-100/20">
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                    src="/portrait.png" 
                    alt="Christopher Aldo Natanael" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* Status Indicator on Image */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    <span className="text-[9px] font-mono font-bold text-zinc-300 uppercase tracking-widest">Active_Session</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Knowledge Cards */}
              <div className="space-y-4">
                {[
                  { 
                    id: '01', 
                    category: 'CORE', 
                    title: 'System Architecture', 
                    desc: 'Designing end-to-end applications with a focus on decoupling and modularity.'
                  },
                  { 
                    id: '02', 
                    category: 'STACK', 
                    title: 'Production Ready', 
                    desc: 'Expertise in modern frameworks like Next.js, Flutter, and Laravel ecosystems.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="group relative bg-zinc-950 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-700 transition-all cursor-default"
                  >
                    <span className="text-[9px] font-mono text-zinc-600 mb-2 block">{item.id} / {item.category}</span>
                    <h4 className="text-sm font-bold text-zinc-200 mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>

        {/* Bottom View: Tech Stack & Activity */}
        <div className="h-auto md:h-[280px] border-t border-zinc-800/50 grid grid-cols-1 md:grid-cols-2 bg-zinc-950">
          <div className="p-8 border-r border-zinc-800/50 flex flex-col justify-between">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-6">Verified Tech Stack</h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-4">
               {[
                 { label: 'Frontend', value: 'Next.js, TS' },
                 { label: 'Mobile', value: 'Flutter, RN' },
                 { label: 'Backend', value: 'Laravel, Node' },
                 { label: 'Database', value: 'PostgreSQL' },
                 { label: 'Infra', value: 'Docker, AWS' },
                 { label: 'Game', value: 'Unity 2D' }
               ].map(stack => (
                 <div key={stack.label} className="space-y-1">
                    <span className="block text-[10px] text-zinc-600 uppercase tracking-wider">{stack.label}</span>
                    <span className="block text-xs text-zinc-300 font-medium">{stack.value}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Contribution Activity</h3>
              <span className="text-[9px] text-green-500/80 font-mono tracking-widest">+512 COMMITS</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center py-4">
              <div className="grid grid-cols-12 gap-1.5 opacity-60">
                 {Array.from({ length: 48 }).map((_, i) => (
                   <div 
                    key={i} 
                    className={`w-3.5 h-3.5 rounded-[1px] ${
                      i % 7 === 0 ? 'bg-green-600' : 
                      i % 5 === 0 ? 'bg-green-900/60' : 
                      i % 3 === 0 ? 'bg-zinc-800' : 'bg-zinc-900'
                    }`}
                   />
                 ))}
              </div>
            </div>

            <div className="flex justify-between items-end mt-4">
               <div className="text-[9px] text-zinc-600 font-mono flex gap-4 uppercase tracking-tighter">
                  <span>Q1_2024</span>
                  <span>Q2_2024</span>
               </div>
               <a href="https://github.com/ChristopherAldoNatanael" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                  <Github className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

