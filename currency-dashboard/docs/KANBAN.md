# Kanban Board - 外幣儀表板開發追蹤

## 📋 待辦 (TODO)

### Phase 1: 專案初始化
- [ ] **P1-1**: 建立專案目錄結構
  - 描述: 建立 frontend/, backend/, docs/ 資料夾
  - 負責: Backend
  
- [ ] **P1-2**: 初始化前端專案 (React + TypeScript + Vite)
  - 描述: `npm create vite@latest frontend -- --template react-ts`
  - 負責: Frontend
  
- [ ] **P1-3**: 初始化後端專案 (Node.js + Express + TypeScript)
  - 描述: 設定 package.json, tsconfig.json, Express 基礎
  - 負責: Backend
  
- [ ] **P1-4**: 設定 ESLint + Prettier
  - 描述: 統一程式碼風格
  - 負責: Architect

### Phase 2: 後端開發
- [ ] **P2-1**: 設定 SQLite + Drizzle ORM
  - 描述: 建立 schema.ts, drizzle.config.ts, migration
  - 負責: Backend
  
- [ ] **P2-2**: 實作匯率 API 端點
  - 描述: GET /api/rates/:pair, GET /api/rates/:pair/history
  - 負責: Backend
  
- [ ] **P2-3**: 整合 ExchangeRate-API
  - 描述: 建立外部 API 服務、錯誤處理
  - 負責: Backend
  
- [ ] **P2-4**: 實作 Kanban API 端點
  - 描述: CRUD for tasks (GET, POST, PATCH, DELETE)
  - 負責: Backend
  
- [ ] **P2-5**: 建立排程任務 (node-cron)
  - 描述: 每小時自動抓取匯率
  - 負責: Backend
  
- [ ] **P2-6**: 撰寫 API 文件
  - 描述: 建立 docs/API.md，記錄所有端點
  - 負責: Architect

### Phase 3: 前端開發
- [ ] **P3-1**: 建立 UI 元件庫 (shadcn/ui + TailwindCSS)
  - 描述: 安裝 shadcn/ui, 建立 Button, Card, Input 等
  - 負責: Frontend
  
- [ ] **P3-2**: 建立匯率卡片元件
  - 描述: CurrencyCard.tsx (顯示即時匯率)
  - 負責: Frontend
  
- [ ] **P3-3**: 建立趨勢圖表元件 (Recharts)
  - 描述: TrendChart.tsx (折線圖)
  - 負責: Frontend
  
- [ ] **P3-4**: 建立 Kanban 看板元件 (@dnd-kit)
  - 描述: KanbanBoard.tsx, TaskCard.tsx (拖放功能)
  - 負責: Frontend
  
- [ ] **P3-5**: 整合後端 API (Zustand + fetch)
  - 描述: 建立 stores/, services/ 整合所有 API
  - 負責: Frontend
  
- [ ] **P3-6**: 響應式佈局調整
  - 描述: Mobile/Desktop 適配
  - 負責: Frontend
  
- [ ] **P3-7**: 深色模式實作
  - 描述: Theme toggle + CSS variables
  - 負責: Frontend

### Phase 4: 測試與優化
- [ ] **P4-1**: 撰寫後端單元測試
  - 描述: Jest + Supertest 測試 API
  - 負責: QA
  
- [ ] **P4-2**: 撰寫前端元件測試
  - 描述: Vitest + Testing Library
  - 負責: QA
  
- [ ] **P4-3**: 整合測試 (E2E)
  - 描述: Playwright 測試完整流程
  - 負責: QA
  
- [ ] **P4-4**: 效能優化
  - 描述: 圖表渲染優化、API 快取
  - 負責: Architect

### Phase 5: 部署
- [ ] **P5-1**: 撰寫 Dockerfile
  - 描述: Multi-stage build (frontend + backend)
  - 負責: Backend
  
- [ ] **P5-2**: 撰寫部署文件
  - 描述: docs/DEPLOYMENT.md
  - 負責: Architect
  
- [ ] **P5-3**: 撰寫使用手冊
  - 描述: docs/USER_GUIDE.md
  - 負責: Architect

---

## 🔄 進行中 (IN PROGRESS)
- [ ] **P1-1**: 建立專案目錄結構 (進行中)
- [ ] **P1-2**: 初始化前端專案 (Bun + React + Mantine) (進行中)
- [ ] **P1-3**: 初始化後端專案 (Kotlin + Ktor) (進行中)
- [ ] **P1-4**: 設定 ESLint + Prettier (待開始)

---

## ✅ 已完成 (DONE)

### 架構規劃
- [x] **P0-1**: 撰寫專案架構文件
  - 描述: ARCHITECTURE.md - 技術棧、資料庫設計、API 設計
  - 負責: Architect
  - 完成時間: 2026-02-12

- [x] **P0-2**: 建立 Kanban Board 追蹤檔案
  - 描述: docs/KANBAN.md - 工作流程管理
  - 負責: Architect
  - 完成時間: 2026-02-12

---

## 📊 統計
- **總任務數**: 27
- **待辦**: 22
- **進行中**: 3
- **已完成**: 2
- **進度**: 18.5%

---

## 🎯 當前優先級
1. ✅ 架構規劃完成
2. ⏭️ **下一步**: Phase 1 - 專案初始化（已開始）
   - 目前同步啟動後端與前端 scaffold

---

**更新時間**: 2026-02-12  
**專案狀態**: 🟡 開發初始化中
