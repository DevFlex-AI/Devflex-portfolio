import { Link } from 'react-router-dom';
import { Github, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Work',
    links: [
      { to: '/projects', label: 'Projects' },
      { to: '/tech-languages', label: 'Languages' },
      { to: '/tech-frameworks', label: 'Frameworks' },
      { to: '/github-stats', label: 'GitHub Stats' },
    ],
  },
  {
    heading: 'About',
    links: [
      { to: '/about', label: 'About Me' },
      { to: '/story', label: 'My Story' },
      { to: '/resume', label: 'Resume' },
      { to: '/philosophy', label: 'Values' },
    ],
  },
  {
    heading: 'Engineering',
    links: [
      { to: '/architecture', label: 'Architecture' },
      { to: '/principles', label: 'Principles' },
      { to: '/design-philosophy', label: 'Design' },
      { to: '/fork-strategy', label: 'Fork Strategy' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display font-bold text-foreground text-lg tracking-tight">
              DevFlex<span className="text-primary">-AI</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              AI Engineer & Full-Stack Builder. Crafting intelligent tools with precision.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/devflex-ai"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:mahirusus@gmail.com"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevFlex-AI. Signal over noise.
          </p>
          <Link
            to="/contact"
            className="group flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Let's work together
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
