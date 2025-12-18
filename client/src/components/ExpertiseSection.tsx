import { Code2, Brain, Blocks, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

type ColorKey = 'violet' | 'cyan' | 'purple';

const colorClasses: Record<ColorKey, { bg: string; text: string; gradient: string }> = {
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-500',
    gradient: 'from-violet-600/20 to-blue-600/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-500',
    gradient: 'from-cyan-600/20 to-emerald-600/20',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-500',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
};

interface ExpertiseArea {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  colorKey: ColorKey;
  recentProject: string;
}

const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'solidity',
    icon: Blocks,
    title: 'Blockchain & Solidity',
    description: 'Building secure, gas-optimized smart contracts and decentralized applications on Ethereum, Polygon, and other EVM chains.',
    technologies: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Ethers.js'],
    colorKey: 'violet',
    recentProject: 'DeFi Yield Aggregator',
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Software Development',
    description: 'Crafting scalable, maintainable applications with modern frameworks and best practices in full-stack development.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    colorKey: 'cyan',
    recentProject: 'Enterprise SaaS Platform',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Engineering',
    description: 'Developing intelligent systems using machine learning, LLMs, and neural networks to solve complex problems.',
    technologies: ['Python', 'PyTorch', 'LangChain', 'OpenAI API'],
    colorKey: 'purple',
    recentProject: 'AI Code Review Assistant',
  },
];

export default function ExpertiseSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="expertise" 
      ref={ref}
      className="relative py-24 lg:py-32"
      data-testid="expertise-section"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <Badge variant="secondary" className="mb-4" data-testid="expertise-badge">
            What I Do
          </Badge>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="expertise-title"
          >
            Expertise Across{' '}
            <span className="gradient-text">Three Domains</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="expertise-description"
          >
            Combining deep technical knowledge across blockchain, software engineering, 
            and artificial intelligence to build innovative solutions.
          </p>
        </div>

        {/* Expertise Cards - Staggered Layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => {
            const colors = colorClasses[area.colorKey];
            return (
              <Card
                key={area.id}
                className={`group relative overflow-visible p-6 lg:p-8 gradient-border hover-elevate transition-all duration-500 ${
                  index === 1 ? 'lg:translate-y-12' : ''
                } ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                data-testid={`expertise-card-${area.id}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className={`w-14 h-14 rounded-lg ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <area.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3" data-testid={`expertise-title-${area.id}`}>
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`expertise-desc-${area.id}`}>
                    {area.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {area.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="font-mono text-xs"
                        data-testid={`tech-badge-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Recent Project Teaser */}
                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Recent</span>
                      <p className="text-sm font-medium">{area.recentProject}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
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
