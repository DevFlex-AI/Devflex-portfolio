import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';
import devflexAvatar from '@/assets/devflex-avatar.png';

const aboutPoints = [
  { title: 'AI-Driven Tools', desc: 'I build AI-driven tools that feel alive — systems that explain themselves, expose latency, and treat UI motion as information.' },
  { title: 'Interfaces with Personality', desc: 'Every interface I create has an opinion. Retro constraints breed creativity — pixel grids, contrast-heavy systems, motion with intent.' },
  { title: 'Craft Over Trends', desc: 'My code runs on precision, coffee, and curiosity. I delete more code than I keep. Every project answers: does this make building feel better?' },
  { title: 'Open Source Philosophy', desc: 'Developer autonomy matters. Local-first beats cloud-first. If it works offline, it works everywhere.' },
];

const principles = [
  'Build something small every day',
  'Read code more than tweets',
  'Trust measurements, not vibes',
  'Sleep before rewriting everything',
  'Automate repeatable pain',
  'Name things carefully',
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 6], fov: 60 }}>
        <ParticleField count={300} color="#8b5cf6" size={0.008} spread={18} speed={0.06} />
        <FloatingGeometry position={[4, 1, -4]} geometry="sphere" color="#3b82f6" size={0.8} speed={0.2} distort={0.3} />
        <FloatingGeometry position={[-4, -1, -5]} geometry="torus" color="#8b5cf6" size={0.4} speed={0.3} />
      </SceneWrapper>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 tracking-tight">
            Engineering software that{' '}
            <span className="gradient-text">makes a difference</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            AI Engineer and Full-Stack Builder focused on developer tooling, local-first architecture, and interfaces that respect the user.
          </p>
        </motion.div>

        {/* Avatar + bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 items-start mb-16"
        >
          <img
            src={devflexAvatar}
            alt="DevFlex-AI"
            className="w-32 h-32 rounded-2xl object-cover ring-1 ring-border glow-primary flex-shrink-0"
          />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I build AI-driven tools that feel alive. My code runs on neon, coffee, and curiosity. Retro arcade aesthetic meets modern engineering — that's my vibe.</p>
            <p>Every repository is a playable level. Every bug is a boss fight. Every shipped feature is a high score burned into silicon.</p>
          </div>
        </motion.div>

        {/* Core values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {aboutPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
                <h3 className="font-display font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* Operating Principles */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <NeonCard color="cyan">
            <h2 className="font-display font-semibold text-lg text-foreground mb-4">Daily Operating Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {principles.map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </NeonCard>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
