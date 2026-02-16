import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

const storyParagraphs = [
  'DevFlex-AI is not just a username — it represents a developer who treats code like a living system.',
  'Born from late-night builds, broken terminals, and curiosity-driven exploration, this profile represents years of relentless iteration.',
  'Every repository is a real project solving a real problem. Every feature shipped is tested under constraints. Every tool built starts with the question: does this make building feel better?',
];

const howIBuild = [
  'I start with a constraint — small screen, slow machine, no internet. If it works there, it works everywhere.',
  'I prototype in ugly forms first. If the idea survives without polish, it deserves polish.',
  'I favor readable systems over clever ones. Boring infrastructure, interesting interfaces.',
  'I refactor early and often. I delete more code than I keep.',
  'Every project answers one question: Does this make building feel better?',
];

const StoryPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={400} color="#3b82f6" size={0.008} spread={22} speed={0.06} />
        <FloatingGeometry position={[0, 0, -5]} geometry="octahedron" color="#3b82f6" size={1.2} speed={0.1} distort={0.15} />
        <FloatingGeometry position={[-4, 2, -6]} geometry="box" color="#8b5cf6" size={0.3} speed={0.4} />
      </SceneWrapper>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Story</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 tracking-tight">
            The <span className="gradient-text">DevFlex-AI</span> Story
          </h1>
        </motion.div>

        <div className="space-y-4 mb-16">
          {storyParagraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
                <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="font-display font-semibold text-xl text-foreground mb-6">How I Build Software</h2>
          <div className="space-y-3">
            {howIBuild.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex gap-3 items-start glass rounded-lg px-5 py-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryPage;
