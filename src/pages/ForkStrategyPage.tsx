import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const forks = [
  {
    name: 'Open Interpreter',
    why: 'CLI-first thinking. Local execution. Tool-use philosophy instead of chat toys.',
    goals: ['Add a retro CLI skin', 'Strip UX bloat', 'Focus on speed + offline workflows'],
  },
  {
    name: 'Continue (AI Coding Assistant)',
    why: 'Developer-facing AI. IDE-native. Productivity over novelty.',
    goals: ['Tighten scope', 'Improve local inference support', 'Add opinionated presets'],
  },
  {
    name: 'LocalAI',
    why: 'Open weights. Self-hosted. Performance sensitive.',
    goals: ['Preset configs', 'Hardware profiles', 'Clean docs'],
  },
  {
    name: 'Stirling-PDF Extensions',
    why: 'Already showcased. Go one layer deeper.',
    goals: ['Automation pipelines', 'CLI wrapper', 'Batch workflows'],
  },
];

const ForkStrategyPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={500} color="#FF00FF" size={0.01} spread={20} speed={0.1} />
      {forks.map((_, i) => (
        <FloatingGeometry key={i} position={[(i - 1.5) * 2.5, Math.sin(i) * 1.5, -3]} geometry="icosahedron" color={i % 2 === 0 ? '#00FFFF' : '#FF00FF'} size={0.5} speed={0.3} />
      ))}
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-secondary neon-text-magenta tracking-widest">🧠 STRATEGY</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4">
          Fork <span className="text-secondary neon-text-magenta">Strategy</span>
        </h1>
        <p className="font-mono text-sm text-muted-foreground mb-12">What to Fork Next — Strategic, Not Random.</p>
      </motion.div>
      <div className="space-y-6">
        {forks.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 * i }}>
            <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
              <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">{f.name}</h3>
              <p className="font-mono text-sm text-muted-foreground mb-4">{f.why}</p>
              <div className="space-y-1">
                {f.goals.map((g, j) => (
                  <div key={j} className="flex gap-2 items-start">
                    <span className="text-primary text-xs mt-0.5">→</span>
                    <span className="font-mono text-xs text-muted-foreground">{g}</span>
                  </div>
                ))}
              </div>
            </NeonCard>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ForkStrategyPage;
