import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-100">
            Passionate about engineering systems that last.
          </h3>
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a software engineer with a deep fascination for how systems are built. My journey started with a curiosity for code, which evolved into a professional commitment to building scalable and maintainable applications.
            </p>
            <p>
              I believe that software is more than just solving a problem today—it's about ensuring the solution is robust enough for tomorrow. I focus on clean architecture, readable code, and intuitive user experiences.
            </p>
            <p>
              Whether it's a mobile app or a distributed web system, I approach every project with a product-thinking mindset, ensuring that technology serves the user effectively while staying technically elegant.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/50"
        >
          <img 
            src="/christopher-aldo.png" 
            alt="Christopher Aldo Natanael" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
