import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Vortex AI Chat',
    desc: 'Neon-chaotic GPT + Gemini chat UI',
    repo: 'https://github.com/devflex-ai/vortex-ai-chat',
    link: '/projects/vortex',
    color: 'cyan' as const,
  },
  {
    name: 'CodingIT',
    desc: 'Local AI app builder — open-source, fast, private',
    repo: 'https://github.com/devflex-ai/codingit',
    link: '/projects/codingit',
    color: 'magenta' as const,
  },
  {
    name: 'Gemini Next Chat',
    desc: 'Self-host your own Gemini chatbot',
    repo: 'https://github.com/devflex-ai/gemini-next-chat',
    link: '/projects/gemini',
    color: 'cyan' as const,
  },
  {
    name: 'Lobe Chat',
    desc: 'Modular multi-AI chatbot (OpenAI, Claude, Gemini…)',
    repo: 'https://github.com/devflex-ai/lobe-chat',
    link: '/projects/lobe',
    color: 'magenta' as const,
  },
  {
    name: 'Stirling-PDF',
    desc: 'Java PDF toolkit for merging, splitting, and more',
    repo: 'https://github.com/devflex-ai/stirling-pdf',
    link: '/projects/stirling',
    color: 'cyan' as const,
  },
];

const ProjectsOverviewPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField count={500} color="#00FFFF" size={0.012} spread={20} speed={0.1} />
        <ParticleField count={200} color="#FF00FF" size={0.008} spread={15} speed={0.15} />
        {projects.map((_, i) => {
          const angle = (i / projects.length) * Math.PI * 2;
          return (
            <FloatingGeometry
              key={i}
              position={[Math.cos(angle) * 4, Math.sin(angle) * 2, -3]}
              geometry="octahedron"
              color={i % 2 === 0 ? '#00FFFF' : '#FF00FF'}
              size={0.4}
              speed={0.3 + i * 0.1}
            />
          );
        })}
      </SceneWrapper>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">⭐ HIGH SCORES</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
            Featured <span className="text-primary neon-text-cyan">Projects</span>
          </h1>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
            >
              <NeonCard color={project.color} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-orbitron font-bold text-lg text-foreground mb-1">{project.name}</h2>
                  <p className="font-mono text-sm text-muted-foreground">{project.desc}</p>
                </div>
                <div className="flex gap-3">
                  <Link to={project.link} className="font-pixel text-xs text-primary hover:neon-text-cyan transition-all px-4 py-2 border border-primary/30 hover:border-primary">
                    DEEP DIVE →
                  </Link>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverviewPage;
