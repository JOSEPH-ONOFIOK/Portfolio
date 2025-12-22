import { ExternalLink, Github, Code2, Blocks, Brain, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

type ColorKey = 'violet' | 'cyan' | 'purple' | 'blue';

const colorClasses: Record<ColorKey, { bg: string; text: string; border: string; dot: string; gradient: string }> = {
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-500',
    border: 'border-violet-500/30',
    dot: 'bg-violet-500',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-500',
    border: 'border-cyan-500/30',
    dot: 'bg-cyan-500',
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-500',
    border: 'border-purple-500/30',
    dot: 'bg-purple-500',
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-500',
    border: 'border-blue-500/30',
    dot: 'bg-blue-500',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
};

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  technologies: string[];
  highlights: string[];
  colorKey: ColorKey;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 'defi-aggregator',
    title: 'DeFi Yield Aggregator',
    description:
      'A decentralized yield optimization protocol that automatically routes assets across multiple DeFi protocols to maximize returns while minimizing gas costs. — currently under NDA restrictions',
    category: 'blockchain',
    icon: Blocks,
    technologies: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'The Graph'],
    highlights: [
      'Optimized gas costs by 40% using batch transactions',
      'Integrated with 8 major DeFi protocols',
      '$2M+ TVL at peak',
    ],
    colorKey: 'violet',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'saas-platform',
    title: 'Deygo — Local Business Discovery',
    description:
      'A modern platform that helps users discover nearby businesses, restaurants, and services efficiently with intuitive search and filtering capabilities.',
    category: 'software',
    icon: Code2,
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
    highlights: [
      'Location-based search and discovery of local businesses',
      'Responsive UI with interactive listings and maps',
      'Integrated reviews and ratings system',
    ],
    colorKey: 'cyan',
    demoUrl: 'https://www.deygo.net/',
    githubUrl: '#', // NDA
  },
  {
    id: 'ai-assistant',
    title: 'Leukemia Detector — AI Medical Classification',
    description:
      'An AI-powered leukemia detection tool that classifies blood smear images into subtypes and healthy samples with visual Grad-CAM explanations for interpretability.',
    category: 'ai',
    icon: Brain,
    technologies: ['Python', 'TensorFlow', 'Streamlit', 'EfficientNet', 'Grad‑CAM'],
    highlights: [
      'Classifies ALL, AML, CLL, CML, and Healthy blood smear images',
      'Provides Grad‑CAM visual explanations for model predictions',
      'Live demo deployed on Streamlit for interactive testing',
    ],
    colorKey: 'purple',
    demoUrl: 'https://leukemia-detector-8mjzyvtgauztp6izqrgxcj.streamlit.app/',
    githubUrl: 'https://github.com/JOSEPH-ONOFIOK/leukemia-detector',
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace Protocol',
    description:
      '⚠️ Coming soon — currently under NDA restrictions. More details on protocol design, chain support, and marketplace capabilities will be published once shared publicly.',
    category: 'blockchain',
    icon: Blocks,
    technologies: [],
    highlights: [
      'Under NDA — details to be released',
      'Protocol mechanics & cross‑chain vision forthcoming',
      'Royalty standards & gas optimization strategies planned',
    ],
    colorKey: 'blue',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32" data-testid="projects-section">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <Badge variant="secondary" className="mb-4" data-testid="projects-badge">
            Featured Work
          </Badge>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="projects-title"
          >
            Projects That <span className="gradient-text">Define Excellence</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="projects-description"
          >
            A selection of projects showcasing expertise in blockchain development, full-stack engineering, and AI systems.
          </p>
        </div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const colors = colorClasses[project.colorKey];
            return (
              <Card
                key={project.id}
                className={`group relative overflow-hidden gradient-border hover-elevate transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                data-testid={`project-card-${project.id}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div
                  className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Project Preview */}
                  <div className="lg:w-[55%] p-6 lg:p-10 flex items-center justify-center bg-gradient-to-br from-card via-card to-muted/20">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 bg-background/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <div className="absolute inset-0 opacity-30">
                        <div
                          className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full ${colors.bg} blur-3xl`}
                        />
                        <div
                          className={`absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full ${colors.bg} blur-3xl`}
                        />
                      </div>
                      <div className="relative flex flex-col items-center gap-4">
                        <div className={`w-20 h-20 rounded-2xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                          <project.icon className={`w-10 h-10 ${colors.text}`} />
                        </div>
                        <Badge variant="outline" className="font-mono text-xs uppercase tracking-wider">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-[45%] p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                        <project.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs uppercase tracking-wider">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`project-desc-${project.id}`}>
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`} />
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs"
                          data-testid={`project-tech-${tech.toLowerCase().replace(/[\s.]+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
                          data-testid={`project-demo-${project.id}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary/50 cursor-not-allowed font-medium text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors font-medium text-sm"
                          data-testid={`project-github-${project.id}`}
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/30 text-muted cursor-not-allowed font-medium text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Source
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
