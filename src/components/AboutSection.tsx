import { Lightbulb, Users, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            We believe in a <span className="text-primary">student-centered</span> design approach, 
            ensuring that every feature is tailored to meet the specific needs of Clemson students.
          </h2>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-medium text-muted-foreground">About the Project</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Hi, we're <span className="text-primary">Super Seniors</span>.
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                We're a team of senior students at Clemson University, passionate about 
                solving real problems that students face every day. Our Second Brain project 
                aims to revolutionize how students manage and connect their knowledge.
              </p>
              <p>
                The Second Brain is an intelligent note-taking and knowledge management system 
                that helps students organize their thoughts, connect ideas across subjects, 
                and build a personal knowledge base that grows with them throughout their 
                academic journey.
              </p>
              <p>
                By combining modern AI capabilities with proven knowledge management principles, 
                we're creating a tool that adapts to each student's unique learning style.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Feature Cards */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">Intelligent Connections</h4>
              <p className="text-muted-foreground">
                Automatically discover relationships between your notes and create a web of interconnected knowledge.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">Built for Students</h4>
              <p className="text-muted-foreground">
                Designed specifically for the academic workflow—from lecture notes to research papers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">Focus on Learning</h4>
              <p className="text-muted-foreground">
                Reduce cognitive load so you can focus on understanding, not just remembering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
