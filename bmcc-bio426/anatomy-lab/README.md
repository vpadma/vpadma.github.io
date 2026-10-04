# BIO426 Anatomy Lab

An interactive study page for the cardiovascular terms in **Anatomy Terms for Lab Midterm Exam.pdf**.

**[Open Anatomy Lab](https://vinaypadma.com/bmcc-bio426/anatomy-lab/)**

## Open the page

Use the link above in a modern desktop or mobile browser. No account or installation is needed.

To study offline, download or clone this repository and open this folder’s `index.html` in your browser. Keep `index.html`, `style.css`, `data.js`, and `app.js` together. The page does not require a server or internet connection once these files are downloaded.

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
2. Click or tap a vessel or structure in the diagram. You can also choose its name from **Structures in this section** below the diagram.
3. Read the detail panel for its name, location, function, and a key identification note.
4. Where available, use the view buttons above the diagram to switch between anatomical regions or surfaces. Choosing a term automatically opens its matching view.
5. Use **+** to zoom toward the selected structure, **−** to zoom out, and **Fit** to restore the full diagram.

The gold highlight marks your selection. In anterior diagrams, the person’s anatomical right is on your left; check the orientation note beneath each diagram. Vessel colors distinguish relatively oxygen-rich and oxygen-poor blood, while purple also identifies tissue or portal structures. The pulmonary arteries therefore appear blue and pulmonary veins red.

## Quiz mode

1. Choose the section to practice, then select **Quiz yourself**.
2. Identify the structure marked by the gold highlight and white target dot. Use the zoom controls if needed.
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

Anatomical distinctions still matter: **External Carotid** does not answer an **Internal Carotid** question. The page accepts explicitly supported names rather than arbitrary misspellings or every possible abbreviation.

### Progress and restarting

Scores exist only for the current round; they are not saved between visits or browser refreshes. Switching sections while in quiz mode starts a fresh full round for the newly selected section. Switching to Learn and back to Quiz also starts a new round. Retry rounds score only the missed entries included in that round.

## Keyboard use

Use **Tab** to move through controls and **Enter** or **Space** to activate buttons or selectable diagram structures in Learn mode. When a section tab has focus, use the left/right arrow keys to change tabs, or Home/End to jump to the first/last tab. Press Enter in the answer field to submit a quiz answer.

## Diagram scope and references

The diagrams are original, simplified schematics for recognizing location and relationships. They are not scale drawings, dissection photographs, or replacements for your lab models. Some paired vessels are shown on one side, and posterior structures may be projected onto an anterior outline for readability. Dedicated views and orientation notes clarify these choices.

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
- `data.js`: names, accepted aliases, explanations, and SVG paths for each structure.
- `app.js`: diagrams, selections, zoom, quiz flow, and answer matching.
- `verify.cjs`: data and quiz-logic checks using Node.js built-ins.

From the repository root, run:

```sh
node bmcc-bio426/anatomy-lab/verify.cjs
node --check bmcc-bio426/anatomy-lab/app.js
node --check bmcc-bio426/anatomy-lab/data.js
```

The checks cover entry counts, required fields, canonical answers and aliases, carotid distinctions, full quiz rounds, scoring, duplicate submission handling, and missed-term retries. They do not replace browser checks of diagram placement, appearance, or touch interaction.

To publish an update, commit and push the files in this folder to the site’s `master` branch. GitHub Pages serves this directory directly; no build step is required.
