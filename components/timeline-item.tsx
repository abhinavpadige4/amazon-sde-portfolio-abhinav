interface TimelineItemProps {
  company: string;
  role: string;
  dates: string;
  points: string[];
}

export default function TimelineItem({ 
  company, 
  role, 
  dates, 
  points 
}: TimelineItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 h-3 w-3 bg-primary rounded-full mr-4" />
        <div>
          <h3 className="font-semibold">{role}</h3>
          <h4 className="text-muted-foreground">{company}</h4>
          <p className="text-sm text-muted-foreground">{dates}</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {points.map((point, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}