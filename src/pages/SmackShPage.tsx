import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const manifesto = [
  'smack-sh is not a company pitch. smack-sh is a stance.',
  'It exists to reduce friction between an idea and a working system.',
  'It rejects bloated dashboards, fake metrics, and hollow roadmaps.',
  'Tools should start fast, feel fast, and stay understandable.',
  'Ownership matters. Local-first matters.',
  'Being able to shut a laptop and still have your stack working matters.',
  'smack-sh builds software that assumes intelligence on the other side of the screen.',
  'No dark patterns. No growth hacks. No artificial lock-in.',
  'Just sharp tools.',
];

const SmackShPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={600} color="#00FFFF" size={0.01} spread={22} speed={0.08} />
      <FloatingGeometry position={[0, 0, -4]} geometry="icosahedron" color="#00FFFF" size={2} speed={0.1} distort={0.15} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🏢 ORGANIZATION</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4">
          <span className="text-primary neon-text-cyan">SMACK-SH</span>
        </h1>
        <p className="font-mono text-sm text-muted-foreground mb-12">A creative engineering collective.</p>
      </motion.div>

      <div className="space-y-3">
        {manifesto.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15 }}>
            <div className="flex gap-3 items-start py-2 border-b border-primary/10">
              <span className="text-primary font-pixel text-xs mt-1">▸</span>
              <p className="font-mono text-sm text-foreground">{line}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-12">
        <NeonCard color="cyan">
          <h2 className="font-orbitron text-lg text-primary mb-4">Focus Areas</h2>
          <ul className="space-y-2 font-mono text-sm text-muted-foreground">
            <li>→ Local-first AI tooling</li>
            <li>→ Self-hostable platforms</li>
            <li>→ Developer autonomy</li>
            <li>→ Interfaces with personality</li>
            <li>→ Minimal cloud dependence</li>
          </ul>
        </NeonCard>
      </motion.div>
    </div>
  </div>
);

export default SmackShPage;
