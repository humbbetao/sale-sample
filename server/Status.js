const STATUS = ["Em validação", "Reprovado", "Aprovado"];

function getStatus() {
  return STATUS[(Math.random() * 2).toFixed(0)];
}
module.exports = { STATUS, getStatus };
