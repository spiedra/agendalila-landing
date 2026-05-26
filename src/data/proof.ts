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
    ", un salón real en Curridabat. Usado todos los días por la dueña — antes que por nadie más.",
  stats: [
    { value: "100%", label: "Citas administradas con AgendaLila desde 2024" },
    {
      value: "0",
      label:
        "Citas perdidas por dobles reservas — el problema que motivó el producto",
    },
    { value: "CR", label: "Costa Rica primero · español, colones, WhatsApp" },
  ],
} as const;
