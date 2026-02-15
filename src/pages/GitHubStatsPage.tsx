import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import NeonCard from '@/components/ui/NeonCard';

const GitHubStatsPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 6], fov: 60 }}>
      <ParticleField count={300} color="#00FFFF" size={0.01} spread={15} speed={0.1} />
    </SceneWrapper>
    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-pixel text-xs text-primary neon-text-cyan tracking-widest">📊 STATS</span>
        <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-12">
          GitHub <span className="text-primary neon-text-cyan">Stats</span>
        </h1>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <NeonCard color="cyan">
            <img src="https://github-readme-stats.vercel.app/api?username=devflex-ai&theme=tokyonight&show_icons=true&hide_border=true&count_private=true&bg_color=00000000" alt="GitHub Stats" className="w-full" />
          </NeonCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <NeonCard color="magenta">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devflex-ai&theme=tokyonight&show_icons=true&hide_border=true&layout=compact&bg_color=00000000" alt="Top Languages" className="w-full" />
          </NeonCard>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="mt-6">
        <NeonCard color="cyan">
          <img src="https://github-profile-trophy.vercel.app/?username=devflex-ai&theme=darkhub&no-frame=true&margin-w=10&margin-h=10&column=4" alt="GitHub Trophies" className="w-full" />
        </NeonCard>
      </motion.div>
    </div>
  </div>
);

export default GitHubStatsPage;
