import { Github, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'OpenAI', category: 'AI/ML' },
  ];

  const team = [
    { name: 'Team Member 1', role: 'Full Stack Developer' },
    { name: 'Team Member 2', role: 'Frontend Developer' },
    { name: 'Team Member 3', role: 'Backend Developer' },
    { name: 'Team Member 4', role: 'UI/UX Designer' },
  ];

  return (
    <section id="team" className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Tech Stack */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-medium text-muted-foreground">Technology</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Tech Stack
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{tech.category}</span>
                <p className="font-display font-semibold text-foreground">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-medium text-muted-foreground">The Team</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the <span className="text-primary">Super Seniors</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A group of passionate Clemson students dedicated to improving the learning experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/40 group-hover:to-primary/20 transition-all">
                  <span className="font-display text-2xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center gap-3">
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
