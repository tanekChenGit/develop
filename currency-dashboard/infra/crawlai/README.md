CrawlAI (self-hosted) - Quick start

This folder provides a simple docker-compose for a CrawlAI-like service that can be used as a self-hosted crawler/indexer for RAG.

1. Start the service (requires Docker):
   docker compose -f docker-compose.crawlai.yml up -d

2. The service will listen on http://localhost:4100 by default.

3. Typical API endpoints (example):
   - POST /api/crawl  { "url": "https://example.com" }  -> triggers crawl & indexing
   - GET  /api/search ?q=keyword                     -> returns search results (JSON)

4. Integration with OpenClaw (Scout agent):
   - Call the CrawlAI search endpoint with fetch/web_fetch or via HTTP from your backend.
   - Example (curl):
     curl "http://localhost:4100/api/search?q=exchange+rate" | jq

5. Notes:
   - CrawlAI image used here is a placeholder (crawlai/crawlai:latest). Replace with an actual image or your custom crawler implementation.
   - Storage is persisted in the volume `crawlai-data`.
   - Configure indexing, rate limits and robots policy according to your legal requirements.
