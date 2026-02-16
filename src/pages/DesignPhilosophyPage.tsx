import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const DesignPhilosophyPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
      <ParticleField count={300} color="#8b5cf6" size={0.008} spread={18} speed={0.06} />
      <FloatingGeometry position={[3, 1, -4]} geometry="sphere" color="#8b5cf6" size={0.6} speed={0.2} distort={0.3} />
      <FloatingGeometry position={[-3, -1, -5]} geometry="octahedron" color="#3b82f6" size={0.4} speed={0.3} />
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-secondary mb-3 tracking-wide uppercase">Philosophy</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          Design <span className="gradient-text">Philosophy</span>
        </h1>
      </motion.div>
      <div className="space-y-4">
        {[
          { title: 'Interfaces Should Talk Back', desc: 'Modern interfaces are too quiet. I believe every interaction should have clear, intentional feedback.' },
          { title: 'Constraints Breed Creativity', desc: 'Retro aesthetics enforce limits — limited palettes, clear contrast, obvious hierarchy. That clarity carries into code.' },
          { title: 'Motion with Intent', desc: 'Pixel grids, hard edges, contrast-heavy color systems — every UI choice serves a purpose.' },
          { title: 'Never Boring', desc: 'If an interface feels boring, it is unfinished. Design is the invisible force that makes technology feel human.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}>
            <NeonCard color={i % 2 === 0 ? 'magenta' : 'cyan'}>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </NeonCard>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default DesignPhilosophyPage;
