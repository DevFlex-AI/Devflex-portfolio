import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';

const categories = [
  {
    title: 'Frontend',
    items: ['React', 'Vue', 'Angular', 'Next.js', 'TailwindCSS', 'Bootstrap', 'Material-UI'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Django', 'Flask', 'Laravel', 'Bun'],
  },
  {
    title: 'DevOps & Infrastructure',
    items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform', 'Ansible'],
  },
];

const TechFrameworksPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={300} color="#8b5cf6" size={0.008} spread={18} speed={0.06} />
        <FloatingGeometry position={[0, 0, -5]} geometry="sphere" color="#3b82f6" size={1} speed={0.15} distort={0.2} />
      </SceneWrapper>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-sm font-medium text-secondary mb-3 tracking-wide uppercase">Tech Stack</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
            Frameworks & <span className="gradient-text">Tools</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">Full-stack proficiency across modern frameworks, cloud infrastructure, and CI/CD tooling.</p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * ci }}>
              <h2 className="font-display font-semibold text-foreground mb-4">{cat.title}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cat.items.map((item, i) => (
                  <div key={item} className="glass rounded-xl px-4 py-3 text-center hover:border-primary/20 transition-colors">
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFrameworksPage;
