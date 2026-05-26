// Site-wide content: wordmark, nav, footer, contact.
// Edit data here — not the templates.

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: "AgendaLila",
  tagline:
    "Software de citas y CRM para negocios de servicios — hecho por una esteticista que vive el problema.",
  email: "hola@agendalila.com",
  instagram: { handle: "@agendalila", url: "https://instagram.com/agendalila" },

  // Primary CTA — invitation-only, used across the page.
  cta: { label: "Solicitá tu invitación", href: "#solicitar" },

  nav: [
    { label: "Producto", href: "#producto" },
    { label: "Historia", href: "#historia" },
    { label: "FAQ", href: "#faq" },
  ] satisfies NavLink[],

  footer: {
    producto: [
      { label: "Agenda", href: "#producto" },
      { label: "CRM", href: "#producto" },
      { label: "Recordatorios", href: "#producto" },
      { label: "Página de reservas", href: "#producto" },
      { label: "Métricas", href: "#producto" },
    ] satisfies NavLink[],
    empresa: [
      { label: "La historia", href: "#historia" },
      { label: "FAQ", href: "#faq" },
      { label: "Solicitar invitación", href: "#solicitar" },
    ] satisfies NavLink[],
  },
} as const;
