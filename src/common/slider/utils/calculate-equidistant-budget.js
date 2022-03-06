export function calculateEquidistant(min, max) {
  const average = (min + max) / 2
  const equidistantMin = (average + min) / 2
  const equidistantMax = (average + max) / 2

  return [min, equidistantMin, equidistantMax, max]
}
