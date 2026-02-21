import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import devflexAvatar from '@/assets/devflex-avatar.png';

const navGroups = [
  {
    label: 'About',
    links: [
      { to: '/about', label: 'About Me' },
      { to: '/story', label: 'My Story' },
      { to: '/resume', label: 'Resume' },
      { to: '/philosophy', label: 'Values' },
    ],
  },
  {
    label: 'Skills',
    links: [
      { to: '/tech-languages', label: 'Languages' },
      { to: '/tech-frameworks', label: 'Frameworks' },
    ],
  },
  {
    label: 'Projects',
    links: [
      { to: '/projects', label: 'All Projects' },
      { to: '/projects/vortex', label: 'Vortex AI Chat' },
      { to: '/projects/codingit', label: 'CodingIT' },
      { to: '/projects/gemini', label: 'Gemini Next Chat' },
      { to: '/projects/lobe', label: 'Lobe Chat' },
      { to: '/projects/stirling', label: 'Stirling-PDF' },
    ],
  },
  {
    label: 'Engineering',
    links: [
      { to: '/design-philosophy', label: 'Design Philosophy' },
      { to: '/smack-sh', label: 'SMACK-SH' },
      { to: '/principles', label: 'Principles' },
      { to: '/architecture', label: 'Architecture' },
      { to: '/fork-strategy', label: 'Fork Strategy' },
    ],
  },
  {
    label: 'More',
    links: [
      { to: '/github-stats', label: 'GitHub Stats' },
      { to: '/builder-log', label: 'Builder Log' },
      { to: '/retro-mantras', label: 'Mantras' },
      { to: '/contact', label: 'Contact' },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={devflexAvatar} alt="DevFlex-AI" className="w-8 h-8 rounded-full ring-1 ring-primary/30" />
          <span className="font-display font-bold text-foreground text-base tracking-tight">
            DevFlex<span className="text-primary">-AI</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navGroups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md">
                {g.label}
                <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="glass-strong rounded-lg min-w-[200px] py-2 shadow-2xl">
                  {g.links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={cn(
                        'block px-4 py-2.5 text-sm hover:bg-muted/50 hover:text-foreground transition-colors',
                        location.pathname === l.to ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-strong border-t border-border"
          >
            <div className="max-h-[80vh] overflow-y-auto py-6 px-6 space-y-6">
              {navGroups.map((g) => (
                <div key={g.label}>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{g.label}</div>
                  <div className="space-y-1">
                    {g.links.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block px-3 py-2.5 text-sm rounded-md hover:bg-muted/50 transition-colors',
                          location.pathname === l.to ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
