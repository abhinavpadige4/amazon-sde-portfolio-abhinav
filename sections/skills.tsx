import { SiPython, SiJava, SiAmazonaws, SiReact } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'Python', icon: SiPython, level: 90 },
    { name: 'Java', icon: SiJava, level: 85 },
    { name: 'AWS', icon: SiAmazonaws, level: 80 },
    { name: 'React', icon: SiReact, level: 85 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:bg-accent/5 transition-all">
              <div className="flex items-center mb-4">
                <skill.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2.5 mb-2">
                <div
                  className={`bg-primary h-2.5 rounded-full transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Proficiency</span>
                <span className="text-primary-font">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}