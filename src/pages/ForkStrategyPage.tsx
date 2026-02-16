import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const forks = [
  {
    name: 'Open Interpreter',
    why: 'CLI-first thinking. Local execution. Tool-use philosophy — a serious sibling to existing chat projects.',
    goals: ['Retro CLI skin', 'Strip UX bloat', 'Speed + offline workflows'],
  },
  {
    name: 'Continue (AI Coding Assistant)',
    why: 'Developer-facing AI. IDE-native. Productivity over novelty — pairs perfectly with CodingIT.',
    goals: ['Tighten scope', 'Local inference support', 'Opinionated presets'],
  },
  {
    name: 'LocalAI',
    why: 'Open weights. Self-hosted. Performance sensitive — connects all chat tools to a real backend.',
    goals: ['Preset configs', 'Hardware profiles', 'Clean documentation'],
  },
  {
    name: 'Stirling-PDF Extensions',
    why: 'Already showcased — going one layer deeper shows endurance, not experimentation.',
    goals: ['Automation pipelines', 'CLI wrapper', 'Batch workflows'],
  },
];

const ForkStrategyPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={300} color="#8b5cf6" size={0.008} spread={20} speed={0.06} />
      {forks.map((_, i) => (
        <FloatingGeometry key={i} position={[(i - 1.5) * 2.5, Math.sin(i) * 1.5, -5]} geometry="icosahedron" color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'} size={0.35} speed={0.2} />
      ))}
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-secondary mb-3 tracking-wide uppercase">Strategy</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3 tracking-tight">
          Fork <span className="gradient-text">Strategy</span>
        </h1>
        <p className="text-muted-foreground">Strategic, not random. Owning terrain that aligns with existing work and philosophy.</p>
      </motion.div>
      <div className="space-y-4">
        {forks.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
            <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{f.why}</p>
              <div className="flex flex-wrap gap-2">
                {f.goals.map((g, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{g}</span>
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
