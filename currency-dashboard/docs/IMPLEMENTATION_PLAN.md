Implementation plan - currency dashboard

Phase1 (done by scaffold):
- Backend scaffold: Ktor project placeholder in backend/ (README)
- DB schema: db/schema.sql (Postgres + PostgREST)
- Infra: docker-compose.yml (Postgres + PostgREST)
- Frontend scaffold: Bun + React + Mantine basic app

Next steps:
1. Start infra: `docker compose -f infra/docker-compose.yml up -d` (creates Postgres + PostgREST)
2. Initialize database schema: `psql` exec `db/schema.sql` or use migration tool
3. Build backend Ktor service and connect to DB
4. Implement exchange-rate fetcher service (backend cron)
5. Implement frontend pages (dashboard + kanban)

