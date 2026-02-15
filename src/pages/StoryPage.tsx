import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const storyParagraphs = [
  'Devflex-Ai is not a username. It is an arcade cabinet plugged straight into the future.',
  'Born from late-night builds, broken terminals, and curiosity-driven chaos, this profile represents a developer who treats code like a living system.',
  'Every repository here is a playable level. Every bug is a boss fight. Every shipped feature is a high score burned into silicon.',
];

const howIBuild = [
  'I start with a constraint. Small screen. Slow machine. No internet. If it works there, it works everywhere.',
  'I prototype in ugly forms first. If the idea survives without polish, it deserves polish.',
  'I favor readable systems over clever ones. I prefer boring infrastructure and interesting interfaces.',
  'I refactor early and often. I delete more code than I keep.',
  'Every project answers one question: Does this make building feel better?',
];

const StoryPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={600} color="#00FFFF" size={0.01} spread={22} speed={0.12} />
        <FloatingGeometry position={[0, 0, -3]} geometry="octahedron" color="#00FFFF" size={2} speed={0.15} distort={0.2} />
        <FloatingGeometry position={[-4, 2, -5]} geometry="box" color="#FF00FF" size={0.5} speed={0.6} />
        <FloatingGeometry position={[4, -2, -4]} geometry="torus" color="#FF00FF" size={0.4} speed={0.8} />
      </SceneWrapper>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">🕹️ LOADING STORY...</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
            The <span className="text-primary neon-text-cyan">DevFlex-AI</span> Story
          </h1>
        </motion.div>

        <div className="space-y-6 mb-16">
          {storyParagraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.3, duration: 0.6 }}
            >
              <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
                <p className="font-mono text-sm md:text-base text-foreground leading-relaxed">{p}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="font-orbitron text-xl text-secondary neon-text-magenta mb-6">How I Build Software</h2>
          <div className="space-y-4">
            {howIBuild.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.2 }}
                className="flex gap-3 items-start"
              >
                <span className="text-primary font-pixel text-xs mt-1">{'>'}</span>
                <p className="font-mono text-sm text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryPage;
