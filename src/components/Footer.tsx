import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 py-10 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center bg-zinc-950 gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Available for collaboration</span>
        </div>
        <span className="text-[10px] text-zinc-600 font-mono tracking-[0.2em]">© {currentYear} ChristopherAldoNatanael_CORE_SYSTEM</span>
      </div>
      
      <div className="flex gap-8 items-center">
        <div className="flex gap-4 text-zinc-500">
           <a href="https://github.com/ChristopherAldoNatanael" target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/christopher-aldo-2497b735a" target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
        <div className="h-4 w-px bg-zinc-800"></div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] text-white font-bold cursor-pointer uppercase tracking-widest hover:text-zinc-400 transition-colors"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};
