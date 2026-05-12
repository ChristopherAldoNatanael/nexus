import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'stack', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const getLinkHref = (href: string) => href.replace('#', '');

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'py-3.5 bg-zinc-950/85 backdrop-blur-2xl border-b border-zinc-800/40 shadow-[0_1px_0_0_rgba(255,255,255,0.03)]' 
            : 'py-4 bg-zinc-950/60 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:bg-zinc-800 group-hover:border-zinc-600/80 transition-all duration-300">
                <span className="text-[9px] font-bold tracking-[0.1em] text-zinc-300 group-hover:text-zinc-100 transition-colors">CAN</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-[13px] font-medium tracking-[0.01em] text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200">Christopher Aldo Natanael</span>
            </div>
          </a>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'gap-8' : 'gap-9'}`}>
              {navLinks.map((link) => {
                const sectionId = getLinkHref(link.href);
                const isActive = activeSection === sectionId;
                
                return (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="group relative flex flex-col items-center"
                  >
                    <span className={`text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${
                      isActive ? 'text-zinc-100' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}>
                      {link.name}
                    </span>
                    <span className={`absolute -bottom-1.5 h-px bg-zinc-400/60 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Location */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-2.5 pl-6 border-l border-zinc-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-[10px] text-zinc-600 tracking-[0.04em]">Based in Sidoarjo, Indonesia</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`absolute inset-0 rounded-lg bg-zinc-800/50 border border-zinc-700/40 transition-all duration-200 ${mobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-80 scale-95'}`} />
            <span className="relative text-zinc-300">
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-2xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative pt-28 px-6"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + (idx * 0.05) }}
                    className="text-2xl font-medium text-zinc-300 hover:text-zinc-100 tracking-tight transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  <span className="text-xs text-zinc-600">Based in Sidoarjo, Indonesia</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};