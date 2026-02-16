import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Code2, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import devflexAvatar from '@/assets/devflex-avatar.png';

const highlights = [
  { icon: Code2, label: '15+ Languages', desc: 'Python, TypeScript, Rust, Go & more' },
  { icon: Cpu, label: 'AI Engineering', desc: 'Building intelligent tools that ship' },
  { icon: Layers, label: 'Full-Stack', desc: 'End-to-end product development' },
];

const HeroPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField count={600} color="#3b82f6" size={0.008} spread={25} speed={0.08} />
        <ParticleField count={200} color="#8b5cf6" size={0.006} spread={20} speed={0.06} />
        <FloatingGeometry position={[-5, 3, -6]} geometry="octahedron" color="#3b82f6" size={0.6} speed={0.3} />
        <FloatingGeometry position={[5, -2, -5]} geometry="torus" color="#8b5cf6" size={0.4} speed={0.4} />
        <FloatingGeometry position={[-3, -3, -7]} geometry="icosahedron" color="#3b82f6" size={0.3} speed={0.25} />
        <FloatingGeometry position={[4, 4, -8]} geometry="sphere" color="#8b5cf6" size={0.5} speed={0.2} distort={0.3} />
      </SceneWrapper>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <img
                src={devflexAvatar}
                alt="DevFlex-AI"
                className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover ring-2 ring-primary/20 glow-primary"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-subtle-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-4"
          >
            Hi, I'm <span className="gradient-text">DevFlex-AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            AI Engineer & Full-Stack Builder crafting intelligent tools with
            precision engineering and{' '}
            <span className="text-foreground">relentless attention to craft</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all glow-primary"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 font-medium text-foreground border border-border rounded-xl hover:bg-muted/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Link>
            <a
              href="https://github.com/devflex-ai"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass rounded-xl p-5 text-left hover:border-primary/20 transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <div className="font-display font-semibold text-sm text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
