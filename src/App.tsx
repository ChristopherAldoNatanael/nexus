/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Philosophy } from './components/sections/Philosophy';
import { GitHubSection } from './components/sections/GitHub';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { TooltipProvider } from './components/ui/tooltip';

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-50">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Philosophy />
          <GitHubSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}


