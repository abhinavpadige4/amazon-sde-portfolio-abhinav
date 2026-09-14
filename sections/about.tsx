export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Passionate software engineer with strong foundation in Python, Java, AWS, and React. 
              Experienced in building scalable applications and solving complex problems through 
              innovative solutions. Dedicated to continuous learning and delivering high-quality 
              code that meets Amazon's Leadership Principles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/resume-abhinav.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 rounded-lg text-sm font-medium transition-all hover:border-primary/50">
                Download Resume
              </a>
              <a href="https://linkedin.com/in/abhinav" target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 rounded-lg text-sm font-medium transition-all hover:border-primary/50">
                View LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
              <div className="text-2xl font-bold text-primary">
                A
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Button styles
const btnOutline = 'border border-input hover:bg-accent/50';