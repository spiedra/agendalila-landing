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
  title: "Todo lo que tu negocio necesita para funcionar.",
  description:
    "Agenda, clientes, recordatorios, tu página de reservas y métricas: todo en una sola plataforma.",
};

export const features: readonly Feature[] = [
  {
    eyebrow: "Agenda",
    title: "Una vista de tu día que se entiende al toque.",
    description:
      "Citas codificadas por categoría, vista por día / semana / mes, huecos detectados automáticamente. Sin doble reserva, nunca.",
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
    eyebrow: "Recordatorios",
    title: "Que no se te pase recordarle a ninguna clienta.",
    description:
      "El recordatorio por email sale solo: confirmación al reservar y aviso el día antes. Para WhatsApp, AgendaLila te deja el mensaje listo para enviar con un toque, con tu voz. (Y el envío automático por WhatsApp ya viene en camino.)",
    bullets: [
      "Email automático: confirmación, recordatorio 24h antes y saludo de cumpleaños.",
      "WhatsApp en un toque: el mensaje ya escrito, vos solo enviás.",
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
      "Tu página tiene su propia dirección, `tu-salon.agendalila.com`, con tus colores, tu logo y solo tus servicios. La compartís donde quieras: Instagram, el bio de WhatsApp o una tarjeta.",
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
