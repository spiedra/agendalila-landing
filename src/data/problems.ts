// "El problema real" section. Three pains every salon/barber/spa owner knows
// in their body — framed in the owner's own voice (voseo), not feature-speak.
// Icon keys map to the inline SVG set in Problem.astro.

export const problemSection = {
  eyebrow: "El problema real",
  title: "Vos no abriste tu negocio para administrar mensajes.",
  description:
    "El cuaderno y WhatsApp funcionan hasta que dejan de funcionar. Y ahí ya perdiste plata, horas y la confianza de un cliente.",
  cards: [
    {
      icon: "chat",
      title: "Citas perdidas en WhatsApp",
      desc: "El chat se te llena, se te traspapelan mensajes y al final agendaste dos personas a la misma hora.",
    },
    {
      icon: "book",
      title: "Cuaderno + memoria",
      desc: "Las notas del cliente viven en tu cabeza. Cuando volvés a verla a los seis meses, no te acordás qué prefiere.",
    },
    {
      icon: "ghost",
      title: "Cancelaciones sin aviso",
      desc: "Reservaron, no llegaron, ya no podés llenar ese horario y perdés la hora completa.",
    },
  ],
} as const;
