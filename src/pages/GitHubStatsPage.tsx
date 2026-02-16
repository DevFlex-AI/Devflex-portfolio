import { motion } from 'framer-motion';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import NeonCard from '@/components/ui/NeonCard';

const GitHubStatsPage = () => (
  <div className="relative min-h-screen">
    <SceneWrapper camera={{ position: [0, 0, 6], fov: 60 }}>
      <ParticleField count={200} color="#3b82f6" size={0.008} spread={15} speed={0.06} />
    </SceneWrapper>
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Analytics</p>
        <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
          GitHub <span className="gradient-text">Stats</span>
        </h1>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <NeonCard color="cyan">
            <img src="https://github-readme-stats.vercel.app/api?username=devflex-ai&theme=tokyonight&show_icons=true&hide_border=true&count_private=true&bg_color=00000000" alt="GitHub Stats" className="w-full" />
          </NeonCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <NeonCard color="magenta">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devflex-ai&theme=tokyonight&show_icons=true&hide_border=true&layout=compact&bg_color=00000000" alt="Top Languages" className="w-full" />
          </NeonCard>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4">
        <NeonCard color="cyan">
          <img src="https://github-profile-trophy.vercel.app/?username=devflex-ai&theme=darkhub&no-frame=true&margin-w=10&margin-h=10&column=4" alt="GitHub Trophies" className="w-full" />
        </NeonCard>
      </motion.div>
    </div>
  </div>
);

export default GitHubStatsPage;
