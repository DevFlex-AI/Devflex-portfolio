import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navGroups = [
  {
    label: 'Main',
    links: [
      { to: '/', label: '🎮 Home' },
      { to: '/about', label: '🌀 About' },
      { to: '/story', label: '🕹️ Story' },
    ],
  },
  {
    label: 'Tech',
    links: [
      { to: '/tech-languages', label: '🧪 Languages' },
      { to: '/tech-frameworks', label: '🔧 Frameworks' },
    ],
  },
  {
    label: 'Projects',
    links: [
      { to: '/projects', label: '⭐ Overview' },
      { to: '/projects/vortex', label: 'Vortex AI' },
      { to: '/projects/codingit', label: 'CodingIT' },
      { to: '/projects/gemini', label: 'Gemini Chat' },
      { to: '/projects/lobe', label: 'Lobe Chat' },
      { to: '/projects/stirling', label: 'Stirling-PDF' },
    ],
  },
  {
    label: 'Philosophy',
    links: [
      { to: '/design-philosophy', label: '🎨 Design' },
      { to: '/smack-sh', label: '🏢 SMACK-SH' },
      { to: '/principles', label: '🧩 Principles' },
      { to: '/architecture', label: '🔧 Architecture' },
      { to: '/philosophy', label: '🧭 Values' },
    ],
  },
  {
    label: 'More',
    links: [
      { to: '/github-stats', label: '📊 Stats' },
      { to: '/fork-strategy', label: '🧠 Forks' },
      { to: '/builder-log', label: '📓 Log' },
      { to: '/retro-mantras', label: '🎮 Mantras' },
      { to: '/contact', label: '📫 Contact' },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-orbitron font-bold text-primary neon-text-cyan text-sm">
          <Gamepad2 className="w-5 h-5" />
          DEVFLEX-AI
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navGroups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="px-3 py-2 text-xs font-orbitron text-muted-foreground hover:text-primary transition-colors">
                {g.label}
              </button>
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-card border border-primary/20 neon-border-cyan min-w-[180px] py-1 z-50">
                {g.links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={cn(
                      'px-4 py-2 text-xs font-mono hover:bg-primary/10 hover:text-primary transition-colors',
                      location.pathname === l.to && 'text-primary bg-primary/5'
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary p-2"
        >
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
            className="lg:hidden overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-md"
          >
            <div className="max-h-[80vh] overflow-y-auto py-4 px-4 space-y-4">
              {navGroups.map((g) => (
                <div key={g.label}>
                  <div className="text-xs font-orbitron text-muted-foreground mb-2">{g.label}</div>
                  <div className="space-y-1">
                    {g.links.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block px-3 py-2 text-sm font-mono hover:text-primary transition-colors',
                          location.pathname === l.to && 'text-primary neon-text-cyan'
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
