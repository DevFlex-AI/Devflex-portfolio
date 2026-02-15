import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const principles = [
  { title: 'Build locally first', desc: 'If it works offline, it works everywhere.' },
  { title: 'Ship fast, refine later', desc: 'Speed beats perfection. Iteration beats planning.' },
  { title: 'Own your stack', desc: 'Dependency is debt. Autonomy is wealth.' },
  { title: 'UI is a feature', desc: 'Interfaces are products, not afterthoughts.' },
  { title: 'Performance is design', desc: 'Latency is a design bug, not a tradeoff.' },
  { title: 'AI is a collaborator', desc: 'Not a crutch. A force multiplier.' },
];

const PrinciplesPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={400} color="#00FFFF" size={0.01} spread={20} speed={0.1} />
      {principles.map((_, i) => {
        const angle = (i / principles.length) * Math.PI * 2;
        return (
          <FloatingGeometry
            key={i}
            position={[Math.cos(angle) * 3, Math.sin(angle) * 2, -3]}
            geometry="octahedron"
            color={i % 2 === 0 ? '#00FFFF' : '#FF00FF'}
            size={0.3}
            speed={0.3 + i * 0.05}
          />
        );
      })}
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🧩 CORE VALUES</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
          Development <span className="text-primary neon-text-cyan">Principles</span>
        </h1>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 * i }}>
            <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'} className="h-full">
              <div className="font-pixel text-xs text-primary mb-2">0{i + 1}</div>
              <h3 className="font-orbitron font-bold text-foreground mb-2">{p.title}</h3>
              <p className="font-mono text-sm text-muted-foreground">{p.desc}</p>
            </NeonCard>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default PrinciplesPage;
