import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const values = [
  'Clear purpose',
  'Fast startup',
  'Simple install',
  'Readable README',
  'Real screenshots',
  'Honest limitations',
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
      <ParticleField count={300} color="#3b82f6" size={0.008} spread={18} speed={0.06} />
      <FloatingGeometry position={[0, 0, -5]} geometry="sphere" color="#3b82f6" size={1} speed={0.08} distort={0.2} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Signal Over Noise</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          Philosophy & <span className="gradient-text">Values</span>
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <NeonCard color="cyan">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">What I Value</h2>
          <ul className="space-y-3">
            {values.map((v, i) => (
              <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i }} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {v}
              </motion.li>
            ))}
          </ul>
        </NeonCard>

        <NeonCard color="magenta">
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">What I Avoid</h2>
          <ul className="space-y-3">
            {avoids.map((a, i) => (
              <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i }} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                {a}
              </motion.li>
            ))}
          </ul>
        </NeonCard>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <NeonCard color="cyan" className="text-center py-10">
          <h2 className="font-display font-semibold text-lg text-foreground mb-8">The Loop</h2>
          <div className="space-y-2">
            {longForm.map((l, i) => (
              <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.15 }} className="text-sm text-muted-foreground">
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
