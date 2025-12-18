import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  SiSolidity, SiEthereum, SiTypescript, SiReact, SiNodedotjs, 
  SiPython, SiPostgresql, SiDocker, SiGit, SiTailwindcss,
  SiNextdotjs, SiGraphql, SiMongodb, SiRedis, SiAmazon,
  SiPytorch, SiOpenai, SiVercel
} from 'react-icons/si';
import { Blocks, Brain, Code2, Layers, Database, Cloud, type LucideIcon } from 'lucide-react';
import { type IconType } from 'react-icons';

type ColorKey = 'violet' | 'cyan' | 'purple' | 'emerald' | 'pink' | 'blue';

const colorClasses: Record<ColorKey, { bg: string; text: string; bar: string }> = {
  violet: { 
    bg: 'bg-violet-500/10', 
    text: 'text-violet-500', 
    bar: 'bg-violet-500' 
  },
  cyan: { 
    bg: 'bg-cyan-500/10', 
    text: 'text-cyan-500', 
    bar: 'bg-cyan-500' 
  },
  purple: { 
    bg: 'bg-purple-500/10', 
    text: 'text-purple-500', 
    bar: 'bg-purple-500' 
  },
  emerald: { 
    bg: 'bg-emerald-500/10', 
    text: 'text-emerald-500', 
    bar: 'bg-emerald-500' 
  },
  pink: { 
    bg: 'bg-pink-500/10', 
    text: 'text-pink-500', 
    bar: 'bg-pink-500' 
  },
  blue: { 
    bg: 'bg-blue-500/10', 
    text: 'text-blue-500', 
    bar: 'bg-blue-500' 
  },
};

interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  colorKey: ColorKey;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'blockchain',
    title: 'Blockchain',
    icon: Blocks,
    colorKey: 'violet',
    skills: [
      { name: 'Solidity', icon: SiSolidity, level: 95 },
      { name: 'Ethereum', icon: SiEthereum, level: 90 },
      { name: 'Hardhat', icon: SiEthereum, level: 88 },
      { name: 'OpenZeppelin', icon: SiEthereum, level: 85 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layers,
    colorKey: 'cyan',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, level: 92 },
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 88 },
      { name: 'Tailwind', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Code2,
    colorKey: 'purple',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 90 },
      { name: 'Python', icon: SiPython, level: 88 },
      { name: 'GraphQL', icon: SiGraphql, level: 82 },
      { name: 'Express', icon: SiNodedotjs, level: 88 },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    colorKey: 'emerald',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
      { name: 'Redis', icon: SiRedis, level: 78 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    icon: Brain,
    colorKey: 'pink',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, level: 80 },
      { name: 'OpenAI', icon: SiOpenai, level: 88 },
      { name: 'LangChain', icon: SiPython, level: 85 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: Cloud,
    colorKey: 'blue',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 85 },
      { name: 'AWS', icon: SiAmazon, level: 80 },
      { name: 'Git', icon: SiGit, level: 92 },
      { name: 'Vercel', icon: SiVercel, level: 88 },
    ],
  },
];

export default function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={ref}
      className="relative py-24 lg:py-32"
      data-testid="skills-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20 text-center mx-auto">
          <Badge variant="secondary" className="mb-4" data-testid="skills-badge">
            Technical Arsenal
          </Badge>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="skills-title"
          >
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="skills-description"
          >
            A comprehensive toolkit built over years of hands-on experience 
            across diverse tech domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colors = colorClasses[category.colorKey];
            return (
              <Card
                key={category.id}
                className={`group relative p-6 gradient-border hover-elevate transition-all duration-500 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(catIndex + 2) * 80}ms` }}
                data-testid={`skills-card-${category.id}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill"
                      data-testid={`skill-item-${skill.name.toLowerCase().replace(/[\s.]+/g, '-')}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-muted-foreground group-hover/skill:text-foreground transition-colors" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: `${(catIndex * 4 + skillIndex) * 50 + 300}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-testid="additional-skills"
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Web3.js', 'Ethers.js', 'IPFS', 'TheGraph', 'Prisma', 'tRPC', 'Zustand', 'Jest', 'Cypress', 'GitHub Actions'].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="font-mono text-xs"
                data-testid={`extra-skill-${skill.toLowerCase().replace(/[\s.]+/g, '-')}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
