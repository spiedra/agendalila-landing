// "Producto" — the five surfaces, in the order an owner discovers them.
// Copy lives here; each feature's visual mock is a dedicated component under
// components/feature-mocks/, keyed by `mock`. `tone` tints the visual panel;
// `reverse` flips the desktop columns (visual-left) for the zig-zag rhythm.
// Inline code in a description is written between `backticks`.

export interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  mock: "agenda" | "crm" | "reminders" | "booking" | "metrics";
  tone: "lilac" | "peach" | "blue";
  reverse: boolean;
}

export const featuresHead = {
  eyebrow: "Producto",
  title: "Todo lo que necesita un negocio de servicios. Nada de lo que no.",
  description:
    "Cinco superficies, una sola plataforma. Pensadas en este orden, porque así es como las descubrís cuando arrancás.",
};

export const features: readonly Feature[] = [
  {
    eyebrow: "Agenda",
    title: "Una vista de tu día que se entiende al toque.",
    description:
      "Citas codificadas por categoría, vista por día / semana / mes, huecos detectados automáticamente. Sin doble reserva — nunca.",
    bullets: [
      "Detecta dobles reservas antes que las hagas vos.",
      "Cada profesional ve solo su agenda.",
      "Buffer entre citas configurable por servicio.",
    ],
    mock: "agenda",
    tone: "lilac",
    reverse: false,
  },
  {
    eyebrow: "Ficha de cliente · CRM",
    title: "Te acordás de cada cliente. El sistema se acuerda por vos.",
    description:
      "El historial, las preferencias, las alergias, el cumpleaños — todo guardado y disponible la próxima vez que esa persona se sienta en tu silla.",
    bullets: [
      "Historial completo de servicios, notas y fotos.",
      "Tags personalizables (VIP, alergias, color favorito).",
      "Búsqueda instantánea por nombre, teléfono o servicio.",
    ],
    mock: "crm",
    tone: "peach",
    reverse: true,
  },
  {
    eyebrow: "Recordatorios automáticos",
    title: "WhatsApp y email que se mandan solos — con tu voz.",
    description:
      "Confirmaciones, recordatorios el día anterior, cumpleaños, win-back de clientes que hace meses no aparecen. Vos escribís la plantilla una vez; el sistema la manda mil.",
    bullets: [
      "Confirmación al reservar + recordatorio 24h antes.",
      "Cumpleaños automático con descuento opcional.",
      "Plantillas editables — el tono lo ponés vos.",
    ],
    mock: "reminders",
    tone: "blue",
    reverse: false,
  },
  {
    eyebrow: "Tu página de reservas",
    title: "Tu propia página de reservas — con tu marca, no la nuestra.",
    description:
      "Tu página vive en tu propia dirección — `tu-salon.agendalila.com` — con tus colores, tu logo y solo tus servicios. La compartís donde quieras: Instagram, el bio de WhatsApp o una tarjeta.",
    bullets: [
      "Color y logo de tu negocio — no una marca genérica.",
      "Reserva en 4 pasos, optimizada para móvil.",
      "Funciona 24/7 — incluso cuando estás durmiendo.",
    ],
    mock: "booking",
    tone: "lilac",
    reverse: true,
  },
  {
    eyebrow: "Métricas",
    title: "Sabés cómo te fue el mes sin abrir Excel.",
    description:
      "Ingresos, reservas, ocupación, retención, servicio más vendido — al toque, sin que tengas que sumar nada vos misma. Si algo bajó, te enterás antes de que sea tarde.",
    bullets: [
      "Resumen diario · comparativa mes vs mes.",
      "Tasa de retención y clientes en riesgo.",
      "Export a CSV cuando lo necesités.",
    ],
    mock: "metrics",
    tone: "lilac",
    reverse: false,
  },
];
