import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const beliefs = [
  'Flat over deep.',
  'Explicit over implicit.',
  'Folders should explain themselves.',
  'Config should be boring.',
  'State should be visible.',
  'Side effects should be isolated.',
  'Logs should tell a story.',
  'Local-first beats cloud-first.',
  'CLI is not nostalgia, it is bandwidth.',
  'UI should feel immediate.',
  'Latency is a design bug.',
];

const ArchitecturePage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
      <ParticleField count={400} color="#00FFFF" size={0.01} spread={18} speed={0.1} />
      <FloatingGeometry position={[0, 0, -3]} geometry="box" color="#00FFFF" size={1.5} speed={0.15} distort={0.1} />
      <FloatingGeometry position={[3, 2, -4]} geometry="octahedron" color="#FF00FF" size={0.4} speed={0.5} />
      <FloatingGeometry position={[-3, -2, -4]} geometry="octahedron" color="#FF00FF" size={0.4} speed={0.6} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🔧 ARCHITECTURE</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
          Architecture <span className="text-primary neon-text-cyan">Preferences</span>
        </h1>
      </motion.div>
      <div className="space-y-3">
        {beliefs.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}>
            <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'} className="py-4">
              <p className="font-mono text-sm text-foreground">{b}</p>
            </NeonCard>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ArchitecturePage;
