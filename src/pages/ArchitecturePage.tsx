import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';

const beliefs = [
  { principle: 'Flat over deep', detail: 'Shallow hierarchies are easier to reason about and navigate.' },
  { principle: 'Explicit over implicit', detail: 'Code should declare its intent without requiring archaeology.' },
  { principle: 'Folders should explain themselves', detail: 'Directory structure is documentation.' },
  { principle: 'Config should be boring', detail: 'The less exciting your config, the more stable your system.' },
  { principle: 'State should be visible', detail: 'Hidden state is the source of most complex bugs.' },
  { principle: 'Side effects should be isolated', detail: 'Pure logic is testable logic.' },
  { principle: 'Logs should tell a story', detail: 'Good logging narrates what happened and why.' },
  { principle: 'Local-first beats cloud-first', detail: 'Build for the worst connection first.' },
  { principle: 'CLI is bandwidth', detail: 'Command lines are the fastest interface for power users.' },
  { principle: 'UI should feel immediate', detail: 'Perceived performance matters as much as real performance.' },
  { principle: 'Latency is a design bug', detail: 'Every delay is a decision to not prioritize the user.' },
];

const ArchitecturePage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
      <ParticleField count={300} color="#3b82f6" size={0.008} spread={18} speed={0.06} />
      <FloatingGeometry position={[0, 0, -5]} geometry="box" color="#3b82f6" size={1} speed={0.1} distort={0.08} />
      <FloatingGeometry position={[4, 2, -6]} geometry="octahedron" color="#8b5cf6" size={0.3} speed={0.3} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Architecture</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          Architecture <span className="gradient-text">Preferences</span>
        </h1>
        <p className="text-muted-foreground max-w-xl">Opinionated beliefs about how software should be structured — born from years of iteration.</p>
      </motion.div>
      <div className="space-y-3">
        {beliefs.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
            <div className="glass rounded-xl px-5 py-4 hover:border-primary/20 transition-colors">
              <div className="font-display font-semibold text-sm text-foreground mb-1">{b.principle}</div>
              <p className="text-xs text-muted-foreground">{b.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ArchitecturePage;
