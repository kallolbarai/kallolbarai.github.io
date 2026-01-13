# Multi-page Academic Website (Static)

Pages:
- `index.html` (Home)
- `projects.html`
- `publications.html`
- `teaching.html`
- `service.html`

## Publications auto-update
This site stores publications in `assets/publications.json` and renders them client-side on the Publications page.

### Option A (recommended): GitHub Actions monthly refresh
1. Push this repo to GitHub.
2. Enable GitHub Pages (Settings → Pages → Deploy from branch → `main` / root).
3. The workflow `.github/workflows/update_publications.yml` will refresh `assets/publications.json` monthly.

**Important:** Google Scholar does not provide an official public API, and automated access may be restricted under Google policies.   
If you prefer a compliant route, consider maintaining a `publications.bib` file (BibTeX) or using ORCID/Crossref as the data source.

### Manual update
Run:
```bash
pip install -r requirements.txt
python scripts/update_publications.py --author o9h1OusAAAAJ --out assets/publications.json
```

## Deploy
### GitHub Pages
Upload files to a GitHub repo → Settings → Pages → Deploy from `main` (root).

### Netlify
Drag-and-drop the folder to Netlify “Deploy manually”.

## Customize links
Edit `index.html` to change:
- Google Scholar: https://scholar.google.com/citations?user=o9h1OusAAAAJ&hl=en
- LinkedIn: http://www.linkedin.com/in/kallol-barai


## Prefilled links
- Google Scholar: https://scholar.google.com/citations?user=o9h1OusAAAAJ&hl=en
- LinkedIn: http://www.linkedin.com/in/kallol-barai

## Download CV button
The navigation includes a **Download CV** button that serves `assets/CV.docx`. Replace this file with your latest CV anytime.

## Projects page images
Place your project figures in `assets/projects/` and update filenames in `projects.html` if you use PNG/JPG.


## Theme + images (updated)
- Theme toggle in nav (dark/light)
- Hero background slideshow (edit `data-hero-images` in `index.html`)
- Headshot: `assets/images/headshot.jpg`
- Field gallery + click-to-zoom lightbox
