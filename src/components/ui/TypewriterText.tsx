import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

const TypewriterText = ({ text, speed = 50, delay = 0, className, showCursor = true }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, speed, started]);

  return (
    <span className={cn('font-mono', className)}>
      {displayed}
      {showCursor && <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />}
    </span>
  );
};

export default TypewriterText;
