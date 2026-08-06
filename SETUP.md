# Maaz Shahid — Portfolio

Hacker / spatial-UI portfolio built with React 19 + TanStack Start + Tailwind v4 + Motion.

---

## 1. Run it locally (VS Code)

```bash
# 1. unzip, then open the folder in VS Code
cd maaz-portfolio

# 2. install dependencies (Node 20+)
npm install

# 3. start the dev server
npm run dev
```

Open http://localhost:8080 — it hot-reloads on every save.

Recommended VS Code extensions: **ESLint**, **Prettier**, **Tailwind CSS IntelliSense**.

---

## 2. Drop in your images and videos

Two empty folders are waiting for your files. Keep the **exact filenames** below.

### `public/images/`

```
me.png
ibm_penetration_testing.jpg
ibm_badge_penetration.png
CAISR.png            CAISR-cert.png
CCEP.png             CCEP-cert.png
CTIGA.png            CTIGA-cert.png
MASTERCARD.png       TATA.png
AIG.png              DATAFARM.png
coursera_splunk_cm.jpg
wireshark_network_analysis.jpg
mindluster_incident_response.jpg
mindluster_associate_analyst.jpg
simplilearn_intro_cybersecurity.jpg
cursa_cpp.jpg        cursa_mongodb.jpg
internship_devsheildx.jpg
devshield_offerletter.jpg
```

### `public/videos/`

```
pentestapp_startup.mp4
siem_detector.mp4
csne_soclab.mp4
netwrok_security_scanner.mp4
wifi_scanner_python.mp4
lead_scraper.mp4
library_enchant_gui.mp4
hangman_cpp_gui.mp4
```

Any file you don't add simply shows a neutral "demo slot" placeholder — nothing breaks.

> `library_enchant_gui.mp4` is 67 MB. GitHub rejects files over 100 MB and Vercel
> serves large videos slowly — consider compressing it with
> `ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -preset slow out.mp4`, or host it on
> YouTube/Cloudflare Stream and swap the URL in `src/data/portfolio.ts`.

---

## 3. Edit your content

Everything textual lives in **one file**: `src/data/portfolio.ts`

- `profile` — name, role, tagline, email, LinkedIn, GitHub
- `stats` — the four hero counters
- `roles` — CEO / Synteck director / internship / university
- `projects` — cards + which video each one plays
- `startup` — Pentest App bullets
- `certs` — certificate grid
- `skills` — skill chips

Change the email in `profile.email` before going live (it's a placeholder).

Colors, shadows and fonts: `src/styles.css`.

---

## 4. Deploy to Vercel

```bash
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/<you>/portfolio.git
git push -u origin main
```

Then on vercel.com:

1. **Add New → Project → Import** your GitHub repo.
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`.
3. **Environment Variables** → add `NITRO_PRESET` = `vercel` (this tells the
   server build to output a Vercel-compatible bundle instead of the default).
4. **Deploy.**

CLI alternative:

```bash
npm i -g vercel
vercel --prod
```

### Attaching your `.me` domain

Vercel → your project → **Settings → Domains → Add** → type `maazshahid.me`.
Copy the DNS records Vercel shows into your registrar:

| Type  | Name  | Value                  |
| ----- | ----- | ---------------------- |
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cname.vercel-dns.com` |

SSL is issued automatically within a few minutes.

---

## Commands

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | dev server at :8080              |
| `npm run build`   | production build                 |
| `npm run preview` | serve the production build       |
| `npm run lint`    | lint the codebase                |