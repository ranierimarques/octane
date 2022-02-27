import { calculateEquidistant } from '../utils'

export function getMarkers(range) {
  if (range.length === 2) {
    const firstMarker = range[0]
    const lastMarker = range[range.length - 1]
    const dynamicMarkers = calculateEquidistant(firstMarker, lastMarker)

    return dynamicMarkers
  }

  return range
}
