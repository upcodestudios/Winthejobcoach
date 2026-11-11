# Win the Job

Wix Headless website built with Astro, React, and the Wix SDK.

## Work on the project

1. Install a supported Node.js release and npm.
2. Install dependencies with `npm install`.
3. Sign in to the Wix CLI with an account that can access the connected Wix site.
4. Start the local development server with `npm run dev`.

Useful project commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development |
| `npm run build` | Build using the Wix CLI |
| `npm run preview` | Preview the Wix build |
| `npm run release` | Release the site through the Wix CLI |

Review any CLI prompts and the Wix CLI documentation before releasing changes to the live site.

## Project structure

- `src/pages/` contains the Astro pages and API routes.
- `src/components/` contains the page and interactive UI components.
- `src/wix/` contains Wix SDK integrations for bookings, forms, CMS, members, and pricing plans.
- `src/data/` contains site copy and presentation data.
- `wix.config.json` identifies the Wix site and app used by this project.

## Wix and GitHub

GitHub stores and versions this project's code. The Wix site remains the source of truth for live
content and account configuration, including services, bookings, member data, and pricing plans.
Changes to those items in Wix are not automatically copied into this repository.

The `.gitignore` excludes local Wix state, build output, dependencies, and `.env` files. Keep
credentials and private tokens out of GitHub. The checked-in Wix identifiers are project
identifiers; do not replace them with credentials.

## Dependency versions

This project does not currently include a dependency lockfile. After installing dependencies,
commit the generated `package-lock.json` so future installs can use the same resolved versions.