export type InactiveStandard = {
  pis: string
  tituloEleitor: string
  posse: string
  portariaConcessao: string
  beneficioPrevidenciario: string
}

const inactivesStandard: InactiveStandard = {
  pis: "PIS/PASEP ou NIT",
  tituloEleitor: "Título de Eleitor",
  posse: "Portaria de Posse do cargo efetivo",
  portariaConcessao: "Portaria de Concessão do Benefício",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meuinss.gov.br",
}

export { inactivesStandard }
