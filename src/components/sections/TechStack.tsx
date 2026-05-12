import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STACK_CATEGORIES } from '@/constants';
import type { StackCategory } from '@/types';
import { 
  Code2, Smartphone, Server, Database, Terminal, Wrench, Gamepad2,
  ChevronRight, Layers, Workflow, Sparkles, ArrowRight
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Frontend Engineering': <Code2 className="w-4 h-4" />,
  'Mobile Development': <Smartphone className="w-4 h-4" />,
  'Backend Systems': <Server className="w-4 h-4" />,
  'Database Architecture': <Database className="w-4 h-4" />,
  'DevOps & Deployment': <Terminal className="w-4 h-4" />,
  'Tooling & Workflow': <Wrench className="w-4 h-4" />,
  'Game Development': <Gamepad2 className="w-4 h-4" />,
};

const categoryAccents: Record<string, { 
  bg: string;
  border: string;
  icon: string;
  highlight: string;
  gradient: string;
}> = {
  'Frontend Engineering': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
  'Mobile Development': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
  'Backend Systems': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
  'Database Architecture': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
  'DevOps & Deployment': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
  'Tooling & Workflow': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
  'Game Development': {
    bg: 'bg-zinc-900',
    border: 'border-zinc-800',
    icon: 'text-zinc-400',
    highlight: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    gradient: 'from-zinc-800/40 via-transparent to-transparent',
  },
};

const categoryBadgeColors: Record<string, string> = {
  'Frontend Engineering': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Mobile Development': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Backend Systems': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'Database Architecture': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'DevOps & Deployment': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Tooling & Workflow': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Game Development': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

const TechCard = ({ tech }: { tech: StackCategory['technologies'][0] }) => {
  const accent = categoryAccents[tech.level === 'familiar' ? 'Game Development' : 'Frontend Engineering'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
              {tech.name}
            </h4>
            <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${
              tech.level === 'primary' 
                ? 'bg-zinc-100/5 text-zinc-400 border-zinc-700/50' 
                : tech.level === 'secondary'
                ? 'bg-zinc-800/60 text-zinc-500 border-zinc-800'
                : 'bg-zinc-900/60 text-zinc-600 border-zinc-800/50'
            }`}>
              {tech.level}
            </span>
          </div>
          <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">
            {tech.purpose}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const DetailPanel = ({ category }: { category: StackCategory }) => {
  const accent = categoryAccents[category.id];
  const badgeColor = categoryBadgeColors[category.id];
  
  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <div className="relative h-full rounded-2xl bg-zinc-950/80 border border-zinc-800/60 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-zinc-950/60" />
        
        <div className="relative z-10 p-8 h-full overflow-y-auto scrollbar-thin">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center">
                  <span className={`${accent.icon}`}>{categoryIcons[category.id]}</span>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-zinc-100 tracking-tight">{category.title}</h3>
                  <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${badgeColor}`}>
                    {category.id.split(' ')[0]}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mt-0.5">{category.tagline}</p>
              </div>
            </div>
            
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <p className="text-sm text-zinc-400 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded bg-zinc-800/60 flex items-center justify-center">
                  <Layers className="w-3 h-3 text-zinc-500" />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 font-semibold">Engineering Philosophy</h4>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {category.philosophy.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="group flex items-start gap-3 p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/40 hover:border-zinc-700/50 transition-all duration-200"
                  >
                    <div className="w-5 h-5 rounded bg-zinc-800/60 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-zinc-700/60 transition-colors">
                      <span className="text-[10px] text-zinc-500 font-mono">{idx + 1}</span>
                    </div>
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded bg-zinc-800/60 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-zinc-500" />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 font-semibold">Technology Stack</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.technologies.map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded bg-zinc-800/60 flex items-center justify-center">
                  <Workflow className="w-3 h-3 text-zinc-500" />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 font-semibold">Development Workflow</h4>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="flex items-center gap-2 flex-wrap">
                  {category.workflow.split(' → ').map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.04 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-xs font-medium text-zinc-300 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                        {step}
                      </span>
                      {idx < category.workflow.split(' → ').length - 1 && (
                        <span className="text-zinc-700 mx-1">→</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 font-semibold mb-4">Implementation Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {category.highlights.map((highlight, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="inline-flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800/40">
              <div className="flex items-center gap-4 flex-wrap">
                {category.labels.map((label, idx) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-medium"
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-zinc-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-zinc-900/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.01),transparent_50%)]" />
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<StackCategory>(STACK_CATEGORIES[0]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="stack" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(24,24,27,0.6),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(24,24,27,0.4),transparent_20%,transparent_80%,rgba(24,24,27,0.4))]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800/80 mb-8">
            <div className="w-1 h-1 rounded-full bg-zinc-500" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">Architecture & Stack</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-100 tracking-tight mb-6">
            Tools of the Trade
          </h2>
          <p className="text-zinc-500/80 text-lg max-w-xl mx-auto leading-relaxed">
            A carefully curated collection of technologies, shaped by real-world production experience and maintainability focus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-4">
                <div className="p-1 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-sm">
                  <div className="space-y-1 p-1.5">
                    {STACK_CATEGORIES.map((category, idx) => {
                      const accent = categoryAccents[category.id];
                      const isActive = activeCategory.id === category.id;
                      const isHovered = hoveredCategory === category.id;
                      
                      return (
                        <motion.button
                          key={category.id}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          onHoverStart={() => setHoveredCategory(category.id)}
                          onHoverEnd={() => setHoveredCategory(null)}
                          onClick={() => setActiveCategory(category)}
                          className={`
                            relative w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200
                            ${isActive 
                              ? 'bg-zinc-800/80 border border-zinc-700/60' 
                              : isHovered
                              ? 'bg-zinc-800/40 border border-zinc-800/80'
                              : 'hover:bg-zinc-800/30 border border-transparent'
                            }
                          `}
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`
                              w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200
                              ${isActive 
                                ? 'bg-zinc-900/80 text-zinc-200 border border-zinc-700/40' 
                                : isHovered
                                ? 'bg-zinc-800/60 text-zinc-400'
                                : 'bg-zinc-800/40 text-zinc-500'
                              }
                            `}>
                              {categoryIcons[category.id]}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className={`
                                text-sm font-medium transition-colors duration-200
                                ${isActive ? 'text-zinc-100' : 'text-zinc-400'}
                              `}>
                                {category.title}
                              </h4>
                              <p className="text-xs text-zinc-600 truncate mt-0.5">{category.tagline}</p>
                            </div>
                            
                            <motion.div
                              animate={{ 
                                x: isActive ? 0 : 6,
                                opacity: isActive ? 1 : 0.3 
                              }}
                              transition={{ duration: 0.2 }}
                              className="w-5 h-5 rounded flex items-center justify-center"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                            </motion.div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">Current Selection</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {activeCategory.description.split('.')[0]}.
                  </p>
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center gap-3">
                    <span className="text-[10px] text-zinc-600 uppercase tracking-wider">
                      {activeCategory.technologies.filter(t => t.level === 'primary').length} primary
                    </span>
                    <span className="text-zinc-800">·</span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-wider">
                      {activeCategory.technologies.filter(t => t.level === 'secondary').length} secondary
                    </span>
                    <span className="text-zinc-800">·</span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-wider">
                      {activeCategory.technologies.filter(t => t.level === 'familiar').length} familiar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="h-[580px] lg:h-[680px]">
                <AnimatePresence mode="wait">
                  <DetailPanel key={activeCategory.id} category={activeCategory} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-5">
            <div className="flex -space-x-3">
              {['React', 'Node', 'Postgres', 'Docker'].map((tech, i) => (
                <div
                  key={tech}
                  className="w-11 h-11 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 flex items-center justify-center text-[8px] font-semibold text-zinc-500 shadow-lg"
                  style={{ zIndex: 4 - i }}
                >
                  {tech.substring(0, 3)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-zinc-300 font-medium">Production-Ready Stack</p>
              <p className="text-xs text-zinc-600 mt-0.5">Battle-tested across multiple deployments</p>
            </div>
          </div>
          
          <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent w-32" />
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">System v2.4</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};