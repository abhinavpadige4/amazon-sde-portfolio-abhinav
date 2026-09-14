interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  techStack, 
  demoUrl, 
  githubUrl, 
  image 
}: ProjectCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:bg-accent/5 transition-all hover:shadow-lg">
      {image && (
        <div className="mb-4">
          <img 
            src={image} 
            alt={`${title} screenshot`} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {demoUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline px-4 py-2 rounded text-sm font-medium"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline px-4 py-2 rounded text-sm font-medium"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}

// Button styles
const btnOutline = 'border border-input hover:bg-accent/50';