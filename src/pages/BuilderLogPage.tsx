import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import NeonCard from '@/components/ui/NeonCard';

const logs = [
  { day: 14, note: 'Cut build time in half by deleting features.' },
  { day: 27, note: 'UI felt wrong until one color was removed.' },
  { day: 41, note: 'Best refactor was renaming three files.' },
  { day: 63, note: 'Stopped chasing abstractions. Shipped instead.' },
];

const iterations = [
  { version: '0.1', note: 'Everything worked. Nothing mattered.' },
  { version: '0.2', note: 'Removed half the features.' },
  { version: '0.3', note: 'Performance doubled.' },
  { version: '1.0', note: 'Only what survived friction stayed.' },
];

const BuilderLogPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 6], fov: 60 }}>
      <ParticleField count={300} color="#00FFFF" size={0.01} spread={15} speed={0.08} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">📓 BUILDER LOG</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
          Builder <span className="text-primary neon-text-cyan">Log</span>
        </h1>
      </motion.div>

      <div className="relative border-l-2 border-primary/30 pl-8 space-y-8 mb-16">
        {logs.map((log, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 * i }} className="relative">
            <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-primary pulse-glow" />
            <NeonCard color="cyan">
              <div className="font-pixel text-xs text-primary mb-2">DAY {log.day}</div>
              <p className="font-mono text-sm text-foreground">{log.note}</p>
            </NeonCard>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <h2 className="font-orbitron text-xl text-secondary neon-text-magenta mb-6">Iteration Logs</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {iterations.map((it, i) => (
            <NeonCard key={i} color="magenta">
              <div className="font-pixel text-xs text-secondary mb-2">v{it.version}</div>
              <p className="font-mono text-sm text-foreground">{it.note}</p>
            </NeonCard>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default BuilderLogPage;
