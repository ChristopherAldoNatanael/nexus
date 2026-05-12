import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

export const GitHubSection = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">Activity</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6">Open Source Mindset</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              I believe in contributing back to the community. You can find most of my experimental work, frameworks, and projects open-sourced on GitHub.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <span className="block text-3xl font-bold text-zinc-100">30+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">repositories</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-zinc-100">500+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">contributions</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800">
                    <img src="https://github.com/ChristopherAldoNatanael.png" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div>
                    <span className="block text-sm font-bold text-zinc-100">ChristopherAldoNatanael</span>
                    <span className="text-xs text-zinc-500">github.com/ChristopherAldoNatanael</span>
                 </div>
                 <a 
                   href="https://github.com/ChristopherAldoNatanael" 
                   target="_blank" 
                   rel="noreferrer"
                   className="ml-auto p-2 text-zinc-500 hover:text-zinc-100 transition-colors"
                 >
                   <ExternalLink className="w-5 h-5" />
                 </a>
               </div>

               {/* Mock Contribution Grid for Visuals */}
               <div className="grid grid-cols-12 sm:grid-cols-20 gap-1.5 overflow-hidden opacity-50">
                  {Array.from({ length: 140 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-[2px] ${
                        i % 5 === 0 ? 'bg-zinc-100' : 
                        i % 7 === 0 ? 'bg-zinc-400' : 
                        i % 3 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'
                      }`}
                      style={{ opacity: Math.random() * 0.8 + 0.2 }}
                    />
                  ))}
               </div>
               
               <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-zinc-800 rounded-sm" />
                    <div className="w-3 h-3 bg-zinc-700 rounded-sm" />
                    <div className="w-3 h-3 bg-zinc-400 rounded-sm" />
                    <div className="w-3 h-3 bg-zinc-100 rounded-sm" />
                  </div>
                  <span>More</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
