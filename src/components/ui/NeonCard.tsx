import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  color?: 'cyan' | 'magenta';
  hover?: boolean;
}

const NeonCard = ({ children, className, color = 'cyan', hover = true }: NeonCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={cn(
        'relative border rounded-sm bg-card/80 backdrop-blur-sm p-6',
        color === 'cyan' ? 'neon-border-cyan' : 'neon-border-magenta',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default NeonCard;
