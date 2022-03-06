import { getBudget, getMarkerIndex, getMinAndMax, getPosition } from '.'

export function composeSliderChange(markers, sliderRef, lastBudgetRef, step, dispatch) {
  function verifyLastBudget(budget) {
    if (lastBudgetRef.current === budget) return true

    lastBudgetRef.current = budget
  }

  function dispatchStates({ position, min, max, budget }) {
    dispatch({ type: 'slider_change', payload: { position, min, max, budget } })
  }

  function usingPosition(value, state) {
    const { widthInPercentage } = getPosition(value, state.min, state.max, sliderRef)
    const markerIndex = getMarkerIndex(markers).usingWidth(widthInPercentage)
    const { min, max } = getMinAndMax(markers, markerIndex)

    const budget = getBudget(widthInPercentage, markers, markerIndex, step)
    const { positionInPixels } = getPosition(budget, min, max, sliderRef)

    verifyLastBudget(budget)

    dispatchStates({ position: positionInPixels, min, max, budget })
  }

  function usingValue(value) {
    if (verifyLastBudget(value)) return

    const markerIndex = getMarkerIndex(markers).usingValue(value)
    const { min, max } = getMinAndMax(markers, markerIndex)
    const { positionInPixels } = getPosition(value, min, max, sliderRef)

    dispatchStates({ position: positionInPixels, min, max, budget: value })
  }

  return { usingPosition, usingValue }
}
