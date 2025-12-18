import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useInView } from '@/hooks/useInView';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  { name: 'GitHub', icon: SiGithub, href: 'https://github.com/JOSEPH-ONOFIOK' },
  { name: 'LinkedIn', icon: SiLinkedin, href: 'https://www.linkedin.com/in/joseph-onofiok-42b999283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'X', icon: SiX, href: 'https://x.com' },
];

export default function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again later or reach out directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative py-24 lg:py-32"
      data-testid="contact-section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="contact-badge">
            Get in Touch
          </Badge>
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="contact-title"
          >
            Let's Build{' '}
            <span className="gradient-text">Something Amazing</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="contact-description"
          >
            Have a project in mind? Looking for a collaborator? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="contact-info"
          >
            <Card className="p-8 gradient-border h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:Josephonofiok08@gmail.com" 
                      className="font-medium hover:text-primary transition-colors"
                      data-testid="contact-email"
                    >
                      Josephonofiok08@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium" data-testid="contact-location">Remote / Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover-elevate transition-colors"
                      data-testid={`social-link-${social.name.toLowerCase()}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Typically respond within <span className="text-foreground font-medium">24 hours</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="contact-form-wrapper"
          >
            <Card className="p-8 gradient-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-32 resize-none"
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full gap-2"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
