export default function Experience() {
  const experience = [
    {
      company: 'Amazon',
      role: 'Software Development Engineer Intern',
      dates: 'Summer 2023',
      points: [
        'Developed and maintained microservices using Java and Spring Boot',
        'Implemented AWS Lambda functions for serverless data processing',
        'Collaborated with cross-functional team to improve system performance by 30%',
        'Participated in code reviews and followed Amazon\'s coding standards'
      ]
    },
    {
      company: 'Tech Solutions Inc.',
      role: 'Full Stack Developer',
      dates: '2021 - 2023',
      points: [
        'Built responsive web applications using React and Node.js',
        'Designed and implemented RESTful APIs for mobile applications',
        'Optimized database queries resulting in 40% faster response times',
        'Mentored junior developers and conducted technical interviews'
      ]
    },
    {
      company: 'StartupXYZ',
      role: 'Software Engineer',
      dates: '2020 - 2021',
      points: [
        'Developed Python-based data processing pipelines',
        'Deployed applications on AWS using Docker and Kubernetes',
        'Implemented CI/CD pipelines using GitHub Actions',
        'Reduced infrastructure costs by 25% through resource optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <TimelineItem 
              key={index}
              company={exp.company}
              role={exp.role}
              dates={exp.dates}
              points={exp.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}