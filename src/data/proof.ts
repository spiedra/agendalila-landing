// Social-proof bar content. The honest framing is deliberate: AgendaLila was
// built inside one real salon (Amorelila Estética) and used by its owner before
// anyone else. The stats are truthful and modest — no inflated "10.000 negocios".

export const proof = {
  founder: {
    name: "Estefanía Sánchez",
    photo: "/photos/estefania-profile.jpg",
    alt: "Estefanía Sánchez, fundadora de Amorelila Estética",
  },
  // Lede split so the salon name can carry brand emphasis without set:html.
  ledePre: "Hecho en ",
  ledeStrong: "Amorelila Estética",
  ledePost:
    ", un estudio real en Curridabat, y usado todos los días por su dueña.",
  // Two honest, quantitative proof points. A third "CR" stat was dropped — it
  // was a country code dressed as a metric (and "Costa Rica" is already in the
  // hero eyebrow). The español/colones/WhatsApp angle lives in Features instead.
  stats: [
    { value: "100%", label: "Citas administradas con AgendaLila desde 2025" },
    {
      value: "0",
      label:
        "Citas perdidas por dobles reservas — el problema que motivó el producto",
    },
  ],
} as const;
