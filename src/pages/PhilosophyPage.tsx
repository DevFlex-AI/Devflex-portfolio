import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const values = [
  'Clear purpose.',
  'Fast startup.',
  'Simple install.',
  'Readable README.',
  'Real screenshots.',
  'Honest limitations.',
];

const longForm = [
  'Software is a craft.',
  'Craft improves with repetition.',
  'Repetition requires energy.',
  'Energy comes from enjoyment.',
  'Enjoyment comes from agency.',
  'Agency comes from ownership.',
  'This loop matters more than trends.',
];

const avoids = [
  'Web3 theatrics',
  'AI wrappers with no opinion',
  'Over-designed dashboards',
  'Growth hacks',
  'Fake roadmaps',
];

const PhilosophyPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
      <ParticleField count={400} color="#00FFFF" size={0.01} spread={18} speed={0.08} />
      <FloatingGeometry position={[0, 0, -4]} geometry="sphere" color="#00FFFF" size={1.5} speed={0.1} distort={0.3} wireframe={false} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🧭 SIGNAL OVER NOISE</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
          Philosophy & <span className="text-primary neon-text-cyan">Values</span>
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <NeonCard color="cyan">
          <h2 className="font-orbitron text-lg text-primary mb-4">Things I Value</h2>
          <ul className="space-y-2">
            {values.map((v, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="font-mono text-sm text-foreground flex gap-2">
                <span className="text-primary">▸</span> {v}
              </motion.li>
            ))}
          </ul>
        </NeonCard>

        <NeonCard color="magenta">
          <h2 className="font-orbitron text-lg text-secondary mb-4">Things I Avoid</h2>
          <ul className="space-y-2">
            {avoids.map((a, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="font-mono text-sm text-foreground flex gap-2">
                <span className="text-secondary">✕</span> {a}
              </motion.li>
            ))}
          </ul>
        </NeonCard>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <NeonCard color="cyan" className="text-center py-8">
          <h2 className="font-orbitron text-lg text-primary mb-6">The Loop</h2>
          <div className="space-y-2">
            {longForm.map((l, i) => (
              <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.2 }} className="font-mono text-sm text-muted-foreground">
                {l}
              </motion.p>
            ))}
          </div>
        </NeonCard>
      </motion.div>
    </div>
  </div>
);

export default PhilosophyPage;
