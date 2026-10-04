# BMCC BIO426 study tools

Personal study pages for BIO426. Each topic lives in its own folder so this collection can grow throughout the course.

## Available tools

| Topic | Open the page | Instructions |
| --- | --- | --- |
| Cardiovascular anatomy | [Anatomy Lab](https://vinaypadma.com/bmcc-bio426/anatomy-lab/) | [Anatomy Lab README](anatomy-lab/README.md) |

## Folder structure

```text
bmcc-bio426/
├── README.md
└── anatomy-lab/
    ├── README.md
    ├── index.html
    ├── style.css
    ├── data.js
    ├── app.js
    └── verify.cjs
```

For a new topic, add a sibling folder with its own `index.html`, assets, and README, then add its link to the table above. For example, `bmcc-bio426/new-topic/index.html` would be available at `https://vinaypadma.com/bmcc-bio426/new-topic/`.

These pages are hosted by the existing `vpadma/vpadma.github.io` GitHub Pages site. Publishing changes to its `master` branch updates the site. The main landing page and custom-domain configuration do not need to change when adding a topic folder.
