# BIO426 Anatomy Lab

An interactive study page for the cardiovascular terms in **Anatomy Terms for Lab Midterm Exam.pdf**.

**[Open Anatomy Lab](https://vinaypadma.com/bmcc-bio426/anatomy-lab/)**

## Open the page

Use the link above in a modern desktop or mobile browser. No account or installation is needed.

To study offline, download or clone this repository and open this folder’s `index.html` in your browser. Keep this entire folder, including `atlas.js` and the `plates/` directory, together. The page does not require a server or internet connection once these files are downloaded.

## Choose a section

| Tab | Coverage |
| --- | --- |
| Abdominal Aorta | All 30 terms from the PDF’s **Principal Arteries of the Human Body** section, not just the abdominal aorta |
| Principal Veins of the Human Body | 38 veins, including systemic, abdominal, and posterior thoracic views |
| Heart Blood Vessels | 10 coronary structures, with anterior and posterior views |
| The Human Heart | 21 structures, including chambers, valves, muscles, and heart-wall layers |

There are **99 entries** in total. Some structures appear in more than one section because the exam list includes them in both contexts.

## Learning mode

1. Select a tab and leave **Learn** selected.
2. Click or tap a teal target marker on the diagram. You can also choose its name from **Structures in this section** below the diagram.
3. Read the detail panel for its name, location, function, and a key identification note.
4. Where available, use the view buttons above the diagram to switch between anatomical regions or surfaces. Choosing a term automatically opens its matching view.
5. Select **Show labels** to see the source illustration’s labels; **Hide labels** restores the target view.
6. Use **+** to zoom toward the selected structure, **−** to zoom out, and **Fit** to restore the full diagram.

A bright amber ring with a white outline marks your selection; its center identifies the target. The ring stays the same visible size while zooming and pulses gently twice when selected, then remains still. Reduced-motion preferences disable the pulse. In anterior diagrams, the person’s anatomical right is on your left; check the orientation note beneath each diagram. Most plates show systemic arteries in red and veins in blue. Pulmonary arteries appear blue and pulmonary veins red. Portal plates use colors to distinguish tributaries, and the 3D models have their own tissue colors; read the note below each plate.

## Quiz mode

1. Choose the section to practice, then select **Quiz yourself**.
2. Identify the structure marked by the gold ring. Use the zoom controls if needed.
3. Type its name and select **Check answer**, or press **Enter**.
4. Read the feedback, then select **Next structure**. **Reveal answer** shows the answer and records that question as missed.
5. At the end, review your score and missed structures. Choose **Retry missed** to practice those entries or **New full round** to reshuffle the entire section.

Each full round presents every entry in the selected section once, in random order. Questions automatically open the appropriate diagram view; view switching and the term list are hidden or disabled during the quiz to avoid revealing names.

### Accepted answers

Matching ignores capitalization, extra spaces, and ordinary punctuation. “Artery” and “vein” can be omitted. Common synonyms and selected abbreviations are accepted, for example:

- **Internal Carotid Artery** or **Internal Carotid**
- **Bicuspid Valve**, **Mitral Valve**, or **Left AV Valve**
- **Anterior Interventricular Branch of LCA**, **Left Anterior Descending Artery**, or **LAD**
- **Fibular Artery** or **Peroneal Artery**
- **Superior Vena Cava** or **SVC**

An explicitly wrong vessel type is rejected: “Internal Carotid Vein” does not answer “Internal Carotid Artery.” Anatomical distinctions still matter: **External Carotid** does not answer an **Internal Carotid** question. The page accepts explicitly supported names rather than arbitrary misspellings or every possible abbreviation.

### Progress and restarting

Scores exist only for the current round; they are not saved between visits or browser refreshes. Switching sections while in quiz mode starts a fresh full round for the newly selected section. Switching to Learn and back to Quiz also starts a new round. Retry rounds score only the missed entries included in that round.

## Keyboard use

Use **Tab** to move through controls and **Enter** or **Space** to activate buttons or selectable diagram structures in Learn mode. When a section tab has focus, use the left/right arrow keys to change tabs, or Home/End to jump to the first/last tab. Press Enter in the answer field to submit a quiz answer.

## Diagram scope and references

The diagrams use published OpenStax illustrations, supplemental XR Anatomy models, and one public-domain Gray’s Anatomy plate. Each plate has a source credit and orientation note. Interactive markers, crops, and removable label covers are added in the browser; the source image pixels are unchanged. Quiz mode hides labels, view names, and explanatory plate notes until the answer is graded.

See [SOURCES.md](SOURCES.md) for artwork licenses, source links, and anatomical interpretation notes. Source artwork does not establish marker correctness by itself: every target must also be visually reviewed. These illustrations complement your lab models and dissections.

Two exam-list terms require an interpretation:

- **Arcuate artery** is shown as the artery on the dorsum of the foot, rather than the renal arcuate arteries.
- **Phrenic vein** is illustrated as the inferior phrenic veins.

Confirm these interpretations with your instructor or lab model. The PDF’s “External Carotid Srtery” typo is corrected to “External Carotid Artery.”

Further reading:

- [OpenStax Anatomy and Physiology 2e: Circulatory Pathways](https://openstax.org/books/anatomy-and-physiology-2e/pages/20-5-circulatory-pathways)
- [OpenStax Anatomy and Physiology 2e: Heart Anatomy](https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy)

## Maintain the page

- `index.html`: page structure, controls, and reference notes.
- `style.css`: layout, colors, and responsive styles.
- `data.js`: names, accepted aliases, and explanations.
- `atlas.js`: source plates, crops, label covers, and target coordinates.
- `plates/`: attributed source artwork; licenses are listed in `SOURCES.md`.
- `app.js`: diagrams, selections, zoom, quiz flow, and answer matching.
- `verify.cjs`: term coverage, source-file, and target-coordinate checks.
- `browser-qa.cjs`: Playwright tests and rendered screenshots.

From the repository root, run:

```sh
node bmcc-bio426/anatomy-lab/version-assets.cjs
node bmcc-bio426/anatomy-lab/verify.cjs
node --check bmcc-bio426/anatomy-lab/app.js
node --check bmcc-bio426/anatomy-lab/data.js
```

### Run browser QA locally (no GitHub Actions required)

Install Playwright in an isolated directory once:

```sh
npm install --prefix /tmp/bio426-playwright --no-package-lock playwright@1.54.1
/tmp/bio426-playwright/node_modules/.bin/playwright install chromium
```

From the repository root, test the working copy:

```sh
PLAYWRIGHT_MODULE=/tmp/bio426-playwright/node_modules/playwright \
QA_TARGET=checkout \
node bmcc-bio426/anatomy-lab/browser-qa.cjs
```

Use `QA_TARGET=live` to test the hosted page. Optionally set `QA_CHROME` to an installed Chrome executable, such as `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`. The checkout runner starts and stops its own local server. Set `QA_OUTPUT` to choose an output directory; the default is `qa-output/` relative to your current directory.

The browser checks cover all 99 list selections and diagram targets, view switching, labels, zoom centering, complete quiz rounds, aliases, wrong answers, reveals, retry rounds, restarting, keyboard tabs, mobile layouts, and failed assets. Screenshots and `findings.json` are saved for inspection. A failing check exits with code 1. Browser checks verify behavior; inspect the screenshots and compare markers against the source plates to assess anatomy.

After editing JavaScript or CSS, run `version-assets.cjs` to update their content-versioned URLs in `index.html`. This prevents returning browsers from combining old scripts with a new page. `verify.cjs` checks that these versions match the files.

To publish an update, commit and push the files in this folder to the site’s `master` branch. GitHub Pages serves this directory directly; no build step is required.
