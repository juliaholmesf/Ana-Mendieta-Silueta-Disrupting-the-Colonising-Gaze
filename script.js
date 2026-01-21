/*
 * script.js
 * Data-driven rendering and interactions for the Silueta gallery.
 * Defines a works array containing metadata and notes for each piece, renders
 * the gallery dynamically, updates the Notes section on selection, handles
 * hash-based navigation, smooth scrolling and clipboard copy.
 */

// Array of works. Each object contains metadata, descriptive text and credit.
const works = [
  {
    id: 'work-01',
    title: 'Anima (Alma/Soul)',
    year: '1976 (1977 print)',
    medium: 'chromogenic print, 34.3 × 50.8 cm',
    image: 'images/01-anima-alma-soul.png',
    alt: 'Long-exposure photograph of a wooden figure in a burning silhouette with outstretched arms, placed outdoors at night with hills in the background; flames and smoke blur the body into the dark sky.',
    thumbnailCaption: 'Burning silhouette on a hillside at night',
    creditLine: 'Ana Mendieta, Anima (Alma/Soul), from the Silueta series, 1976 (1977 print), chromogenic print, 34.3 × 50.8 cm (Smithsonian American Art Museum, Smithsonian Institution, Washington, D.C.) © The Estate of Ana Mendieta Collection',
    disrupts: 'A tall wooden frame in the shape of a female silhouette is ignited so that sparks and smoke blur the figure into the night. Mendieta’s burning form collapses the distance between body and atmosphere: there is no stable object for the spectator to classify, only a fleeting trace that dissipates into the landscape. Rooted in Santería and Taíno cosmologies that honour the earth as goddess, the piece demonstrates a posthumanist desire to “become one with the earth.” It refuses the imperial scopic regime in which the European observer frames what counts as real, instead privileging transformation, ritual and relationality over fixed representation. The figure glows, evaporates and is absorbed back into the land, withdrawing itself from the colonising gaze.',
    limitations: 'The photographic print freezes an event meant to vanish. Although the artist’s body is absent, the burning silhouette still evokes a female form available to the viewer. When shown in a museum it risks being consumed as spectacular pyrotechnics rather than as a ritual. Documentation reinscribes the camera’s frame—“what was there” becomes “what is in the frame”—and the subtle spiritual references may be lost. Fire as a medium can also recall violent histories and can be interpreted without the intended decolonial nuance.',
    sourceUrl: 'https://smarthistory.org/ana-mendieta-silueta-series/'
  },
  {
    id: 'work-02',
    title: 'Untitled',
    year: '1976 (1991 posthumous print)',
    medium: 'chromogenic print, 32.7 × 49.21 cm',
    image: 'images/02-untitled-silueta-1976-moca.png',
    alt: 'Red flowers arranged in a human silhouette shape lying on wet sand at the edge of a beach, with incoming waves washing near the form.',
    thumbnailCaption: 'Floral silhouette on a beach with waves',
    creditLine: 'Ana Mendieta, Untitled, from the Silueta series, 1976 (1991 posthumous print), chromogenic print, 32.7 × 49.21 cm (The Museum of Contemporary Art, Los Angeles) © The Estate of Ana Mendieta Collection',
    disrupts: 'A silhouette composed of red flowers lies on damp sand at the edge of the sea. As waves approach, the outline dissolves and is reclaimed by water. By constructing her “earth‑body work” from organic materials and allowing nature to erase it, Mendieta challenges the colonial impulse to fix and possess bodies and territories. The vivid red evokes blood, menstruation and sacrifice, referencing Afro‑Cuban Santería and Taíno rituals. This ceremony decentres the European observer: agency is granted to the ocean and the unseen forces it embodies. The work’s power lies in its ephemerality and in the way it foregrounds relationality between land, sea and feminine subjectivity.',
    limitations: 'In photographic form the dissolving gesture is immobilised and aestheticised. Viewers encounter a stable artefact rather than an event of disappearance. The floral silhouette can be read as essentialising femininity by equating the female body with fertility, and the use of blood‑like pigment risks reinforcing voyeuristic tropes. Spectators in a gallery may admire the composition without reflecting on the decolonial context or the ritual of surrender, thereby folding the piece back into the imperial gaze it critiques.',
    sourceUrl: 'https://smarthistory.org/ana-mendieta-silueta-series/'
  },
  {
    id: 'work-03',
    title: 'Untitled (Labyrinth Blood Imprint)',
    year: '1974',
    medium: 'single-channel Super 8mm film',
    image: 'images/03-labyrinth-blood-imprint.png',
    alt: 'Film still of a stone courtyard where a dark, blood-like stain outlines a human figure with extended arms on the ground, with weathered walls and greenery in the background.',
    thumbnailCaption: 'Blood-like imprint in a courtyard',
    creditLine: 'Ana Mendieta, Untitled (Labyrinth Blood Imprint), from the Silueta series, 1974, single-channel Super 8 mm film (M+, Hong Kong) © The Estate of Ana Mendieta Collection',
    disrupts: 'In this Super‑8 film Mendieta pours animal blood into the outline of her body carved in a stone courtyard. The camera lingers on the stain as it pools and dries. By substituting her physical presence with a residue, she transforms a space of colonial architecture into a site of mourning. The absent figure resists the classificatory gaze: there is no body to categorise, only a trace that signifies violence and sacrifice. The work echoes indigenous and Afro‑Cuban rituals, making visible histories of displacement while situating the human within cycles of decay and renewal. Its unsettling materiality confronts the viewer with the cost of imperial domination without offering a spectacle of the artist’s body.',
    limitations: 'Because the film is the primary record, the viewer’s experience is mediated by the camera’s framing. Blood as a material can be sensationalised, encouraging readings that focus on shock rather than on ritual. The piece might also be interpreted through sexist or fetishising lenses, especially when detached from its cultural context. Museum screenings re‑contextualise the work within the very institutions that have perpetuated imperial visual regimes, thereby attenuating its critical charge.',
    sourceUrl: 'https://smarthistory.org/ana-mendieta-silueta-series/'
  },
  {
    id: 'work-04',
    title: 'Untitled',
    year: '1976 (1991 posthumous print)',
    medium: 'chromogenic print, 50.8 × 33.7 cm',
    image: 'images/04-untitled-silueta-1976-smith.png',
    alt: 'Shallow trench carved in sandy shoreline shaped like a human form with arms extended above head, filled with vivid red pigment that bleeds into the surrounding water.',
    thumbnailCaption: 'Carved silhouette with red pigment at the water’s edge',
    creditLine: 'Ana Mendieta, Untitled, from the Silueta series, 1976 (1991 posthumous print), chromogenic print, 50.8 × 33.7 cm (Smith College Museum of Art, Northampton) © The Estate of Ana Mendieta Collection',
    disrupts: 'A shallow trench in the sand traces a human form with arms raised; vivid red pigment fills the cavity before seeping into the adjacent water. The work literalises absence: the body is present only as negative space. Mendieta’s earth‑body practice, described as a performance that imprints her silhouette into natural elements, here becomes an interaction with tides and pigments. The fluid boundary between land and sea destabilises any notion of a fixed subject and recalls both wound and womb. By letting the tide complete the work, Mendieta relinquishes control, refusing the colonial desire to capture and classify, and aligning herself instead with forces of change and return.',
    limitations: 'The photograph fixes a fleeting situation and may aestheticise the red as painterly. Viewers might read the work as a picturesque composition, overlooking its commentary on violence and regeneration. As with other Siluetas, the use of a female outline could reinforce gendered associations between women and nature. Exhibiting the print within Western institutions reasserts the frame of the imperial archive, potentially dulling the piece’s resistance.',
    sourceUrl: 'https://smarthistory.org/ana-mendieta-silueta-series/'
  },
  {
    id: 'work-05',
    title: 'Untitled (Grass on Woman)',
    year: '1972',
    medium: 'chromogenic print, 20.3 × 25.4 cm',
    image: 'images/05-grass-on-woman.png',
    alt: 'A woman lies face-down in a grassy clearing; her nude body is partially covered by a layer of grass and weeds, blending her form into the landscape.',
    thumbnailCaption: 'Body covered with grass on the forest floor',
    creditLine: 'Ana Mendieta, Untitled (Grass on Woman), 1972, chromogenic print, 20.3 × 25.4 cm (Hirshhorn Museum and Sculpture Garden, Smithsonian Institution, Washington, D.C.) © The Estate of Ana Mendieta Collection',
    disrupts: 'In one of Mendieta’s earliest earth‑body actions, she lies prone in a clearing while covering her nude body with grass and weeds. Her form almost disappears into the vegetation, thwarting the spectator’s attempt to isolate and possess the female nude. By merging with the ground she performs a return to the maternal source and situates personhood within more‑than‑human networks. The piece complicates identity by using the body as both image and medium; the result is neither self‑portrait nor performance. It undermines an imperial scopic regime that privileges sight and classification by foregrounding sensory touch, vulnerability and becoming with the earth.',
    limitations: 'Despite its intent, the association between woman and nature risks reinforcing essentialist ideas criticised by feminists. The nude body may invite voyeuristic or erotic readings that reproduce patriarchal gazes. Because the action is known only through a staged photograph, the viewer cannot experience the act’s tactile merging but instead consumes an image framed by the camera. Institutional display can flatten the piece into an aestheticised study of form, detaching it from its decolonial motivations.',
    sourceUrl: 'https://smarthistory.org/ana-mendieta-silueta-series/'
  },
  {
    id: 'work-06',
    title: 'Imágen de Yágul',
    year: '1973',
    medium: 'chromogenic print, 50.8 × 35.3 cm',
    image: 'images/06-imagen-de-yagul.png',
    alt: 'In a shallow stone chamber, a nude woman lies on her back with her body covered in white and green wildflowers and foliage, blending her form into the surrounding earth and stones.',
    thumbnailCaption: 'Body covered in flowers in a stone tomb',
    creditLine: 'Ana Mendieta, Imágen de Yágul, from the Silueta series, 1973, chromogenic print, 50.8 × 35.3 cm (San Francisco Museum of Modern Art) © The Estate of Ana Mendieta Collection',
    disrupts: 'In this inaugural Silueta, Mendieta lies in a Zapotec tomb in Yágul, Mexico, her body covered with white flowers and green leaves. The composition evokes burial and rebirth; the artist’s form is entwined with the flora, making her indistinguishable from the site. This ritual posits the human body not as sovereign observer but as one element within ancestral ecologies. By working in protected cultural sites and leaving the works to decay, Mendieta honours indigenous cosmologies and counters the imperial gaze that would classify and possess sacred landscapes. The piece invites viewers to consider the interconnectedness of life, death and land beyond Western humanist frameworks.',
    limitations: 'Creating art within an archaeological site raises questions of appropriation and consent. While the work gestures towards indigenous traditions, it does so through the body of a Cuban exile and is later circulated in Euro‑American museums. The photograph transforms a personal ritual into a collectible image, reducing the ephemerality and context of the action. Spectators might exoticise the use of flowers and ruins, and the tension between homage and exploitation persists.',
    sourceUrl: 'https://smarthistory.org/ana-mendieta-silueta-series/'
  }
];

// Render the gallery grid and attach event listeners.
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  works.forEach(work => {
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.setAttribute('role', 'listitem');
    button.setAttribute('data-id', work.id);
    button.setAttribute('aria-label', work.title);
    // Build inner HTML
    const img = document.createElement('img');
    img.src = work.image;
    img.alt = work.alt;
    img.loading = 'lazy';
    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = work.thumbnailCaption;
    button.appendChild(img);
    button.appendChild(caption);
    button.addEventListener('click', () => selectWork(work.id));
    grid.appendChild(button);
  });
}

// Update the notes section when a work is selected.
function selectWork(id) {
  const work = works.find(w => w.id === id);
  if (!work) return;
  // Update hash without page reload
  if (history.replaceState) {
    history.replaceState(null, '', '#' + id);
  } else {
    window.location.hash = id;
  }
  const notesContainer = document.getElementById('notes-content');
  // Construct the HTML for the selected work
  const htmlParts = [];
  htmlParts.push(`<img src="${work.image}" alt="${work.alt}">`);
  htmlParts.push(`<h3>${work.title} (${work.year})</h3>`);
  htmlParts.push(`<p><em>${work.medium}</em></p>`);
  htmlParts.push(`<p class="credit-line">${work.creditLine}</p>`);
  htmlParts.push(`<h3>How it disrupts the imperial scopic regime</h3>`);
  htmlParts.push(`<p>${work.disrupts}</p>`);
  htmlParts.push(`<h3>Limitations / tensions</h3>`);
  htmlParts.push(`<p>${work.limitations}</p>`);
  htmlParts.push('<div class="button-row">');
  htmlParts.push('<button class="action" id="back-to-gallery">Back to gallery</button>');
  htmlParts.push('<button class="action" id="copy-note">Copy note</button>');
  htmlParts.push('</div>');
  notesContainer.innerHTML = htmlParts.join('');
  // Attach button actions
  const backBtn = document.getElementById('back-to-gallery');
  const copyBtn = document.getElementById('copy-note');
  backBtn.addEventListener('click', () => {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  });
  copyBtn.addEventListener('click', () => {
    const text = `${work.title} (${work.year})\n${work.creditLine}\n\nHow it disrupts the imperial scopic regime:\n${work.disrupts}\n\nLimitations / tensions:\n${work.limitations}`;
    // Use Clipboard API if available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      // Fallback: create a temporary textarea
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Copy failed', err);
      }
      document.body.removeChild(textarea);
    }
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = 'Copy note';
    }, 2000);
  });
  // Scroll to the notes section
  document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
}

// Initialise gallery and handle initial hash
function initFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const exists = works.some(w => w.id === hash);
    if (exists) {
      // Delay selection until gallery is rendered
      setTimeout(() => selectWork(hash), 0);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  initFromHash();
});