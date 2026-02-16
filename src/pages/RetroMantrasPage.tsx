import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

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
  { title: 'Pixel Certainty', desc: 'Every element has a clear, defined boundary.' },
  { title: 'Hard Edges', desc: 'Crisp interfaces that communicate with precision.' },
  { title: 'Clear Affordances', desc: 'Users should never guess what\'s interactive.' },
  { title: 'Trustworthy Design', desc: 'Modern tools wrapped in familiar shapes feel reliable.' },
];

const RetroMantrasPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={500} color="#3b82f6" size={0.008} spread={25} speed={0.08} />
      <ParticleField count={200} color="#8b5cf6" size={0.006} spread={20} speed={0.06} />
      {mantras.map((_, i) => (
        <FloatingGeometry key={i} position={[(i - 3) * 1.5, Math.sin(i * 0.8) * 2, -6]} geometry="box" color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'} size={0.2} speed={0.3 + i * 0.03} />
      ))}
    </SceneWrapper>
    <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Mindset</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          Code <span className="gradient-text">Mantras</span>
        </h1>
      </motion.div>

      <div className="space-y-4 mb-16">
        {mantras.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 * i, type: 'spring', stiffness: 200 }}
          >
            <span className={`font-display font-bold text-xl md:text-3xl tracking-wide ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
              {m}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <h2 className="font-display font-semibold text-lg text-foreground mb-6">Aesthetic Commitments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {commitments.map((c, i) => (
            <NeonCard key={i} color={i % 2 === 0 ? 'cyan' : 'magenta'}>
              <h3 className="font-display font-semibold text-sm text-foreground mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </NeonCard>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default RetroMantrasPage;
