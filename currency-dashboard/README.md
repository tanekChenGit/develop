# 外幣追蹤儀表板 (Currency Dashboard)

一個整合外幣匯率追蹤與 Kanban 工作管理的現代化 Web 應用程式。

## 🌟 功能特色

### 💱 匯率追蹤
- **即時匯率**: 新台幣 → 日幣 (TWD/JPY)、新台幣 → 歐元 (TWD/EUR)
- **歷史趨勢**: 30 天匯率走勢圖表
- **自動更新**: 每小時自動抓取最新匯率
- **資料保存**: SQLite 儲存歷史記錄

### 📋 Kanban 看板
- **任務管理**: 待辦、進行中、已完成三階段
- **拖放介面**: 直覺的拖放操作
- **即時編輯**: 快速編輯任務標題與描述
- **優先級標記**: Low / Medium / High

## 🛠️ 技術棧

### 前端
- ⚛️ React 18 + TypeScript
- 🎨 TailwindCSS + shadcn/ui
- 📊 Recharts (圖表)
- 🎯 @dnd-kit (拖放)
- 🔄 Zustand (狀態管理)

### 後端
- 🚀 Node.js + Express + TypeScript
- 💾 SQLite + Drizzle ORM
- ⏰ node-cron (排程)
- 🌐 ExchangeRate-API (匯率來源)

## 📦 專案結構

```
currency-dashboard/
├── frontend/          # React 前端應用
├── backend/           # Node.js 後端 API
├── docs/              # 專案文件
│   ├── ARCHITECTURE.md
│   ├── KANBAN.md
│   └── API.md
└── README.md
```

## 🚀 快速開始

### 環境需求
- Node.js >= 18
- npm >= 9

### 安裝步驟

1. **Clone 專案**
   ```bash
   git clone <repository-url>
   cd currency-dashboard
   ```

2. **後端啟動**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   - 後端運行於: `http://localhost:3000`

3. **前端啟動**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   - 前端運行於: `http://localhost:5173`

## 📚 文件

- [架構設計](ARCHITECTURE.md) - 技術架構與資料庫設計
- [Kanban Board](docs/KANBAN.md) - 開發進度追蹤
- [API 文件](docs/API.md) - API 端點說明 (待建立)

## 🎯 開發進度

目前進度: **7.4%** (2/27 任務完成)

查看完整進度: [Kanban Board](docs/KANBAN.md)

## 📝 授權

MIT License

---

**專案啟動時間**: 2026-02-12  
**開發團隊**: 小龍蝦專業團隊 🦞
