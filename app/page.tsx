import Hero from '@/sections/hero';
import About from '@/sections/about';
import Skills from '@/sections/skills';
import Projects from '@/sections/projects';
import Experience from '@/sections/experience';
import Contact from '@/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}