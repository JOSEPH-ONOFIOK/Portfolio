import { useInView } from '@/hooks/useInView'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Award,
  Briefcase,
  GraduationCap,
  Rocket,
  Brain,
  Code,
  Database,
  Blocks,
} from 'lucide-react'

const timeline = [
  {
    id: 'aethers',
    year: '2025 – Present',
    title: 'Blockchain Developer',
    company: 'Aethers',
    description:
      'Building and maintaining blockchain-based applications and smart contracts, focusing on secure, efficient, and scalable Web3 systems.',
    icon: Blocks,
    current: true,
  },
  {
    id: 'gotbot',
    year: 'Jan 2025 – Jun 2025',
    title: 'AI Software Engineer (Intern)',
    company: 'GotBot.AI · Remote (South Africa)',
    description:
      'Worked on AI-powered systems, contributing to machine learning workflows and backend services for intelligent applications.',
    icon: Brain,
    current: false,
  },
  {
    id: 'zidepeople',
    year: 'Jun 2024 – Dec 2024',
    title: 'Web Developer (Intern)',
    company: 'Zidepeople · Remote (Nigeria)',
    description:
      'Developed and tested modern web applications using Next.js, with a focus on performance, reliability, and system testing.',
    icon: Code,
    current: false,
  },
  {
    id: 'lasg',
    year: 'May 2024 – Nov 2024',
    title: 'Oracle Database Administrator (Intern)',
    company: 'Lagos State Ministry of Innovation, Science & Technology',
    description:
      'Assisted in managing Oracle databases, writing SQL queries, and supporting database performance and data integrity.',
    icon: Database,
    current: false,
  },
  {
    id: 'education',
    year: 'Nov 2021 – Nov 2025',
    title: 'B.Sc. Computer Science',
    company: "Redeemer’s University",
    description:
      'Studied computer science with emphasis on software engineering, databases, and deep learning.',
    icon: GraduationCap,
    current: false,
  },
]

const certifications = [
  'Deep Learning',
  'Machine Learning',
  'Next.js',
  'Oracle SQL',
  'Blockchain Development',
]

export default function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32"
      data-testid="about-section"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Driven by <span className="gradient-text">Technology & Impact</span>
            </h2>

            <div
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p> I'm a developer who thrives at the intersection of emerging technologies. With deep expertise in <span className="text-foreground font-medium">Solidity</span>, <span className="text-foreground font-medium"> full-stack development</span>, and <span className="text-foreground font-medium"> AI engineering</span>, I build solutions that push boundaries. </p> <p> My journey started with a fascination for how code can solve real-world problems. Today, I focus on creating secure smart contracts, scalable web applications, and intelligent systems that make a difference. </p> <p> When I'm not coding, you'll find me exploring the latest in DeFi protocols, experimenting with new AI models, or contributing to open-source projects. </p>
            </div>

            {/* Skills / Certifications */}
            <div
              className={`mt-8 transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="outline" className="text-xs">
                    <Award className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column – Timeline */}
          <div>
            <h3
              className={`text-lg font-semibold mb-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Career Journey
            </h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative pl-14 transition-all duration-500 ${
                      isInView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div
                      className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        item.current
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                    </div>

                    <Card className="p-5 gradient-border">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-muted-foreground">
                          {item.year}
                        </span>
                        {item.current && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground/80">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
