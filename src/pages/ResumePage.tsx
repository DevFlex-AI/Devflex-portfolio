import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code2, Award, ExternalLink } from 'lucide-react';
import SceneWrapper from '@/components/3d/SceneWrapper';
import ParticleField from '@/components/3d/ParticleField';
import FloatingGeometry from '@/components/3d/FloatingGeometry';

const experience = [
  {
    role: 'AI Engineer & Full-Stack Developer',
    company: 'DevFlex-AI / smack-sh',
    period: 'Present',
    highlights: [
      'Architected and shipped 5+ open-source AI-powered tools with combined community adoption',
      'Built multi-model AI chat platforms supporting GPT, Gemini, and Claude orchestration',
      'Designed local-first, self-hostable developer tools prioritizing performance and privacy',
      'Led open-source projects with clean architecture, modular design, and comprehensive docs',
    ],
  },
  {
    role: 'Open Source Contributor & Maintainer',
    company: 'GitHub Community',
    period: 'Ongoing',
    highlights: [
      'Forked and extended major projects including Stirling-PDF, Lobe Chat, and Gemini Next Chat',
      'Contributed performance optimizations, plugin systems, and UI modernization',
      'Maintained active repositories with CI/CD pipelines and automated testing',
    ],
  },
];

const skills = {
  'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'Kotlin', 'Swift', 'Ruby', 'PHP', 'Dart', 'R', 'Haskell'],
  'Frameworks': ['React', 'Next.js', 'Vue', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'TailwindCSS', 'Laravel'],
  'Infrastructure': ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'Ansible', 'Bun'],
  'AI / ML': ['OpenAI API', 'Gemini API', 'Claude API', 'Local Inference', 'Multi-model Orchestration', 'RAG Pipelines'],
};

const certHighlights = [
  'Multi-model AI system design & deployment',
  'Full-stack application architecture (frontend to infra)',
  'Local-first & self-hosted platform engineering',
  'Developer tooling & CLI design',
];

const ResumePage = () => {
  return (
    <div className="relative min-h-screen">
      <SceneWrapper camera={{ position: [0, 0, 7], fov: 60 }}>
        <ParticleField count={300} color="#3b82f6" size={0.008} spread={18} speed={0.05} />
        <FloatingGeometry position={[5, 3, -6]} geometry="octahedron" color="#3b82f6" size={0.3} speed={0.3} />
        <FloatingGeometry position={[-4, -2, -7]} geometry="torus" color="#8b5cf6" size={0.25} speed={0.4} />
      </SceneWrapper>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
            <div>
              <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">Resume</p>
              <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground tracking-tight">
                Experience & <span className="gradient-text">Skills</span>
              </h1>
            </div>
            <a
              href="https://github.com/devflex-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-xl hover:opacity-90 transition-opacity shrink-0"
            >
              <Download className="w-4 h-4" />
              View GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            AI Engineer & Full-Stack Builder with deep expertise across 15+ languages, modern frameworks, and AI systems. Focused on shipping tools that are fast, local-first, and developer-owned.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold text-lg text-foreground">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-primary font-medium px-2.5 py-1 bg-primary/10 rounded-full w-fit">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold text-lg text-foreground">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass rounded-xl p-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Core competencies */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold text-lg text-foreground">Core Competencies</h2>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certHighlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResumePage;
