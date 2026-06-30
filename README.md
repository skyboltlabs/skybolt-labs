# Skybolt Labs Website

A modern, responsive website for Skybolt Labs - a premium web development agency based in Cape Town, South Africa.

## Features

- 🎨 Modern, responsive design with dark/light mode
- 📧 Production-ready email system using Supabase Edge Functions
- 🚀 Built with React, TypeScript, and Tailwind CSS
- 📱 Mobile-first responsive design
- 🌍 Optimized for South African market
- 💰 ZAR pricing and local contact information
- 🔒 Secure form handling with validation
- 📊 SEO optimized with proper meta tags

## Email System

The website uses Supabase Edge Functions for handling all email communications:

### Edge Functions:
- `send-contact-email` - Handles contact form submissions
- `send-newsletter-email` - Processes newsletter subscriptions  
- `send-quote-email` - Manages quote requests from the floating button

### Email Service:
- Uses Resend API for reliable email delivery
- All emails are sent to: skyboltlabs@outlook.com
- Professional HTML email templates
- Error handling and validation

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabase Configuration

1. Create a new Supabase project
2. Deploy the Edge Functions:
   ```bash
   supabase functions deploy send-contact-email
   supabase functions deploy send-newsletter-email  
   supabase functions deploy send-quote-email
   ```

### 3. Email Service Setup

1. Sign up for Resend (https://resend.com)
2. Get your API key
3. Add the API key to your Supabase project secrets:
   ```bash
   supabase secrets set RESEND_API_KEY=your_resend_api_key
   ```

### 4. Domain Configuration

For production email sending, you'll need to:
1. Verify your domain with Resend
2. Update the `from` addresses in the Edge Functions to use your verified domain

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is configured for deployment on Cloudflare Pages with:
- Automatic builds from Git
- Environment variable configuration
- Serverless form submissions handled via Cloudflare Pages Functions
- Proper redirects for SPA routing using `_redirects`

## Contact Information

- **Email**: skyboltlabs@outlook.com
- **Phone**: +27 81 617 2049
- **Location**: Cape Town, South Africa
- **Website**: https://skyboltlabs.co.za

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Email/Backend**: Supabase Edge Functions + Resend API (integrated via Cloudflare Pages Functions)
- **Deployment**: Cloudflare Pages
- **Icons**: Lucide React

## License

© 2024 Skybolt Labs. All rights reserved.
