export function getMinAndMax(markers, markerIndex) {
  const totalLines = (markers.length - 1) * 6
  const linesBetweenMarkers = 6

  const atualMarker = markers[markerIndex]
  const nextMarker = markers[markerIndex + 1]

  const difference = nextMarker - atualMarker
  const multiplier = difference / linesBetweenMarkers

  const positionFromLeftLines = markerIndex * linesBetweenMarkers

  const min = atualMarker - multiplier * positionFromLeftLines
  const max = multiplier * totalLines + min

  return { min, max }
}
