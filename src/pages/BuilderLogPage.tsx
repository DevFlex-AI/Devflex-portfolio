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
      <ParticleField count={200} color="#3b82f6" size={0.008} spread={15} speed={0.06} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Journal</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          Builder <span className="gradient-text">Log</span>
        </h1>
      </motion.div>

      <div className="relative border-l border-border pl-8 space-y-6 mb-16">
        {logs.map((log, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 * i }} className="relative">
            <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-primary/60 ring-4 ring-background" />
            <NeonCard color="cyan">
              <div className="text-xs font-mono text-primary mb-2">Day {log.day}</div>
              <p className="text-sm text-muted-foreground">{log.note}</p>
            </NeonCard>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <h2 className="font-display font-semibold text-xl text-foreground mb-6">Iteration Logs</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {iterations.map((it, i) => (
            <NeonCard key={i} color="magenta">
              <div className="text-xs font-mono text-secondary mb-2">v{it.version}</div>
              <p className="text-sm text-muted-foreground">{it.note}</p>
            </NeonCard>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default BuilderLogPage;
