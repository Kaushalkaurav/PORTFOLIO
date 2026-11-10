# Kaushal Kaurav — Portfolio

A responsive, single-page portfolio built with React 19, Vite, CSS, and Lucide icons.

## Run locally

```bash
cd "my portfolio"
npm ci
npm run dev
```

To check production output:

```bash
npm run lint
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — homepage and functional section navigation
- `src/portfolio.css` — responsive design and dark/light themes
- `index.html` — metadata and browser title
- `public/favicon.svg` — custom KK brand icon

## Publishing

Set the Vercel / Netlify project **root directory** to `my portfolio`, build command to `npm run build`, and output directory to `dist`. The portfolio uses in-page anchors, so no client-side route rewrite is required.

## Before sharing publicly

- Add a genuine professional résumé and a verified download URL before introducing a download button.
- Add verified project repositories, screenshots and live demos to the `projects` data in `src/App.jsx`.
- Add a preferred contact email or professional social accounts only after verifying they are correct.
- The hero uses an original abstract developer motif because there is no portrait asset in this repository. Replace it with an actual portrait only when a photo is available.

No visitor-facing links lead to missing local files or unsupported contact forms.
