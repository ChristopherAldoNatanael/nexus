import { motion } from 'motion/react';

export const Experience = () => {
  const experiences = [
    {
      period: "2026 - Present",
      role: "Web Developer (Internship)",
      company: "Halomedis",
      description: "Working as a Web Developer intern, contributing to various web-based solutions and medical system platforms."
    },
    {
      period: "2025 - 2027",
      role: "Software Engineering Student",
      company: "SMKN 2 Buduran Sidoarjo",
      description: "Focusing on core software engineering principles, web development, and mobile application architecture in a specialized vocational setting."
    },
    {
      period: "2023 - 2025",
      role: "Junior Developer",
      company: "Independent Projects",
      description: "Building production-ready web applications for various clients, focusing on Laravel, React, and Flutter ecosystems."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">Journey</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-16 text-zinc-100">Experience</h3>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.period + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-[200px_1fr] gap-10"
            >
              {/* Timeline Line (Mobile) */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 md:hidden" />
              
              <div className="mb-2 md:mb-0">
                <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
              </div>
              
              <div className="relative">
                {/* Timeline Dot (Mobile) */}
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 rounded-full bg-zinc-100 md:hidden shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                
                <h4 className="text-xl font-bold text-zinc-100 mb-1">{exp.role}</h4>
                <div className="text-zinc-400 font-medium mb-4">{exp.company}</div>
                <p className="text-zinc-500 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
