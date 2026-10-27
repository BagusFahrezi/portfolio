# Bagus Fahrezi — Portfolio (React + Vite + Tailwind)

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build -> dist/

## Edit content (no component changes needed)
| What | File |
|---|---|
| Email, LinkedIn, GitHub, WhatsApp, photo, PDF paths, show/hide certifications | `src/profile.js` |
| Skills (tags) | `src/skills.js` |
| Projects (add one object = new card + detail modal), research | `src/projects.js` |
| Work experience, `needsConfirm` badge | `src/experience.js` |
| UI text / About / hero copy (EN + ID) | `src/App.jsx` (`UI` object) |

Text fields are `[English, Indonesian]` arrays. Empty links (`''`) are hidden automatically.
Project images: put files in `public/img/` and set `cover: '/img/x.webp'` and `gallery: ['/img/y.webp']`.

## Replace PDFs
Overwrite `public/documents/CV_Bagus_Fahrezi.pdf` and `Portfolio_Bagus_Fahrezi.pdf`, or edit `scripts/make_pdfs.py` and run `pip install reportlab && python scripts/make_pdfs.py`.

## GitHub
    git init && git add . && git commit -m "Initial portfolio"
    git branch -M main && git remote add origin https://github.com/<user>/<repo>.git && git push -u origin main

## Deploy to Vercel
Vercel → Add New Project → import the repo → Framework: Vite (auto) → Build `npm run build`, Output `dist` → Deploy.

## Before publishing — see checklist in the chat reply
