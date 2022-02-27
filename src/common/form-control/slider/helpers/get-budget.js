export function getBudget(widthInPercentage, markers, markerIndex, step) {
  const maxWidthDivisions = markers.length - 1
  const oneWidthDivision = 1 / maxWidthDivisions
  const isDivisionLimit = widthInPercentage === 1

  const atualMarker = markers[markerIndex]
  const nextMarker = markers[markerIndex + 1]

  const getWidthBetweenMarkers = widthInPercentage % oneWidthDivision

  const widthBetweenMarkers = isDivisionLimit ? oneWidthDivision : getWidthBetweenMarkers
  const relativeWidthBetweenMarkers = widthBetweenMarkers / oneWidthDivision // 0% - 100%

  const maxBudgetBetweenMarkers = nextMarker - atualMarker

  // This calculation might return 0.999... instead of 1
  // Adding +0.1 to the formula solves the problem
  const budgetBetweenMarkers = relativeWidthBetweenMarkers * maxBudgetBetweenMarkers + 0.1
  const budgetBetweenMarkersRoundedToStep = Math.floor(budgetBetweenMarkers / step) * step

  const budget = budgetBetweenMarkersRoundedToStep + atualMarker

  return budget
}
