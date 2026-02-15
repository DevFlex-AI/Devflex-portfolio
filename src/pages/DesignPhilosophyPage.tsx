import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const DesignPhilosophyPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
      <ParticleField count={400} color="#FF00FF" size={0.01} spread={18} speed={0.1} />
      <FloatingGeometry position={[3, 1, -2]} geometry="sphere" color="#FF00FF" size={0.8} speed={0.3} distort={0.5} wireframe={false} />
      <FloatingGeometry position={[-2, -1, -3]} geometry="octahedron" color="#00FFFF" size={0.6} speed={0.4} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-secondary neon-text-magenta tracking-widest">🎨 PHILOSOPHY</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-8">
          Design <span className="text-secondary neon-text-magenta">Philosophy</span>
        </h1>
      </motion.div>
      {[
        'Modern interfaces are too quiet. Devflex-Ai believes interfaces should talk back.',
        'Retro aesthetics are not nostalgia. They are constraints. Constraints breed creativity.',
        'Pixel grids, neon edges, contrast-heavy color systems, and motion with intent define every UI choice.',
        'If an interface feels boring, it is unfinished.',
      ].map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.2 }} className="mb-4">
          <NeonCard color={i % 2 === 0 ? 'magenta' : 'cyan'}>
            <p className="font-mono text-sm text-foreground leading-relaxed">{t}</p>
          </NeonCard>
        </motion.div>
      ))}
    </div>
  </div>
);

export default DesignPhilosophyPage;
