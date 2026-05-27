// Cloudflare Pages Function — POST /api/request-invite
//
// Saves an invite request (lead) to D1 and notifies the team via Resend.
// This runs on Pages, not in the Astro static build, so it stays plain JS
// (no type deps) — Cloudflare provides the runtime + binding types at deploy.
//
// Requires (set in the Pages project → Settings):
//   - D1 binding named `DB`  (table `leads`, see /schema.sql)
//   - secret `RESEND_API_KEY`
//   - optional vars `LEAD_NOTIFY_TO` (default info@agendalila.com) and
//     `LEAD_NOTIFY_FROM` (default "AgendaLila <notificaciones@agendalila.com>",
//     must be on a Resend-verified domain).

const FIELDS = ["nombre", "whatsapp", "pais", "negocio", "rubro", "equipo"];

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "JSON inválido" }, 400);
  }

  // Honeypot: bots fill the hidden `website` field. Pretend success, store nothing.
  if (data.website) return json({ ok: true }, 200);

  const missing = FIELDS.filter((f) => !String(data[f] ?? "").trim());
  if (missing.length) return json({ error: "Faltan campos", missing }, 422);

  const lead = {};
  for (const f of FIELDS) lead[f] = String(data[f]).trim().slice(0, 200);

  if (!env.DB) return json({ error: "Backend no configurado" }, 500);

  try {
    await env.DB.prepare(
      "INSERT INTO leads (id, nombre, whatsapp, pais, negocio, rubro, equipo, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    )
      .bind(
        crypto.randomUUID(),
        lead.nombre,
        lead.whatsapp,
        lead.pais,
        lead.negocio,
        lead.rubro,
        lead.equipo,
        Date.now(),
      )
      .run();
  } catch {
    return json({ error: "No se pudo guardar" }, 500);
  }

  // Best-effort notification — the lead is already saved, so never fail on email.
  // Best-effort notification — the lead is already saved, so never fail on email.
  if (env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Must be a Resend-verified sender — the app sends from this domain.
          from: env.LEAD_NOTIFY_FROM || "AgendaLila <no-reply@notificaciones.agendalila.com>",
          to: [env.LEAD_NOTIFY_TO || "info@agendalila.com"],
          subject: `Nueva solicitud — ${lead.negocio} (${lead.rubro})`,
          text:
            `Nombre: ${lead.nombre}\n` +
            `WhatsApp: ${lead.whatsapp}\n` +
            `País: ${lead.pais}\n` +
            `Negocio: ${lead.negocio}\n` +
            `Rubro: ${lead.rubro}\n` +
            `Equipo: ${lead.equipo}`,
        }),
      });
    } catch {
      // ignore — the lead is persisted; the email is a courtesy
    }
  }

  return json({ ok: true }, 200);
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
