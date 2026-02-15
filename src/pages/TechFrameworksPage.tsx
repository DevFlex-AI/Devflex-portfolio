import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const frameworks = [
  'React', 'Vue', 'Angular', 'Next.js', 'Node.js', 'Express',
  'Django', 'Flask', 'TailwindCSS', 'Bootstrap', 'Material-UI', 'Laravel',
  'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform', 'Ansible', 'Bun',
];

const TechFrameworksPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={400} color="#FF00FF" size={0.012} spread={18} speed={0.12} />
        <FloatingGeometry position={[0, 0, -3]} geometry="sphere" color="#00FFFF" size={1.5} speed={0.2} distort={0.3} />
      </SceneWrapper>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-pixel text-xs text-secondary neon-text-magenta tracking-widest">🔧 ARSENAL</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
            Frameworks & <span className="text-secondary neon-text-magenta">Tools</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {frameworks.map((fw, i) => (
            <motion.div
              key={fw}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <NeonCard color={i % 3 === 0 ? 'magenta' : 'cyan'} className="text-center py-4">
                <p className="font-mono text-xs font-bold text-foreground">{fw}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFrameworksPage;
