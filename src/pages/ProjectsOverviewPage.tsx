import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Vortex AI Chat',
    desc: 'An experiment in expressive interfaces. Multiple AI models, one conversation space, fast feedback loops.',
    tags: ['GPT', 'Gemini', 'Animation', 'Real-time'],
    repo: 'https://github.com/devflex-ai/vortex-ai-chat',
    link: '/projects/vortex',
  },
  {
    name: 'CodingIT',
    desc: 'Local AI app builder — open-source, fast, private. Respects the filesystem. Produces artifacts you own.',
    tags: ['Local-first', 'Open Source', 'CLI', 'Privacy'],
    repo: 'https://github.com/devflex-ai/codingit',
    link: '/projects/codingit',
  },
  {
    name: 'Gemini Next Chat',
    desc: 'Self-host your own Gemini chatbot with clean separation between model logic and UI.',
    tags: ['Gemini', 'Self-hosted', 'Theming'],
    repo: 'https://github.com/devflex-ai/gemini-next-chat',
    link: '/projects/gemini',
  },
  {
    name: 'Lobe Chat',
    desc: 'Modular multi-AI chatbot supporting OpenAI, Claude, Gemini — with agent memory layers.',
    tags: ['Multi-model', 'Orchestration', 'Plugins'],
    repo: 'https://github.com/devflex-ai/lobe-chat',
    link: '/projects/lobe',
  },
  {
    name: 'Stirling-PDF',
    desc: 'Java PDF toolkit for merging, splitting, converting. Extended with AI document analysis.',
    tags: ['Java', 'PDF', 'OCR', 'Automation'],
    repo: 'https://github.com/devflex-ai/stirling-pdf',
    link: '/projects/stirling',
  },
];

const ProjectsOverviewPage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 8], fov: 60 }}>
        <ParticleField count={400} color="#3b82f6" size={0.008} spread={20} speed={0.06} />
        <ParticleField count={150} color="#8b5cf6" size={0.006} spread={15} speed={0.08} />
        {projects.map((_, i) => {
          const angle = (i / projects.length) * Math.PI * 2;
          return (
            <FloatingGeometry
              key={i}
              position={[Math.cos(angle) * 5, Math.sin(angle) * 2.5, -5]}
              geometry="octahedron"
              color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
              size={0.3}
              speed={0.2 + i * 0.05}
            />
          );
        })}
      </SceneWrapper>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Projects</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">Open-source tools built with intent — each solving a real problem with precision engineering.</p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="glass rounded-xl p-6 hover:border-primary/20 transition-all group">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Link
                      to={project.link}
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverviewPage;
