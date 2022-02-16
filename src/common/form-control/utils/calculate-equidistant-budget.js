export function calculateEquidistant(min, max, approximation) {
  const average = (min + max) / 2
  const result = (average + approximation) / 2

  return result
}
