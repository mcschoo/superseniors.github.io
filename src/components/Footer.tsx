import { Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-xl font-bold inline-block mb-2">
              <span className="text-primary">Super</span>
              <span className="text-foreground">Seniors</span>
            </a>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" />
              Clemson University, SC
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:superseniors@clemson.edu"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Contact</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Super Seniors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
