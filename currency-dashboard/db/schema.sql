-- PostgreSQL schema for Currency Dashboard

CREATE TABLE IF NOT EXISTS exchange_rates (
  id SERIAL PRIMARY KEY,
  currency_pair TEXT NOT NULL,
  rate DOUBLE PRECISION NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS kanban_tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'todo',
  priority TEXT NOT NULL DEFAULT 'medium',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Grant anon role minimal privileges for PostgREST (adjust as needed)
CREATE ROLE anon;
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO anon;
