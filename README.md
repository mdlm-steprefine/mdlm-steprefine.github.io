# StepRefine Project Page

Static project page for **StepRefine: Rethinking in Spikes**.

## Local preview

Run from this directory:

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Open http://localhost:8765/.

## Files

- `index.html`: page content.
- `style.css`: layout, typography, and responsive styles.
- `app.js`: citation copying.
- `assets/`: figures displayed on the page, the logo, title font, BibTeX, and manuscript source archive.

The page can be served directly from the repository root on GitHub Pages. `.nojekyll` disables Jekyll processing. Figures and manuscript sources come from the supplied camera-ready archive; the logo comes from `StepRefine-S-Version2.pdf`.

## Acknowledgements

The project-page layout is inspired by [LEAD](https://mlrm-lead.github.io/), whose [website source](https://github.com/mlrm-LEAD/mlrm-LEAD.github.io) is publicly available.
