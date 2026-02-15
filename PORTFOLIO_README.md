# DevFlex-AI Portfolio Website

A stunning 3D retro arcade-themed portfolio website showcasing AI engineering projects, skills, and experience with immersive React Three Fiber animations and neon aesthetics.

## Features

### Core Pages

1. **Hero/Landing Page** (`/`)
   - Full-screen 3D arcade cabinet scene
   - Animated typewriter text introduction
   - Floating neon geometries and particle effects
   - "INSERT COIN" call-to-action button

2. **About Me** (`/about`)
   - Animated avatar display with neon border
   - 3D rotating hologram effects
   - Personal story and daily operating principles
   - Retro arcade aesthetic with modern UI

3. **The Story** (`/story`)
   - Immersive storytelling with 3D visuals
   - How I build software philosophy
   - Scrolling narrative with boss fight metaphors

4. **Tech Stack Pages**
   - **Languages** (`/tech-languages`) - 15+ programming languages with orbital display
   - **Frameworks & Tools** (`/tech-frameworks`) - React, Vue, Next.js, Docker, Kubernetes, and more

5. **Projects**
   - **Overview** (`/projects`) - 3D card carousel of all projects
   - **Deep Dive Pages** - Dedicated pages for each project:
     - Vortex AI Chat (`/projects/vortex`)
     - CodingIT (`/projects/codingit`)
     - Gemini Next Chat (`/projects/gemini`)
     - Lobe Chat (`/projects/lobe`)
     - Stirling-PDF (`/projects/stirling`)

6. **Philosophy & Values**
   - Design Philosophy (`/design-philosophy`)
   - SMACK-SH Organization (`/smack-sh`)
   - Development Principles (`/principles`)
   - Architecture Preferences (`/architecture`)
   - Philosophy & Values (`/philosophy`)

7. **Additional Pages**
   - GitHub Stats (`/github-stats`) - Live stats, trophies, and contributions
   - Fork Strategy (`/fork-strategy`) - Strategic project planning
   - Builder Log (`/builder-log`) - Development timeline and iterations
   - Retro Mantras (`/retro-mantras`) - Aesthetic commitments and workflow
   - Contact (`/contact`) - Working contact form with email integration

## Contact Form Integration

The contact form is fully functional and routes all messages to: **mahirusus@gmail.com**

### How It Works

1. **Form Submission** - User fills out name, email, and message
2. **Validation** - Email format and required fields are validated
3. **Database Storage** - Submission is stored in Supabase database
4. **Email Delivery** - Email is sent to mahirusus@gmail.com via Resend API
5. **Confirmation** - User receives success message

### Email Service Setup (Optional)

To enable email notifications:

1. Sign up for a free Resend account at https://resend.com
2. Get your API key from the dashboard
3. Add the API key to your Supabase project:
   - Go to Project Settings > Edge Functions > Secrets
   - Add: `RESEND_API_KEY` = your_api_key

Note: If the email service is not configured, form submissions will still be saved to the database.

## GitHub Integration

The portfolio displays GitHub stats and links throughout:

- **Profile**: github.com/devflex-ai
- **Stats Cards**: Dynamically loaded GitHub stats, top languages, and trophies
- **Project Links**: Direct links to all repositories
- **Contribution Activity**: Visual representation of coding activity

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **3D Graphics**: React Three Fiber + drei
- **Animations**: Framer Motion
- **Styling**: TailwindCSS with custom neon themes
- **Database**: Supabase (PostgreSQL)
- **Backend**: Supabase Edge Functions (Deno)
- **Routing**: React Router
- **UI Components**: shadcn/ui + custom neon components
- **Email**: Resend API (optional)

## Design System

### Color Palette
- **Primary (Neon Cyan)**: `#00FFFF`
- **Secondary (Neon Magenta)**: `#FF00FF`
- **Background**: Dark mode (almost black)
- **Foreground**: High contrast white/cyan

### Typography
- **Pixel Font**: Press Start 2P (retro arcade text)
- **Display Font**: Orbitron (futuristic headings)
- **Mono Font**: JetBrains Mono (code and body text)

### Visual Effects
- Neon glow text and borders
- Pixel grid backgrounds
- Scanline overlays
- Glitch text animations
- Floating 3D geometries
- Particle fields
- Pulse glow effects

## Database Schema

### contact_submissions
Stores all contact form submissions:

```sql
- id: uuid (primary key)
- name: text (required)
- email: text (required)
- message: text (required)
- status: text (pending/sent/failed)
- created_at: timestamp
- sent_at: timestamp
- error_message: text
```

## Development

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Environment Variables
Required environment variables (automatically configured in Lovable):
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Features Breakdown

### Responsive Design
- Mobile-first approach
- Hamburger navigation on mobile
- Adaptive 3D scenes for performance
- Touch-friendly interactions

### Performance Optimizations
- Lazy loading of 3D components
- Optimized particle counts for mobile
- Image optimization
- Code splitting

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- High contrast ratios

### SEO
- Meta tags configuration
- OpenGraph tags
- Sitemap structure
- Fast loading times

## Page Count
20+ pages total, each with unique 3D scenes and animations

## Security Features
- Email address hidden from frontend
- Form validation (client and server)
- CORS headers configured
- Row Level Security (RLS) on database
- Rate limiting ready
- SQL injection protection

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS/Android)

## License
Personal Portfolio - All Rights Reserved

## Contact
For any inquiries, use the contact form at `/contact` or visit the GitHub profile.

---

Built with passion, neon, and coffee. Ready to showcase your skills to potential employers and clients!
