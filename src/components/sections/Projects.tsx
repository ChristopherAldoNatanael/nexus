import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">Selected Works</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-100">Product Showcases</h3>
          </div>
          <p className="text-zinc-400 max-w-md md:text-right">
            A small collection of featured projects demonstrating my skills in full-stack, mobile, and game development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="group bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all overflow-hidden flex flex-col h-full rounded-2xl shadow-2xl shadow-black/50">
                <div className="relative aspect-video overflow-hidden border-b border-zinc-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-zinc-500 tracking-widest">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1} / {project.category.toUpperCase()}</span>
                    <Badge variant="outline" className="text-[10px] bg-zinc-950/50 backdrop-blur-md text-zinc-400 border-zinc-800/50 font-normal px-3 py-0.5">
                      {project.tech[0]}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 flex-grow flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold text-zinc-200 group-hover:text-zinc-50 transition-colors tracking-tight">
                      {project.title}
                    </h4>
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-zinc-100 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-600 px-3 py-1 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
            href="https://github.com/ChristopherAldoNatanael" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 group text-zinc-400 hover:text-zinc-100 transition-colors"
           >
            View all projects on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};
