import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import TypewriterText from '@/components/ui/TypewriterText';
import NeonCard from '@/components/ui/NeonCard';

const aboutPoints = [
  'I build AI-driven tools that feel alive.',
  'I make interfaces with personality.',
  'My code runs on neon, coffee, and curiosity.',
  'Retro arcade aesthetic + modern engineering = my vibe.',
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 6], fov: 60 }}>
        <ParticleField count={400} color="#FF00FF" size={0.012} spread={18} speed={0.1} />
        <FloatingGeometry position={[3, 1, -2]} geometry="sphere" color="#00FFFF" size={1.2} speed={0.3} distort={0.5} wireframe={false} />
        <FloatingGeometry position={[-3, -1, -3]} geometry="torus" color="#FF00FF" size={0.6} speed={0.5} />
      </SceneWrapper>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-xs text-secondary neon-text-magenta tracking-widest">🌀 PLAYER PROFILE</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-8">
            About <span className="text-primary neon-text-cyan">Me</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 neon-border-cyan rounded-lg pulse-glow" />
            <img
              src="/devflex_ai_avatar_optimized.png"
              alt="DevFlex-AI Avatar"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          {aboutPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            >
              <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
                <p className="font-mono text-sm md:text-base text-foreground">{point}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <NeonCard color="cyan" className="p-8">
            <h2 className="font-orbitron text-lg text-primary mb-4">Daily Operating Principles</h2>
            <ul className="space-y-2 text-sm font-mono text-muted-foreground">
              <li>→ Build something small every day.</li>
              <li>→ Read code more than tweets.</li>
              <li>→ Trust measurements, not vibes.</li>
              <li>→ Sleep before rewriting everything.</li>
              <li>→ Automate repeatable pain.</li>
              <li>→ Name things carefully.</li>
            </ul>
          </NeonCard>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
