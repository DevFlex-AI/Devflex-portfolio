import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';

const mantras = [
  'INSERT COIN',
  'PRESS START',
  'WRITE CODE',
  'SHIP FEATURE',
  'DEFEAT BUG',
  'SAVE PROGRESS',
  'REPEAT',
];

const commitments = [
  'Retro is not a filter.',
  'It is pixel certainty.',
  'Hard edges.',
  'Clear affordances.',
  'Modern tools wrapped in familiar shapes feel trustworthy.',
];

const RetroMantrasPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={800} color="#00FFFF" size={0.015} spread={25} speed={0.15} />
      <ParticleField count={400} color="#FF00FF" size={0.01} spread={20} speed={0.1} />
      {mantras.map((_, i) => (
        <FloatingGeometry key={i} position={[(i - 3) * 1.5, Math.sin(i * 0.8) * 2, -4]} geometry="box" color={i % 2 === 0 ? '#00FFFF' : '#FF00FF'} size={0.25} speed={0.5 + i * 0.05} />
      ))}
    </SceneWrapper>
    <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🎮 ARCADE MODE</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-16">
          Retro <span className="text-primary neon-text-cyan">Mantras</span>
        </h1>
      </motion.div>

      <div className="space-y-4 mb-16">
        {mantras.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * i, type: 'spring', stiffness: 200 }}
          >
            <span className={`font-pixel text-lg md:text-2xl ${i % 2 === 0 ? 'text-primary neon-text-cyan' : 'text-secondary neon-text-magenta'}`}>
              {m}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <h2 className="font-orbitron text-lg text-secondary neon-text-magenta mb-6">Aesthetic Commitments</h2>
        <div className="space-y-3">
          {commitments.map((c, i) => (
            <p key={i} className="font-mono text-sm text-muted-foreground">{c}</p>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default RetroMantrasPage;
