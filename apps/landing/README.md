# Verifactu Landing

Modern Next.js landing page for Verifactu platform.

## Features

- 🎨 Modern, responsive design
- 📧 Lead form with email integration (Resend)
- 💬 AI-powered chat widget (Google Vertex AI)
- 📊 Dynamic pricing calculator
- 🚀 Optimized for production deployment
- 🔒 Form validation with Zod
- ⚡ Built with Next.js 14 and React 18

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your API keys
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Required environment variables:

- `RESEND_API_KEY` - API key for Resend email service
- `FROM_EMAIL` - Sender email address
- `LEAD_EMAIL` - Recipient email for leads
- `GCP_PROJECT_ID` - Google Cloud Project ID for Vertex AI
- `GCP_LOCATION` - GCP region (default: us-central1)

See `.env.example` for details.

## Docker Deployment

```bash
# Build the image
docker build -t verifactu-landing -f apps/landing/Dockerfile .

# Run the container
docker run -p 3000:3000 \
  -e RESEND_API_KEY=your_key \
  -e GCP_PROJECT_ID=your_project \
  verifactu-landing
```

## Project Structure

```
apps/landing/
├── app/
│   ├── api/
│   │   ├── send-lead/    # Lead submission endpoint
│   │   └── vertex-chat/  # AI chat endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page
├── public/
│   └── assets/           # Static assets
├── Dockerfile            # Production Docker image
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript configuration
```

## Features

### Hero Section
- Eye-catching headline and value proposition
- Key metrics display (+12k invoices, 99.9% uptime, 48h onboarding)
- Call-to-action buttons
- Featured dashboard preview card

### Features Section
- Three main features with icons
- Clear descriptions of platform capabilities

### How It Works
- Three-step process explanation
- Simple, visual presentation

### Solutions Section
- Two pricing tiers (Standard and Custom)
- Feature comparison
- Clear CTAs for each tier

### Dynamic Pricing
- Interactive slider for invoice volume
- Real-time price calculation
- Transparent pricing model

### Lead Form Modal
- Validates user input
- Sends emails via Resend API
- Success/error feedback
- Clean, accessible design

### AI Chat Widget
- Floating chat button
- Vertex AI integration
- Context-aware responses
- Handles common questions about Verifactu

## Technologies

- **Framework**: Next.js 14
- **UI**: React 18 with TypeScript
- **Styling**: Custom CSS with modern features
- **Validation**: Zod
- **Email**: Resend
- **AI**: Google Vertex AI
- **Deployment**: Docker-ready

## License

Proprietary - Verifactu © 2025
