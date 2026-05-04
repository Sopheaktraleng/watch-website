Zenvo-style static site demo

This is a small static website that follows the layout and content style from:
https://novsochetra.github.io/zenvo-watch-website/

What I created
- `index.html` — the main page
- `css/styles.css` — styles (responsive)
- `js/script.js` — minimal interactivity (mobile menu + newsletter)

How to preview

Open `index.html` in your browser, or run a local server (recommended):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes
- Images are referenced from the original site (remote URLs). Replace with local assets in `assets/` if you prefer.
- This is a visual/structural reimplementation for demo purposes and does not include backend/ecommerce features.

Next steps (optional)
- Add local images into `assets/images/` and update paths
- Improve accessibility (aria labels, landmarks)
- Add more pages (product detail, cart, account)
