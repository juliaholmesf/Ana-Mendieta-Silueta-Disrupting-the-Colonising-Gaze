# Ana Mendieta — *Silueta*: Disrupting the Colonising Gaze

This repository contains a single–page website built for a university art history
submission. The site explores six works from Ana Mendieta’s **Silueta** series
through the lens of decolonial and posthumanist theory. It argues that
Mendieta’s earth‑body actions challenge imperial scopic regimes and the
colonising gaze by dissolving the boundaries between body and landscape.

The page foregrounds images of the works while offering concise analytical
notes, a discussion of broader limitations and a bibliography. All images are
used for educational purposes and remain © The Estate of Ana Mendieta
Collection.

## Contents

```
site/
├── index.html      # Main web page
├── styles.css      # Stylesheet (mobile‑first, minimal)
├── script.js       # Data and interactivity (gallery rendering, hash navigation)
├── images/         # Six locally stored image files
└── README.md       # This file
```

## Viewing and editing

To view the site locally, open `index.html` in a modern web browser. No build
step or external dependencies are required. The JavaScript file renders the
gallery dynamically and enables smooth scrolling, deep linking and a copy
feature for each note.

### Updating works

The gallery is driven by the `works` array in `script.js`. To add or edit
entries:

1. Place any new image into the `images/` folder and reference it with a
   relative path (e.g. `images/07-example.png`). Never hot‑link images.
2. Edit `script.js` and update the `works` array. Each object requires the
   following fields:
   - `id`: a unique string (e.g. `work-07`) used for URL hashes.
   - `title`, `year`, `medium`: descriptive metadata.
   - `image`: relative path to the image file.
   - `alt`: concise, meaningful alternative text.
   - `thumbnailCaption`: a short caption (8–14 words) for the gallery tile.
   - `creditLine`: full credit information (including © notice).
   - `disrupts` / `limitations`: analytical paragraphs as plain strings.
   - `sourceUrl`: the original source link used for reference.
3. Save the file and refresh the page. The site automatically renders the
   updated content.

## Running locally

Open `index.html` in a web browser. If you need to serve the files via HTTP
(for example, to avoid browser restrictions on the Clipboard API), you can use a
simple Python server from the `site/` directory:

```bash
cd site
python3 -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username/silueta-website`).
2. Copy the contents of the `site/` directory into the root of the repository.
3. Commit and push the files to the `main` branch.
4. In the repository’s **Settings**, navigate to **Pages**.
5. Under “Branch,” select `main` and choose the root folder (`/`) for
   deployment.
6. Save. GitHub will build the site and provide a public URL (e.g.
   `https://your-username.github.io/silueta-website/`). It may take a few
   minutes for the site to become available.

### Troubleshooting

- **Images don’t load**: ensure that image paths in `script.js` point to the
  correct files in the `images/` folder. Relative paths are essential on GitHub
  Pages.
- **Stale content**: GitHub Pages may cache resources. Perform a hard refresh
  (Ctrl/Cmd + Shift + R) or clear your browser cache.
- **Hash navigation**: visiting a URL with `#work-03` will load that note
  automatically once the gallery is rendered. If the content does not update,
  ensure the `id` values in `script.js` match the fragment identifiers.

---

This site is provided for educational purposes. All rights to the images belong
to their respective owners.