import { Code2, Brain, Blocks, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useInView } from '@/hooks/useInView'

type ColorKey = 'violet' | 'cyan' | 'purple'

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
}

interface ExpertiseArea {
  id: string
  icon: LucideIcon
  title: string
  description: string
  technologies: string[]
  colorKey: ColorKey
  recentProject: string
  projectUrl?: string
}

const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'solidity',
    icon: Blocks,
    title: 'Blockchain & Solidity',
    description:
      'Building secure, gas-optimized smart contracts and decentralized applications on Ethereum, Polygon, and other EVM chains.',
    technologies: ['Solidity', 'Hardhat', 'OpenZeppelin', 'Ethers.js'],
    colorKey: 'violet',
    recentProject: 'DeFi Yield Aggregator',
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Software Development',
    description:
      'Crafting scalable, maintainable applications with modern frameworks and best practices in full-stack development.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    colorKey: 'cyan',
    recentProject: 'DeyGo.net',
    projectUrl: 'https://deygo.net/',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Engineering',
    description:
      'Developing intelligent systems using machine learning, neural networks, and explainable AI for real-world impact.',
    technologies: ['Python', 'TensorFlow', 'Grad-CAM', 'Streamlit'],
    colorKey: 'purple',
    recentProject: 'Leukemia Detector',
    projectUrl: 'https://github.com/JOSEPH-ONOFIOK/leukemia-detector',
  },
]

export default function ExpertiseSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="expertise"
      ref={ref}
      className="relative py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <Badge variant="secondary" className="mb-4">
            What I Do
          </Badge>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Expertise Across{' '}
            <span className="gradient-text">Three Domains</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Combining deep technical knowledge across blockchain, software engineering,
            and artificial intelligence to build innovative solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => {
            const colors = colorClasses[area.colorKey]
            const isClickable = Boolean(area.projectUrl)

            return (
              <a
                key={area.id}
                href={area.projectUrl || '#'}
                target={area.projectUrl ? '_blank' : undefined}
                rel={area.projectUrl ? 'noopener noreferrer' : undefined}
                className={isClickable ? 'cursor-pointer' : 'pointer-events-none'}
              >
                <Card
                  className={`group relative p-6 lg:p-8 gradient-border hover-elevate transition-all duration-500 ${
                    index === 1 ? 'lg:translate-y-12' : ''
                  } ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-lg ${colors.bg} flex items-center justify-center mb-6`}
                    >
                      <area.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                      {area.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Recent
                        </span>
                        <p className="text-sm font-medium">
                          {area.recentProject}
                        </p>
                      </div>
                      {isClickable && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
