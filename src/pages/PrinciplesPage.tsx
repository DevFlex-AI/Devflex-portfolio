import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const principles = [
  { title: 'Build locally first', desc: 'If it works offline, it works everywhere. Start with the hardest constraint.' },
  { title: 'Ship fast, refine later', desc: 'Speed beats perfection. Iteration beats planning. Get it in front of users.' },
  { title: 'Own your stack', desc: 'Dependency is debt. Autonomy is wealth. Control your critical path.' },
  { title: 'UI is a feature', desc: 'Interfaces are products, not afterthoughts. Design is engineering.' },
  { title: 'Performance is design', desc: 'Latency is a design bug. Every millisecond matters to the user experience.' },
  { title: 'AI is a collaborator', desc: 'Not a crutch. A force multiplier that amplifies human judgment.' },
];

const PrinciplesPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
      <ParticleField count={300} color="#3b82f6" size={0.008} spread={20} speed={0.06} />
      {principles.map((_, i) => {
        const angle = (i / principles.length) * Math.PI * 2;
        return (
          <FloatingGeometry
            key={i}
            position={[Math.cos(angle) * 4, Math.sin(angle) * 2.5, -5]}
            geometry="octahedron"
            color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
            size={0.25}
            speed={0.2 + i * 0.03}
          />
        );
      })}
    </SceneWrapper>
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Engineering</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          Development <span className="gradient-text">Principles</span>
        </h1>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4">
        {principles.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
            <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'} className="h-full">
              <div className="text-xs font-mono text-primary mb-3">0{i + 1}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </NeonCard>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default PrinciplesPage;
