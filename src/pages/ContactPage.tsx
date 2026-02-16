import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Github, Send, ArrowUpRight } from 'lucide-react';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';
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
        title: 'Message Sent',
        description: "Thanks for reaching out. I'll get back to you soon."
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or email directly at mahirusus@gmail.com',
        variant: 'destructive'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={300} color="#8b5cf6" size={0.008} spread={18} speed={0.06} />
        <FloatingGeometry position={[4, 2, -5]} geometry="torus" color="#3b82f6" size={0.4} speed={0.3} />
        <FloatingGeometry position={[-3, -1, -6]} geometry="octahedron" color="#8b5cf6" size={0.3} speed={0.4} />
      </SceneWrapper>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Contact</p>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 tracking-tight">
              Let's build something{' '}
              <span className="gradient-text">together</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you have a project idea, want to collaborate on open-source work, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mahirusus@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-foreground font-medium">Email</div>
                  <div>mahirusus@gmail.com</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://github.com/devflex-ai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-foreground font-medium">GitHub</div>
                  <div>github.com/devflex-ai</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="glass rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-background/50 border-border focus:border-primary h-11"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-background/50 border-border focus:border-primary h-11"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-11 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
                >
                  {sending ? (
                    'Sending...'
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
