# ZQ Portfolio — Complete Setup and Deployment Guide

## 1. Prepare VS Code
Open the `zq-portfolio` folder containing `package.json`. Install Node.js 22 or newer and Git.
Open Terminal > New Terminal. Run `npm install`.

## 2. Configure Gemini locally
Create a file named `.env.local` **beside `package.json`** (NOT in `app`, `components`, or `public`). Copy `.env.example` into it and replace the placeholder with the actual Gemini API key from https://aistudio.google.com/apikey . Do not use quotation marks or share the key.

```dotenv
GEMINI_API_KEY=YOUR_REAL_KEY
GEMINI_MODEL=gemini-3.8-flash
GEMINI_FALLBACK_MODEL_1=gemini-3.6-flash
GEMINI_FALLBACK_MODEL_2=gemini-3.5-flash-lite
```

Run `npm run dev`. Visit http://localhost:3000/api/chat/status . If `configured` is `false`, stop the server with Ctrl+C, verify the file name and location, and start `npm run dev` again. If `configured` is `true`, it means the key was detected, not necessarily valid. Visit http://localhost:3000, open ZQ AI, and send a question. If it fails, inspect the VS Code terminal for the model's HTTP status.

### Troubleshooting
- `configured: false`: the `.env.local` file is missing, incorrectly named (`.env.local.txt`), in the wrong folder, has an empty or placeholder key, or the server was not restarted. The key must be available to the server process.
- `configured: true`, HTTP 400: invalid model or request; confirm exact model ID and account access.
- HTTP 401/403: key invalid, API disabled, or project lacks access.
- HTTP 429: model quota or rate limit; the chatbot tries the next model automatically.
- HTTP 404: model unavailable for the key; chatbot tries the next model.
- Do not put `NEXT_PUBLIC_` in front of `GEMINI_API_KEY`.

## 3. Verify production build
Stop `npm run dev` with Ctrl+C, then run `npm run build`. Resolve errors before deploying. Optionally run `npm audit` to review dependency warnings. Don't use `npm audit fix --force` blindly.

## 4. Push to GitHub
Create an empty repository at https://github.com/new named `zq-portfolio` (don't initialize with README). Run in the project folder:

```powershell
git init
git add .
git status
```

Verify `.env.local` is **NOT** staged. Then:

```powershell
git commit -m "Deploy ZQ portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zq-portfolio.git
git push -u origin main
```

If Git requests an identity, configure `git config --global user.name "Your Name"` and `git config --global user.email "your-email@example.com"`, then retry the commit. Authenticate through GitHub when prompted.

## 5. Deploy on Vercel
Open https://vercel.com/new, sign in with GitHub, import the repository, choose Next.js, and leave root directory `./`. Under Environment Variables, set the same four variables used locally (including the actual secret key). Set them for Production, and optionally Preview. Click Deploy. Once deployed, visit `https://YOUR_VERCEL_DOMAIN/api/chat/status` to confirm `configured:true` and test the chatbot.

Vercel does not read your local `.env.local` automatically. You must configure variables separately in the Vercel dashboard. When changing them, redeploy.

## 6. Update the site
After editing files, run:

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel will build and deploy the updated GitHub commit automatically.

## Security and reliability
The status endpoint never reveals the key; it only reports whether a plausible key is present. The chatbot uses a server-side Gemini request. Fallbacks activate for 404/429/5xx and network timeouts; invalid credentials cannot be fixed by fallback. All three models may share quota limits. Per-instance rate limiting is basic; use a shared rate limiter for significant traffic.
