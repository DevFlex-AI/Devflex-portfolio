import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';

const languages = [
  { name: 'Python', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'Java', level: 'Advanced' },
  { name: 'C++', level: 'Advanced' },
  { name: 'C#', level: 'Advanced' },
  { name: 'Ruby', level: 'Proficient' },
  { name: 'PHP', level: 'Proficient' },
  { name: 'Go', level: 'Advanced' },
  { name: 'Rust', level: 'Proficient' },
  { name: 'Kotlin', level: 'Proficient' },
  { name: 'Swift', level: 'Proficient' },
  { name: 'Dart', level: 'Proficient' },
  { name: 'R', level: 'Familiar' },
  { name: 'Haskell', level: 'Familiar' },
];

const levelColor: Record<string, string> = {
  Expert: 'text-primary',
  Advanced: 'text-secondary',
  Proficient: 'text-muted-foreground',
  Familiar: 'text-muted-foreground/60',
};

const TechLanguagesPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField count={400} color="#3b82f6" size={0.008} spread={20} speed={0.06} />
        {[0, 1, 2, 3].map(i => {
          const angle = (i / 4) * Math.PI * 2;
          return (
            <FloatingGeometry
              key={i}
              position={[Math.cos(angle) * 4, Math.sin(angle) * 3, -5]}
              geometry={i % 2 === 0 ? 'octahedron' : 'icosahedron'}
              color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
              size={0.3}
              speed={0.2 + i * 0.05}
            />
          );
        })}
      </SceneWrapper>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Skills</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
            Programming <span className="gradient-text">Languages</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">15+ languages spanning systems programming, web development, data science, and mobile.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <div className="glass rounded-xl px-5 py-4 flex items-center justify-between hover:border-primary/20 transition-colors">
                <span className="font-display font-medium text-sm text-foreground">{lang.name}</span>
                <span className={`text-xs font-medium ${levelColor[lang.level] || 'text-muted-foreground'}`}>{lang.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechLanguagesPage;
