# 外幣追蹤儀表板 - 專案架構文件

## 專案概述
建立一個整合外幣匯率追蹤與 Kanban 工作管理的 Web 應用程式。

## 核心功能
1. **匯率追蹤**
   - 新台幣 → 日幣 (TWD/JPY)
   - 新台幣 → 歐元 (TWD/EUR)
   - 歷史趨勢圖表
   - 即時匯率更新

2. **Kanban 看板**
   - 任務管理（待辦、進行中、完成）
   - 拖放介面
   - 任務編輯與刪除

## 技術架構

### 前端
- **框架**: React 18 + TypeScript
- **UI 庫**: TailwindCSS + shadcn/ui
- **狀態管理**: Zustand (輕量)
- **圖表**: Recharts
- **拖放**: @dnd-kit/core
- **路由**: React Router v6

### 後端
- **框架**: Node.js + Express + TypeScript
- **資料庫**: SQLite (輕量、易部署)
- **ORM**: Drizzle ORM
- **匯率 API**: ExchangeRate-API (免費額度)
- **排程**: node-cron (定時抓取匯率)

### 專案結構
```
currency-dashboard/
├── frontend/          # React 前端
│   ├── src/
│   │   ├── components/  # UI 元件
│   │   ├── pages/       # 頁面
│   │   ├── stores/      # Zustand 狀態
│   │   ├── services/    # API 服務
│   │   └── types/       # TypeScript 類型
│   └── package.json
├── backend/           # Node.js 後端
│   ├── src/
│   │   ├── routes/      # API 路由
│   │   ├── services/    # 業務邏輯
│   │   ├── db/          # 資料庫 schema
│   │   └── cron/        # 排程任務
│   └── package.json
├── docs/              # 文件
│   ├── ARCHITECTURE.md
│   ├── API.md
│   └── KANBAN.md
└── README.md
```

## 資料庫 Schema

### 匯率記錄表 (exchange_rates)
| 欄位         | 類型      | 說明              |
|-------------|-----------|-------------------|
| id          | INTEGER   | 主鍵              |
| currency_pair | TEXT    | 貨幣對 (TWD/JPY)  |
| rate        | REAL      | 匯率              |
| timestamp   | DATETIME  | 記錄時間          |

### 看板任務表 (kanban_tasks)
| 欄位         | 類型      | 說明                           |
|-------------|-----------|--------------------------------|
| id          | INTEGER   | 主鍵                           |
| title       | TEXT      | 任務標題                       |
| description | TEXT      | 任務描述                       |
| status      | TEXT      | 狀態 (todo/in_progress/done)  |
| priority    | TEXT      | 優先度 (low/medium/high)      |
| created_at  | DATETIME  | 建立時間                       |
| updated_at  | DATETIME  | 更新時間                       |

## API 端點設計

### 匯率相關
- `GET /api/rates/:pair` - 取得最新匯率
- `GET /api/rates/:pair/history` - 取得歷史資料 (query: days=30)
- `POST /api/rates/refresh` - 手動刷新匯率

### 看板相關
- `GET /api/tasks` - 取得所有任務
- `POST /api/tasks` - 新增任務
- `PATCH /api/tasks/:id` - 更新任務
- `DELETE /api/tasks/:id` - 刪除任務

## 匯率 API 整合
- **來源**: ExchangeRate-API.com (免費版每月 1500 次請求)
- **端點**: `https://api.exchangerate-api.com/v4/latest/TWD`
- **排程**: 每小時自動更新一次
- **備援**: 請求失敗時使用最後一次成功的資料

## UI/UX 規劃
1. **首頁**: 雙欄佈局
   - 左側: 匯率儀表板 (TWD/JPY, TWD/EUR 卡片 + 趨勢圖)
   - 右側: Kanban 看板 (三欄拖放)

2. **響應式設計**
   - Desktop: 雙欄並排
   - Mobile: 上下堆疊 + Tab 切換

3. **深色模式**: 支援切換

## 開發階段規劃

### Phase 1: 專案初始化 (1 天)
- [ ] 建立專案目錄結構
- [ ] 初始化前後端專案
- [ ] 設定 TypeScript 與 ESLint
- [ ] 建立 Git repository

### Phase 2: 後端開發 (2 天)
- [ ] 設定 SQLite + Drizzle ORM
- [ ] 實作匯率 API 服務
- [ ] 實作 Kanban API
- [ ] 建立排程任務
- [ ] 撰寫 API 文件

### Phase 3: 前端開發 (3 天)
- [ ] 建立 UI 元件庫
- [ ] 實作匯率儀表板
- [ ] 實作 Kanban 看板
- [ ] 整合 API
- [ ] 響應式調整

### Phase 4: 測試與優化 (1 天)
- [ ] 單元測試
- [ ] 整合測試
- [ ] UI/UX 優化
- [ ] 效能調整

### Phase 5: 部署 (0.5 天)
- [ ] Docker 化
- [ ] 部署文件
- [ ] 使用手冊

## 技術決策理由

1. **SQLite**: 
   - 無需額外資料庫服務
   - 輕量、易於備份
   - 適合小型專案

2. **React + TypeScript**:
   - 類型安全
   - 社群生態完善
   - 易於維護

3. **Drizzle ORM**:
   - 輕量、類型安全
   - 比 Prisma 更輕巧
   - 支援 SQLite

4. **ExchangeRate-API**:
   - 免費額度充足
   - 無需註冊 API key (基礎版)
   - 回應速度快

## 下一步
1. 建立 Kanban Board 追蹤開發進度
2. 初始化前後端專案
3. 開始 Phase 1 開發

---
**文件版本**: v1.0  
**建立時間**: 2026-02-12  
**作者**: 小龍蝦團隊
