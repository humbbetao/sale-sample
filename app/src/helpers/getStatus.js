const STATUS = ['Em validação', 'Reprovado', 'Aprovado']

export default function getStatus() {
  return STATUS[(Math.random() * 2).toFixed(0)]
}
