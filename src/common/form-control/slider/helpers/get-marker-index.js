export function getMarkerIndex(markers) {
  function usingWidth(widthInPercentage) {
    const maxWidthDivisions = markers.length - 1
    const oneWidthDivision = 1 / maxWidthDivisions
    const divisionLimit = maxWidthDivisions - 1
    const isDivisionLimit = widthInPercentage === 1

    const index = Math.floor(widthInPercentage / oneWidthDivision) // 0,5 / 0,33 => 1,5151 => 1
    const markerIndex = isDivisionLimit ? divisionLimit : index

    return markerIndex
  }

  function usingValue(sliderValue) {
    function isBetweenMarkers(marker, index) {
      const value = sliderValue
      const atualMarker = marker
      const nextMarker = markers[index + 1]
      const lastMarker = markers[markers.length - 1]

      const nextMarkerIsLast = nextMarker === lastMarker
      const valueIsBetweenMarkers = atualMarker <= value && nextMarker > value

      return valueIsBetweenMarkers || nextMarkerIsLast
    }

    const markerValue = markers.filter(isBetweenMarkers)
    const markerIndex = markers.indexOf(markerValue[0])

    return markerIndex
  }

  return { usingWidth, usingValue }
}
