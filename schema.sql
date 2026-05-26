-- D1 schema for the AgendaLila landing invite-request form.
--
-- Create the database once:
--   npx wrangler d1 create agendalila-leads
-- then bind it to the Pages project as `DB` (Settings → Functions → D1 bindings,
-- for BOTH Production and Preview), and apply this schema:
--   npx wrangler d1 execute agendalila-leads --remote --file=./schema.sql

CREATE TABLE IF NOT EXISTS leads (
  id          TEXT PRIMARY KEY,
  nombre      TEXT NOT NULL,
  whatsapp    TEXT NOT NULL,
  pais        TEXT NOT NULL,
  negocio     TEXT NOT NULL,
  rubro       TEXT NOT NULL,
  equipo      TEXT NOT NULL,
  created_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
