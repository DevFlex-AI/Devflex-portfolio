import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import TypewriterText from '@/components/ui/TypewriterText';

const HeroPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField count={800} color="#00FFFF" size={0.015} spread={25} speed={0.15} />
        <ParticleField count={300} color="#FF00FF" size={0.01} spread={20} speed={0.1} />
        <FloatingGeometry position={[-4, 2, -3]} geometry="octahedron" color="#00FFFF" size={0.8} speed={0.5} />
        <FloatingGeometry position={[4, -1, -2]} geometry="torus" color="#FF00FF" size={0.6} speed={0.7} />
        <FloatingGeometry position={[-3, -2, -4]} geometry="icosahedron" color="#00FFFF" size={0.5} speed={0.4} />
        <FloatingGeometry position={[3, 3, -5]} geometry="box" color="#FF00FF" size={0.4} speed={0.6} />
        <FloatingGeometry position={[0, 0, -2]} geometry="icosahedron" color="#00FFFF" size={1.5} speed={0.2} distort={0.4} />
      </SceneWrapper>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-6">
            <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">
              ⚠️ ARCADE MODE: ON ⚠️
            </span>
          </div>

          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-4 text-foreground">
            <span className="text-primary neon-text-cyan">DEVFLEX</span>
            <span className="text-secondary neon-text-magenta">-AI</span>
          </h1>

          <div className="h-8 md:h-10 mb-8">
            <TypewriterText
              text="AI Engineer • Full-Stack Builder • Retro Vibes Enthusiast"
              speed={40}
              delay={800}
              className="text-sm md:text-lg text-muted-foreground font-mono"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="space-y-6"
        >
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 border-2 border-primary font-pixel text-xs text-primary pulse-glow hover:bg-primary/10 transition-colors tracking-widest"
          >
            INSERT COIN
          </motion.a>

          <div className="flex items-center justify-center gap-8 text-xs font-mono text-muted-foreground">
            <span>DEV MODE: <span className="text-neon-green">ALWAYS ON</span></span>
            <span>BUGS: <span className="text-destructive">0</span></span>
            <span>COFFEE: <span className="text-neon-yellow">∞</span></span>
          </div>
        </motion.div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
      </div>
    </div>
  );
};

export default HeroPage;
