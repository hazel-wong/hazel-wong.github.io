Website Update Summary — Hazel Wong Portfolio

- Old theme migration:
  Moved the previous "Tokyo" theme files from the main branch into a new branch called "tokyo-theme"
  to preserve the old site while working on the new one.

- New theme setup with Vite:

  1. Added the new theme (built with Vite + React) files.
  2. Ran `npm install` and `npm run build` in the new theme directory to generate the production-ready dist folder.
  3. Moved the contents of dist (including index.html, assets folder, etc.) to the root of the GitHub Pages repo.
  4. Configured vite.config.ts with `base: "/"` to ensure asset paths work correctly on GitHub Pages.
  5. Committed and pushed all changes to the main branch.

- GitHub Pages configuration:

  1. Added a CNAME file with the custom domain "hazelwong.com" to enable the domain.
  2. Set GitHub Pages source to the main branch root folder via repository settings.
  3. Waited for DNS and GitHub Pages to update.
  4. Cleared browser cache or tested in incognito to verify site loads correctly.
  5. Verified site is accessible at both https://hazel-wong.github.io (default) and https://hazelwong.com (custom domain).

- Additional notes:
  - The site cannot be previewed by opening index.html directly from the file system due to CORS issues;
    always preview locally using `npm run preview` or deploy to GitHub Pages.
  - The old theme is safely preserved in the "tokyo-theme" branch in case of future rollback or reference.
