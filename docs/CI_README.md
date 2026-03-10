CI / GitHub Actions README

Overview
- This project uses GitHub Actions to build, test, and optionally deploy the frontend (currency-dashboard) using a workflow at .github/workflows/ci.yml.
- The workflow runs on push/pull_request and builds the frontend located at currency-dashboard/frontend, then archives the dist directory as an artifact and (on push) deploys it to GitHub Pages.

Required repository structure
- currency-dashboard/frontend must contain a working package.json with scripts:
  - build (npm run build)
  - test (optional)

Recommended repository secrets (only needed for private registries or protected deploys)
- NODE_AUTH_TOKEN: npm token, if you use a private registry or need to authenticate to install packages
- POSTGREST_URL: if you need to provide a backend endpoint to the frontend during CI (non-sensitive values can be set in workflow env)

How to enable GitHub Pages deployment
- The workflow uploads the built frontend/dist as the Pages artifact and the Pages action will publish it according to repository Pages settings.
- Ensure GitHub Pages is enabled in repo settings (Settings → Pages) and the deployment is allowed for Actions.

How to use
1. Commit and push .github/workflows/ci.yml to your repository.
2. On push to main (or master) the workflow will run automatically. The build artifact is saved under the Actions run and also uploaded as an artifact named frontend-dist.
3. If you want the artifact deployed to Pages automatically, ensure Pages is enabled and Actions are allowed to publish.

If you want me to push this workflow into your remote repo for you, provide a secure PAT outside the chat (do not paste it here). Alternatively, you can review and push the files yourself.
