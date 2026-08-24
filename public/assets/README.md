# Asset Notes

## Current Resume PDF

The current public resume PDF is:

`resume-august-24-2026.pdf`

This date-named file is the August 24, 2026 resume version used by this site.

Resume PDFs are binary files. Git cannot provide meaningful line-by-line diffs for them, and repeated binary updates can add unnecessary repository weight over time.

## Update Rule

When publishing a new resume, add a new date-named PDF instead of reusing a generic filename.

Use this naming style:

`resume-month-dd-yyyy.pdf`

Then edit the repository-relative file `src/data/siteLinks.ts` and update its resume link to the relative asset path for the new date-named PDF.

Old resume PDFs must not remain in Git history. When publishing a new version, remove the old file by its exact path from the history of every affected branch and tag, then force-update the corresponding remote refs so binary files do not continue increasing the repository size.

This process rewrites commit hashes and remote history. Before running it, explicitly confirm the removal path and every affected branch and tag, then notify other collaborators that they must resynchronize or clone the repository again. Before every force push, ask the user again and obtain explicit confirmation; never reuse authorization from an earlier force push.
