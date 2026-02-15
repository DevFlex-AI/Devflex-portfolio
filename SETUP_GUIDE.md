# Portfolio Setup & Deployment Guide

This guide will help you set up and deploy your DevFlex-AI portfolio website.

## Prerequisites

The following are already configured in your Lovable project:
- Supabase database
- Environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- Edge function deployment

## Contact Form Setup

### Current Status
Your contact form is fully functional and will:
1. Store all submissions in the Supabase database
2. Validate email addresses and required fields
3. Show success/error messages to users

### Email Notifications (Optional Setup)

To receive email notifications at **mahirusus@gmail.com**, follow these steps:

1. **Sign up for Resend** (Free Plan Available)
   - Go to https://resend.com
   - Sign up for a free account
   - Verify your email address

2. **Get Your API Key**
   - Log into Resend dashboard
   - Go to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Configure in Supabase**
   - Go to your Supabase project dashboard
   - Navigate to: Project Settings > Edge Functions > Secrets
   - Click "Add new secret"
   - Name: `RESEND_API_KEY`
   - Value: Paste your Resend API key
   - Click Save

4. **Verify Email Domain (Optional but Recommended)**
   - In Resend dashboard, go to Domains
   - Add and verify your custom domain
   - Update the edge function to use your domain instead of "onboarding@resend.dev"

### Testing the Contact Form

1. Visit your deployed site at the `/contact` page
2. Fill out the form with test data
3. Submit the form
4. You should see a success message
5. Check your email at mahirusus@gmail.com
6. If email doesn't arrive, check Supabase database to confirm submission was saved

### Viewing Contact Submissions

All contact form submissions are stored in the Supabase database:

1. Go to your Supabase project dashboard
2. Click on "Table Editor" in the left sidebar
3. Select the `contact_submissions` table
4. View all submissions with their status (pending/sent/failed)

## GitHub Integration

Your portfolio displays your GitHub profile and stats:

- **Profile URL**: https://github.com/devflex-ai
- **Stats**: Automatically loaded from GitHub
- **Repositories**: Linked throughout the site

To customize GitHub links:
1. Search for "github.com/devflex-ai" in the project
2. Replace with your actual GitHub username if different
3. Update project repository URLs in the project pages

## Customization Guide

### Update Personal Information

1. **About Page** (`src/pages/AboutPage.tsx`)
   - Modify the `aboutPoints` array
   - Update "Daily Operating Principles"
   - Change avatar image if needed

2. **Hero Page** (`src/pages/Index.tsx`)
   - Edit the typewriter text
   - Modify introduction text

3. **Story Page** (`src/pages/StoryPage.tsx`)
   - Update personal story paragraphs
   - Edit "How I Build Software" section

### Update Projects

Edit project information in:
- `src/pages/ProjectsOverviewPage.tsx` - Project cards
- `src/pages/ProjectDeepDives.tsx` - Individual project pages

### Color Customization

The site uses a neon cyan and magenta theme. To customize:

1. Edit `src/index.css` CSS variables:
   ```css
   --neon-cyan: 180 100% 50%;
   --neon-magenta: 300 100% 50%;
   ```

2. Update component color props in page files

### Add New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## Performance Optimization

The site is already optimized, but you can further improve:

1. **Image Optimization**
   - Use WebP format for images
   - Compress images before upload
   - Use lazy loading for below-fold images

2. **3D Scene Optimization**
   - Reduce particle counts on mobile
   - Lower geometry detail on slow devices
   - Use simpler materials for better performance

3. **Code Splitting**
   - Lazy load route components
   - Split vendor bundles
   - Use dynamic imports for heavy libraries

## Deployment

Your site is automatically deployed through Lovable. Every push to your repository triggers a new deployment.

### Custom Domain Setup

1. In Lovable dashboard, go to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the instructions to add DNS records
4. Wait for DNS propagation (up to 48 hours)

### SSL Certificate

SSL is automatically provided and renewed by Lovable.

## Monitoring

### Check Contact Form Status

```sql
-- Run in Supabase SQL Editor
SELECT
  name,
  email,
  status,
  created_at,
  sent_at
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 10;
```

### Failed Submissions

```sql
-- Check for failed submissions
SELECT *
FROM contact_submissions
WHERE status = 'failed'
ORDER BY created_at DESC;
```

## Security Checklist

- [x] Email address not exposed in frontend code
- [x] Form validation on client and server
- [x] Row Level Security enabled on database
- [x] CORS headers properly configured
- [x] Environment variables secured
- [x] SQL injection protection via prepared statements

## Troubleshooting

### Contact Form Not Working

1. Check browser console for errors
2. Verify Supabase environment variables are set
3. Check Edge Function logs in Supabase dashboard
4. Ensure database table exists and RLS policies are correct

### Email Not Sending

1. Verify RESEND_API_KEY is configured in Supabase
2. Check Resend dashboard for delivery status
3. Verify recipient email (mahirusus@gmail.com) is correct
4. Check spam folder
5. Review Edge Function logs for email errors

### 3D Scenes Not Loading

1. Check if WebGL is enabled in browser
2. Test on different browser
3. Check console for Three.js errors
4. Verify all 3D dependencies are installed

### Build Errors

1. Run `npm install` to ensure all dependencies are installed
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run type-check` (if configured)
4. Review build logs for specific errors

## Support

For issues or questions:
1. Check the browser console for errors
2. Review Supabase logs
3. Check Edge Function logs
4. Test in incognito mode to rule out caching issues

## Backup

Your data is automatically backed up by Supabase. To export contact submissions:

```sql
-- Export to CSV via Supabase dashboard
SELECT * FROM contact_submissions;
```

## Updates

To update the portfolio:
1. Make changes in the Lovable editor or locally
2. Push to your repository
3. Deployment happens automatically
4. Changes are live within minutes

---

Congratulations! Your portfolio is now fully set up and ready to impress potential employers and clients.
