import { Brain, Link2, Search, Sparkles, FileText, Share2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Smart suggestions and automatic summarization to help you understand complex topics.',
    },
    {
      icon: Link2,
      title: 'Bi-directional Links',
      description: 'Create connections between notes that work both ways, building a true knowledge graph.',
    },
    {
      icon: Search,
      title: 'Semantic Search',
      description: 'Find notes based on meaning, not just keywords. Ask questions in natural language.',
    },
    {
      icon: Sparkles,
      title: 'Flashcard Generation',
      description: 'Automatically generate study materials from your notes for effective revision.',
    },
    {
      icon: FileText,
      title: 'Multi-format Import',
      description: 'Import from PDFs, slides, web pages, and more. All your knowledge in one place.',
    },
    {
      icon: Share2,
      title: 'Collaborative Spaces',
      description: 'Share knowledge bases with study groups and collaborate in real-time.',
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-surface-dark">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="watermark-text opacity-30">FEATURES</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">Core Features</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Knowledge, <span className="text-primary">Supercharged</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to capture, connect, and leverage your knowledge effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
