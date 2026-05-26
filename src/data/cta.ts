// Final CTA — the "Solicitá tu invitación" request form. Copy + option lists
// live here; the field layout is bespoke in FinalCta.astro.
// NOTE: submission is client-side only for now (shows the success state).
// The real POST → CF Pages Function → D1 (leads) + Resend is pending the
// repo being connected to Cloudflare Pages. Do NOT go live before that.

export const cta = {
  eyebrow: "Acceso por invitación",
  title: "Solicitá tu invitación.",
  intro:
    "Decinos un poco de tu negocio. Si encaja, te respondemos en 1-2 días para coordinar tu arranque. Sin compromiso, sin tarjeta de crédito.",
  secondaryPre: "¿Querés ver la app primero? Mirá el ",
  secondaryLink: "recorrido del producto",
  secondaryHref: "#producto",

  formHeading: "Contanos de vos",
  submit: "Pedir invitación",
  note: "Te respondemos en 1-2 días hábiles.",

  successTitle: "¡Te escribimos pronto!",
  successBody:
    "Recibimos tu solicitud. Te respondemos por WhatsApp en 1-2 días con los próximos pasos.",

  paises: ["Costa Rica", "Panamá", "Guatemala", "Nicaragua", "Honduras", "El Salvador", "México", "Colombia", "Otro"],
  rubros: ["Salón de belleza", "Barbería", "Uñas", "Spa / masajes", "Estética / dermo", "Tatuajes / piercing", "Otro"],
  equipos: ["Solo yo", "2–3 personas", "4–6 personas", "7+ personas"],
} as const;
