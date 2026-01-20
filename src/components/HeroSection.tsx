import { ArrowDown, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="watermark-text opacity-60">SECOND BRAIN</span>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Clemson University Project</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-primary">SECOND</span>
            <br />
            <span className="text-foreground">BRAIN</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We are <span className="text-foreground font-semibold">Super Seniors</span>. 
            Building an intelligent knowledge management system to help students at Clemson 
            organize, connect, and retain information more effectively.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all glow-orange"
            >
              Explore Features
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">5</h3>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">1</h3>
              <p className="text-sm text-muted-foreground">Semester Project</p>
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">∞</h3>
              <p className="text-sm text-muted-foreground">Ideas Connected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
