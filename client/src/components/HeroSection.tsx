import { ChevronDown, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeHero from './ThreeHero';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

const stats = [
  { value: '7+', label: 'Projects Shipped' },
  { value: '3', label: 'Tech Domains' },
  { value: '3+', label: 'Years Building' },
];

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Three.js Background */}
      <ThreeHero />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Availability tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-8 opacity-0 animate-fade-in-up"
            data-testid="hero-tag"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-400/90">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1"
            data-testid="hero-headline"
          >
            Building the Future with{' '}
            <span className="gradient-text">Blockchain</span>,{' '}
            <span className="text-gradient-secondary">AI</span>{' '}
            <span className="text-foreground">&amp; Code</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-4 opacity-0 animate-fade-in-up stagger-2"
            data-testid="hero-subheadline"
          >
            I'm <span className="text-foreground font-semibold">Joseph Onofiok</span> — a Full-Stack Developer turning complex ideas into production-ready systems across:
          </p>

          {/* Expertise Pills */}
          <div
            className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-in-up stagger-3"
            data-testid="hero-expertise-pills"
          >
            <div className="px-4 py-2 rounded-full border border-chart-1/40 bg-chart-1/10 text-chart-1 font-mono text-sm font-medium">
              Solidity &amp; Smart Contracts
            </div>
            <div className="px-4 py-2 rounded-full border border-chart-2/40 bg-chart-2/10 text-chart-2 font-mono text-sm font-medium">
              Full-Stack Development
            </div>
            <div className="px-4 py-2 rounded-full border border-chart-3/40 bg-chart-3/10 text-chart-3 font-mono text-sm font-medium">
              AI &amp; Machine Learning
            </div>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in-up stagger-4"
            data-testid="hero-ctas"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gap-2 text-base"
              data-testid="hero-cta-projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Resume Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-base backdrop-blur-sm bg-background/20"
                  data-testid="hero-cta-resume"
                >
                  <FileText className="w-4 h-4" />
                  Request Resume
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Request My Resume</DialogTitle>
                  <DialogDescription>
                    I share my resume directly to keep it updated and
                    personalized. Reach out through any option below.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    📧 <strong>Email:</strong>{' '}
                    <a
                      href="mailto:josephonofiok08@gmail.com"
                      className="text-primary underline"
                    >
                      josephonofiok08@gmail.com
                    </a>
                  </p>

                  <p>
                    💼 <strong>LinkedIn:</strong>{' '}
                    <a
                      href="https://www.linkedin.com/in/joseph-onofiok-42b999283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      linkedin.com/in/josephonofiok
                    </a>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 opacity-0 animate-fade-in-up stagger-5"
            data-testid="hero-stats"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-0 animate-fade-in-up stagger-5"
        data-testid="scroll-indicator"
      >
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
}
