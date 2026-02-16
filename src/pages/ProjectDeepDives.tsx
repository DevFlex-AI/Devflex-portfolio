import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

interface ProjectDeepDiveProps {
  title: string;
  tagline: string;
  description: string[];
  forkGoals: string[];
  tags: string[];
  repoUrl: string;
}

const ProjectDeepDive = ({ title, tagline, description, forkGoals, tags, repoUrl }: ProjectDeepDiveProps) => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={300} color="#3b82f6" size={0.008} spread={18} speed={0.06} />
        <FloatingGeometry position={[4, 1, -4]} geometry="icosahedron" color="#3b82f6" size={0.7} speed={0.2} />
        <FloatingGeometry position={[-4, -1, -5]} geometry="torus" color="#8b5cf6" size={0.4} speed={0.3} />
      </SceneWrapper>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3 tracking-tight">{title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{tagline}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary">{tag}</span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4 mb-12">
          {description.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <NeonCard color={i % 2 === 0 ? 'cyan' : 'magenta'}>
                <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="font-display font-semibold text-lg text-foreground mb-4">Fork Goals & Roadmap</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {forkGoals.map((goal, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground glass rounded-lg px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {goal}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            View Repository
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export const VortexPage = () => (
  <ProjectDeepDive
    title="Vortex AI Chat"
    tagline="An experiment in expressive interfaces with multiple AI models."
    description={[
      'Multiple models. One conversation space. Fast feedback loops. UI motion is treated as information — latency is exposed, not hidden.',
      'Errors are visible. The system explains itself. Perfect playground for UI experiments with animation layers and agent personalities.',
      'Sound-reactive UI elements respond to conversation intensity. Custom themes allow complete visual customization per agent.',
    ]}
    forkGoals={['Animation layers', 'Sound-reactive UI', 'Agent personalities', 'Custom themes']}
    tags={['GPT', 'Gemini', 'Real-time', 'Animation', 'Multi-model']}
    repoUrl="https://github.com/devflex-ai/vortex-ai-chat"
  />
);

export const CodingITPage = () => (
  <ProjectDeepDive
    title="CodingIT"
    tagline="A response to over-engineered app builders. Local-first, zero telemetry."
    description={[
      'Runs locally. Respects the filesystem. Produces artifacts you own. No subscription logic baked in.',
      'No telemetry by default. Local-first philosophy: if it works offline, it works everywhere.',
      'Clean CLI integration enables seamless developer workflows without context switching.',
    ]}
    forkGoals={['Performance optimization', 'Plugin system', 'Offline-first architecture', 'CLI integration']}
    tags={['Local-first', 'Open Source', 'CLI', 'Privacy', 'Developer Tools']}
    repoUrl="https://github.com/devflex-ai/codingit"
  />
);

export const GeminiPage = () => (
  <ProjectDeepDive
    title="Gemini Next Chat"
    tagline="Clean separation between model logic and UI. Easy self-hosting."
    description={[
      'Easy theming. Easy self-hosting. Designed to disappear when not needed — lightweight, focused, personal.',
      'Plugin architecture allows extending functionality without touching core code.',
    ]}
    forkGoals={['Plugin system', 'Offline caching', 'Custom theming engine', 'Retro UI modes']}
    tags={['Gemini', 'Self-hosted', 'Theming', 'Lightweight']}
    repoUrl="https://github.com/devflex-ai/gemini-next-chat"
  />
);

export const LobePage = () => (
  <ProjectDeepDive
    title="Lobe Chat"
    tagline="Modular multi-AI chatbot with orchestration and memory layers."
    description={[
      'Supports OpenAI, Claude, Gemini, and more. Multi-model orchestration with intelligent routing.',
      'Agent memory layers enable contextual conversations that persist across sessions.',
    ]}
    forkGoals={['Local inference support', 'Agent memory layers', 'Themed UIs', 'Model routing optimization']}
    tags={['Multi-model', 'OpenAI', 'Claude', 'Orchestration', 'Plugins']}
    repoUrl="https://github.com/devflex-ai/lobe-chat"
  />
);

export const StirlingPage = () => (
  <ProjectDeepDive
    title="Stirling-PDF"
    tagline="Java PDF toolkit with AI document analysis extensions."
    description={[
      'Merging, splitting, converting, and more — a complete PDF processing pipeline.',
      'Extended with AI document analysis, OCR pipelines, and automation workflows.',
    ]}
    forkGoals={['AI document analysis', 'OCR pipelines', 'Automation workflows', 'Batch CLI wrapper', 'Plugin system']}
    tags={['Java', 'PDF', 'OCR', 'Automation', 'Document AI']}
    repoUrl="https://github.com/devflex-ai/stirling-pdf"
  />
);
