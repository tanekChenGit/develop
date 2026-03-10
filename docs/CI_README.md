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

繁體中文說明

概述
- 本 CI 工作流程使用 GitHub Actions 為 currency-dashboard/frontend 執行建置、測試，並於 push 時將產物部署到 GitHub Pages（倘若啟用 Pages 部署設定）。

必要檔案結構
- currency-dashboard/frontend 必須包含可運作的 package.json，且 scripts 包含：
  - build（npm run build）
  - test（選用）

建議的 Repo Secret（視情況而定）
- NODE_AUTH_TOKEN：若你使用 private npm registry 或需認證，請把 npm token 存為此 secret。  
- POSTGREST_URL：若前端在 CI 需知道後端端點，可把此值用 secret 或非敏感 env 設定。  

啟用 GitHub Pages 部署
- workflow 會將 dist 產物上傳成 Pages artifact，並由 Actions 的 Pages 部署步驟發佈，實際能否成功部署取決於 repository 的 Pages 設定與 Actions 權限。請於 GitHub repository 的 Settings → Pages 確認允許 Actions 發佈。

使用方式（快速）
1. 把 .github/workflows/ci.yml 與 docs/CI_README.md commit 並 push 到遠端（或開 PR）  
2. 推送至 main 或開 PR 後，CI workflow 會依觸發條件（push / pull_request）執行建置與測試  
3. 若要自動發佈到 Pages，請確保 Pages 已啟用且 workflow 有權限上傳與發佈（合併到 main 並 push 後 Pages 部署步驟會執行）

注意事項
- Workflow 中 pages-deploy job 目前設定為「if: github.event_name == 'push'」，也就是僅在 push 事件（例如 merge 到 main）時進行 Pages 部署；如果你希望 PR 建立時也能測試 Pages 部署，需調整工作流程條件或在 PR 流程中使用其他測試部署方法（例如使用 preview 部署到臨時域或使用 actions/upload-pages-artifact 於 PR 觸發）。
- 若你的 repository 為 private 或有私密相依，請先配置對應的 Secrets。

