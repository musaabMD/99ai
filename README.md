# 99ais - AI Agent Templates Platform

Build AI Agents That Do the Work for You. Design, deploy, and automate custom AI agents to handle tasks, save time, and scale your impact — no coding required.

## Features

- 🚀 **Waitlist Landing Page**: Beautiful hero section with email collection
- 📊 **Vercel Analytics**: Integrated web analytics for tracking visitors
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 📧 **Email Collection**: Formspree integration for waitlist signups

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- `/` - Home page with hero section and "Join Waitlist" CTA
- `/waitlist` - Dedicated waitlist page with email signup form
- `/404` - Custom 404 page that redirects to waitlist

## Analytics

Vercel Analytics is integrated and will automatically track page views and user interactions once deployed to Vercel.

## Waitlist Form

The waitlist form is powered by Formspree and sends submissions to: `https://formspree.io/f/xjkwyaql`

## Deployment

Deploy to Vercel for automatic analytics integration:

```bash
npm run build
```

Then deploy to your Vercel project.
