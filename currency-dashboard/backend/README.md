# Backend (Ktor)

此資料夾為後端 Ktor 專案 scaffold 範例。

建議開發步驟（本環境為範例）：
1. 使用 IntelliJ + Kotlin 建立 Ktor 專案（Gradle Kotlin DSL）
2. 設定資料庫連線 (Postgres)
3. 使用 Exposed 或其他 ORM 操作資料庫，或使用 plain SQL
4. 建立下列 API：
   - /api/rates/:pair
   - /api/rates/:pair/history
   - /api/tasks
   - /api/tasks/:id

資料庫 schema 範例在 ../db/schema.sql
