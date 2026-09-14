import { FiArrowDownCircle } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 pt-16 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Abhinav
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
          Amazon SDE
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="btn-primary px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary px-6 py-3 rounded-lg font-medium border transition-all hover:border-primary/50">
            Get in Touch
          </a>
        </div>
        <div className="mt-12 animate-bounce">
          <FiArrowDownCircle className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
        </div>
      </div>
    </section>
  );
}

// Button styles
const btnPrimary = 'bg-primary text-primary-foreground hover:bg-primary/90';
const btnSecondary = 'border-input hover:bg-accent';