export type InactiveStandard = {
  pis: string
  tituloEleitor: string
  beneficioPrevidenciario: string
}

const inactivesStandard: InactiveStandard = {
  pis: "PIS/PASEP ou NIT",
  tituloEleitor: "Título de Eleitor",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meuinss.gov.br",
}

export { inactivesStandard }
