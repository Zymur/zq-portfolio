# ZQ. Portfolio — Next.js + Gemini + Vercel

A responsive single-page portfolio with paper-like sections, white default theme, dark mode, Heroicons, downloadable resume, and an optional Gemini-powered first-person AI portfolio counterpart.

## Requirements

- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm
- GitHub account (for Git-based Vercel deployment)
- Vercel account
- Gemini API key from Google AI Studio (for chatbot)

## Local setup

1. Extract this folder, open a terminal in `zq-portfolio`.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Get a Gemini API key from https://aistudio.google.com/apikey and set `GEMINI_API_KEY=...` in `.env.local`.
5. Run `npm run dev` and open http://localhost:3000.
6. Run `npm run build` before deploying.

If no Gemini key is configured, the portfolio works, but the chatbot shows a configuration error.

## Deploy on Vercel (GitHub)

1. Create a new **private** GitHub repository (recommended), e.g. `zq-portfolio`.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial ZQ portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zq-portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new and import the repository.
4. Framework preset should detect **Next.js**. Leave the root directory at `./`.
5. In Vercel project settings → Environment Variables, add:
   - `GEMINI_API_KEY` = your actual Gemini API key
   - `GEMINI_MODEL` = `gemini-2.5-flash` (optional; change only to a model available to your key)
   Set environments to Production, Preview, and Development as appropriate.
6. Deploy. If you add environment variables after the first deployment, **redeploy** to make them available.
7. Open the Vercel URL, test light/dark themes, navigation, projects, resume, and chatbot.
8. Future pushes to `main` automatically deploy after you connect GitHub.

## Alternative Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel env add GEMINI_API_KEY production
vercel --prod
```

## Files to edit

- `data/portfolio.ts` — personal information, projects, skills, achievements, certificate links
- `app/page.tsx` — section layout and navigation
- `app/globals.css` — typography, colors, sharp buttons, cards, responsiveness
- `components/Chat.tsx` — chat interface
- `app/api/chat/route.ts` — server-side Gemini API request and assistant persona
- `public/profile.png`, `public/logo.png` — your supplied images
- `public/Zymur_Quisado_Resume.docx` — downloadable resume (replace when updated)

## Important checks before publishing

- Verify every existing project URL and certificate link. Some were carried from your earlier HTML and might be inactive.
- The project years and certificate dates were not independently verified. The site avoids showing uncertain dates for most certificates.
- Your profile photo and resume are publicly downloadable as website assets; remove them if you don't want them public.
- This implementation uses basic **per-instance** request throttling only. It is not reliable across multiple Vercel instances or redeployments. For public launch, add a shared durable limiter (e.g. Upstash Redis/Vercel KV-compatible storage), bot mitigation, and monitor Gemini API usage/costs.
- The chatbot sends visitors' messages to Google's Gemini service. Consider adding a privacy notice and avoid collecting sensitive information.
- The AI is not a substitute for a real conversation and must remain clearly disclosed as an AI portfolio counterpart.
- Never put your Gemini API key in `NEXT_PUBLIC_*` variables or client-side code. `.env.local` is excluded from Git.

## Troubleshooting

- **Chat says not configured:** set `GEMINI_API_KEY` in `.env.local` and restart the dev server; or set it in Vercel and redeploy.
- **Gemini error:** verify key permissions, model availability, quota, and API usage in Google AI Studio.
- **Broken project link:** edit its `url` in `data/portfolio.ts`.
- **Fonts fail to load:** Google Fonts requires an internet connection; local fallback fonts still render.


## Latest update (November 2026)
- TindaTrack is listed once as the Flutter mobile application; the website entry was removed.
- Highlights: 4 paid client projects, 7 portfolio projects, 12 certifications, 3 leadership roles.
- Paper sections have a subtle blue-tinted hover border that visually increases by 1px without changing layout dimensions.
- Contact email CTAs open Gmail's web compose page in a new tab, addressed to quisadozymur@gmail.com. Visitors need to be signed in to Gmail. The email text in the hero remains a standard mailto link for other email clients.
- Facebook contact displays the Facebook brand glyph.
- To update an existing installation, copy this project's files over your existing project, but **keep your own `.env.local`**. Run `npm install`, `npm run build`, and `npm run dev`.

## Gemini 3.8 Flash with two automatic fallbacks

Copy `.env.example` to `.env.local`, set `GEMINI_API_KEY`, and keep the three model variables as shown. The server tries `gemini-3.8-flash` first, `gemini-3.7-flash` second, and `gemini-3.6-flash` third when the provider responds with 429/500/502/503/504 or the request times out. Non-transient errors such as invalid credentials are not retried.

Add the same four variables under Vercel Project Settings > Environment Variables and redeploy. Fallbacks cannot bypass project-wide quotas, unavailable models, or a bad API key. Each attempt may take up to 12 seconds; in the worst case all three attempts can exceed the request duration permitted by some hosting plans.
