# resume

Re-usable template for versioned resumes. Built with Next.js, Tailwind CSS, and shadcn/ui. Resume content lives in `data/resume-versions.ts`; the UI supports multiple versions, print, and DOCX export.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- [pnpm](https://pnpm.io/installation) (this repo uses `pnpm-lock.yaml`)

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
pnpm build    # production build
pnpm start    # run production build locally
pnpm lint     # ESLint
```

## Deployment

No environment variables are required. Images are served unoptimized (`next.config.mjs`), which works on static hosts and Vercel without extra image configuration.

### Vercel (recommended)

[Vercel](https://vercel.com) is the simplest option for this Next.js app and matches the included `@vercel/analytics` integration.

1. Push the repo to GitHub (or GitLab/Bitbucket).
2. Sign in to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import this repository.
4. Use these settings (Vercel usually detects them automatically):
   - **Framework Preset:** Next.js
   - **Install Command:** `pnpm install`
   - **Build Command:** `pnpm build`
   - **Output Directory:** leave default (Next.js)
5. Click **Deploy**.

Each push to the production branch (typically `main`) triggers a new deployment. Preview deployments are created for other branches and pull requests.

**Optional — deploy from the CLI:**

```bash
pnpm add -g vercel
vercel login
vercel          # first deploy (follow prompts)
vercel --prod   # production deploy
```

### Self-hosted / VPS

Build and run the Node server on any machine with Node 18+:

```bash
pnpm install
pnpm build
pnpm start
```

The app listens on port **3000** by default. Put a reverse proxy (nginx, Caddy, etc.) in front of it for HTTPS and a custom domain.

Example with [PM2](https://pm2.keymetrics.io/):

```bash
pnpm build
pm2 start pnpm --name resume -- start
```

### Static export

This project is configured as a standard Next.js app (not `output: 'export'`). Use Vercel or `pnpm build && pnpm start` unless you add static export support yourself.

## Customizing content

Edit `data/resume-versions.ts` to add or change resume versions. Replace assets under `public/` (for example `public/professional-headshot.png`) as needed.

After changing content, run `pnpm build` locally to confirm the production build succeeds before deploying.
