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
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative border rounded-xl bg-card/60 backdrop-blur-sm p-6 transition-all duration-300',
        color === 'cyan' ? 'border-primary/15 hover:border-primary/30' : 'border-secondary/15 hover:border-secondary/30',
        hover && (color === 'cyan' ? 'hover:glow-primary' : 'hover:glow-accent'),
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default NeonCard;
