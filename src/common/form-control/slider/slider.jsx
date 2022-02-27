import { useRef, useLayoutEffect, useMemo, useCallback, useReducer } from 'react'

import { Markers } from '.'
import { formatterBudget, calculateEquidistant } from './utils'

import * as S from './slider.styles'

function getPosition(sliderValue, sliderMin, sliderMax, sliderRef) {
  const sliderThumbWidth = 12
  const sliderWidth = sliderRef.current.offsetWidth // 452

  const maxWidth = sliderWidth - sliderThumbWidth

  const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
  const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

  return { widthInPercentage, positionInPixels }
}

function getMarkerIndex(markers) {
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

function getMinAndMax(markers, markerIndex) {
  console.log('Marcador1:', markers[markerIndex], 'Marcador2:', markers[markerIndex + 1])

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

function getBudget(widthInPercentage, markers, markerIndex, step) {
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

function getMarkers(range) {
  if (range.length === 2) {
    const firstMarker = range[0]
    const lastMarker = range[range.length - 1]
    const dynamicMarkers = calculateEquidistant(firstMarker, lastMarker)

    return dynamicMarkers
  }

  return range
}

function sliderChangeUsingPosition(
  value,
  state,
  markers,
  sliderRef,
  dispatch,
  step,
  lastBudgetRef
) {
  const { widthInPercentage } = getPosition(value, state.min, state.max, sliderRef)

  const markerIndex = getMarkerIndex(markers).usingWidth(widthInPercentage)
  const { min, max } = getMinAndMax(markers, markerIndex)
  const budget = getBudget(widthInPercentage, markers, markerIndex, step)

  const { positionInPixels } = getPosition(budget, min, max, sliderRef)

  lastBudgetRef.current = budget

  dispatch({
    type: 'slider_change',
    payload: { position: positionInPixels, min, max, budget },
  })
}

function sliderChangeUsingValue(value, markers, sliderRef, dispatch, lastBudgetRef) {
  if (lastBudgetRef.current === value) return

  lastBudgetRef.current = value

  const markerIndex = getMarkerIndex(markers).usingValue(value)
  const { min, max } = getMinAndMax(markers, markerIndex)
  const { positionInPixels } = getPosition(value, min, max, sliderRef)

  dispatch({
    type: 'slider_change',
    payload: { position: positionInPixels, min, max, budget: value },
  })
}

const initialState = { budget: 0, position: 0, min: 0, max: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'slider_change':
      return {
        budget: action.payload.budget,
        position: action.payload.position,
        min: action.payload.min,
        max: action.payload.max,
      }
    default:
      throw new Error()
  }
}

function Slider({ config }) {
  const { initial, range, step } = config
  const sliderRef = useRef(null)
  const lastBudgetRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { budget, position, min, max } = state
  const markers = useMemo(() => getMarkers(range), [range])

  function handleSliderChange(event) {
    const value = Number(event.target.value)

    sliderChangeUsingPosition(
      value,
      state,
      markers,
      sliderRef,
      dispatch,
      step,
      lastBudgetRef
    )
  }

  const handleMarkersChangeValue = useCallback((marker, markers) => {
    sliderChangeUsingValue(marker, markers, sliderRef, dispatch, lastBudgetRef)
  }, [])

  useLayoutEffect(() => {
    sliderChangeUsingValue(initial, markers, sliderRef, dispatch, lastBudgetRef)
  }, [initial, markers])

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudget(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min={min}
        max={max}
        value={budget}
        onChange={handleSliderChange}
        step={step}
        ref={sliderRef}
      />
      <S.Progress width={position} />

      <Markers markers={markers} onMarkersChangeValue={handleMarkersChangeValue} />
    </S.Slider>
  )
}

export default Slider
