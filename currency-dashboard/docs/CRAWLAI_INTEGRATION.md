CrawlAI Integration (for Scout agent)

Goal: enable Scout to use an internal Crawl4AI service as a web_search / content source for RAG and LLM ingestion.

Environment notes
- In this environment Crawl4AI is reachable at the docker service name `crawl4ai` on port `11235`.
- PostgREST is assumed reachable at service name `postgrest` on port `3000` (inside docker network).

Typical Crawl4AI API (assumed)
- GET  http://crawl4ai:11235/api/search?q=...      -> returns JSON list of results { items: [{ id, title, snippet, url }] }
- GET  http://crawl4ai:11235/api/doc/:id           -> returns JSON { id, content } where content is cleaned markdown or JSON

Scout workflow (Node.js example)
1. Query Crawl4AI search endpoint with the query (e.g. "TWD JPY 匯率")
2. For each top result, fetch the full doc by id
3. Parse the document content for exchange rates and timestamps (simple regex or heuristics)
4. Push parsed records to PostgREST endpoint for exchange_rates

Example Node.js script (agents/scout/tasks/crawl4ai_fetch.js)
- This script is provided below; run it inside the same Docker network (or host where "crawl4ai" and "postgrest" resolve).

Usage (inside container or host with proper network):
- node agents/scout/tasks/crawl4ai_fetch.js "TWD JPY"  -- will search and push parsed rates

Notes
- The crawler/service must respect robots.txt and site ToS.
- The parsing implemented here is heuristic and will need tuning per source.
- For production-grade ingestion, run content normalization, deduplication, and optionally create embeddings for RAG.

