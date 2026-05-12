import { motion } from 'motion/react';
import { Layers, Shield, Cpu, Zap } from 'lucide-react';

export const Philosophy = () => {
  const principles = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Separation of concerns is key. I build systems that are easy to reason about, test, and adapt as requirements evolve."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maintainability",
      description: "Code is read far more often than it is written. My focus is on clarity, documentation, and predictable patterns."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Scalability",
      description: "Architecture should support growth. I design systems that handle increased load without sacrificing performance."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "User-Focused",
      description: "Technology is a tool for people. I ensure the technical elegance translates into a seamless, high-performance UX."
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">Guiding Principles</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-100">Software Philosophy</h3>
          <p className="text-zinc-400 text-lg">
            Engineering isn't just about making things work—it's about how they survive the test of time, team changes, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex gap-8 items-start group">
                <div className="w-px h-16 bg-zinc-800 group-hover:bg-zinc-400 transition-colors shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-500 transition-colors group-hover:text-zinc-200">{p.icon}</span>
                    <h4 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{p.title}</h4>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base group-hover:text-zinc-300 transition-colors">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
