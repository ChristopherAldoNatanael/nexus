import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">Get In Touch</h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-8 text-zinc-100">Let's build something exceptional.</h3>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button size="lg" className="h-14 px-10 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all font-semibold text-lg" asChild>
            <a href="mailto:christaldonatanael@gmail.com">
              <Mail className="mr-2 w-5 h-5" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-zinc-800 hover:bg-zinc-900 transition-all text-lg" asChild>
            <a href="https://www.linkedin.com/in/christopher-aldo-2497b735a" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-16 border-t border-zinc-900 mt-16 text-left">
           <ContactCard 
            icon={<Mail className="w-5 h-5 text-zinc-100" />} 
            label="Email" 
            value="christaldonatanael@gmail.com" 
            href="mailto:christaldonatanael@gmail.com"
           />
           <ContactCard 
            icon={<Github className="w-5 h-5 text-zinc-100" />} 
            label="GitHub" 
            value="@ChristopherAldoNatanael" 
            href="https://github.com/ChristopherAldoNatanael"
           />
           <ContactCard 
            icon={<Linkedin className="w-5 h-5 text-zinc-100" />} 
            label="LinkedIn" 
            value="Christopher Aldo" 
            href="https://www.linkedin.com/in/christopher-aldo-2497b735a"
           />
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, href }: any) => {
  const content = (
    <div className="flex flex-col items-center gap-2 group transition-transform hover:scale-105">
      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-100 transition-colors shadow-sm">
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{label}</span>
      <span className="text-sm text-zinc-300 font-medium">{value}</span>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  ) : content;
};
