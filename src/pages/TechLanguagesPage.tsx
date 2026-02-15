import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const languages = [
  { name: 'Python', color: '#3776AB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Java', color: '#007396' },
  { name: 'C++', color: '#00599C' },
  { name: 'C#', color: '#239120' },
  { name: 'Ruby', color: '#CC342D' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Rust', color: '#DEA584' },
  { name: 'Kotlin', color: '#0095D5' },
  { name: 'Swift', color: '#FA7343' },
  { name: 'Dart', color: '#0175C2' },
  { name: 'R', color: '#276DC3' },
  { name: 'Haskell', color: '#5e5086' },
];

const TechLanguagesPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField count={500} color="#00FFFF" size={0.01} spread={20} speed={0.1} />
        {languages.slice(0, 6).map((lang, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <FloatingGeometry
              key={lang.name}
              position={[Math.cos(angle) * 3, Math.sin(angle) * 3, -2]}
              geometry={i % 2 === 0 ? 'octahedron' : 'icosahedron'}
              color={lang.color}
              size={0.3}
              speed={0.3 + i * 0.1}
            />
          );
        })}
      </SceneWrapper>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🧪 SKILL TREE</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
            Languages <span className="text-primary neon-text-cyan">Unlocked</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
            >
              <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'} className="text-center py-6">
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: lang.color, boxShadow: `0 0 10px ${lang.color}` }}
                />
                <p className="font-orbitron text-xs font-bold text-foreground">{lang.name}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechLanguagesPage;
