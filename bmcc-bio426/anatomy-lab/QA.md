# Anatomy Lab QA — October 4, 2026

## Scope and evidence

- Source syllabus: `Anatomy Terms for Lab Midterm Exam.pdf`, extracted with `pdftotext`. All 99 ordered names match the page; the PDF’s “External Carotid Srtery” typo is corrected.
- Four sections: 30 arteries, 38 veins, 10 coronary structures, and 21 heart structures.
- Local automated result: **1,223 checks passed, zero failures**, using Playwright 1.54.1 with installed Google Chrome. The suite includes a mobile context with touch emulation.
- Local evidence: `/private/tmp/bio426-release-touch-qa/findings.json` and its screenshots. A subsequent focused screenshot checked the final gastric label-cover adjustment.
- Published implementation: commit `eb0bf778c422bccd002cc2a6e3d9f6f653d89360` in `vpadma/vpadma.github.io`.
- Hosted regression: **1,223 checks passed, zero failures**, against https://vinaypadma.com/bmcc-bio426/anatomy-lab/. Evidence: `/private/tmp/bio426-release-live-qa/findings.json` and rendered screenshots. The Pages build was confirmed for the implementation commit before the run.
- The landing page and `CNAME` have no changes relative to the previous published commit.

## Improvements made

The original hosted page failed 45 of 217 baseline checks: 44 selections zoomed to the wrong vertical position, and a heart chamber’s interior did not respond to clicks. Its hand-drawn vascular paths also lacked the detail and spatial relationships needed for anatomy study.

The replacement uses 15 attributed source images and 18 regional or surface views. All 99 structures have a mapped target on a published illustration. The old schematic paths were removed. Anterior, posterior, and oblique views are identified explicitly. Arteries, veins, valves, chambers, and wall layers are located on the source anatomy rather than independently drawn into a silhouette.

Visual review included close-up contact sheets of **every target**, compared against the original artwork and label leaders. The review corrected the left gastric vein and portal-vein marker positions and the right ventricular target. It also caught adjacent panels showing outside the intended viewport, answer-bearing plate notes appearing during quizzes, and a label cover obscuring an unnecessary context label. These issues were corrected and retested.

## Interaction coverage

| Area | Exercised behavior |
| --- | --- |
| Navigation | All four section tabs; every regional view; arrow keys, Home, End; brand reset |
| Learning | All 99 list selections; direct diagram selection after selecting a different target; keyboard activation and retained focus |
| Labels | Show/hide source labels for every target; labels and explanatory notes unavailable before grading in quizzes |
| Zoom | Centering for all 99 targets; Fit; minimum and maximum zoom |
| Quiz | Complete correct rounds in every section; no repeated targets; canonical names and all declared aliases |
| Grading | Empty submissions; incorrect responses; explicit artery/vein mismatches; Enter submission; reveal; feedback and next question |
| Completion | Perfect scores; mixed scores; only missed/revealed questions in retry; reset retry scores; restart full round |
| Mobile | 390px and 768px layouts; taps on all 99 targets in mobile emulation; correct-answer, next, and reveal flows in every section |
| Supporting UI | Reference disclosure opens/closes; initial state after brand navigation; no failed assets or JavaScript exceptions |

## Visual and anatomical self-evaluation

- **Structural detail:** substantially improved. Published plates show skeletal landmarks, distinct vessel courses, cardiac wall thickness, valve leaflets, chordae, and papillary muscles. Separate regional views keep small structures identifiable.
- **Target correctness:** all 99 targets were inspected at close range. The accessory hemiazygos is mapped to the upper left paravertebral segment; its variable connections are described and referenced in `SOURCES.md`.
- **Quiz presentation:** markers identify a location without revealing a structure’s name. Source answer labels are covered in the browser. Original leader lines remain; these are labeling-study plates rather than unlabeled dissection photographs.
- **Source fidelity:** the original image files are preserved. The interface adds crops, markers, and label covers. The historic left gastric vein illustration is lower resolution than the modern plates and uses older terminology, explained in Learn mode.
- **Teaching scope:** each term has location, function, and a distinction or memory aid at undergraduate level. The explanations address oxygenation exceptions, vessel continuations, valve mechanics, and common anatomical variation.

Two syllabus terms remain inherently ambiguous: “arcuate artery” is interpreted as the foot vessel, and “phrenic vein” as inferior phrenic. These choices are disclosed in the page and README for comparison with the instructor’s lab models.

This QA establishes tested Chromium behavior and a source-based visual review. It does not constitute independent review by an anatomy instructor or testing on physical iOS/Android devices. Automated pass counts alone do not establish anatomical correctness.

## Reproduce

See [README.md](README.md) for local setup, `QA_TARGET=checkout`, `QA_TARGET=live`, and screenshot output options. No GitHub Actions run is required for local testing.
