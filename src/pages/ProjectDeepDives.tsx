import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';

interface ProjectDeepDiveProps {
  title: string;
  emoji: string;
  description: string[];
  forkGoals: string[];
  color: 'cyan' | 'magenta';
  repoUrl: string;
}

const ProjectDeepDive = ({ title, emoji, description, forkGoals, color, repoUrl }: ProjectDeepDiveProps) => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={400} color={color === 'cyan' ? '#00FFFF' : '#FF00FF'} size={0.012} spread={18} speed={0.1} />
        <FloatingGeometry position={[3, 1, -2]} geometry="icosahedron" color={color === 'cyan' ? '#00FFFF' : '#FF00FF'} size={1} speed={0.3} />
        <FloatingGeometry position={[-3, -1, -3]} geometry="torus" color={color === 'cyan' ? '#FF00FF' : '#00FFFF'} size={0.5} speed={0.5} />
      </SceneWrapper>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">{emoji} PROJECT DEEP DIVE</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-8">
            <span className={color === 'cyan' ? 'text-primary neon-text-cyan' : 'text-secondary neon-text-magenta'}>{title}</span>
          </h1>
        </motion.div>

        <div className="space-y-4 mb-12">
          {description.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.2 }}>
              <NeonCard color={color}>
                <p className="font-mono text-sm text-foreground leading-relaxed">{p}</p>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <h2 className="font-orbitron text-lg text-foreground mb-4">Fork Goals</h2>
          <div className="space-y-2">
            {forkGoals.map((goal, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-primary font-pixel text-xs mt-1">→</span>
                <p className="font-mono text-sm text-muted-foreground">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-8">
          <a href={repoUrl} target="_blank" rel="noreferrer" className="inline-block font-pixel text-xs text-primary border border-primary/30 px-6 py-3 hover:bg-primary/10 pulse-glow transition-colors">
            VIEW REPO →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export const VortexPage = () => (
  <ProjectDeepDive
    title="Vortex AI Chat"
    emoji="🧠"
    description={[
      'An experiment in expressive interfaces. Multiple models. One conversation space. Fast feedback loops.',
      'UI motion is treated as information. Latency is exposed, not hidden. Errors are visible. The system explains itself.',
      'Perfect playground for UI experiments — animation layers, sound-reactive UI, agent personalities.',
    ]}
    forkGoals={['Animation layers', 'Sound-reactive UI', 'Agent personalities', 'Custom themes']}
    color="cyan"
    repoUrl="https://github.com/devflex-ai/vortex-ai-chat"
  />
);

export const CodingITPage = () => (
  <ProjectDeepDive
    title="CodingIT"
    emoji="💻"
    description={[
      'A response to over-engineered app builders. Runs locally. Respects the filesystem. Produces artifacts you own.',
      'No subscription logic baked in. No telemetry by default.',
      'Local-first philosophy: if it works offline, it works everywhere.',
    ]}
    forkGoals={['Performance optimization', 'Plugin system', 'Offline-first architecture', 'CLI integration']}
    color="magenta"
    repoUrl="https://github.com/devflex-ai/codingit"
  />
);

export const GeminiPage = () => (
  <ProjectDeepDive
    title="Gemini Next Chat"
    emoji="💬"
    description={[
      'Clean separation between model logic and UI. Easy theming. Easy self-hosting.',
      'Designed to disappear when not needed. Lightweight, focused, personal.',
    ]}
    forkGoals={['Plugin system', 'Offline caching', 'Retro UI modes', 'Custom theming engine']}
    color="cyan"
    repoUrl="https://github.com/devflex-ai/gemini-next-chat"
  />
);

export const LobePage = () => (
  <ProjectDeepDive
    title="Lobe Chat"
    emoji="🤖"
    description={[
      'Modular multi-AI chatbot supporting OpenAI, Claude, Gemini, and more.',
      'Multi-model orchestration with agent memory layers and themed UIs.',
    ]}
    forkGoals={['Local inference support', 'Agent memory layers', 'Themed UIs', 'Model routing optimization']}
    color="magenta"
    repoUrl="https://github.com/devflex-ai/lobe-chat"
  />
);

export const StirlingPage = () => (
  <ProjectDeepDive
    title="Stirling-PDF"
    emoji="📄"
    description={[
      'Java PDF toolkit for merging, splitting, converting, and more.',
      'Extend with AI document analysis, OCR pipelines, or retro UI frontends.',
    ]}
    forkGoals={['AI document analysis', 'OCR pipelines', 'Automation workflows', 'Batch CLI wrapper', 'Plugin system']}
    color="cyan"
    repoUrl="https://github.com/devflex-ai/stirling-pdf"
  />
);
