import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Award, Briefcase, GraduationCap, Rocket } from 'lucide-react';

const timeline = [
  {
    id: 'current',
    year: '2023 - Present',
    title: 'Senior Blockchain Developer',
    company: 'Web3 Innovation Labs',
    description: 'Leading smart contract development for DeFi protocols with $10M+ TVL.',
    icon: Rocket,
    current: true,
  },
  {
    id: 'prev1',
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'TechCorp Solutions',
    description: 'Built scalable SaaS applications serving 50,000+ users globally.',
    icon: Briefcase,
    current: false,
  },
  {
    id: 'prev2',
    year: '2019 - 2021',
    title: 'AI/ML Engineer',
    company: 'DataMind AI',
    description: 'Developed NLP models and recommendation systems for enterprise clients.',
    icon: Award,
    current: false,
  },
  {
    id: 'education',
    year: '2015 - 2019',
    title: 'BSc Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in distributed systems and AI.',
    icon: GraduationCap,
    current: false,
  },
];

const certifications = [
  'AWS Solutions Architect',
  'Certified Ethereum Developer',
  'TensorFlow Developer',
  'Professional Scrum Master',
];

export default function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-24 lg:py-32"
      data-testid="about-section"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - About Text */}
          <div>
            <Badge variant="secondary" className="mb-4" data-testid="about-badge">
              About Me
            </Badge>
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid="about-title"
            >
              Passionate About{' '}
              <span className="gradient-text">Innovation</span>
            </h2>
            
            <div 
              className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid="about-text"
            >
              <p>
                I'm a developer who thrives at the intersection of emerging technologies. 
                With deep expertise in <span className="text-foreground font-medium">Solidity</span>, 
                <span className="text-foreground font-medium"> full-stack development</span>, and 
                <span className="text-foreground font-medium"> AI engineering</span>, I build 
                solutions that push boundaries.
              </p>
              <p>
                My journey started with a fascination for how code can solve real-world problems. 
                Today, I focus on creating secure smart contracts, scalable web applications, 
                and intelligent systems that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in DeFi protocols, 
                experimenting with new AI models, or contributing to open-source projects.
              </p>
            </div>

            {/* Certifications */}
            <div 
              className={`mt-8 transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-testid="certifications"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge 
                    key={cert} 
                    variant="outline" 
                    className="text-xs"
                    data-testid={`cert-${cert.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Award className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 
              className={`text-lg font-semibold mb-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Career Journey
            </h3>
            
            <div className="relative" data-testid="career-timeline">
              {/* Timeline Line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              {/* Timeline Items */}
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
                    data-testid={`timeline-item-${item.id}`}
                  >
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        item.current 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-card border border-border'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                    </div>

                    <Card className={`p-5 gradient-border ${item.current ? 'border-primary/30' : ''}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-muted-foreground">{item.year}</span>
                        {item.current && (
                          <Badge variant="default" className="text-xs">Current</Badge>
                        )}
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground/80">{item.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
