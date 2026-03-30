import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const socialLinks = [
  { name: 'GitHub', icon: SiGithub, href: 'https://github.com/JOSEPH-ONOFIOK' },
  { name: 'LinkedIn', icon: SiLinkedin, href: 'https://www.linkedin.com/in/joseph-onofiok-42b999283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'X', icon: SiX, href: 'https://x.com/__DExT3R' },
];

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-border/50" data-testid="footer">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#"
              className="text-xl font-bold tracking-tight"
              data-testid="footer-logo"
            >
              <span className="gradient-text">Joseph</span>
              <span className="text-foreground">.portfolio</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Building the future, one commit at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6" data-testid="footer-nav">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`footer-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3" data-testid="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover-elevate transition-colors hover:bg-primary/10 hover:text-primary"
                data-testid={`footer-social-${social.name.toLowerCase()}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} Joseph Onofiok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
