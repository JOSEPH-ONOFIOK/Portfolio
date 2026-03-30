import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Scroll progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0);

      // Active section detection
      const sectionIds = ['expertise', 'projects', 'skills', 'about', 'contact'];
      const offset = 120;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollY + offset >= el.offsetTop) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-border/50'
          : 'bg-transparent'
      }`}
      data-testid="navigation"
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-primary to-cyan-500 transition-all duration-75 z-10"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl lg:text-2xl font-bold tracking-tight"
            data-testid="nav-logo"
          >
            <span className="gradient-text">Joseph</span>
            <span className="text-foreground">.portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md hover-elevate ${
                  activeSection === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop: CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('#contact')}
              data-testid="nav-cta"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/50" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  activeSection === link.href
                    ? 'text-foreground bg-accent/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <Button
                className="flex-1"
                onClick={() => scrollToSection('#contact')}
                data-testid="mobile-nav-cta"
              >
                Get in Touch
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
