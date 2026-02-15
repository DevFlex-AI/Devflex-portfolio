import { motion } from 'framer-motion';
import { useState } from 'react';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
import NeonCard from '@/components/ui/NeonCard';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({ title: 'Error', description: 'All fields required.', variant: 'destructive' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: 'Error', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }

    setSending(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Configuration error');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: 'Message Sent!',
        description: data.message || 'Thanks for reaching out. I\'ll get back to you soon!'
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or email directly.',
        variant: 'destructive'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={400} color="#FF00FF" size={0.012} spread={18} speed={0.1} />
        <FloatingGeometry position={[3, 2, -3]} geometry="torus" color="#00FFFF" size={0.6} speed={0.4} />
        <FloatingGeometry position={[-3, -1, -4]} geometry="octahedron" color="#FF00FF" size={0.5} speed={0.5} />
      </SceneWrapper>
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-pixel text-xs text-secondary neon-text-magenta tracking-widest">📫 TRANSMISSION</span>
          <h1 className="font-orbitron font-bold text-3xl md:text-5xl text-foreground mt-4 mb-8">
            Contact <span className="text-secondary neon-text-magenta">Me</span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <NeonCard color="magenta">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">NAME</label>
                <Input value={name} onChange={e => setName(e.target.value)} placeholder="Your callsign" className="bg-background border-primary/30 focus:border-primary font-mono text-sm" />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">EMAIL</label>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="bg-background border-primary/30 focus:border-primary font-mono text-sm" />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">MESSAGE</label>
                <Textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your transmission..." rows={5} className="bg-background border-primary/30 focus:border-primary font-mono text-sm" />
              </div>
              <Button type="submit" disabled={sending} className="w-full font-pixel text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground pulse-glow">
                {sending ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
              </Button>
            </form>
          </NeonCard>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 text-center">
          <a href="https://github.com/devflex-ai" target="_blank" rel="noreferrer" className="font-mono text-sm text-primary hover:neon-text-cyan transition-all">
            github.com/devflex-ai →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
