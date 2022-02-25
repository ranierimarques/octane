import { useState, useRef, useLayoutEffect, useMemo, useCallback } from 'react'

import { Markers } from '.'
import { formatterBudget, calculateEquidistant } from '../utils'

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
    const divisionLimit = maxWidthDivisions - 1
    const isDivisionLimit = widthInPercentage === 1
    const oneDivisionOfWidth = 1 / maxWidthDivisions

    const index = Math.floor(widthInPercentage / oneDivisionOfWidth) // 0,5 / 0,33 => 1,5151 => 1
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

// FIXME: Melhorar o código
function getBudget(widthInPercentage, markers, markerIndex, step) {
  const maxWidthDivisions = markers.length - 1
  const oneDivisionOfWidth = 1 / maxWidthDivisions

  const calc1 =
    widthInPercentage !== 1 ? widthInPercentage % oneDivisionOfWidth : oneDivisionOfWidth
  const calc2 = calc1 / oneDivisionOfWidth
  const calc3 =
    Math.floor((calc2 * (markers[markerIndex + 1] - markers[markerIndex]) + 1) / step) *
    step
  const budget = calc3 + markers[markerIndex]

  console.log(widthInPercentage)
  console.log('calc1', calc1)
  console.log('calc2', calc2)
  console.log('calc3', calc3)
  console.log(calc2 * markers[markerIndex])
  console.log(budget)

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
  minMax,
  markers,
  sliderRef,
  setStates,
  step,
  lastBudgetRef
) {
  const { widthInPercentage } = getPosition(value, minMax.min, minMax.max, sliderRef)

  const markerIndex = getMarkerIndex(markers).usingWidth(widthInPercentage)
  const { min, max } = getMinAndMax(markers, markerIndex)
  const budget = getBudget(widthInPercentage, markers, markerIndex, step)

  const { positionInPixels } = getPosition(budget, min, max, sliderRef)

  lastBudgetRef.current = budget

  setStates({ position: positionInPixels, min, max, budget })
}

export function sliderChangeUsingValue(
  value,
  markers,
  sliderRef,
  setStates,
  lastBudgetRef
) {
  if (lastBudgetRef.current === value) return

  const markerIndex = getMarkerIndex(markers).usingValue(value)
  const { min, max } = getMinAndMax(markers, markerIndex)
  const { positionInPixels } = getPosition(value, min, max, sliderRef)

  lastBudgetRef.current = value

  setStates({ position: positionInPixels, min, max, budget: value })
}

function Slider({ config }) {
  const { initial, range, step } = config
  const sliderRef = useRef(null)
  const lastBudgetRef = useRef(null)
  const [budget, setBudget] = useState(0)
  const [position, setPosition] = useState(0)
  const [minMax, setMinMax] = useState({})

  const markers = useMemo(() => getMarkers(range), [range])

  const setStates = useCallback(({ position, min, max, budget }) => {
    setPosition(position)
    setMinMax({ min, max })
    setBudget(budget)
  }, [])

  function handleSliderChange(event) {
    const value = Number(event.target.value)

    sliderChangeUsingPosition(
      value,
      minMax,
      markers,
      sliderRef,
      setStates,
      step,
      lastBudgetRef
    )
  }

  const handleMarkersChangeValue = useCallback(
    marker => {
      sliderChangeUsingValue(marker, markers, sliderRef, setStates, lastBudgetRef)
    },
    [markers, setStates]
  )

  useLayoutEffect(() => {
    sliderChangeUsingValue(initial, markers, sliderRef, setStates, lastBudgetRef)
  }, [initial, markers, step, setStates])

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudget(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min={minMax.min}
        max={minMax.max}
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
