export default function calculateCashback(value) {
  const cashbackRate = Math.random().toFixed(2)
  const cashbackValue = (value * cashbackRate).toFixed(2)
  return { cashbackRate, cashbackValue }
}
