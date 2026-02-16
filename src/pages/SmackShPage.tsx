import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const manifesto = [
  'It exists to reduce friction between an idea and a working system.',
  'It rejects bloated dashboards, fake metrics, and hollow roadmaps.',
  'Tools should start fast, feel fast, and stay understandable.',
  'Ownership matters. Local-first matters.',
  'Being able to shut a laptop and still have your stack working matters.',
  'No dark patterns. No growth hacks. No artificial lock-in.',
  'Just sharp tools.',
];

const focusAreas = [
  'Local-first AI tooling',
  'Self-hostable platforms',
  'Developer autonomy',
  'Interfaces with personality',
  'Minimal cloud dependence',
];

const SmackShPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={400} color="#3b82f6" size={0.008} spread={22} speed={0.06} />
      <FloatingGeometry position={[0, 0, -5]} geometry="icosahedron" color="#3b82f6" size={1.2} speed={0.08} distort={0.1} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Organization</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3 tracking-tight">
          <span className="gradient-text">SMACK-SH</span>
        </h1>
        <p className="text-lg text-muted-foreground">A creative engineering collective. Not a company pitch — a stance.</p>
      </motion.div>

      <div className="space-y-3 mb-12">
        {manifesto.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08 }}>
            <div className="flex gap-4 items-start glass rounded-lg px-5 py-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{line}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <NeonCard color="cyan">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {focusAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </NeonCard>
      </motion.div>
    </div>
  </div>
);

export default SmackShPage;
